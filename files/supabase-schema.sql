-- Hire-ez Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  location TEXT,
  persona TEXT DEFAULT 'jobseeker', -- 'jobseeker' or 'recruiter'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job seeker profile details
CREATE TABLE public.jobseeker_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  target_role TEXT,
  summary TEXT,
  skills TEXT[], -- array of skills
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Education records
CREATE TABLE public.education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  degree TEXT NOT NULL,
  institution TEXT NOT NULL,
  dates TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Experience records
CREATE TABLE public.experience (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  dates TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portfolio projects
CREATE TABLE public.portfolio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT,
  link TEXT,
  tags TEXT[],
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recruiter profiles
CREATE TABLE public.recruiter_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT,
  department TEXT,
  linkedin TEXT,
  company TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  website TEXT,
  founded TEXT,
  hq TEXT,
  description TEXT,
  hiring_locations TEXT,
  hiring_roles TEXT[],
  team_size TEXT,
  open_roles INTEGER DEFAULT 0,
  specialties TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job listings
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recruiter_id UUID REFERENCES public.recruiter_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT DEFAULT 'Full-time', -- 'Full-time', 'Part-time', 'Internship'
  level TEXT DEFAULT 'Entry', -- 'Entry', 'Mid', 'Senior'
  category TEXT,
  salary TEXT,
  posted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  description TEXT,
  skills TEXT[],
  department TEXT,
  status TEXT DEFAULT 'active', -- 'active', 'closed', 'draft'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'Applied', -- 'Applied', 'Shortlisted', 'Rejected', 'Interview', 'Offer'
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Saved jobs
CREATE TABLE public.saved_jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

-- Applicants (for recruiter view)
CREATE TABLE public.applicants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  experience TEXT,
  status TEXT DEFAULT 'Applied',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Interview schedules
CREATE TABLE public.interview_schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recruiter_id UUID REFERENCES public.recruiter_profiles(id) ON DELETE CASCADE,
  applicant_id UUID REFERENCES public.applicants(id) ON DELETE CASCADE,
  candidate_name TEXT NOT NULL,
  role TEXT NOT NULL,
  interview_date DATE NOT NULL,
  interview_time TIME NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Learning courses
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  duration TEXT NOT NULL,
  level TEXT DEFAULT 'Beginner',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User course progress
CREATE TABLE public.user_course_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0, -- 0-100
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, course_id)
);

-- Certifications
CREATE TABLE public.certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User certifications
CREATE TABLE public.user_certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  certification_id UUID REFERENCES public.certifications(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, certification_id)
);

-- Career roadmaps
CREATE TABLE public.roadmaps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Roadmap steps
CREATE TABLE public.roadmap_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  roadmap_id UUID REFERENCES public.roadmaps(id) ON DELETE CASCADE,
  step_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Interview questions
CREATE TABLE public.interview_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL, -- 'Behavioral', 'Technical', 'HR Round', 'Case Study'
  question TEXT NOT NULL,
  tip TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User interview practice
CREATE TABLE public.user_interview_practice (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID REFERENCES public.interview_questions(id) ON DELETE CASCADE,
  practiced BOOLEAN DEFAULT FALSE,
  practiced_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, question_id)
);

-- Notifications
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'shortlist', 'interview', 'offer', 'application'
  title TEXT NOT NULL,
  message TEXT,
  job_title TEXT,
  company TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_jobs_recruiter ON public.jobs(recruiter_id);
