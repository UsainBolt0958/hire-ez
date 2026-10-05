# Hire-ez Supabase Setup Guide

This guide will help you set up Supabase backend for your Hire-ez website with Google OAuth authentication and real database integration.

## Prerequisites

- A Supabase account (free tier works fine)
- Google Cloud Console account for OAuth setup

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Fill in the project details:
   - **Name**: hire-ez (or your preferred name)
   - **Database Password**: Generate a strong password and save it
   - **Region**: Choose a region closest to your users
4. Wait for the project to be created (2-3 minutes)

## Step 2: Get Supabase Credentials

1. Go to your project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following credentials:
   - **Project URL**: Looks like `https://your-project.supabase.co`
   - **anon public key**: Looks like `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 3: Configure Supabase in Your Project

1. Open `supabase-config.js` in your project
2. Replace the placeholder values with your actual credentials:

```javascript
const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_PROJECT_URL', // e.g., 'https://your-project.supabase.co'
  anonKey: 'YOUR_SUPABASE_ANON_KEY', // e.g., 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

## Step 4: Set Up Google OAuth

### 4.1 Create Google OAuth Application

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure consent screen if prompted:
   - User type: External
   - App name: Hire-ez
   - Add your email as developer contact
6. Create OAuth 2.0 client ID:
   - Application type: Web application
   - Name: Hire-ez Web
   - Authorized redirect URIs: Add your Supabase auth callback URL:
     - `https://your-project.supabase.co/auth/v1/callback`
7. Copy the **Client ID** and **Client Secret**

### 4.2 Configure Google OAuth in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Providers**
3. Enable **Google** provider
4. Paste your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Save the configuration

## Step 5: Run Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the entire contents of `supabase-schema.sql`
4. Paste it into the SQL Editor
5. Click **Run** to execute the schema
6. Wait for all tables to be created (should show "Success")

If the schema was already installed, run these statements in the SQL Editor to enable one profile row per account and profile upserts:

```sql
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_profiles_user_unique ON public.user_profiles(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_jobseeker_profiles_user_unique ON public.jobseeker_profiles(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_recruiter_profiles_user_unique ON public.recruiter_profiles(user_id);
```

For an existing project, also run the contents of `supabase-application-workflow.sql` in the SQL Editor. This installs the authenticated transaction used by Apply. It creates the application, recruiter applicant record, and in-app Mail notifications together, so a partial save cannot be reported as a successful application.

## Step 6: Add Sample Data (Optional)

If you want to start with sample data, run these SQL queries in the SQL Editor:

```sql
-- Add sample courses
INSERT INTO public.courses (title, category, duration, level, description) VALUES
('Data Structures Fundamentals', 'Engineering', '6 weeks', 'Beginner', 'Learn the fundamentals of data structures'),
('Communication Skills for Interviews', 'Career', '2 weeks', 'Beginner', 'Improve your interview communication'),
('Excel for Business Analysts', 'Data', '3 weeks', 'Beginner', 'Master Excel for data analysis'),
('UI Design Basics', 'Design', '4 weeks', 'Beginner', 'Introduction to UI design principles'),
('SQL for Beginners', 'Data', '5 weeks', 'Beginner', 'Learn SQL from scratch'),
('Resume Writing 101', 'Career', '1 week', 'Beginner', 'Create a winning resume');

-- Add sample certifications
INSERT INTO public.certifications (title, icon, description) VALUES
('Hirez Certified — Frontend', 'award', 'Frontend development certification'),
('Hirez Certified — Data Analysis', 'badge', 'Data analysis certification'),
('Hirez Certified — Communication', 'award', 'Communication skills certification'),
('Hirez Certified — UX Basics', 'badge', 'UX design fundamentals certification');

-- Add sample roadmaps
INSERT INTO public.roadmaps (title, description) VALUES
('Frontend Developer', 'Path to becoming a frontend developer'),
('Data Analyst', 'Path to becoming a data analyst'),
('Digital Marketing', 'Path to becoming a digital marketer');

-- Add roadmap steps for Frontend Developer
INSERT INTO public.roadmap_steps (roadmap_id, step_number, title, description) VALUES
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 1, 'Learn HTML, CSS & JavaScript', 'Get comfortable with the building blocks of the web'),
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 2, 'Pick up a framework — React', 'Learn components, state and props'),
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 3, 'Build 3 portfolio projects', 'Ship real, deployed projects'),
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 4, 'Sharpen data structures basics', 'Arrays, objects and common patterns'),
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 5, 'Apply and track applications', 'Use the Jobs tab to shortlist roles'),
((SELECT id FROM public.roadmaps WHERE title = 'Frontend Developer'), 6, 'Practice interviews weekly', 'Run through practice questions');

-- Add sample interview questions
INSERT INTO public.interview_questions (category, question, tip) VALUES
('Behavioral', 'Tell me about a time you missed a deadline.', 'Name the cause plainly, what you did next, and the process change that followed.'),
('Behavioral', 'Describe a conflict with a teammate and how it ended.', 'Focus on the resolution and what you learned about working with different styles.'),
('Behavioral', 'What''s an achievement you''re genuinely proud of?', 'Pick something with a measurable outcome, even a small one.'),
('Technical', 'How would you reverse a linked list?', 'Talk through the pointer-swapping approach out loud before writing any code.'),
('Technical', 'Explain the difference between SQL joins.', 'Use a two-table example — inner, left, right — and describe what rows survive each.'),
('Technical', 'What happens when you type a URL into a browser?', 'DNS lookup, TCP/TLS handshake, request, response, render — walk it in order.'),
('HR Round', 'Why do you want to work here?', 'Reference something specific about the role or team, not a generic compliment.'),
('HR Round', 'Where do you see yourself in three years?', 'Tie your answer to growth within the kind of work this role involves.'),
('HR Round', 'What''s your expected salary?', 'Give a researched range, not a single number, and stay open to discussion.'),
('Case Study', 'Our signups dropped 20% last month — how would you investigate?', 'Start broad (what changed?), then narrow by channel, device, and cohort.'),
('Case Study', 'How would you price a new product feature?', 'Anchor on customer value and competitor pricing before landing on a number.'),
('Case Study', 'Estimate how many auto-rickshaws operate in Mumbai.', 'Break the city into segments and estimate per-segment — show your reasoning.');
```

