-- Apply this migration to an existing Hire-ez Supabase project.
-- The function stores the application, recruiter-visible applicant record,
-- and in-app notifications atomically. It is safe to run more than once.
CREATE OR REPLACE FUNCTION public.submit_job_application(
  p_job_id UUID,
  p_name TEXT,
  p_email TEXT,
  p_experience TEXT,
  p_notes TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_job public.jobs%ROWTYPE;
  v_application_id UUID;
  v_applicant_id UUID;
BEGIN
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Sign in before submitting an application';
  END IF;
  IF COALESCE(BTRIM(p_name), '') = '' OR COALESCE(BTRIM(p_email), '') = '' THEN
    RAISE EXCEPTION 'Name and email are required';
  END IF;

  PERFORM pg_advisory_xact_lock(hashtextextended(p_job_id::TEXT || ':' || v_user_id::TEXT, 0));

  SELECT * INTO v_job
  FROM public.jobs
  WHERE id = p_job_id AND status = 'active';
  IF NOT FOUND THEN
    RAISE EXCEPTION 'This job is no longer accepting applications';
  END IF;

  SELECT id INTO v_application_id
  FROM public.applications
  WHERE job_id = p_job_id AND user_id = v_user_id
  LIMIT 1;

  IF v_application_id IS NULL THEN
    INSERT INTO public.applications (job_id, user_id, status, notes)
    VALUES (p_job_id, v_user_id, 'Applied', p_notes)
    RETURNING id INTO v_application_id;

    INSERT INTO public.applicants (job_id, user_id, name, email, role, experience, status)
    VALUES (p_job_id, v_user_id, BTRIM(p_name), BTRIM(p_email), v_job.title, p_experience, 'Applied');

    INSERT INTO public.notifications (user_id, type, title, message, job_title, company)
    VALUES (
      v_user_id,
      'application',
      'Application submitted',
      'Your application for ' || v_job.title || ' at ' || v_job.company || ' was submitted.',
      v_job.title,
      v_job.company
    );

    INSERT INTO public.notifications (user_id, type, title, message, job_title, company)
    SELECT
      recruiter.user_id,
      'application',
      'New job application',
      BTRIM(p_name) || ' applied for ' || v_job.title || '.',
      v_job.title,
      v_job.company
    FROM public.recruiter_profiles AS recruiter
    WHERE recruiter.id = v_job.recruiter_id AND recruiter.user_id IS NOT NULL;
  ELSE
    SELECT id INTO v_applicant_id
    FROM public.applicants
    WHERE job_id = p_job_id AND user_id = v_user_id
    LIMIT 1;

    IF v_applicant_id IS NULL THEN
      INSERT INTO public.applicants (job_id, user_id, name, email, role, experience, status)
      VALUES (p_job_id, v_user_id, BTRIM(p_name), BTRIM(p_email), v_job.title, p_experience, 'Applied');
    END IF;
  END IF;

  RETURN v_application_id;
END;
$$;

REVOKE ALL ON FUNCTION public.submit_job_application(UUID, TEXT, TEXT, TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.submit_job_application(UUID, TEXT, TEXT, TEXT, TEXT) TO authenticated;

-- Only permit recruiters to schedule shortlisted applicants for their own jobs.
DROP POLICY IF EXISTS "Recruiters can insert schedules" ON public.interview_schedules;
CREATE POLICY "Recruiters can insert schedules" ON public.interview_schedules FOR INSERT WITH CHECK (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
  AND applicant_id IN (
    SELECT applicants.id
    FROM public.applicants
    JOIN public.jobs ON jobs.id = applicants.job_id
    WHERE applicants.status = 'Shortlisted'
      AND jobs.recruiter_id = interview_schedules.recruiter_id
  )
);

-- Return resume details only to the recruiter who owns the applicant's job.
CREATE OR REPLACE FUNCTION public.get_applicant_resume(p_applicant_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_resume JSONB;
BEGIN
  SELECT jsonb_build_object(
    'name', applicant.name,
    'role', COALESCE(jobseeker.target_role, applicant.role),
    'email', applicant.email,
    'phone', user_profile.phone,
    'location', user_profile.location,
    'summary', jobseeker.summary,
    'skills', COALESCE(to_jsonb(jobseeker.skills), '[]'::JSONB),
    'experience', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'role', experience.role,
        'org', experience.company,
        'when', experience.dates,
        'desc', COALESCE(experience.description, '')
      ) ORDER BY experience.created_at DESC)
      FROM public.experience
      WHERE experience.user_id = applicant.user_id
    ), '[]'::JSONB),
    'education', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'deg', education.degree,
        'org', education.institution,
        'when', education.dates,
        'desc', COALESCE(education.description, '')
      ) ORDER BY education.created_at DESC)
      FROM public.education
      WHERE education.user_id = applicant.user_id
    ), '[]'::JSONB),
    'portfolio', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'title', portfolio.title,
        'type', COALESCE(portfolio.type, ''),
        'link', COALESCE(portfolio.link, ''),
        'tags', COALESCE(to_jsonb(portfolio.tags), '[]'::JSONB),
        'desc', COALESCE(portfolio.description, '')
      ) ORDER BY portfolio.created_at DESC)
      FROM public.portfolio
      WHERE portfolio.user_id = applicant.user_id
    ), '[]'::JSONB)
  ) INTO v_resume
  FROM public.applicants AS applicant
  JOIN public.jobs AS job ON job.id = applicant.job_id
  LEFT JOIN public.user_profiles AS user_profile ON user_profile.user_id = applicant.user_id
  LEFT JOIN public.jobseeker_profiles AS jobseeker ON jobseeker.user_id = applicant.user_id
  WHERE applicant.id = p_applicant_id
    AND EXISTS (
      SELECT 1
      FROM public.recruiter_profiles AS recruiter
      WHERE recruiter.user_id = auth.uid()
        AND recruiter.id = job.recruiter_id
    );

  IF v_resume IS NULL THEN
    RAISE EXCEPTION 'Applicant not found or access denied';
  END IF;
  RETURN v_resume;
END;
$$;

REVOKE ALL ON FUNCTION public.get_applicant_resume(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_applicant_resume(UUID) TO authenticated;