CREATE INDEX idx_jobs_status ON public.jobs(status);
CREATE INDEX idx_jobs_type ON public.jobs(type);
CREATE INDEX idx_applications_user ON public.applications(user_id);
CREATE INDEX idx_applications_job ON public.applications(job_id);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_saved_jobs_user ON public.saved_jobs(user_id);
CREATE INDEX idx_applicants_job ON public.applicants(job_id);
CREATE INDEX idx_notifications_user ON public.notifications(user_id);
CREATE INDEX idx_notifications_read ON public.notifications(read);
CREATE INDEX idx_user_profiles_user ON public.user_profiles(user_id);
CREATE INDEX idx_experience_user ON public.experience(user_id);
CREATE INDEX idx_education_user ON public.education(user_id);
CREATE INDEX idx_portfolio_user ON public.portfolio(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_profiles_user_unique ON public.user_profiles(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_jobseeker_profiles_user_unique ON public.jobseeker_profiles(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_recruiter_profiles_user_unique ON public.recruiter_profiles(user_id);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobseeker_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recruiter_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applicants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interview_schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_course_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_interview_practice ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view own profile" ON public.user_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.user_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.user_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for jobseeker_profiles
CREATE POLICY "Users can view own jobseeker profile" ON public.jobseeker_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own jobseeker profile" ON public.jobseeker_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own jobseeker profile" ON public.jobseeker_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for education
CREATE POLICY "Users can view own education" ON public.education FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own education" ON public.education FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own education" ON public.education FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own education" ON public.education FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for experience
CREATE POLICY "Users can view own experience" ON public.experience FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own experience" ON public.experience FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own experience" ON public.experience FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own experience" ON public.experience FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for portfolio
CREATE POLICY "Users can view own portfolio" ON public.portfolio FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own portfolio" ON public.portfolio FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own portfolio" ON public.portfolio FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own portfolio" ON public.portfolio FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for recruiter_profiles
CREATE POLICY "Users can view own recruiter profile" ON public.recruiter_profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own recruiter profile" ON public.recruiter_profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own recruiter profile" ON public.recruiter_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for jobs (public read, recruiter write)
CREATE POLICY "Anyone can view active jobs" ON public.jobs FOR SELECT USING (status = 'active');
CREATE POLICY "Recruiters can insert own jobs" ON public.jobs FOR INSERT WITH CHECK (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Recruiters can update own jobs" ON public.jobs FOR UPDATE USING (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Recruiters can delete own jobs" ON public.jobs FOR DELETE USING (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);

-- RLS Policies for applications
CREATE POLICY "Users can view own applications" ON public.applications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own applications" ON public.applications FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Recruiters can view applications for their jobs" ON public.applications FOR SELECT USING (
  job_id IN (SELECT id FROM public.jobs WHERE recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid()))
);
CREATE POLICY "Recruiters can update application status" ON public.applications FOR UPDATE USING (
  job_id IN (SELECT id FROM public.jobs WHERE recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid()))
);

-- RLS Policies for saved_jobs
CREATE POLICY "Users can view own saved jobs" ON public.saved_jobs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own saved jobs" ON public.saved_jobs FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own saved jobs" ON public.saved_jobs FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for applicants
CREATE POLICY "Recruiters can view applicants for their jobs" ON public.applicants FOR SELECT USING (
  job_id IN (SELECT id FROM public.jobs WHERE recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid()))
);
CREATE POLICY "Recruiters can insert applicants" ON public.applicants FOR INSERT WITH CHECK (
  job_id IN (SELECT id FROM public.jobs WHERE recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid()))
);
CREATE POLICY "Recruiters can update applicants" ON public.applicants FOR UPDATE USING (
  job_id IN (SELECT id FROM public.jobs WHERE recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid()))
);

-- RLS Policies for interview_schedules
CREATE POLICY "Recruiters can view own schedules" ON public.interview_schedules FOR SELECT USING (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Recruiters can insert schedules" ON public.interview_schedules FOR INSERT WITH CHECK (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Recruiters can update schedules" ON public.interview_schedules FOR UPDATE USING (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Recruiters can delete schedules" ON public.interview_schedules FOR DELETE USING (
  recruiter_id IN (SELECT id FROM public.recruiter_profiles WHERE user_id = auth.uid())
);

-- RLS Policies for user_course_progress
CREATE POLICY "Users can view own course progress" ON public.user_course_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own course progress" ON public.user_course_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own course progress" ON public.user_course_progress FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for user_certifications
CREATE POLICY "Users can view own certifications" ON public.user_certifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own certifications" ON public.user_certifications FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_interview_practice
CREATE POLICY "Users can view own interview practice" ON public.user_interview_practice FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own interview practice" ON public.user_interview_practice FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own interview practice" ON public.user_interview_practice FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for notifications
CREATE POLICY "Users can view own notifications" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own notifications" ON public.notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "System can insert notifications" ON public.notifications FOR INSERT WITH CHECK (true);

-- Public read access for reference data
CREATE POLICY "Anyone can view courses" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Anyone can view certifications" ON public.certifications FOR SELECT USING (true);
CREATE POLICY "Anyone can view roadmaps" ON public.roadmaps FOR SELECT USING (true);
CREATE POLICY "Anyone can view roadmap steps" ON public.roadmap_steps FOR SELECT USING (true);
CREATE POLICY "Anyone can view interview questions" ON public.interview_questions FOR SELECT USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobseeker_profiles_updated_at BEFORE UPDATE ON public.jobseeker_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON public.education FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_experience_updated_at BEFORE UPDATE ON public.experience FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_portfolio_updated_at BEFORE UPDATE ON public.portfolio FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_recruiter_profiles_updated_at BEFORE UPDATE ON public.recruiter_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_applicants_updated_at BEFORE UPDATE ON public.applicants FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_interview_schedules_updated_at BEFORE UPDATE ON public.interview_schedules FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_roadmaps_updated_at BEFORE UPDATE ON public.roadmaps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_roadmap_steps_updated_at BEFORE UPDATE ON public.roadmap_steps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Submit an application and notify both parties in one transaction.
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