## Step 7: Test Your Setup

1. Open your website in a browser
2. Click "Continue with Google" on the auth screen
3. You should be redirected to Google OAuth
4. Sign in with your Google account
5. You should be redirected back to your website
6. Complete the onboarding process
7. Check the Supabase dashboard → **Authentication** → **Users** to see the new user
8. Check the database tables to see the profile data
9. Apply to a job, then verify the application appears in the jobseeker's applied state and the recruiter's Applicants and Mail sections

## Step 8: Test Data Loading

1. Navigate to different sections of the website
2. Check the browser console for any errors
3. Verify that:
   - Jobs are loading from the database (or fallback data)
   - Profile data is being saved to Supabase
   - Job postings are being saved to the database
   - Applications are being submitted correctly

## Troubleshooting

### Google OAuth Not Working

- **Issue**: Redirect loop or OAuth error
- **Solution**: 
  - Verify redirect URI matches exactly: `https://your-project.supabase.co/auth/v1/callback`
  - Check that Google OAuth is enabled in Supabase
  - Ensure Client ID and Secret are correct

### Database Connection Issues

- **Issue**: "Failed to load Supabase client" error
- **Solution**:
  - Verify your Supabase URL and anon key are correct
  - Check that your Supabase project is active
  - Ensure the schema has been run successfully

### Row Level Security (RLS) Issues

- **Issue**: Data not loading or permission errors
- **Solution**:
  - Check that RLS policies are correctly set up
  - Verify you're authenticated when trying to access user-specific data
  - Check the Supabase logs for specific permission errors

### Data Not Saving

- **Issue**: Profile data not persisting
- **Solution**:
  - Check browser console for error messages
  - Verify user is authenticated
  - Check that the user_profile exists for the current user
  - Review RLS policies for write permissions

## Next Steps

Once your Supabase backend is working:

1. **Add real job data**: Insert actual job postings into the `jobs` table
2. **Set up real-time subscriptions**: Enable real-time updates for notifications
3. **Configure storage**: Set up Supabase Storage for file uploads (resumes, portfolio images)
4. **Add more sample data**: Populate courses, certifications, and roadmaps with your content
5. **Customize the schema**: Modify the database schema to fit your specific needs

## Security Best Practices

1. **Never commit secrets**: Keep your Supabase credentials out of version control
2. **Use environment variables**: Consider using environment variables for credentials in production
3. **Enable RLS**: Keep Row Level Security enabled to protect user data
4. **Regular backups**: Enable Supabase automated backups
5. **Monitor usage**: Keep an eye on your Supabase usage and limits

Hire-ez Mail is in-app notification delivery. Sending separate email messages requires configuring a server-side email provider (for example, a Supabase Edge Function with provider credentials); those credentials must not be placed in the browser app.

## Support

If you encounter issues:

1. Check the [Supabase Documentation](https://supabase.com/docs)
2. Review the browser console for error messages
3. Check Supabase logs in your project dashboard
4. Verify all steps in this guide have been completed correctly

---

Your Hire-ez website is now ready to use with a real Supabase backend! All user data, job postings, applications, and notifications will be stored in your Supabase database.