/* ================= ICONS ================= */
const ICONS = {
  briefcase:'<path d="M3 8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5Z"/><path d="M8 6.5V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5"/><path d="M3 12h18"/>',
  user:'<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.4-4 4.2-6 7.5-6s6.1 2 7.5 6"/>',
  file:'<path d="M6 2.5h8l4.5 4.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z"/><path d="M14 2.5V7h4.5"/><path d="M8.5 12.5h7M8.5 16h7M8.5 9h3"/>',
  chat:'<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12.5h5"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M20 18.5H6.5A2.5 2.5 0 0 0 4 21"/>',
  chart:'<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>',
  building:'<path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h6A1.5 1.5 0 0 1 14 4.5V21"/><path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V21"/><path d="M2 21h20M8 7h1M8 11h1M8 15h1M11 7h1M11 11h1M11 15h1M16.5 14h1M16.5 17h1"/>',
  shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  heart:'<path d="M12 20.5s-7.5-4.6-9.7-9.3C.8 7.7 2.6 4.5 6 4.1c2-.2 3.6.8 4.9 2.4l1.1 1.4 1.1-1.4c1.3-1.6 2.9-2.6 4.9-2.4 3.4.4 5.2 3.6 3.7 7.1C19.5 15.9 12 20.5 12 20.5Z"/>',
  pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  check:'<path d="M4 12.5l5 5L20 7"/>',
  arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="m8.2 12.6-1 8.4 4.8-2.5 4.8 2.5-1-8.4"/>',
  badge:'<circle cx="12" cy="8" r="6"/><path d="m8.2 12.6-1 8.4 4.8-2.5 4.8 2.5-1-8.4"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10 21h4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/>',
  pencil:'<path d="m16 5 3 3M4 20l4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  send:'<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  star:'<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m4 4v7m6-7v7"/>',
  trend:'<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  x:'<path d="m18 6-12 12M6 6l12 12"/>'
};

function icon(name, size){
  const className = size && size !== 'icon' ? `icon ${size}` : 'icon';
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

function openModal(content){
  const overlay = document.getElementById('modalOverlay');
  const box = document.getElementById('modalBox');
  if(!overlay || !box) return;
  box.innerHTML = content;
  overlay.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeModal(){
  const overlay = document.getElementById('modalOverlay');
  const box = document.getElementById('modalBox');
  if(!overlay) return;
  overlay.classList.remove('open');
  document.body.classList.remove('modal-open');
  if(box) box.innerHTML = '';
}

function showToast(message){
  const root = document.getElementById('toastRoot');
  if(!root) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  root.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3500);
}

const NAV = {
  jobseeker:{
    label:'Jobseeker',
    tabs:[
      {id:'overview',label:'Overview',icon:'home'},
      {id:'profile',label:'Profile',icon:'user'},
      {id:'resume',label:'Resume',icon:'file'},
      {id:'jobs',label:'Find jobs',icon:'search'},
      {id:'mail',label:'Mail',icon:'mail'},
      {id:'interview',label:'Interview prep',icon:'chat'},
      {id:'assistant',label:'AI Chat',icon:'chat'},
    ]
  },
  recruiter:{
    label:'Recruiter',
    tabs:[
      {id:'dashboard',label:'Dashboard',icon:'chart'},
      {id:'profile',label:'Profile',icon:'user'},
      {id:'post',label:'Post a job',icon:'plus'},
      {id:'applicants',label:'Applicants',icon:'users'},
      {id:'schedule',label:'Schedule',icon:'calendar'},
    ]
  }
};
let state={persona:'jobseeker',tab:'overview'};

function renderSubnav(){
  const el=document.getElementById('subnavRow');
  el.innerHTML=NAV[state.persona].tabs.map(t=>
    '<button data-tab="'+t.id+'" class="'+(state.tab===t.id?'active':'')+'">'+icon(t.icon)+'<span>'+t.label+'</span></button>'
  ).join('');
  el.querySelectorAll('button').forEach(b=>b.addEventListener('click',async ()=>switchTab(b.dataset.tab)));
}
async function switchTab(t){
  if(!isOnboardingCompleteFor(state.persona)){
    showToast('Please complete your profile first');
    return;
  }
  state.tab=t;
  renderSubnav();await renderScreen();
  window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('click',async e=>{
  const nav=e.target.closest('[data-nav]');
  if(nav){e.preventDefault();const [p,t]=nav.dataset.nav.split(':');state.persona=p;state.tab=t;renderSubnav();await renderScreen();window.scrollTo({top:0,behavior:'smooth'});}
});

/* ================= DATA ================= */
const COLORS=['#FF3E77','#FFB627','#4A55C9','#1D8A4E','#C6303E','#8A4FE0','#0E9AA7','#E38F00'];
function colorFor(seed){let h=0;for(let i=0;i<seed.length;i++)h=seed.charCodeAt(i)+((h<<5)-h);return COLORS[Math.abs(h)%COLORS.length];}

// Jobs data - will be loaded from Supabase only
let JOBS = [];
let savedJobs=new Set();
let jobFilters={type:'All',search:'',loc:''};
let showSavedOnly=false;
let jobsAutoSyncInterval = null;

// Load saved jobs from localStorage as fallback
try {
  const saved = localStorage.getItem('hirez-saved-jobs');
  if (saved) {
    savedJobs = new Set(JSON.parse(saved));
  }
} catch (e) {
  console.error('Error loading saved jobs from localStorage:', e);
}

// Load jobs from Supabase
async function loadJobsFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Supabase not configured, no jobs will be loaded');
    JOBS = [];
    return;
  }
  
  try {
    const { data, error } = await client
      .from('jobs')
      .select('*')
      .eq('status', 'active')
      .order('posted_date', { ascending: false });
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      // Transform Supabase data to match our format
      JOBS = data.map(job => ({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        type: job.type,
        level: job.level,
        category: job.category,
        department: job.department || '',
        description: job.description || '',
        requirements: job.requirements || '',
        salary: job.salary,
        posted: formatPostedDate(job.posted_date),
        tags: job.skills || []
      }));
      console.log(`Loaded ${JOBS.length} jobs from Supabase`);
    } else {
      JOBS = [];
      console.log('No active jobs found in Supabase');
    }
  } catch (error) {
    console.error('Error loading jobs from Supabase:', error);
    JOBS = [];
  }
}

// Start auto-sync for jobs (every 1 minute)
function startJobsAutoSync() {
  // Clear any existing interval
  if (jobsAutoSyncInterval) {
    clearInterval(jobsAutoSyncInterval);
  }
  
  // Only start if Supabase is configured
  if (isSupabaseConfigured()) {
    // Initial load
    loadJobsFromSupabase();
    loadSavedJobsFromSupabase();
    
    // Set up auto-sync every 1 minute (60000ms)
    jobsAutoSyncInterval = setInterval(() => {
      console.log('Auto-syncing jobs from Supabase...');
      loadJobsFromSupabase();
      loadSavedJobsFromSupabase();
    }, 60000);
    
    console.log('Jobs auto-sync started (every 1 minute)');
  }
}

// Stop jobs auto-sync
function stopJobsAutoSync() {
  if (jobsAutoSyncInterval) {
    clearInterval(jobsAutoSyncInterval);
    jobsAutoSyncInterval = null;
    console.log('Jobs auto-sync stopped');
  }
}

// Load saved jobs from Supabase
async function loadSavedJobsFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Supabase not configured, using localStorage for saved jobs');
    return;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) return;
    
    const { data, error } = await client
      .from('saved_jobs')
      .select('job_id')
      .eq('user_id', user.id);
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      savedJobs = new Set(data.map(sj => sj.job_id));
      // Sync to localStorage
      try {
        localStorage.setItem('hirez-saved-jobs', JSON.stringify([...savedJobs]));
      } catch (e) {
        console.error('Error saving saved jobs to localStorage:', e);
      }
      console.log(`Loaded ${savedJobs.size} saved jobs from Supabase`);
    } else {
      savedJobs = new Set();
      // Sync to localStorage
      try {
        localStorage.setItem('hirez-saved-jobs', JSON.stringify([...savedJobs]));
      } catch (e) {
        console.error('Error saving saved jobs to localStorage:', e);
      }
      console.log('No saved jobs found in Supabase');
    }
  } catch (error) {
    console.error('Error loading saved jobs from Supabase:', error);
    // Fall back to localStorage
    try {
      const saved = localStorage.getItem('hirez-saved-jobs');
      if (saved) {
        savedJobs = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading saved jobs from localStorage:', e);
    }
  }
}

// Format date to relative time
function formatPostedDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
}

// Courses data - will be loaded from Supabase or use fallback data
let COURSES = [
  {id:1,title:'Data Structures Fundamentals',category:'Engineering',duration:'6 weeks',level:'Beginner',progress:40},
  {id:2,title:'Communication Skills for Interviews',category:'Career',duration:'2 weeks',level:'Beginner',progress:70},
  {id:3,title:'Excel for Business Analysts',category:'Data',duration:'3 weeks',level:'Beginner',progress:0},
  {id:4,title:'UI Design Basics',category:'Design',duration:'4 weeks',level:'Beginner',progress:15},
  {id:5,title:'SQL for Beginners',category:'Data',duration:'5 weeks',level:'Beginner',progress:90},
  {id:6,title:'Resume Writing 101',category:'Career',duration:'1 week',level:'Beginner',progress:100},
];
const CERTS=[
  {title:'Hirez Certified — Frontend',icon:'award'},
  {title:'Hirez Certified — Data Analysis',icon:'badge'},
  {title:'Hirez Certified — Communication',icon:'award'},
  {title:'Hirez Certified — UX Basics',icon:'badge'},
];
// Roadmaps data - will be loaded from Supabase or use fallback data
let ROADMAPS={
  'Frontend Developer':[
    {title:'Learn HTML, CSS & JavaScript',desc:'Get comfortable with the building blocks of the web before reaching for a framework.'},
    {title:'Pick up a framework — React',desc:'Learn components, state and props by rebuilding a few small apps.'},
    {title:'Build 3 portfolio projects',desc:'Ship real, deployed projects you can walk an interviewer through.'},
    {title:'Sharpen data structures basics',desc:'Arrays, objects and common patterns — enough to clear a screening round.'},
    {title:'Apply and track applications',desc:'Use the Jobs tab to shortlist roles and keep tabs on where you\'ve applied.'},
    {title:'Practice interviews weekly',desc:'Run through behavioral and technical questions until they feel natural.'},
  ],
  'Data Analyst':[
    {title:'Master Excel & spreadsheets',desc:'Pivot tables, formulas and clean data habits come first.'},
    {title:'Learn SQL',desc:'Practice pulling and joining data from real-looking datasets.'},
    {title:'Pick up a BI tool',desc:'Power BI or Tableau to turn numbers into a story.'},
    {title:'Build a case study',desc:'Take a public dataset and publish a short analysis with clear takeaways.'},
    {title:'Apply to analyst roles',desc:'Filter by your city or remote in the Jobs tab.'},
    {title:'Practice case interviews',desc:'Expect “walk me through how you\'d analyze X” — rehearse it.'},
  ],
  'Digital Marketing':[
    {title:'Learn the fundamentals',desc:'SEO, content, paid ads and analytics — the four legs of the stool.'},
    {title:'Run a small campaign',desc:'Even a personal blog or Instagram page counts as real practice.'},
    {title:'Get comfortable with analytics tools',desc:'Track what worked and explain why in plain language.'},
    {title:'Build a portfolio of campaigns',desc:'Screenshots, numbers, and a short write-up per project.'},
    {title:'Apply to associate roles',desc:'Entry-level marketing roles are listed under the Marketing category.'},
    {title:'Practice explaining results',desc:'Interviewers care more about your reasoning than the tool you used.'},
  ]
};
let currentRoadmap='Frontend Developer';

// Load courses from Supabase
async function loadCoursesFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Using fallback course data');
    return;
  }
  
  try {
    const { data, error } = await client
      .from('courses')
      .select('*');
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      COURSES = data.map(course => ({
        id: course.id,
        title: course.title,
        category: course.category,
        duration: course.duration,
        level: course.level,
        progress: 0 // Will be loaded from user_course_progress
      }));
      console.log(`Loaded ${COURSES.length} courses from Supabase`);
    }
  } catch (error) {
    console.error('Error loading courses from Supabase:', error);
  }
}

// Load roadmaps from Supabase
async function loadRoadmapsFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Using fallback roadmap data');
    return;
  }
  
  try {
    const { data: roadmaps, error: roadmapError } = await client
      .from('roadmaps')
      .select('*');
    
    if (roadmapError) throw roadmapError;
    
    if (roadmaps && roadmaps.length > 0) {
      const { data: steps, error: stepsError } = await client
        .from('roadmap_steps')
        .select('*')
        .in('roadmap_id', roadmaps.map(r => r.id));
      
      if (stepsError) throw stepsError;
      
      // Rebuild ROADMAPS object
      ROADMAPS = {};
      roadmaps.forEach(roadmap => {
        const roadmapSteps = steps
          .filter(step => step.roadmap_id === roadmap.id)
          .sort((a, b) => a.step_number - b.step_number)
          .map(step => ({
            title: step.title,
            desc: step.description
          }));
        
        ROADMAPS[roadmap.title] = roadmapSteps;
      });
      
      // Update currentRoadmap if needed
      if (!ROADMAPS[currentRoadmap]) {
        currentRoadmap = Object.keys(ROADMAPS)[0] || 'Frontend Developer';
      }
      
      console.log(`Loaded ${Object.keys(ROADMAPS).length} roadmaps from Supabase`);
    }
  } catch (error) {
    console.error('Error loading roadmaps from Supabase:', error);
  }
}

// Interview questions data - will be loaded from Supabase or use fallback data
let INTERVIEW_Q={
  Behavioral:[
    {q:'Tell me about a time you missed a deadline.',tip:'Name the cause plainly, what you did next, and the process change that followed. Skip the excuses.'},
    {q:'Describe a conflict with a teammate and how it ended.',tip:'Focus on the resolution and what you learned about working with different styles.'},
    {q:'What\'s an achievement you\'re genuinely proud of?',tip:'Pick something with a measurable outcome, even a small one — numbers make it concrete.'},
  ],
  Technical:[
    {q:'How would you reverse a linked list?',tip:'Talk through the pointer-swapping approach out loud before writing any code.'},
    {q:'Explain the difference between SQL joins.',tip:'Use a two-table example — inner, left, right — and describe what rows survive each.'},
    {q:'What happens when you type a URL into a browser?',tip:'DNS lookup, TCP/TLS handshake, request, response, render — walk it in order.'},
  ],
  'HR Round':[
    {q:'Why do you want to work here?',tip:'Reference something specific about the role or team, not a generic compliment.'},
    {q:'Where do you see yourself in three years?',tip:'Tie your answer to growth within the kind of work this role involves.'},
    {q:'What\'s your expected salary?',tip:'Give a researched range, not a single number, and stay open to discussion.'},
  ],
  'Case Study':[
    {q:'Our signups dropped 20% last month — how would you investigate?',tip:'Start broad (what changed?), then narrow by channel, device, and cohort.'},
    {q:'How would you price a new product feature?',tip:'Anchor on customer value and competitor pricing before landing on a number.'},
    {q:'Estimate how many auto-rickshaws operate in Mumbai.',tip:'Break the city into segments and estimate per-segment — show your reasoning, not just a guess.'},
  ]
};
let interviewState={category:'Behavioral',flipped:new Set(),practiced:new Set()};

// Load interview questions from Supabase
async function loadInterviewQuestionsFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Using fallback interview questions data');
    return;
  }
  
  try {
    const { data, error } = await client
      .from('interview_questions')
      .select('*');
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      // Rebuild INTERVIEW_Q object
      INTERVIEW_Q = {};
      data.forEach(q => {
        if (!INTERVIEW_Q[q.category]) {
          INTERVIEW_Q[q.category] = [];
        }
        INTERVIEW_Q[q.category].push({
          q: q.question,
          tip: q.tip
        });
      });
      console.log(`Loaded interview questions from Supabase for ${Object.keys(INTERVIEW_Q).length} categories`);
    }
  } catch (error) {
    console.error('Error loading interview questions from Supabase:', error);
  }
}

// Applicants data - will be loaded from Supabase or use fallback data
let APPLICANTS = [
  {id:1,name:'Aarav Mehta',role:'Frontend Developer',exp:'2 yrs',status:'Applied'},
  {id:2,name:'Diya Kapoor',role:'Frontend Developer',exp:'3 yrs',status:'Shortlisted'},
  {id:3,name:'Rohan Sharma',role:'Backend Engineer',exp:'4 yrs',status:'Applied'},
  {id:4,name:'Ishita Rao',role:'UX Designer',exp:'1 yr',status:'Rejected'},
  {id:5,name:'Kabir Singh',role:'Data Analyst',exp:'2 yrs',status:'Shortlisted'},
  {id:6,name:'Meera Nair',role:'QA Engineer',exp:'3 yrs',status:'Applied'},
];
let postedJobsByRecruiter=[];
// Schedule data - will be loaded from Supabase or use fallback data
let SCHEDULE = [
  {id:1,candidate:'Diya Kapoor',role:'Frontend Developer',date:'12',month:'AUG',time:'11:00 AM'},
  {id:2,candidate:'Kabir Singh',role:'Data Analyst',date:'14',month:'AUG',time:'3:30 PM'},
  {id:3,candidate:'Meera Nair',role:'QA Engineer',date:'18',month:'AUG',time:'10:00 AM'},
];

// Load applicants from Supabase
async function loadApplicantsFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Using fallback applicants data');
    return;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) return;
    
    // Get recruiter profile
    const { data: recruiterProfile } = await client
      .from('recruiter_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single();
    
    if (!recruiterProfile) return;
    
    // Get jobs posted by this recruiter
    const { data: jobs } = await client
      .from('jobs')
      .select('id')
      .eq('recruiter_id', recruiterProfile.id);
    
    if (!jobs || jobs.length === 0) return;
    
    const jobIds = jobs.map(j => j.id);
    
    // Get applicants for these jobs
    const { data, error } = await client
      .from('applicants')
      .select('*')
      .in('job_id', jobIds);
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      APPLICANTS = data.map(applicant => ({
        id: applicant.id,
        name: applicant.name,
        role: applicant.role,
        exp: applicant.experience || 'Not specified',
        status: applicant.status
      }));
      console.log(`Loaded ${APPLICANTS.length} applicants from Supabase`);
    }
  } catch (error) {
    console.error('Error loading applicants from Supabase:', error);
  }
}

// Load schedule from Supabase
async function loadScheduleFromSupabase() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Using fallback schedule data');
    return;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) return;
    
    // Get recruiter profile
    const { data: recruiterProfile } = await client
      .from('recruiter_profiles')
      .select('id')
      .eq('user_id', user.id)
      .single();
    
    if (!recruiterProfile) return;
    
    const { data, error } = await client
      .from('interview_schedules')
      .select('*')
      .eq('recruiter_id', recruiterProfile.id)
      .order('interview_date', { ascending: true });
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      SCHEDULE = data.map(schedule => {
        const date = new Date(schedule.interview_date);
        return {
          id: schedule.id,
          candidate: schedule.candidate_name,
          role: schedule.role,
          date: String(date.getDate()).padStart(2, '0'),
          month: date.toLocaleString('en', { month: 'short' }).toUpperCase(),
          time: schedule.interview_time
        };
      });
      console.log(`Loaded ${SCHEDULE.length} scheduled interviews from Supabase`);
    }
  } catch (error) {
    console.error('Error loading schedule from Supabase:', error);
  }
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const toggle=document.getElementById('themeToggle');
  if(toggle){
    toggle.textContent = theme==='dark' ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', theme==='dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function initTheme(){
  const authGate = document.getElementById('authGate');
  if (authGate && !authGate.classList.contains('hidden')) {
    applyTheme('dark');
    localStorage.setItem('hirez-theme', 'dark');
  } else {
    const saved=localStorage.getItem('hirez-theme');
    const theme = saved || 'dark';
    applyTheme(theme);
  }
}

document.getElementById('themeToggle').addEventListener('click', ()=>{
  const nextTheme = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('hirez-theme', nextTheme);
});

document.addEventListener('DOMContentLoaded', initTheme);

let authPersonaSelected = null;
let isLoggedIn = false;
let userEmail = '';
let userNotifications = [];
let hasActiveSession = false;
const AUTH_REDIRECT_PENDING_KEY = 'hirez-auth-redirect-pending';
let onboardingData = {};
let onboardingMode = 'jobseeker';
let onboardingStep = 1;

function isOnboardingCompleteFor(persona){
  const key = persona === 'recruiter'
    ? 'hirez-recruiter-onboarding-complete'
    : 'hirez-onboarding-complete';
  return localStorage.getItem(key) === 'true';
}

function getOnboardingSteps(){
  if(onboardingMode === 'recruiter'){
    return ['Personal Info','Your Role','Company','Company Details','Hiring','Review'];
  }
  return ['Personal Info','Target Role','Skills','Experience','Education','Portfolio','Summary','Review'];
}

function updateGoogleLoginButton(){
  const button = document.getElementById('googleLoginBtn');
  if(!button) return;
  button.innerHTML = hasActiveSession
    ? 'Continue with account'
    : '<span class="google-mark">G</span> Continue with Google';
}

window.MAIL_NOTIFICATIONS = [];

// Load notifications from Supabase
async function loadNotificationsFromSupabase() {
  window.MAIL_NOTIFICATIONS = [];
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    updateMailBadge();
    return false;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
      updateMailBadge();
      return false;
    }
    
    const { data, error } = await client
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    window.MAIL_NOTIFICATIONS = (data || []).map(notif => ({
      id: notif.id,
      type: notif.type,
      title: notif.title,
      message: notif.message,
      job: notif.job_title,
      company: notif.company,
      time: formatPostedDate(notif.created_at),
      read: Boolean(notif.read)
    }));
    updateMailBadge();
    console.log(`Loaded ${window.MAIL_NOTIFICATIONS.length} notifications from Supabase`);
    return true;
  } catch (error) {
    console.error('Error loading notifications from Supabase:', error);
    updateMailBadge();
    return false;
  }
}

function initAuthPersonaPicker(){
  const picker = document.getElementById('authPersonaPicker');
  const hint = document.getElementById('authPersonaHint');
  const googleBtn = document.getElementById('googleLoginBtn');
  const guestBtn = document.getElementById('guestLoginBtn');
  
  console.log('Initializing auth persona picker', { picker, hint, googleBtn, guestBtn });
  
  if(!picker || !hint || !googleBtn || !guestBtn) {
    console.error('Auth persona picker elements not found');
    return;
  }

  const savedPersona = localStorage.getItem('hirez-auth-persona');
  if(savedPersona === 'jobseeker' || savedPersona === 'recruiter') {
    authPersonaSelected = savedPersona;
    state.persona = savedPersona;
    state.tab = NAV[savedPersona].tabs[0].id;
  }

  function setAuthPersona(persona){
    console.log('Setting auth persona:', persona);
    authPersonaSelected = persona;
    state.persona = persona;
    state.tab = NAV[persona].tabs[0].id;
    localStorage.setItem('hirez-auth-persona', persona);
    picker.querySelectorAll('.auth-persona-card').forEach(card=>{
      const active = card.dataset.authPersona === persona;
      card.classList.toggle('active', active);
      card.setAttribute('aria-checked', active ? 'true' : 'false');
    });
    hint.textContent = persona === 'jobseeker'
      ? 'Continuing as a jobseeker'
      : 'Continuing as a recruiter';
    hint.classList.remove('error');
    googleBtn.disabled = false;
    guestBtn.disabled = false;
    console.log('Buttons enabled');
  }

  if(authPersonaSelected){
    setAuthPersona(authPersonaSelected);
  }

  const cards = picker.querySelectorAll('.auth-persona-card');
  console.log('Found persona cards:', cards.length);
  
  cards.forEach(card=>{
    console.log('Adding click listener to card:', card.dataset.authPersona);
    card.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log('Card clicked:', card.dataset.authPersona);
      setAuthPersona(card.dataset.authPersona);
    });
  });
}

function requireAuthPersona(){
  const hint = document.getElementById('authPersonaHint');
  const savedPersona = localStorage.getItem('hirez-auth-persona');
  if(savedPersona === 'jobseeker' || savedPersona === 'recruiter') {
    authPersonaSelected = savedPersona;
    state.persona = savedPersona;
  }
  if(authPersonaSelected) return true;
  if(hint){
    hint.textContent = 'Please select Jobseeker or Recruiter to continue';
    hint.classList.add('error');
  }
  document.getElementById('authPersonaPicker')?.classList.add('shake');
  setTimeout(()=>document.getElementById('authPersonaPicker')?.classList.remove('shake'), 400);
  return false;
}

async function enterApp(){
  if(!requireAuthPersona()) return;
  document.getElementById('authGate')?.classList.add('hidden');
  document.getElementById('appShell')?.classList.remove('hidden');
  
  // Set user as logged in with email from onboarding data
  if(onboardingData.email) {
    isLoggedIn = true;
    userEmail = onboardingData.email;
  }
  
  // Check if onboarding is complete
  if(!isOnboardingCompleteFor(state.persona)){
    onboardingMode = state.persona;
    document.getElementById('subnavRow')?.classList.add('hidden');
    onboardingStep = 1;
    onboardingData = {};
    openOnboardingModal();
    state.tab = state.persona === 'jobseeker' ? 'overview' : NAV[state.persona].tabs[0].id;
  } else {
    state.tab = NAV[state.persona].tabs[0].id;
  }
  renderSubnav();
  await renderScreen();
  updateProfileDisplay();
}

function openOnboardingModal(){
  const steps = getOnboardingSteps();
  const progressDots = steps.map((s, i) => `
    <div class="onboarding-dot ${i < onboardingStep ? 'completed' : ''} ${i === onboardingStep - 1 ? 'active' : ''}">
      ${i < onboardingStep ? icon('check') : (i + 1)}
    </div>
  `).join('');
  
  const modalContent = `
    <div class="onboarding-modal">
      <div class="onboarding-progress">
        <div class="onboarding-dots">${progressDots}</div>
        <div class="onboarding-step-info">Step ${onboardingStep} of ${steps.length}</div>
      </div>
      <div class="onboarding-card">
        ${renderOnboardingStep()}
      </div>
    </div>
  `;
  
  openModal(modalContent);
  bindOnboardingHandlerOnce();
}

async function handleOnboardingSubmit(e){
  e.preventDefault();
  if(onboardingMode === 'recruiter'){
    handleRecruiterOnboardingSubmit();
    return;
  }
  if(onboardingStep === 1){
    onboardingData.name = document.getElementById('ob-name')?.value.trim();
    onboardingData.email = document.getElementById('ob-email')?.value.trim();
    onboardingData.phone = document.getElementById('ob-phone')?.value.trim();
    onboardingData.loc = document.getElementById('ob-loc')?.value.trim();
  } else if(onboardingStep === 2){
    onboardingData.role = document.getElementById('ob-role')?.value.trim();
  } else if(onboardingStep === 3){
    onboardingData.skills = document.getElementById('ob-skills')?.value.trim();
  } else if(onboardingStep === 4){
    captureOnboardingExperience();
  } else if(onboardingStep === 5){
    captureOnboardingEducation();
  } else if(onboardingStep === 6){
    captureOnboardingPortfolio();
  } else if(onboardingStep === 7){
    onboardingData.summary = document.getElementById('ob-summary')?.value.trim();
  } else if(onboardingStep === 8){
    completeOnboarding();
    return;
  }

  onboardingStep++;
  if(document.getElementById('modalOverlay')?.classList.contains('open')){
    openOnboardingModal();
  } else {
    await renderScreen();
  }
}

let onboardingHandlerBound = false;
function bindOnboardingHandlerOnce(){
  if(onboardingHandlerBound) return;
  onboardingHandlerBound = true;
  document.getElementById('modalBox').addEventListener('submit', (e) => {
    if(e.target.id !== 'onboardingForm') return;
    handleOnboardingSubmit(e);
  });
}

document.getElementById('guestLoginBtn')?.addEventListener('click', () => {
  // Guest login - set as not logged in
  isLoggedIn = false;
  userEmail = '';
  enterApp();
});

document.getElementById('googleLoginBtn')?.addEventListener('click', async ()=>{
  if(!requireAuthPersona()) return;
  
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    showToast('Please configure Supabase credentials first');
    return;
  }
  
  try {
    const {data:{session}, error:sessionError} = await client.auth.getSession();
    if(sessionError) throw sessionError;
    if(session){
      hasActiveSession = true;
      isLoggedIn = true;
      userEmail = session.user.email || '';
      onboardingData.email = userEmail;
      enterApp();
      return;
    }

    localStorage.setItem(AUTH_REDIRECT_PENDING_KEY, 'true');
    const { data, error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.href,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });
    
    if (error) throw error;
    
    // The user will be redirected to Google OAuth
    // After authentication, they'll return to this page
    // We'll handle the session in the auth state change listener
    
  } catch (error) {
    localStorage.removeItem(AUTH_REDIRECT_PENDING_KEY);
    console.error('Google sign-in error:', error);
    showToast('Google sign-in failed: ' + error.message);
  }
});

/* ================= PROFILE DROPDOWN ================= */
function updateProfileDisplay(){
  const profileDropdown = document.getElementById('profileDropdown');
  const profileAvatar = document.getElementById('profileAvatar');
  const profileName = document.getElementById('profileName');
  const userEmailDisplay = document.getElementById('userEmail');
  
  if(!profileDropdown || !profileAvatar || !profileName) return;
  
  if(isLoggedIn && userEmail){
    // Logged in state
    profileDropdown.classList.add('logged-in');
    profileAvatar.textContent = userEmail.charAt(0).toUpperCase();
    profileName.textContent = userEmail.split('@')[0];
    if(userEmailDisplay) userEmailDisplay.textContent = userEmail;
  } else {
    // Guest state
    profileDropdown.classList.remove('logged-in');
    profileAvatar.textContent = 'G';
    profileName.textContent = 'Guest';
  }
  
  // Initialize mail badge
  updateMailBadge();
}

function toggleProfileDropdown(){
  const dropdown = document.getElementById('profileDropdown');
  if(dropdown) dropdown.classList.toggle('open');
}

function closeProfileDropdown(){
  const dropdown = document.getElementById('profileDropdown');
  if(dropdown) dropdown.classList.remove('open');
}

document.getElementById('profileBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleProfileDropdown();
});

document.getElementById('switchPersonaBtn')?.addEventListener('click', async () => {
  closeProfileDropdown();
  // Switch between jobseeker and recruiter
  state.persona = state.persona === 'jobseeker' ? 'recruiter' : 'jobseeker';
  state.tab = NAV[state.persona].tabs[0].id;
  renderSubnav();
  await renderScreen();
  showToast(`Switched to ${state.persona}`);
});

document.getElementById('logoutBtn')?.addEventListener('click', async () => {
  closeProfileDropdown();
  
  const client = getSupabase();
  if (client && isSupabaseConfigured()) {
    try {
      await client.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }
  
  isLoggedIn = false;
  userEmail = '';
  // Clear profile data
  localStorage.removeItem('hirez-onboarding-complete');
  localStorage.removeItem('hirez-recruiter-onboarding-complete');
  // Return to auth gate
  document.getElementById('appShell')?.classList.add('hidden');
  document.getElementById('authGate')?.classList.remove('hidden');
  authPersonaSelected = null;
  localStorage.removeItem('hirez-auth-persona');
  state.persona = 'jobseeker';
  state.tab = 'overview';
  updateProfileDisplay();
  showToast('Signed out successfully');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  closeProfileDropdown();
});

/* ================= MAIL NOTIFICATIONS ================= */
function updateMailBadge(){
  const badge = document.getElementById('mailBadge');
  if(!badge) return;
  
  const notifications = window.MAIL_NOTIFICATIONS || [];
  const unreadCount = notifications.filter(n => !n.read).length;
  if(unreadCount > 0){
    badge.textContent = unreadCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function escapeHtml(value){
  return String(value || '').replace(/[&<>"']/g, character => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[character]);
}

function notificationTitle(notification){
  return notification.title || ({
    shortlist:'Application Shortlisted',
    interview:'Interview Scheduled',
    offer:'Job Offer',
    application:'Application Update'
  })[notification.type] || 'Notification';
}

function notificationDetails(notification){
  return notification.message || [notification.job, notification.company].filter(Boolean).join(' at ') || 'No details provided';
}

function notificationIcon(type){
  return icon(type === 'shortlist' ? 'check' : type === 'interview' ? 'calendar' : type === 'application' ? 'send' : 'award');
}

function renderMailItems(notifications){
  return notifications.map(notification => `
    <div class="mail-item ${notification.read ? 'read' : 'unread'}" data-id="${escapeHtml(notification.id)}">
      <div class="mail-icon">${notificationIcon(notification.type)}</div>
      <div class="mail-content">
        <div class="mail-title">${escapeHtml(notificationTitle(notification))}</div>
        <div class="mail-details">${escapeHtml(notificationDetails(notification))}</div>
        <div class="mail-time">${escapeHtml(notification.time)}</div>
      </div>
      ${!notification.read ? '<div class="mail-indicator"></div>' : ''}
    </div>
  `).join('');
}

async function markNotificationAsRead(notificationId){
  const notification = (window.MAIL_NOTIFICATIONS || []).find(item => String(item.id) === String(notificationId));
  if(!notification || notification.read) return true;

  notification.read = true;
  updateMailBadge();
  if(!isLoggedIn) return true;

  try{
    const {client, user} = await getAuthenticatedProfileUser();
    const {error} = await client.from('notifications')
      .update({read:true})
      .eq('id', notification.id)
      .eq('user_id', user.id);
    if(error) throw error;
    return true;
  }catch(error){
    notification.read = false;
    updateMailBadge();
    console.error('Could not mark notification as read in Supabase:', error);
    showToast('Could not update this message. Please try again.');
    return false;
  }
}

function openMailModal(){
  const notifications = window.MAIL_NOTIFICATIONS || [];
  const mailContent = renderMailItems(notifications);
  
  openModal(`
    <div class="modal-head">
      <h3>Notifications</h3>
      <button class="btn-icon" onclick="closeModal()">${icon('x')}</button>
    </div>
    <div class="mail-list">
      ${mailContent || '<p class="muted">No notifications yet.</p>'}
    </div>
  `);
  
  // Mark as read when clicked
  document.querySelectorAll('.mail-item').forEach(item => {
    item.addEventListener('click', async () => {
      if(await markNotificationAsRead(item.dataset.id)){
        item.classList.remove('unread');
        item.classList.add('read');
        item.querySelector('.mail-indicator')?.remove();
      }
    });
  });
}

document.getElementById('mailBtn')?.addEventListener('click', openMailModal);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  
  // Initialize Lucide icons first
  if(window.lucide) {
    lucide.createIcons();
    console.log('Lucide icons created');
  } else {
    console.error('Lucide not loaded');
  }
  
  // Small delay to ensure all elements are ready
  setTimeout(() => {
    initAuthPersonaPicker();
    updateProfileDisplay();
  }, 100);

  // Initialize Supabase auth state listener
  initSupabaseAuthListener();
});

// Supabase authentication state listener
function initSupabaseAuthListener() {
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) return;
  
  client.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session) {
      const shouldEnterAfterSignIn = localStorage.getItem(AUTH_REDIRECT_PENDING_KEY) === 'true';
      localStorage.removeItem(AUTH_REDIRECT_PENDING_KEY);
      // User just signed in
      hasActiveSession = true;
      updateGoogleLoginButton();
      isLoggedIn = true;
      userEmail = session.user.email;
      onboardingData.email = userEmail;
      
      // Check if user has a profile
      const { data: profile, error } = await client
        .from('user_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();
      
      if (error || !profile) {
        // New user - need to complete onboarding
        localStorage.removeItem('hirez-onboarding-complete');
        localStorage.removeItem('hirez-recruiter-onboarding-complete');
        showToast('Welcome! Please complete your profile setup');
        // The existing onboarding flow will handle creating the profile
      } else {
        // Existing user - load their persona and profile data
        state.persona = profile.persona || 'jobseeker';
        state.tab = NAV[state.persona].tabs[0].id;
        
        // Mark onboarding as complete for this persona
        const storageKey = state.persona === 'recruiter' 
          ? 'hirez-recruiter-onboarding-complete' 
          : 'hirez-onboarding-complete';
        localStorage.setItem(storageKey, 'true');
        
        // Load profile data from Supabase
        if (state.persona === 'recruiter') {
          const loaded = await loadRecruiterProfileFromSupabase();
          if (!loaded) {
            console.log('Recruiter profile is unavailable from Supabase');
          }
        } else {
          const loaded = await loadJobseekerProfileFromSupabase();
          if (!loaded) {
            console.log('Jobseeker profile is unavailable from Supabase');
          }
        }
        
        showToast(`Welcome back, ${profile.full_name || session.user.email.split('@')[0]}!`);
      }
      
      await loadNotificationsFromSupabase();
      updateProfileDisplay();
      
      // Continue automatically only after the user initiated Google sign-in.
      if (shouldEnterAfterSignIn && !document.getElementById('authGate').classList.contains('hidden')) {
        enterApp();
      }
      
    } else if (event === 'SIGNED_OUT') {
      // User signed out
      localStorage.removeItem(AUTH_REDIRECT_PENDING_KEY);
      hasActiveSession = false;
      updateGoogleLoginButton();
      isLoggedIn = false;
      userEmail = '';
      updateProfileDisplay();
      
      // Return to auth gate
      document.getElementById('appShell')?.classList.add('hidden');
      document.getElementById('authGate')?.classList.remove('hidden');
      authPersonaSelected = null;
      localStorage.removeItem('hirez-auth-persona');
      state.persona = 'jobseeker';
      state.tab = 'overview';
    }
  });
  
  // Check for existing session on page load
  client.auth.getSession().then(async ({ data: { session } }) => {
    if (session) {
      hasActiveSession = true;
      updateGoogleLoginButton();
      isLoggedIn = true;
      userEmail = session.user.email;
      
      // Load user profile to determine persona
      const { data: profile } = await client
        .from('user_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();
      
      if (profile) {
        state.persona = profile.persona || 'jobseeker';
        state.tab = NAV[state.persona].tabs[0].id;
        
        // Mark onboarding as complete for this persona
        const storageKey = state.persona === 'recruiter' 
          ? 'hirez-recruiter-onboarding-complete' 
          : 'hirez-onboarding-complete';
        localStorage.setItem(storageKey, 'true');
        
        // Load profile data from Supabase
        if (state.persona === 'recruiter') {
          const loaded = await loadRecruiterProfileFromSupabase();
          if (!loaded) {
            console.log('Recruiter profile is unavailable from Supabase');
          }
        } else {
          const loaded = await loadJobseekerProfileFromSupabase();
          if (!loaded) {
            console.log('Jobseeker profile is unavailable from Supabase');
          }
        }
        
        // Load saved jobs for jobseekers
        if (state.persona === 'jobseeker') {
          await loadSavedJobsFromSupabase();
        }
      } else {
        localStorage.removeItem('hirez-onboarding-complete');
        localStorage.removeItem('hirez-recruiter-onboarding-complete');
      }
      
      await loadNotificationsFromSupabase();
      updateProfileDisplay();
    }
  });
}

const ACTIVITY=[
  {icon:'file',text:'Diya Kapoor applied to Frontend Developer',time:'2h ago'},
  {icon:'check',text:'You shortlisted Kabir Singh for Data Analyst',time:'5h ago'},
  {icon:'calendar',text:'Interview scheduled with Meera Nair',time:'1d ago'},
  {icon:'briefcase',text:'Backend Engineer posting went live',time:'2d ago'},
];

// Profile data (skills and education) — editable by the user
let profileSkills = [];
let profileEducation = [];
let profileExperience = [];
let profileSummary = '';
let profilePortfolio = [];
// profile basic info (can be synced from resume)
let profileName = '';
let profileRole = '';
let profileContact = {email:'',phone:'',loc:''};
try{
  ['hirez-profile-name','hirez-profile-role','hirez-profile-contact','hirez-profile-skills',
    'hirez-profile-experience','hirez-profile-education','hirez-profile-portfolio','hirez-profile-summary',
    'hirez-recruiter-profile'].forEach(key => localStorage.removeItem(key));
}catch(error){}

function defaultRecruiterProfile(){
  return {
    name:'',email:'',phone:'',loc:'',
    title:'',department:'',linkedin:'',
    company:'',industry:'',companySize:'',website:'',founded:'',
    hq:'',description:'',hiringLocations:'',
    hiringRoles:[],teamSize:'',openRoles:'',specialties:[]
  };
}
let recruiterProfile = defaultRecruiterProfile();

async function getAuthenticatedProfileUser(){
  const client = getSupabase();
  if(!client || !isSupabaseConfigured()) throw new Error('Supabase is not configured');
  const {data:{user}, error} = await client.auth.getUser();
  if(error) throw error;
  if(!user) throw new Error('Please sign in before saving your profile');
  return {client, user};
}

async function replaceProfileRows(client, table, userId, rows){
  const {error: deleteError} = await client.from(table).delete().eq('user_id', userId);
  if(deleteError) throw deleteError;
  if(rows.length){
    const {error: insertError} = await client.from(table).insert(rows);
    if(insertError) throw insertError;
  }
}

function dedupeEducationEntries(entries){
  const seen = new Set();
  return entries.filter(entry => {
    const key = [entry.deg, entry.org, entry.when]
      .map(value => String(value || '').trim().toLowerCase())
      .join('\u0000');
    if(seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function persistJobseekerProfileToSupabase(){
  const {client, user} = await getAuthenticatedProfileUser();
  profileEducation = dedupeEducationEntries(profileEducation);
  const updatedAt = new Date().toISOString();
  const {error: userError} = await client.from('user_profiles').upsert({
    user_id:user.id, email:profileContact.email || user.email || '', full_name:profileName,
    phone:profileContact.phone, location:profileContact.loc, persona:'jobseeker', updated_at:updatedAt
  }, {onConflict:'user_id'});
  if(userError) throw userError;

  const {error: jobseekerError} = await client.from('jobseeker_profiles').upsert({
    user_id:user.id, target_role:profileRole, summary:profileSummary, skills:profileSkills, updated_at:updatedAt
  }, {onConflict:'user_id'});
  if(jobseekerError) throw jobseekerError;

  await replaceProfileRows(client, 'education', user.id, profileEducation
    .filter(item => item.deg && item.org && item.when)
    .map(item => ({user_id:user.id, degree:item.deg, institution:item.org, dates:item.when, description:item.desc || ''})));
  await replaceProfileRows(client, 'experience', user.id, profileExperience
    .filter(item => item.role && item.org && item.when)
    .map(item => ({user_id:user.id, role:item.role, company:item.org, dates:item.when, description:item.desc || ''})));
  await replaceProfileRows(client, 'portfolio', user.id, profilePortfolio
    .filter(item => item.title)
    .map(item => ({
      user_id:user.id, title:item.title, type:item.type || '', link:item.link || '',
      tags:Array.isArray(item.tags) ? item.tags : (item.tags || '').split(',').map(tag => tag.trim()).filter(Boolean),
      description:item.desc || ''
    })));
}

async function persistRecruiterProfileToSupabase(){
  const {client, user} = await getAuthenticatedProfileUser();
  const updatedAt = new Date().toISOString();
  const {error: userError} = await client.from('user_profiles').upsert({
    user_id:user.id, email:recruiterProfile.email || user.email || '', full_name:recruiterProfile.name,
    phone:recruiterProfile.phone, location:recruiterProfile.loc, persona:'recruiter', updated_at:updatedAt
  }, {onConflict:'user_id'});
  if(userError) throw userError;

  const {error: recruiterError} = await client.from('recruiter_profiles').upsert({
    user_id:user.id, title:recruiterProfile.title, department:recruiterProfile.department,
    linkedin:recruiterProfile.linkedin, company:recruiterProfile.company, industry:recruiterProfile.industry,
    company_size:recruiterProfile.companySize, website:recruiterProfile.website, founded:recruiterProfile.founded,
    hq:recruiterProfile.hq, description:recruiterProfile.description,
    hiring_locations:recruiterProfile.hiringLocations, hiring_roles:recruiterProfile.hiringRoles,
    team_size:recruiterProfile.teamSize, open_roles:parseInt(recruiterProfile.openRoles) || 0,
    specialties:recruiterProfile.specialties, updated_at:updatedAt
  }, {onConflict:'user_id'});
  if(recruiterError) throw recruiterError;
}

async function saveJobseekerProfileChanges(){
  if(!isLoggedIn) return true;
  try{
    await persistJobseekerProfileToSupabase();
    return true;
  }catch(error){
    console.error('Error saving profile to Supabase:', error);
    showToast('Could not save your profile. Please try again.');
    return false;
  }
}

// Load jobseeker profile from Supabase
async function loadJobseekerProfileFromSupabase() {
  profileName = '';
  profileRole = '';
  profileContact = {email:'',phone:'',loc:''};
  profileSkills = [];
  profileEducation = [];
  profileExperience = [];
  profileSummary = '';
  profilePortfolio = [];
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Supabase is unavailable; jobseeker profile remains empty');
    return false;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) return false;
    
    // Get user profile
    const { data: userProfile, error: userError } = await client
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();
    
    if (userError) {
      if (userError.code === 'PGRST116') {
        console.log('No user profile found in Supabase');
        return false;
      }
      throw userError;
    }
    
    if (userProfile) {
      profileName = userProfile.full_name || '';
      profileContact.email = userProfile.email || '';
      profileContact.phone = userProfile.phone || '';
      profileContact.loc = userProfile.location || '';
    }
    
    // Get jobseeker profile
    const { data: jobseekerProfile, error: jobseekerError } = await client
      .from('jobseeker_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();
    
    if (jobseekerError) {
      if (jobseekerError.code === 'PGRST116') {
        console.log('No jobseeker profile found in Supabase');
        return false;
      }
      throw jobseekerError;
    }
    
    if (jobseekerProfile) {
      profileRole = jobseekerProfile.target_role || '';
      profileSummary = jobseekerProfile.summary || '';
      profileSkills = Array.isArray(jobseekerProfile.skills) ? jobseekerProfile.skills : (jobseekerProfile.skills ? jobseekerProfile.skills.split(',').map(s => s.trim()) : []);
    }
    
    // Get education
    const { data: education, error: eduError } = await client
      .from('education')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (eduError) {
      if (eduError.code === 'PGRST116') {
        // No education records found, set to empty array
        profileEducation = [];
      } else {
        throw eduError;
      }
    } else if (education && education.length > 0) {
      const loadedEducation = education.map(edu => ({
        deg: edu.degree,
        org: edu.institution,
        when: edu.dates,
        desc: edu.description || ''
      }));
      profileEducation = dedupeEducationEntries(loadedEducation);
      if(profileEducation.length !== loadedEducation.length){
        try{
          await replaceProfileRows(client, 'education', user.id, profileEducation.map(edu => ({
            user_id:user.id,
            degree:edu.deg,
            institution:edu.org,
            dates:edu.when,
            description:edu.desc
          })));
        }catch(cleanupError){
          console.error('Could not clean duplicate education rows in Supabase:', cleanupError);
        }
      }
    } else {
      profileEducation = [];
    }
    
    // Get experience
    const { data: experience, error: expError } = await client
      .from('experience')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (expError) {
      if (expError.code === 'PGRST116') {
        // No experience records found, set to empty array
        profileExperience = [];
      } else {
        throw expError;
      }
    } else if (experience && experience.length > 0) {
      profileExperience = experience.map(exp => ({
        role: exp.role,
        org: exp.company,
        when: exp.dates,
        desc: exp.description || ''
      }));
    } else {
      profileExperience = [];
    }
    
    // Get portfolio
    const { data: portfolio, error: portError } = await client
      .from('portfolio')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    
    if (portError) {
      if (portError.code === 'PGRST116') {
        // No portfolio records found, set to empty array
        profilePortfolio = [];
      } else {
        throw portError;
      }
    } else if (portfolio && portfolio.length > 0) {
      profilePortfolio = portfolio.map(proj => ({
        title: proj.title,
        type: proj.type || '',
        link: proj.link || '',
        tags: Array.isArray(proj.tags) ? proj.tags : (proj.tags ? proj.tags.split(',').map(t => t.trim()) : []),
        desc: proj.description || ''
      }));
    } else {
      profilePortfolio = [];
    }
    
    console.log('Jobseeker profile loaded from Supabase');
    return true;
  } catch (error) {
    console.error('Error loading jobseeker profile from Supabase:', error);
    return false;
  }
}

// Load recruiter profile from Supabase
async function loadRecruiterProfileFromSupabase() {
  recruiterProfile = defaultRecruiterProfile();
  const client = getSupabase();
  if (!client || !isSupabaseConfigured()) {
    console.log('Supabase is unavailable; recruiter profile remains empty');
    return false;
  }
  
  try {
    const { data: { user } } = await client.auth.getUser();
    if (!user) return false;
    
    // Get user profile
    const { data: userProfile, error: userError } = await client
      .from('user_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();
    
    if (userError) {
      if (userError.code === 'PGRST116') {
        console.log('No user profile found in Supabase');
        return false;
      }
      throw userError;
    }
    
    if (userProfile) {
      recruiterProfile.name = userProfile.full_name || '';
      recruiterProfile.email = userProfile.email || '';
      recruiterProfile.phone = userProfile.phone || '';
      recruiterProfile.loc = userProfile.location || '';
    }
    
    // Get recruiter profile
    const { data: recProfile, error: recError } = await client
      .from('recruiter_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();
    
    if (recError) {
      if (recError.code === 'PGRST116') {
        console.log('No recruiter profile found in Supabase');
        return false;
      }
      throw recError;
    }
    
    if (recProfile) {
      recruiterProfile.title = recProfile.title || '';
      recruiterProfile.department = recProfile.department || '';
      recruiterProfile.linkedin = recProfile.linkedin || '';
      recruiterProfile.company = recProfile.company || '';
      recruiterProfile.industry = recProfile.industry || '';
      recruiterProfile.companySize = recProfile.company_size || '';
      recruiterProfile.website = recProfile.website || '';
      recruiterProfile.founded = recProfile.founded || '';
      recruiterProfile.hq = recProfile.hq || '';
      recruiterProfile.description = recProfile.description || '';
      recruiterProfile.hiringLocations = recProfile.hiring_locations || '';
      recruiterProfile.hiringRoles = Array.isArray(recProfile.hiring_roles) ? recProfile.hiring_roles : (recProfile.hiring_roles ? recProfile.hiring_roles.split(',').map(s => s.trim()) : []);
      recruiterProfile.teamSize = recProfile.team_size || '';
      recruiterProfile.openRoles = recProfile.open_roles || '';
      recruiterProfile.specialties = Array.isArray(recProfile.specialties) ? recProfile.specialties : (recProfile.specialties ? recProfile.specialties.split(',').map(s => s.trim()) : []);
    }
    
    console.log('Recruiter profile loaded from Supabase');
    return true;
  } catch (error) {
    console.error('Error loading recruiter profile from Supabase:', error);
    return false;
  }
}

/* ================= RENDER: MAIN ROUTER ================= */
async function renderScreen(){
  const main=document.getElementById('mainContent');
  const key=state.persona+':'+state.tab;
  const renderers={
    'jobseeker:overview':screenOverview,
    'jobseeker:profile':screenProfile,
    'jobseeker:resume':screenResume,
    'jobseeker:jobs':screenJobs,
    'jobseeker:mail':screenMail,
    'jobseeker:interview':screenInterview,
    'jobseeker:learning':screenLearning,
    'jobseeker:assistant':screenAIChat,
    'recruiter:dashboard':screenRecruiterDashboard,
    'recruiter:profile':screenRecruiterProfile,
    'recruiter:post':screenRecruiterPost,
    'recruiter:applicants':screenRecruiterApplicants,
    'recruiter:schedule':screenRecruiterSchedule,
  };
  
  // Handle async renderers
  let content;
  if (key === 'recruiter:dashboard') {
    content = await renderers[key]();
  } else {
    content = renderers[key]();
  }
  
  main.innerHTML='<div class="screen active">'+content+'</div>';
  afterRender(key);
}

/* ================= ONBOARDING WIZARD ================= */
function screenOnboarding(){
  const steps = [
    {title: 'Personal Info', icon: 'user'},
    {title: 'Target Role', icon: 'briefcase'},
    {title: 'Skills', icon: 'star'},
    {title: 'Experience', icon: 'building'},
    {title: 'Education', icon: 'book'},
    {title: 'Portfolio', icon: 'link'},
    {title: 'Summary', icon: 'file'},
    {title: 'Review', icon: 'check'}
  ];
  
  const progressDots = steps.map((s, i) => `
    <div class="onboarding-dot ${i < onboardingStep ? 'completed' : ''} ${i === onboardingStep - 1 ? 'active' : ''}">
      ${i < onboardingStep ? icon('check') : (i + 1)}
    </div>
  `).join('');
  
  return `
  <div class="onboarding-container">
    <div class="onboarding-progress">
      <div class="onboarding-dots">${progressDots}</div>
      <div class="onboarding-step-info">Step ${onboardingStep} of ${steps.length}</div>
    </div>
    <div class="onboarding-card">
      ${renderOnboardingStep()}
    </div>
  </div>
  `;
}

function renderOnboardingStep(){
  if(onboardingMode === 'recruiter'){
    switch(onboardingStep){
      case 1: return renderRecStepPersonal();
      case 2: return renderRecStepRole();
      case 3: return renderRecStepCompany();
      case 4: return renderRecStepAbout();
      case 5: return renderRecStepHiring();
      case 6: return renderRecStepReview();
      default: return renderRecStepPersonal();
    }
  }
  switch(onboardingStep){
    case 1: return renderStepPersonal();
    case 2: return renderStepRole();
    case 3: return renderStepSkills();
    case 4: return renderStepExperience();
    case 5: return renderStepEducation();
    case 6: return renderStepPortfolio();
    case 7: return renderStepSummary();
    case 8: return renderStepReview();
    default: return renderStepPersonal();
  }
}

function renderStepPersonal(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('user')}</div>
      <h2>Let's start with your basics</h2>
      <p>Tell us your name and how to reach you</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Full Name</label>
        <input type="text" id="ob-name" value="${onboardingData.name || ''}" required>
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" id="ob-email" value="${onboardingData.email || ''}" required>
      </div>
      <div class="field">
        <label>Phone</label>
        <input type="tel" id="ob-phone" value="${onboardingData.phone || ''}">
      </div>
      <div class="field">
        <label>Location</label>
        <input type="text" id="ob-loc" value="${onboardingData.loc || ''}" required>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" disabled>Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepRole(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('briefcase')}</div>
      <h2>What's your target role?</h2>
      <p>This helps us tailor opportunities for you</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Current/Target Role</label>
        <input type="text" id="ob-role" value="${onboardingData.role || ''}" required>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepSkills(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('star')}</div>
      <h2>What are your skills?</h2>
      <p>Add your technical and soft skills (comma separated)</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Skills</label>
        <textarea id="ob-skills" rows="4">${onboardingData.skills || ''}</textarea>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepExperience(){
  const expList = onboardingData.experience ? onboardingData.experience.map((exp, i) => `
    <div class="ob-exp-item">
      <div class="ob-exp-header">
        <strong>${exp.role}</strong>
        <button type="button" class="btn-icon" onclick="removeOnboardingExp(${i})">${icon('trash')}</button>
      </div>
      <div class="ob-exp-details">${exp.org} · ${exp.when}</div>
    </div>
  `).join('') : '<p class="ob-placeholder">No experience added yet</p>';
  
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('building')}</div>
      <h2>Add your experience</h2>
      <p>Start with your most recent role</p>
    </div>
    <div class="ob-list-container">${expList}</div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Role</label>
        <input type="text" id="ob-exp-role">
      </div>
      <div class="field">
        <label>Company</label>
        <input type="text" id="ob-exp-org">
      </div>
      <div class="field">
        <label>Dates</label>
        <input type="text" id="ob-exp-when">
      </div>
      <div class="field">
        <label>Description</label>
        <textarea id="ob-exp-desc" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-ghost btn-sm" onclick="addOnboardingExp()">+ Add this experience</button>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepEducation(){
  const eduList = onboardingData.education ? onboardingData.education.map((edu, i) => `
    <div class="ob-exp-item">
      <div class="ob-exp-header">
        <strong>${edu.deg}</strong>
        <button type="button" class="btn-icon" onclick="removeOnboardingEdu(${i})">${icon('trash')}</button>
      </div>
      <div class="ob-exp-details">${edu.org} · ${edu.when}</div>
    </div>
  `).join('') : '<p class="ob-placeholder">No education added yet</p>';
  
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('book')}</div>
      <h2>Add your education</h2>
      <p>Your highest degree or certification</p>
    </div>
    <div class="ob-list-container">${eduList}</div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Degree</label>
        <input type="text" id="ob-edu-deg">
      </div>
      <div class="field">
        <label>Institution</label>
        <input type="text" id="ob-edu-org">
      </div>
      <div class="field">
        <label>Dates</label>
        <input type="text" id="ob-edu-when">
      </div>
      <button type="button" class="btn btn-ghost btn-sm" onclick="addOnboardingEdu()">+ Add this education</button>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepPortfolio(){
  const portList = onboardingData.portfolio ? onboardingData.portfolio.map((p, i) => `
    <div class="ob-exp-item">
      <div class="ob-exp-header">
        <strong>${p.title}</strong>
        <button type="button" class="btn-icon" onclick="removeOnboardingPort(${i})">${icon('trash')}</button>
      </div>
      <div class="ob-exp-details">${p.type || 'Project'}</div>
    </div>
  `).join('') : '<p class="ob-placeholder">No projects added yet (optional)</p>';
  
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('link')}</div>
      <h2>Showcase your work</h2>
      <p>Add links to your projects (optional)</p>
    </div>
    <div class="ob-list-container">${portList}</div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Project Name</label>
        <input type="text" id="ob-port-title">
      </div>
      <div class="field">
        <label>Type</label>
        <input type="text" id="ob-port-type">
      </div>
      <div class="field">
        <label>Link</label>
        <input type="text" id="ob-port-link">
      </div>
      <div class="field">
        <label>Description</label>
        <textarea id="ob-port-desc" rows="2"></textarea>
      </div>
      <button type="button" class="btn btn-ghost btn-sm" onclick="addOnboardingPort()">+ Add project</button>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepSummary(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('file')}</div>
      <h2>Your professional summary</h2>
      <p>A brief intro about yourself</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field">
        <label>Summary</label>
        <textarea id="ob-summary" rows="5">${onboardingData.summary || ''}</textarea>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderStepReview(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('check')}</div>
      <h2>Review your profile</h2>
      <p>Make sure everything looks good</p>
    </div>
    <div class="ob-review">
      <div class="ob-review-section">
        <h4>${icon('user')} Personal Info</h4>
        <p><strong>${onboardingData.name || 'Not set'}</strong></p>
        <p>${onboardingData.email || 'Not set'} · ${onboardingData.phone || 'Not set'}</p>
        <p>${onboardingData.loc || 'Not set'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('briefcase')} Role</h4>
        <p>${onboardingData.role || 'Not set'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('star')} Skills</h4>
        <p>${onboardingData.skills || 'Not set'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('building')} Experience</h4>
        ${onboardingData.experience && onboardingData.experience.length ? onboardingData.experience.map(e => `<p><strong>${e.role}</strong> at ${e.org}</p>`).join('') : '<p>Not set</p>'}
      </div>
      <div class="ob-review-section">
        <h4>${icon('book')} Education</h4>
        ${onboardingData.education && onboardingData.education.length ? onboardingData.education.map(e => `<p><strong>${e.deg}</strong> from ${e.org}</p>`).join('') : '<p>Not set</p>'}
      </div>
      <div class="ob-review-section">
        <h4>${icon('link')} Portfolio</h4>
        ${onboardingData.portfolio && onboardingData.portfolio.length ? onboardingData.portfolio.map(p => `<p><strong>${p.title}</strong>${p.type ? ` · ${p.type}` : ''}</p>`).join('') : '<p>Not set</p>'}
      </div>
      <div class="ob-review-section">
        <h4>${icon('file')} Summary</h4>
        <p>${onboardingData.summary || 'Not set'}</p>
      </div>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Complete Setup ${icon('check')}</button>
      </div>
    </form>
  `;
}

function renderRecStepPersonal(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('user')}</div>
      <h2>Your contact details</h2>
      <p>How candidates and your team can reach you</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field"><label>Full name</label><input type="text" id="ob-name" value="${onboardingData.name || ''}" required></div>
      <div class="field"><label>Work email</label><input type="email" id="ob-email" value="${onboardingData.email || ''}" required></div>
      <div class="field"><label>Phone</label><input type="tel" id="ob-phone" value="${onboardingData.phone || ''}"></div>
      <div class="field"><label>Your location</label><input type="text" id="ob-loc" value="${onboardingData.loc || ''}" required></div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" disabled>Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderRecStepRole(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('badge')}</div>
      <h2>Your role</h2>
      <p>Tell us what you do on the hiring team</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field"><label>Job title</label><input type="text" id="ob-title" value="${onboardingData.title || ''}" placeholder="e.g. Talent Acquisition Manager" required></div>
      <div class="field"><label>Department</label><input type="text" id="ob-department" value="${onboardingData.department || ''}" placeholder="e.g. People & Culture"></div>
      <div class="field"><label>LinkedIn profile</label><input type="url" id="ob-linkedin" value="${onboardingData.linkedin || ''}" placeholder="https://linkedin.com/in/..."></div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderRecStepCompany(){
  const sizes = ['1–10 employees','11–50 employees','51–200 employees','201–500 employees','500+ employees'];
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('building')}</div>
      <h2>Company details</h2>
      <p>The organisation you're hiring for</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field"><label>Company name</label><input type="text" id="ob-company" value="${onboardingData.company || ''}" required></div>
      <div class="field-row">
        <div class="field"><label>Industry</label><input type="text" id="ob-industry" value="${onboardingData.industry || ''}" placeholder="e.g. Fintech" required></div>
        <div class="field"><label>Company size</label>
          <select id="ob-company-size" required>
            <option value="">Select size</option>
            ${sizes.map(s=>`<option ${onboardingData.companySize===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field"><label>Website</label><input type="url" id="ob-website" value="${onboardingData.website || ''}" placeholder="https://company.com"></div>
        <div class="field"><label>Founded</label><input type="text" id="ob-founded" value="${onboardingData.founded || ''}" placeholder="e.g. 2018"></div>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderRecStepAbout(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('file')}</div>
      <h2>About the company</h2>
      <p>Help candidates understand who you are</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field"><label>Company description</label><textarea id="ob-description" rows="4" required>${onboardingData.description || ''}</textarea></div>
      <div class="field-row">
        <div class="field"><label>Headquarters</label><input type="text" id="ob-hq" value="${onboardingData.hq || ''}" placeholder="e.g. Bengaluru, India" required></div>
        <div class="field"><label>Hiring locations</label><input type="text" id="ob-hiring-locations" value="${onboardingData.hiringLocations || ''}" placeholder="e.g. Bengaluru, Remote" required></div>
      </div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderRecStepHiring(){
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('users')}</div>
      <h2>Hiring setup</h2>
      <p>What you're hiring for and how your team works</p>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="field"><label>Roles you typically hire for</label><input type="text" id="ob-hiring-roles" value="${onboardingData.hiringRoles || ''}" placeholder="e.g. Engineering, Product, Design" required></div>
      <div class="field-row">
        <div class="field"><label>Recruiting team size</label><input type="text" id="ob-team-size" value="${onboardingData.teamSize || ''}" placeholder="e.g. 4 recruiters" required></div>
        <div class="field"><label>Open roles right now</label><input type="number" id="ob-open-roles" min="0" value="${onboardingData.openRoles || ''}" placeholder="e.g. 6" required></div>
      </div>
      <div class="field"><label>Hiring specialties</label><input type="text" id="ob-specialties" value="${onboardingData.specialties || ''}" placeholder="e.g. Campus hiring, Tech roles, Leadership"></div>
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Continue ${icon('arrow')}</button>
      </div>
    </form>
  `;
}

function renderRecStepReview(){
  const roles = Array.isArray(onboardingData.hiringRoles) ? onboardingData.hiringRoles.join(', ') : (onboardingData.hiringRoles || 'Not set');
  const specs = Array.isArray(onboardingData.specialties) ? onboardingData.specialties.join(', ') : (onboardingData.specialties || 'Not set');
  return `
    <div class="onboarding-header">
      <div class="onboarding-icon">${icon('check')}</div>
      <h2>Review your recruiter profile</h2>
      <p>Make sure everything looks good before you start hiring</p>
    </div>
    <div class="ob-review">
      <div class="ob-review-section">
        <h4>${icon('user')} Contact</h4>
        <p><strong>${onboardingData.name || 'Not set'}</strong></p>
        <p>${onboardingData.email || 'Not set'} · ${onboardingData.phone || 'Not set'}</p>
        <p>${onboardingData.loc || 'Not set'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('badge')} Your role</h4>
        <p><strong>${onboardingData.title || 'Not set'}</strong>${onboardingData.department ? ` · ${onboardingData.department}` : ''}</p>
        <p>${onboardingData.linkedin || 'No LinkedIn added'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('building')} Company</h4>
        <p><strong>${onboardingData.company || 'Not set'}</strong> · ${onboardingData.industry || 'Not set'}</p>
        <p>${onboardingData.companySize || 'Not set'} · Founded ${onboardingData.founded || '—'}</p>
        <p>${onboardingData.website || 'No website added'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('file')} About</h4>
        <p>${onboardingData.description || 'Not set'}</p>
        <p>HQ: ${onboardingData.hq || 'Not set'} · Hiring in: ${onboardingData.hiringLocations || 'Not set'}</p>
      </div>
      <div class="ob-review-section">
        <h4>${icon('users')} Hiring</h4>
        <p>Roles: ${roles}</p>
        <p>Team: ${onboardingData.teamSize || 'Not set'} · Open roles: ${onboardingData.openRoles || '0'}</p>
        <p>Specialties: ${specs}</p>
      </div>
    </div>
    <form id="onboardingForm" class="onboarding-form">
      <div class="onboarding-actions">
        <button type="button" class="btn btn-ghost" onclick="onboardingStep--;openOnboardingModal();">Back</button>
        <button type="submit" class="btn btn-primary">Complete setup ${icon('check')}</button>
      </div>
    </form>
  `;
}

async function handleRecruiterOnboardingSubmit(){
  if(onboardingStep === 1){
    onboardingData.name = document.getElementById('ob-name')?.value.trim();
    onboardingData.email = document.getElementById('ob-email')?.value.trim();
    onboardingData.phone = document.getElementById('ob-phone')?.value.trim();
    onboardingData.loc = document.getElementById('ob-loc')?.value.trim();
  } else if(onboardingStep === 2){
    onboardingData.title = document.getElementById('ob-title')?.value.trim();
    onboardingData.department = document.getElementById('ob-department')?.value.trim();
    onboardingData.linkedin = document.getElementById('ob-linkedin')?.value.trim();
  } else if(onboardingStep === 3){
    onboardingData.company = document.getElementById('ob-company')?.value.trim();
    onboardingData.industry = document.getElementById('ob-industry')?.value.trim();
    onboardingData.companySize = document.getElementById('ob-company-size')?.value;
    onboardingData.website = document.getElementById('ob-website')?.value.trim();
    onboardingData.founded = document.getElementById('ob-founded')?.value.trim();
  } else if(onboardingStep === 4){
    onboardingData.description = document.getElementById('ob-description')?.value.trim();
    onboardingData.hq = document.getElementById('ob-hq')?.value.trim();
    onboardingData.hiringLocations = document.getElementById('ob-hiring-locations')?.value.trim();
  } else if(onboardingStep === 5){
    onboardingData.hiringRoles = document.getElementById('ob-hiring-roles')?.value.trim();
    onboardingData.teamSize = document.getElementById('ob-team-size')?.value.trim();
    onboardingData.openRoles = document.getElementById('ob-open-roles')?.value.trim();
    onboardingData.specialties = document.getElementById('ob-specialties')?.value.trim();
  } else if(onboardingStep === 6){
    completeRecruiterOnboarding();
    return;
  }
  onboardingStep++;
  if(document.getElementById('modalOverlay')?.classList.contains('open')){
    openOnboardingModal();
  } else {
    await renderScreen();
  }
}

async function completeRecruiterOnboarding(){
  const accountSession = isLoggedIn;
  recruiterProfile = {
    name: onboardingData.name || '',
    email: onboardingData.email || '',
    phone: onboardingData.phone || '',
    loc: onboardingData.loc || '',
    title: onboardingData.title || '',
    department: onboardingData.department || '',
    linkedin: onboardingData.linkedin || '',
    company: onboardingData.company || '',
    industry: onboardingData.industry || '',
    companySize: onboardingData.companySize || '',
    website: onboardingData.website || '',
    founded: onboardingData.founded || '',
    hq: onboardingData.hq || '',
    description: onboardingData.description || '',
    hiringLocations: onboardingData.hiringLocations || '',
    hiringRoles: onboardingData.hiringRoles ? onboardingData.hiringRoles.split(',').map(s=>s.trim()).filter(Boolean) : [],
    teamSize: onboardingData.teamSize || '',
    openRoles: onboardingData.openRoles || '',
    specialties: onboardingData.specialties ? onboardingData.specialties.split(',').map(s=>s.trim()).filter(Boolean) : [],
  };
  
  // Set user as logged in
  isLoggedIn = accountSession;
  userEmail = accountSession ? onboardingData.email || '' : '';
  if(accountSession){
    try {
      await persistRecruiterProfileToSupabase();
    } catch (error) {
      console.error('Error saving recruiter profile to Supabase:', error);
      showToast('Could not save your profile. Please try again.');
      return;
    }
  }
  localStorage.setItem('hirez-recruiter-onboarding-complete', 'true');
  
  document.getElementById('subnavRow')?.classList.remove('hidden');
  closeModal();
  state.tab = 'dashboard';
  renderSubnav();
  await renderScreen();
  updateProfileDisplay();
  showToast('Recruiter profile setup complete!');
}

// Onboarding helper functions
function captureOnboardingExperience(){
  const role = document.getElementById('ob-exp-role')?.value.trim();
  const org = document.getElementById('ob-exp-org')?.value.trim();
  const when = document.getElementById('ob-exp-when')?.value.trim();
  const desc = document.getElementById('ob-exp-desc')?.value.trim();
  if(!role && !org && !when && !desc) return false;
  if(!onboardingData.experience) onboardingData.experience = [];
  onboardingData.experience.push({role, org, when, desc});
  const roleEl = document.getElementById('ob-exp-role');
  if(roleEl){
    roleEl.value = '';
    document.getElementById('ob-exp-org').value = '';
    document.getElementById('ob-exp-when').value = '';
    document.getElementById('ob-exp-desc').value = '';
  }
  return true;
}

function captureOnboardingEducation(){
  const deg = document.getElementById('ob-edu-deg')?.value.trim();
  const org = document.getElementById('ob-edu-org')?.value.trim();
  const when = document.getElementById('ob-edu-when')?.value.trim();
  if(!deg && !org && !when) return false;
  if(!onboardingData.education) onboardingData.education = [];
  onboardingData.education.push({deg, org, when});
  const degEl = document.getElementById('ob-edu-deg');
  if(degEl){
    degEl.value = '';
    document.getElementById('ob-edu-org').value = '';
    document.getElementById('ob-edu-when').value = '';
  }
  return true;
}

function captureOnboardingPortfolio(){
  const title = document.getElementById('ob-port-title')?.value.trim();
  const type = document.getElementById('ob-port-type')?.value.trim();
  const link = document.getElementById('ob-port-link')?.value.trim();
  const desc = document.getElementById('ob-port-desc')?.value.trim();
  if(!title) return false;
  if(!onboardingData.portfolio) onboardingData.portfolio = [];
  onboardingData.portfolio.push({title, type, link, desc});
  const titleEl = document.getElementById('ob-port-title');
  if(titleEl){
    titleEl.value = '';
    document.getElementById('ob-port-type').value = '';
    document.getElementById('ob-port-link').value = '';
    document.getElementById('ob-port-desc').value = '';
  }
  return true;
}

function addOnboardingExp(){
  if(captureOnboardingExperience()) openOnboardingModal();
}

function removeOnboardingExp(i){
  onboardingData.experience.splice(i, 1);
  openOnboardingModal();
}

function addOnboardingEdu(){
  if(captureOnboardingEducation()) openOnboardingModal();
}

function removeOnboardingEdu(i){
  onboardingData.education.splice(i, 1);
  openOnboardingModal();
}

function addOnboardingPort(){
  if(captureOnboardingPortfolio()) openOnboardingModal();
}

function removeOnboardingPort(i){
  onboardingData.portfolio.splice(i, 1);
  openOnboardingModal();
}

async function completeOnboarding(){
  const accountSession = isLoggedIn;
  profileName = onboardingData.name || '';
  profileRole = onboardingData.role || '';
  profileContact = {
    email: onboardingData.email || '',
    phone: onboardingData.phone || '',
    loc: onboardingData.loc || ''
  };
  profileSkills = onboardingData.skills ? onboardingData.skills.split(',').map(s => s.trim()).filter(Boolean) : [];
  profileExperience = onboardingData.experience || [];
  profileEducation = onboardingData.education || [];
  profilePortfolio = Array.isArray(onboardingData.portfolio) ? [...onboardingData.portfolio] : [];
  profileSummary = onboardingData.summary || '';
  expEntries = [...profileExperience];
  eduEntries = [...profileEducation];
  
  // Set user as logged in
  isLoggedIn = accountSession;
  userEmail = accountSession ? onboardingData.email || '' : '';

  if(accountSession){
    try {
      await persistJobseekerProfileToSupabase();
    } catch (error) {
      console.error('Error saving profile to Supabase:', error);
      showToast('Could not save your profile. Please try again.');
      return;
    }
  }
  
  // Mark onboarding as complete
  localStorage.setItem('hirez-onboarding-complete', 'true');
  
  // Show navigation again
  document.getElementById('subnavRow')?.classList.remove('hidden');
  
  // Close modal and navigate to overview
  closeModal();
  state.tab = 'overview';
  await renderScreen();
  updateProfileDisplay();
  showToast('Profile setup complete!');
}

/* ================= SCREEN: OVERVIEW ================= */
function screenOverview(){
  return `
  <section class="hero">
    <div class="hero-inner">
      <div>
      <div id="resumeSaveBar" class="resume-save-bar hidden"><span>Unsaved changes</span><button class="btn btn-sm btn-primary" id="resumeSaveNow">${icon('check')} Save</button></div>
        <span class="eyebrow">Students · Job seekers · Recruiters · Companies</span>
        <h1>Your career,<br><em>mapped out.</em></h1>
        <p class="lead">Build a profile that says who you are, turn it into a resume that gets read, find roles worth applying to, and walk into the interview ready.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" data-nav="jobseeker:jobs">${icon('search')} Explore jobs</button>
          <button class="btn btn-outline" data-nav="jobseeker:resume">${icon('file')} Build your resume</button>
        </div>
        <div class="hero-badges">
          <span class="tag tag-pink">${icon('check','icon')} No account needed to explore</span>
          <span class="tag tag-gold">${icon('star','icon')} Free for students</span>
        </div>
      </div>
      <div class="orbit">
        <div class="orbit-ring"></div><div class="orbit-ring r2"></div>
        <div class="orbit-center"><div class="num">10</div><div class="lbl">open roles<br>added today</div></div>
        <div class="orbit-node" style="top:2%;left:50%;transform:translate(-50%,0);" title="Profile">${icon('user')}<span>Profile</span></div>
        <div class="orbit-node" style="top:26%;left:92%;transform:translate(-50%,0);" title="Resume">${icon('file')}<span>Resume</span></div>
        <div class="orbit-node" style="top:74%;left:92%;transform:translate(-50%,0);" title="Jobs">${icon('search')}<span>Jobs</span></div>
        <div class="orbit-node" style="top:98%;left:50%;transform:translate(-50%,-100%);" title="Interview">${icon('chat')}<span>Interview</span></div>
        <div class="orbit-node" style="top:74%;left:8%;transform:translate(-50%,0);" title="Learning">${icon('book')}<span>Learning</span></div>
        <div class="orbit-node" style="top:26%;left:8%;transform:translate(-50%,0);" title="Hired">${icon('award')}<span>Hired</span></div>
      </div>
    </div>

    <div class="pathline">
      <svg viewBox="0 0 1120 40" preserveAspectRatio="none"><path d="M20 20 Q 200 -10 380 20 T 740 20 T 1100 20" stroke="var(--pink-soft)" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round" fill="none"/></svg>
      <div class="waypoints">
        <div class="waypoint"><button data-nav="jobseeker:profile">${icon('user')}</button><span class="wp-label">Profile</span><span class="wp-sub">01</span></div>
        <div class="waypoint"><button data-nav="jobseeker:resume">${icon('file')}</button><span class="wp-label">Resume</span><span class="wp-sub">02</span></div>
        <div class="waypoint"><button data-nav="jobseeker:jobs">${icon('search')}</button><span class="wp-label">Jobs</span><span class="wp-sub">03</span></div>
        <div class="waypoint"><button data-nav="jobseeker:mail">${icon('mail')}</button><span class="wp-label">Mail</span><span class="wp-sub">04</span></div>
        <div class="waypoint"><button data-nav="jobseeker:interview">${icon('chat')}</button><span class="wp-label">Interview</span><span class="wp-sub">05</span></div>
        <div class="waypoint"><button data-nav="jobseeker:learning">${icon('book')}</button><span class="wp-label">Learning</span><span class="wp-sub">06</span></div>
        <div class="waypoint"><button data-nav="jobseeker:overview">${icon('award')}</button><span class="wp-label">Hired</span><span class="wp-sub">07</span></div>
      </div>
    </div>

    <div class="stats-strip">
      <div><div class="n">12,400+</div><div class="l">open roles</div></div>
      <div><div class="n">3,200</div><div class="l">companies hiring</div></div>
      <div><div class="n">48,000</div><div class="l">members learning</div></div>
      <div><div class="n">91%</div><div class="l">felt interview-ready*</div></div>
    </div>
  </section>

  <hr class="soft">

  <div class="sec-title"><h3>Everything you need, in one place</h3></div>
  <div class="grid grid-3">
    ${featureCard('user','pink','Profile','Lay out your details, skills, education and portfolio in a page recruiters actually read.','jobseeker:profile')}
    ${featureCard('file','gold','Resume builder','Fill in a form, watch a real resume take shape, and download it as a PDF.','jobseeker:resume')}
    ${featureCard('search','pink','Job portal','Search by role, company or city. Save the ones you like, apply to the rest.','jobseeker:jobs')}
    ${featureCard('bell','pink','Mail & notifications','Stay updated on job applications, interview schedules, and offers.','jobseeker:mail')}
    ${featureCard('chat','gold','Interview prep','Flip through practice questions by category, with a tip on how to answer each.','jobseeker:interview')}
    ${featureCard('book','pink','Skill learning','Short courses, certifications and roadmaps for the role you\'re aiming at.','jobseeker:learning')}
    ${featureCard('building','gold','Recruiter tools','Post roles, review applicants and schedule interviews from one dashboard.','recruiter:dashboard')}
  </div>

  <hr class="soft">

  <div class="sec-title"><h3>From people who used it</h3></div>
  <div class="grid grid-3">
    ${testi('“I had three tabs open trying to build a resume before this. Here it was one page, and it actually looked good.”','Ananya P.','Final-year student')}
    ${testi('“Saved twelve roles in a week and could actually keep track of which ones I\'d applied to.”','Rahul D.','Recent graduate')}
    ${testi('“The practice questions matched almost exactly what I got asked two days later.”','Sneha K.','Career switcher')}
  </div>

  <div class="cta-band" id="ctaBand">
    <h3>Ready to start mapping your career?</h3>
    <p>Drop your email and we'll keep your spot — no spam, no fine print.</p>
    <form class="cta-form" id="ctaForm">
      <input type="email" id="cta-email-input" placeholder="you@example.com" required>
      <button class="btn btn-gold" type="submit">Notify me</button>
    </form>
  </div>
  <p class="muted" style="font-size:11.5px;margin-top:14px;">*Based on self-reported survey of learners who completed at least one Interview Prep category.</p>
  `;
}
function featureCard(ic,tone,title,desc,navTo){
  return `<div class="card card-hover feature-card">
    <div class="fi" style="background:var(--${tone}-soft);color:var(--${tone}-dark, var(--${tone}));">${icon(ic,'icon-lg')}</div>
    <h4>${title}</h4><p>${desc}</p>
    <a href="#" class="go" data-nav="${navTo}">Open ${icon('arrow')}</a>
  </div>`;
  // floating save bar will be injected when the resume screen is active
  // (we return it from here so it's present in the DOM)
  return '';
}
function testi(quote,name,role){
  const initials=name.split(' ').map(w=>w[0]).join('');
  return `<div class="card testi"><p class="quote">${quote}</p>
    <div class="who"><div class="avatar" style="background:${colorFor(name)};width:34px;height:34px;font-size:12px;">${initials}</div>
    <div><b>${name}</b><br><span>${role}</span></div></div></div>`;
}

/* ================= SCREEN: PROFILE ================= */
let editMode=false;
function profileInitials(name){
  return (name || '').trim().split(/\s+/).filter(Boolean).map(n=>n[0]).join('').slice(0,2).toUpperCase() || '?';
}
function profileContactLinks(){
  const items=[];
  if(profileContact.email) items.push(`<a href="#">${icon('mail')} ${profileContact.email}</a>`);
  if(profileContact.phone) items.push(`<a href="#">${icon('phone')} ${profileContact.phone}</a>`);
  if(profileContact.loc) items.push(`<a href="#">${icon('pin')} ${profileContact.loc}</a>`);
  return items.join('');
}
function screenProfile(){
  const orderedProfileEducation = sortEducationEntries(profileEducation);
  return `
  <div class="screen-head"><span class="eyebrow">Profile</span><h2>Everything about you, in one page</h2>
  <p>This is what recruiters see when your resume catches their eye. Keep it sharp.</p></div>
  <div class="profile-layout">
    <div class="card profile-card">
      <div class="avatar avatar-lg" style="background:${colorFor(profileName || 'user')};margin:0 auto 16px;">${profileInitials(profileName)}</div>
      <h3 contenteditable="false" id="pf-name">${profileName}</h3>
      <div class="role" contenteditable="false" id="pf-role">${profileRole}</div>
      ${profileContact.loc ? `<div class="loc">${icon('pin')} ${profileContact.loc}</div>` : ''}
      <button class="btn btn-ghost btn-sm" id="editProfileBtn" style="margin-top:18px;width:100%;">${icon('pencil')} Edit profile</button>
      <div class="profile-contact">
        ${profileContactLinks()}
      </div>
      <button class="btn btn-primary btn-sm" id="downloadProfilePdfBtn" style="margin-top:18px;width:100%;">${icon('download')} Get resume PDF</button>
    </div>
    <div>
      ${profileSummary ? `<div class="profile-section card"><div class="head"><h4>Summary</h4></div><p>${profileSummary}</p></div>` : ''}
      <div class="profile-section card">
        <div class="head"><h4>Skills</h4> <button class="btn btn-ghost btn-sm" id="addSkillBtn" style="margin-left:12px;">${icon('plus')}</button></div>
        <div class="skill-group"><div class="gname">Technical</div>
          <div class="skill-pills" id="skillPills">${profileSkills.map((s,i)=>`<span class="tag">${s} <button class="rm-skill" data-i="${i}" aria-label="Remove skill">×</button></span>`).join('')}</div></div>
      </div>

      <div class="profile-section card">
        <div class="head"><h4>Education</h4> <button class="btn btn-ghost btn-sm" id="addEduProfileBtn" style="margin-left:12px;">${icon('plus')}</button></div>
        ${orderedProfileEducation.map(educationItem=>`<div class="tl-item"><div class="tl-dot"></div><div class="tl-content"><div class="education-line"><b>${educationItem.deg}</b><span class="when">${educationItem.when}</span></div><div class="org">${educationItem.org}</div><p>${educationItem.desc||''}</p><button class="btn-icon rm-edu" data-i="${profileEducation.indexOf(educationItem)}" style="position:absolute;top:10px;right:10px;">${icon('trash')}</button></div></div>`).join('')}
      </div>

      <div class="profile-section card">
        <div class="head"><h4>Experience</h4> <button class="btn btn-ghost btn-sm" id="addExpProfileBtn" style="margin-left:12px;">${icon('plus')} Add experience</button></div>
        ${profileExperience.map((exp, idx) => `
          <div class="tl-item"><div class="tl-dot"></div><div class="tl-content">
            <b>${exp.role}</b> <span class="when">${exp.when}</span><div class="org">${exp.org}</div>
            <p>${exp.desc}</p>
            <button class="btn-icon rm-exp" data-i="${idx}" style="position:absolute;top:10px;right:10px;">${icon('trash')}</button>
          </div></div>
        `).join('')}
      </div>

      <div class="profile-section card" style="margin-bottom:0;">
        <div class="head"><h4>Portfolio</h4> <button class="btn btn-ghost btn-sm" id="addPortfolioBtn" style="margin-left:12px;">${icon('plus')} Add project</button></div>
        <div class="grid grid-3" style="gap:14px;" id="portfolioGrid">
          ${profilePortfolio.length ? profilePortfolio.map((p,i)=>portfolioCard(p,i)).join('') : '<p class="muted" style="font-size:13px;">No projects added yet.</p>'}
        </div>
      </div>
    </div>
  </div>`;
}
function portfolioCard(p,idx){
  const label = p.title || p.type || 'Project';
  const c1=colorFor(label),c2=colorFor(p.tags||p.type||label);
  const href = p.link || '#';
  return `<div class="portfolio-card card-hover">
    <div class="portfolio-thumb" style="background:linear-gradient(135deg,${c1},${c2});"></div>
    <div class="portfolio-body"><b>${p.link ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>` : label}</b>
      <div class="muted" style="font-size:12px;margin-top:6px;">${[p.type, p.tags].filter(Boolean).join(' · ')}</div>
      ${p.desc ? `<p style="margin-top:8px;">${p.desc}</p>` : ''}
      <button class="btn-icon rm-portfolio" data-i="${idx}" aria-label="Remove project" style="position:absolute;top:10px;right:10px;">${icon('trash')}</button>
    </div>
  </div>`;
}

/* ================= SCREEN: RESUME ================= */
let resumeTpl='modern';
function screenResume(){
  return `
  <div class="screen-head"><span class="eyebrow">Resume builder</span><h2>Fill it in, watch it take shape</h2>
  <p>Edit the fields on the left — the preview updates as you type. Download it whenever it's ready.</p></div>
  <div class="resume-layout">
    <div>
      <div class="card">
        <div class="field-row">
          <div class="field"><label>Full name</label><input id="in-name" value="${profileName}"></div>
          <div class="field"><label>Target role</label><input id="in-role" value="${profileRole}"></div>
        </div>
        <div class="field-row">
          <div class="field"><label>Email</label><input id="in-email" value="${profileContact.email}"></div>
          <div class="field"><label>Phone</label><input id="in-phone" value="${profileContact.phone}"></div>
        </div>
        <div class="field"><label>Location</label><input id="in-loc" value="${profileContact.loc}"></div>
        <div class="field"><label>Summary</label><textarea id="in-summary">${profileSummary || ''}</textarea></div>

        <div class="field"><label>Experience</label></div>
        <div id="exp-list"></div>
        <button class="btn btn-ghost btn-sm" id="addExpBtn">${icon('plus')} Add experience</button>

        <div class="field" style="margin-top:20px;"><label>Education</label></div>
        <div id="edu-list"></div>
        <button class="btn btn-ghost btn-sm" id="addEduBtn">${icon('plus')} Add education</button>

        <div class="field" style="margin-top:20px;"><label>Skills (comma separated)</label>
          <input id="in-skills" value="${profileSkills.join(', ')}"></div>

        <div class="resume-save-actions">
          <button class="btn btn-primary" id="saveResumeBtnBelow" type="button">${icon('check')} Save changes</button>
        </div>

        <div class="tips-box">
          <h5>Quick tips</h5>
          <ul>
            <li>${icon('check')} Keep it to one page for under 5 years experience</li>
            <li>${icon('check')} Lead bullets with action verbs — "Built", "Led", "Cut"</li>
            <li>${icon('check')} Quantify results wherever you can</li>
            <li>${icon('check')} Match keywords from the job description</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <div class="resume-tools">
        <button class="btn btn-sm btn-outline tpl-btn active" data-tpl="modern">Modern</button>
        <button class="btn btn-sm btn-outline tpl-btn" data-tpl="classic">Classic</button>
        <button class="btn btn-sm btn-outline tpl-btn" data-tpl="minimal">Minimal</button>
        <button class="btn btn-sm btn-outline" id="saveResumeBtn" style="margin-left:8px;">Save to profile</button>
        <button class="btn btn-sm btn-primary" id="downloadPdfBtn" style="margin-left:auto;">${icon('download')} Download PDF</button>
      </div>
      <div class="resume-preview tpl-modern" id="resumePreview">
        <div id="rp-name">${profileName || ''}</div>
        <div id="rp-role">${profileRole || ''}</div>
        <div class="rp-contact"><span id="rp-email">${profileContact.email || ''}</span><span id="rp-phone">${profileContact.phone || ''}</span><span id="rp-loc">${profileContact.loc || ''}</span></div>
        <div class="rp-sec"><h6>Summary</h6><p id="rp-summary" style="font-size:13px;color:var(--ink-soft);"></p></div>
        <div class="rp-sec"><h6>Experience</h6><div id="rp-exp"></div></div>
        <div class="rp-sec"><h6>Education</h6><div id="rp-edu"></div></div>
        <div class="rp-sec"><h6>Skills</h6><div id="rp-skills"></div></div>
      </div>
    </div>
  </div>`;
}
let expEntries=[];
let eduEntries=[];

function renderExpList(){
  document.getElementById('exp-list').innerHTML=expEntries.map((x,i)=>`
    <div class="repeatable">
      <button class="btn-icon rm" data-rm-exp="${i}">${icon('trash')}</button>
      <div class="field-row"><div class="field"><label>Role</label><input data-exp="${i}" data-k="role" value="${x.role}"></div>
      <div class="field"><label>Company</label><input data-exp="${i}" data-k="org" value="${x.org}"></div></div>
      <div class="field"><label>Dates</label><input data-exp="${i}" data-k="when" value="${x.when}"></div>
      <div class="field" style="margin-bottom:0;"><label>Description</label><textarea data-exp="${i}" data-k="desc">${x.desc}</textarea></div>
    </div>`).join('');
  document.querySelectorAll('[data-exp]').forEach(el=>el.addEventListener('input',()=>{expEntries[el.dataset.exp][el.dataset.k]=el.value;markResumeDirty();updateResumePreview();}));
  document.querySelectorAll('[data-rm-exp]').forEach(el=>el.addEventListener('click',()=>{expEntries.splice(el.dataset.rmExp,1);renderExpList();updateResumePreview();}));
}
function sortEducationEntries(entries){
  return entries
    .map((entry,index)=>({entry,index,startYear:String(entry.when || '').match(/\b\d{4}\b/)?.[0]}))
    .sort((left,right)=>{
      if(!left.startYear) return right.startYear ? 1 : left.index-right.index;
      if(!right.startYear) return -1;
      return Number(right.startYear)-Number(left.startYear) || left.index-right.index;
    })
    .map(item=>item.entry);
}

function renderEduList(){
  document.getElementById('edu-list').innerHTML=eduEntries.map((x,i)=>`
    <div class="repeatable">
      <button class="btn-icon rm" data-rm-edu="${i}">${icon('trash')}</button>
      <div class="field"><label>Degree</label><input data-edu="${i}" data-k="deg" value="${x.deg}"></div>
      <div class="field-row"><div class="field"><label>Institution</label><input data-edu="${i}" data-k="org" value="${x.org}"></div>
      <div class="field" style="margin-bottom:0;"><label>Dates</label><input data-edu="${i}" data-k="when" value="${x.when}"></div></div>
    </div>`).join('');
  document.querySelectorAll('[data-edu]').forEach(el=>el.addEventListener('input',()=>{eduEntries[el.dataset.edu][el.dataset.k]=el.value;markResumeDirty();updateResumePreview();}));
  document.querySelectorAll('[data-rm-edu]').forEach(el=>el.addEventListener('click',()=>{eduEntries.splice(el.dataset.rmEdu,1);renderEduList();markResumeDirty();updateResumePreview();}));
}
function updateResumePreview(){
  const g=id=>document.getElementById(id);
  if(!g('rp-name'))return;
  g('rp-name').textContent=g('in-name').value;
  g('rp-role').textContent=g('in-role').value;
  g('rp-email').textContent=g('in-email').value;
  g('rp-phone').textContent=g('in-phone').value;
  g('rp-loc').textContent=g('in-loc').value;
  g('rp-summary').textContent=g('in-summary').value;
  g('rp-exp').innerHTML=expEntries.map(x=>`<div class="rp-entry"><div class="row">${x.role}<span>${x.when}</span></div><div class="sub">${x.org}</div><p>${x.desc}</p></div>`).join('');
  g('rp-edu').innerHTML=sortEducationEntries(eduEntries).map(x=>`<div class="rp-entry"><div class="row">${x.deg}<span>${x.when}</span></div><div class="sub">${x.org}</div></div>`).join('');
  g('rp-skills').innerHTML=g('in-skills').value.split(',').map(s=>s.trim()).filter(Boolean).map(s=>'<span>'+s+'</span>').join('');
}

function pdfEsc(str){
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function pdfContactIcon(type){
  const icons={
    email:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    loc:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  };
  return icons[type] || '';
}
function pdfSectionTitle(label){
  return `<div class="pdf-sec-title"><span class="pdf-sec-line"></span><h2>${label}</h2></div>`;
}

function buildResumeExportMarkup(){
  const name = (document.getElementById('in-name')?.value || profileName || '').trim();
  const role = (document.getElementById('in-role')?.value || profileRole || '').trim();
  const email = (document.getElementById('in-email')?.value || profileContact.email || '').trim();
  const phone = (document.getElementById('in-phone')?.value || profileContact.phone || '').trim();
  const loc = (document.getElementById('in-loc')?.value || profileContact.loc || '').trim();
  const summary = (document.getElementById('in-summary')?.value || profileSummary || '').trim();
  const skills = (document.getElementById('in-skills')?.value || profileSkills.join(', ')).split(',').map(s => s.trim()).filter(Boolean);
  const currentEduEntries = sortEducationEntries((eduEntries && eduEntries.length) ? eduEntries : profileEducation);
  const currentExpEntries = (expEntries && expEntries.length) ? expEntries : profileExperience;
  const initials = profileInitials(name);
  const avatarColor = colorFor(name || 'user');

  const contactRows = [
    email ? `<div class="pdf-contact-row">${pdfContactIcon('email')}<span>${pdfEsc(email)}</span></div>` : '',
    phone ? `<div class="pdf-contact-row">${pdfContactIcon('phone')}<span>${pdfEsc(phone)}</span></div>` : '',
    loc ? `<div class="pdf-contact-row">${pdfContactIcon('loc')}<span>${pdfEsc(loc)}</span></div>` : ''
  ].filter(Boolean).join('');

  const expItems = currentExpEntries.map(item => `
    <div class="pdf-timeline-item">
      <div class="pdf-timeline-rail"><div class="pdf-timeline-dot"></div></div>
      <div class="pdf-timeline-body">
        <div class="pdf-timeline-top">
          <h3>${pdfEsc(item.role || '')}</h3>
          ${item.when ? `<span class="pdf-date">${pdfEsc(item.when)}</span>` : ''}
        </div>
        ${item.org ? `<div class="pdf-org">${pdfEsc(item.org)}</div>` : ''}
        ${item.desc ? `<ul class="pdf-bullets">${item.desc.split('\n').filter(Boolean).map(line => `<li>${pdfEsc(line)}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `).join('');

  const eduItems = currentEduEntries.map(item => `
    <div class="pdf-timeline-item">
      <div class="pdf-timeline-rail"><div class="pdf-timeline-dot"></div></div>
      <div class="pdf-timeline-body">
        <div class="pdf-timeline-top">
          <h3>${pdfEsc(item.deg || '')}</h3>
          ${item.when ? `<span class="pdf-date">${pdfEsc(item.when)}</span>` : ''}
        </div>
        ${item.org ? `<div class="pdf-org">${pdfEsc(item.org)}</div>` : ''}
      </div>
    </div>
  `).join('');

  const portfolioItems = (profilePortfolio || []).map(item => `
    <div class="pdf-project">
      <div class="pdf-project-accent"></div>
      <div class="pdf-project-inner">
        <div class="pdf-project-top">
          <div class="pdf-project-title">${pdfEsc(item.title || 'Project')}</div>
          ${item.type ? `<span class="pdf-project-type">${pdfEsc(item.type)}</span>` : ''}
        </div>
        ${item.tags ? `<div class="pdf-project-tags">${pdfEsc(item.tags)}</div>` : ''}
        ${item.desc ? `<p class="pdf-project-desc">${pdfEsc(item.desc)}</p>` : ''}
        ${item.link ? `<div class="pdf-project-link">${pdfEsc(item.link)}</div>` : ''}
      </div>
    </div>
  `).join('');

  const skillPills = skills.map(s => `<span class="pdf-skill">${pdfEsc(s)}</span>`).join('');

  return `
    <div class="resume-export">
      <div class="pdf-accent-bar"></div>
      <div class="pdf-layout">
        <aside class="pdf-sidebar">
          <div class="pdf-avatar" style="background:linear-gradient(135deg,${avatarColor},${avatarColor}cc);">${pdfEsc(initials)}</div>
          <h1 class="pdf-name">${pdfEsc(name)}</h1>
          ${role ? `<div class="pdf-role">${pdfEsc(role)}</div>` : ''}
          ${contactRows ? `<div class="pdf-sidebar-block"><div class="pdf-sidebar-label">Contact</div>${contactRows}</div>` : ''}
          ${skills.length ? `<div class="pdf-sidebar-block"><div class="pdf-sidebar-label">Skills</div><div class="pdf-skill-list">${skillPills}</div></div>` : ''}
          <div class="pdf-brand">Hire-ez</div>
        </aside>
        <main class="pdf-main">
          ${summary ? `<section class="pdf-block">${pdfSectionTitle('About')}<p class="pdf-summary">${pdfEsc(summary)}</p></section>` : ''}
          ${currentExpEntries.length ? `<section class="pdf-block">${pdfSectionTitle('Experience')}<div class="pdf-timeline">${expItems}</div></section>` : ''}
          ${currentEduEntries.length ? `<section class="pdf-block">${pdfSectionTitle('Education')}<div class="pdf-timeline">${eduItems}</div></section>` : ''}
          ${profilePortfolio.length ? `<section class="pdf-block">${pdfSectionTitle('Portfolio')}<div class="pdf-projects">${portfolioItems}</div></section>` : ''}
        </main>
      </div>
    </div>
  `;
}

async function downloadResumePdf(){
  if(!window.jspdf || !window.jspdf.jsPDF || !window.html2canvas){
    showToast('PDF export is unavailable right now.');
    return;
  }

  const exportContainer = document.createElement('div');
  exportContainer.innerHTML = buildResumeExportMarkup();
  exportContainer.style.position = 'fixed';
  exportContainer.style.left = '0';
  exportContainer.style.top = '0';
  exportContainer.style.opacity = '0';
  exportContainer.style.pointerEvents = 'none';
  exportContainer.style.zIndex = '-1';
  document.body.appendChild(exportContainer);

  const exportRoot = exportContainer.querySelector('.resume-export');
  if(!exportRoot){
    showToast('PDF export failed — please try again.');
    exportContainer.remove();
    return;
  }

  try {
    await document.fonts.ready;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const canvas = await window.html2canvas(exportRoot, {
      backgroundColor: '#fff3ee',
      scale: 2,
      useCORS: true,
      logging: false,
      width: exportRoot.scrollWidth,
      height: exportRoot.scrollHeight,
      windowWidth: exportRoot.scrollWidth,
      windowHeight: exportRoot.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = margin;

    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= (pageHeight - margin * 2);

    while (heightLeft > 0) {
      position = position - (pageHeight - margin * 2);
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= (pageHeight - margin * 2);
    }

    const fileName = ((document.getElementById('in-name')?.value || profileName || 'resume').trim() || 'resume')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'resume';

    pdf.save(fileName + '-resume.pdf');
  } catch (error) {
    console.error('Resume PDF export failed:', error);
    showToast('PDF export failed — please try again.');
  } finally {
    exportContainer.remove();
  }
}

// Show/hide resume save floating bar
function markResumeDirty(){
  const el=document.getElementById('resumeSaveBar');
  if(el) el.classList.remove('hidden');
}
function clearResumeDirty(){
  const el=document.getElementById('resumeSaveBar');
  if(el) el.classList.add('hidden');
}
async function saveResumeData(){
  const name=document.getElementById('in-name').value.trim();
  const role=document.getElementById('in-role').value.trim();
  const email=document.getElementById('in-email').value.trim();
  const phone=document.getElementById('in-phone').value.trim();
  const loc=document.getElementById('in-loc').value.trim();
  const summary=document.getElementById('in-summary').value.trim();
  const skills=document.getElementById('in-skills').value.split(',').map(s=>s.trim()).filter(Boolean);
  profileName = name;
  profileRole = role;
  profileContact = {email,phone,loc};
  profileSummary = summary;
  profileSkills = skills;
  profileExperience = expEntries || [];
  profileEducation = eduEntries || [];
  if(!await saveJobseekerProfileChanges()) return;
  const pfNameEl = document.getElementById('pf-name');
  if(pfNameEl) pfNameEl.textContent = profileName;
  const pfRoleEl = document.getElementById('pf-role');
  if(pfRoleEl) pfRoleEl.textContent = profileRole;
  const pfContactEl = document.querySelector('.profile-contact');
  if(pfContactEl) pfContactEl.innerHTML = profileContactLinks();
  clearResumeDirty();
  showToast('Resume saved to profile');
}

/* ================= SCREEN: JOBS ================= */
function screenJobs(){
  return `
  <div class="screen-head"><span class="eyebrow">Job portal</span><h2>Find a role worth applying to</h2>
  <p>Search by title, filter by type, and save the ones you want to come back to.</p></div>

  <div class="job-search">
    <div class="si">${icon('search')}<input id="jobSearchInput" placeholder="Job title, company, or skill"></div>
    <div class="si loc">${icon('pin')}<input id="jobLocInput" placeholder="City or Remote"></div>
    <button class="btn btn-primary" id="jobSearchBtn">Search</button>
    <button class="btn btn-outline" id="refreshJobsBtn" style="margin-left: 8px;">${icon('download')} Refresh</button>
  </div>

  <div class="filter-row" id="filterRow"></div>

  <div class="jobs-toolbar">
    <span class="muted" id="jobCount" style="font-size:13.5px;"></span>
    <button class="chip" id="savedToggle">${icon('heart')} Saved (<span id="savedCount">0</span>)</button>
  </div>

  <div class="job-list" id="jobList"></div>
  `;
}
function renderFilterRow(){
  const types=['All','Full-time','Part-time','Internship'];
  document.getElementById('filterRow').innerHTML=types.map(t=>
    `<button class="chip ${jobFilters.type===t?'active':''}" data-filter-type="${t}">${t}</button>`
  ).join('');
  document.querySelectorAll('[data-filter-type]').forEach(b=>b.addEventListener('click',()=>{jobFilters.type=b.dataset.filterType;renderFilterRow();renderJobList();}));
}
function renderJobList(){
  let list=JOBS.filter(j=>{
    if(jobFilters.type!=='All' && j.type!==jobFilters.type)return false;
    if(showSavedOnly && !savedJobs.has(j.id))return false;
    const q=jobFilters.search.toLowerCase();
    if(q && !(j.title.toLowerCase().includes(q)||j.company.toLowerCase().includes(q)||j.tags.join(' ').toLowerCase().includes(q)))return false;
    const loc=jobFilters.loc.toLowerCase();
    if(loc && !j.location.toLowerCase().includes(loc))return false;
    return true;
  });
  document.getElementById('jobCount').textContent=list.length+' role'+(list.length!==1?'s':'')+' found';
  document.getElementById('savedCount').textContent=savedJobs.size;
  document.getElementById('savedToggle').classList.toggle('active',showSavedOnly);
  const listEl=document.getElementById('jobList');
  if(list.length===0){
    if (JOBS.length === 0) {
      // No jobs in the system at all
      listEl.innerHTML=`<div class="empty-state card">${icon('briefcase','icon-lg')}<p><b>No jobs posted yet.</b></p><p class="muted">Check back later or ask recruiters to post opportunities.</p></div>`;
    } else {
      // Jobs exist but don't match filters
      listEl.innerHTML=`<div class="empty-state card">${icon('search','icon-lg')}<p><b>No roles match those filters.</b></p><p class="muted">Try clearing a filter or searching a different keyword.</p></div>`;
    }
    return;
  }
  listEl.innerHTML=list.map(j=>`
    <div class="card job-card card-hover">
      <div class="job-logo" style="background:${colorFor(j.company)};">${j.company.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div class="job-main">
        <div class="jtop"><div><h4>${j.title}</h4><div class="co">${j.company}</div></div></div>
        <div class="job-meta">
          <span>${icon('pin')} ${j.location}</span>
          <span>${icon('briefcase')} ${j.type}</span>
          <span>${icon('star')} ${j.level}</span>
          <span style="font-family:var(--font-mono);">${j.salary}</span>
        </div>
        <div class="job-tags">${j.tags.map(t=>'<span class="tag">'+t+'</span>').join('')}</div>
      </div>
      <div class="job-actions">
        <button class="save-btn ${savedJobs.has(j.id)?'saved':''}" data-save="${j.id}" aria-label="Save job">${icon(savedJobs.has(j.id)?'heart':'heart')}</button>
        <span class="job-posted">${j.posted}</span>
        <button class="btn btn-outline btn-sm ai-fit-trigger" data-ai-check="${escapeHtml(j.id)}">${icon('star')} AI Check</button>
        <button class="btn btn-primary btn-sm" data-apply="${j.id}">Apply</button>
      </div>
    </div>`).join('');
  listEl.querySelectorAll('[data-save]').forEach(b=>b.addEventListener('click',async ()=>{
    const id=b.dataset.save;
    const isSaving = !savedJobs.has(id);
    
    // Try to save/unsave in Supabase
    const client = getSupabase();
    if (client && isSupabaseConfigured()) {
      try {
        const { data: { user } } = await client.auth.getUser();
        if (user) {
          if (isSaving) {
            // Save job
            const { error } = await client
              .from('saved_jobs')
              .insert({
                user_id: user.id,
                job_id: id
              });
            
            if (error) throw error;
          } else {
            // Unsave job
            const { error } = await client
              .from('saved_jobs')
              .delete()
              .eq('user_id', user.id)
              .eq('job_id', id);
            
            if (error) throw error;
          }
        }
      } catch (error) {
        console.error('Error saving job to Supabase:', error);
        // Fall back to local storage
      }
    }
    
    // Update local state and localStorage
    if (isSaving) {
      savedJobs.add(id);
    } else {
      savedJobs.delete(id);
    }
    try {
      localStorage.setItem('hirez-saved-jobs', JSON.stringify([...savedJobs]));
    } catch (e) {
      console.error('Error saving saved jobs to localStorage:', e);
    }
    
    renderJobList();
  }));
  listEl.querySelectorAll('[data-ai-check]').forEach(button=>button.addEventListener('click',()=>checkJobResumeFit(button.dataset.aiCheck,button)));
  listEl.querySelectorAll('[data-apply]').forEach(b=>b.addEventListener('click',()=>openApplyModal(+b.dataset.apply)));
}

let aiFitRequestSequence = 0;

function aiFitBand(score){
  if(score >= 85) return {label:'Excellent', tone:'excellent'};
  if(score >= 70) return {label:'Good', tone:'good'};
  if(score >= 45) return {label:'Average', tone:'average'};
  return {label:'Poor', tone:'poor'};
}

function aiFitList(items, emptyText){
  const values = Array.isArray(items) ? items : (typeof items === 'string' ? [items] : []);
  const list = values.map(value => String(value || '').trim()).filter(Boolean).slice(0, 4);
  return list.length
    ? `<ul>${list.map(value => `<li>${escapeHtml(value)}</li>`).join('')}</ul>`
    : `<p class="muted">${escapeHtml(emptyText)}</p>`;
}

function parseAIJobFitResponse(content){
  const jsonText = String(content || '').match(/\{[\s\S]*\}/)?.[0];
  if(!jsonText) throw new Error('The AI returned an invalid fit report. Please try again.');
  const result = JSON.parse(jsonText);
  const score = Number(String(result.matchPercentage ?? '').replace('%',''));
  if(!Number.isFinite(score)) throw new Error('The AI report did not include a valid match percentage. Please try again.');
  return {
    score:Math.max(0, Math.min(100, Math.round(score))),
    strengths:result.strengths,
    gaps:result.gaps,
    suggestions:result.suggestions
  };
}

function renderAIJobFitLoading(job, requestId){
  return `<div class="ai-fit-modal" data-ai-fit-request="${requestId}">
    <div class="ai-fit-modal-header">
      <div><span class="eyebrow">AI RESUME CHECK</span><h3>${escapeHtml(job.title)}</h3><p>${escapeHtml(job.company)}</p></div>
      <button class="btn-icon" type="button" onclick="closeModal()" aria-label="Close">${icon('x')}</button>
    </div>
    <div class="ai-fit-loading"><span class="ai-fit-spinner"></span><div><strong>Comparing your resume with this role</strong><p class="muted">Reviewing skills, experience, and requirements...</p></div></div>
  </div>`;
}

function renderAIJobFitResult(job, assessment){
  const band = aiFitBand(assessment.score);
  return `<div class="ai-fit-modal">
    <div class="ai-fit-modal-header">
      <div><span class="eyebrow">AI RESUME CHECK</span><h3>${escapeHtml(job.title)}</h3><p>${escapeHtml(job.company)} · ${escapeHtml(job.location || 'Location not specified')}</p></div>
      <button class="btn-icon" type="button" onclick="closeModal()" aria-label="Close">${icon('x')}</button>
    </div>
    <div class="ai-fit-score-row">
      <div class="ai-fit-gauge ai-fit-${band.tone}" style="--fit-angle:${assessment.score * 3.6}deg"><div><strong>${assessment.score}%</strong><span>EST. FIT</span></div></div>
      <div class="ai-fit-score-copy"><span class="ai-fit-badge ai-fit-${band.tone}">${band.label} match</span><h4>Resume alignment</h4><p>Based on the information in your saved resume and this job posting.</p></div>
    </div>
    <div class="ai-fit-meter ai-fit-${band.tone}"><span style="width:${assessment.score}%"></span></div>
    <div class="ai-fit-details">
      <section><h4>Strong matches</h4>${aiFitList(assessment.strengths,'No strong matches were identified.')}</section>
      <section><h4>Gaps to address</h4>${aiFitList(assessment.gaps,'No major gaps were identified.')}</section>
      <section class="ai-fit-suggestions"><h4>Ways to strengthen your application</h4>${aiFitList(assessment.suggestions,'Tailor your resume to the role before applying.')}</section>
    </div>
    <p class="ai-fit-disclaimer">AI estimate only, not a statistical probability or guarantee of selection. Hiring decisions depend on the employer and applicant pool.</p>
    <div class="ai-fit-modal-footer"><button class="btn btn-primary" type="button" onclick="closeModal()">Done</button></div>
  </div>`;
}

async function checkJobResumeFit(jobId, button){
  const job = JOBS.find(item => String(item.id) === String(jobId));
  if(!job) return;
  if(!groqApiKey){
    configureGroqKey();
    showToast('Add your Groq API key to run an AI resume check.');
    return;
  }

  const hasResume = Boolean(profileName || profileSummary || profileSkills.length || profileExperience.length || profileEducation.length || profilePortfolio.length);
  if(!hasResume){
    showToast('Add resume details to your profile before running an AI check.');
    return;
  }

  const requestId = ++aiFitRequestSequence;
  const originalButtonHtml = button?.innerHTML;
  if(button){
    button.disabled = true;
    button.innerHTML = `${icon('clock')} Checking...`;
  }
  openModal(renderAIJobFitLoading(job, requestId));

  try{
    const jobContext = {
      title:job.title,
      company:job.company,
      department:job.department || '',
      location:job.location,
      type:job.type,
      level:job.level,
      category:job.category || '',
      description:job.description || '',
      requirements:job.requirements || '',
      requiredSkills:job.tags || []
    };
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method:'POST',
      headers:{'Authorization':`Bearer ${groqApiKey}`,'Content-Type':'application/json'},
      body:JSON.stringify({
        model:selectedModel,
        temperature:0.2,
        max_tokens:900,
        messages:[
          {role:'system',content:`Compare the candidate's resume with the job posting and return only valid JSON with this exact shape: {"matchPercentage": 0, "strengths": ["..."], "gaps": ["..."], "suggestions": ["..."]}. Set matchPercentage to an integer from 0 to 100 representing resume-to-job fit based on demonstrated skills, experience, education, and stated requirements. Do not describe it as a true probability of being hired or selected. Treat missing resume evidence as a gap; never invent qualifications. Keep each list concise and actionable.`},
          {role:'user',content:`Assess fit for this job.\n\nJOB POSTING:\n${JSON.stringify(jobContext,null,2)}\n\nCANDIDATE RESUME:\n${buildResumeContext()}`}
        ]
      })
    });
    if(!response.ok){
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `AI request failed with status ${response.status}`);
    }
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    const assessment = parseAIJobFitResponse(content);
    const currentRequest = document.querySelector('#modalBox [data-ai-fit-request]');
    if(currentRequest?.dataset.aiFitRequest === String(requestId)){
      document.getElementById('modalBox').innerHTML = renderAIJobFitResult(job, assessment);
    }
  }catch(error){
    console.error('AI job fit check failed:', error);
    const currentRequest = document.querySelector('#modalBox [data-ai-fit-request]');
    if(currentRequest?.dataset.aiFitRequest === String(requestId)){
      document.getElementById('modalBox').innerHTML = `<div class="ai-fit-modal" data-ai-fit-request="${requestId}">
        <div class="ai-fit-modal-header"><div><span class="eyebrow">AI RESUME CHECK</span><h3>Could not finish the check</h3><p>${escapeHtml(job.title)} · ${escapeHtml(job.company)}</p></div><button class="btn-icon" type="button" onclick="closeModal()" aria-label="Close">${icon('x')}</button></div>
        <p class="ai-fit-error">${escapeHtml(error.message)}</p><div class="ai-fit-modal-footer"><button class="btn btn-outline" type="button" onclick="closeModal()">Close</button></div>
      </div>`;
    }
  }finally{
    if(button?.isConnected){
      button.disabled = false;
      button.innerHTML = originalButtonHtml;
    }
  }
}

async function openApplyModal(id){
  const j=JOBS.find(x=>x.id===id);
  
  // Pre-fill with user data if available
  const userName = profileName || '';
  const userEmail = userEmail || '';
  
  openModal(`
    <div class="modal-head"><div><h3>Apply to ${j.title}</h3><p class="muted" style="font-size:13px;">${j.company} · ${j.location}</p></div>
    <button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
    <form id="applyForm">
      <div class="field"><label>Full name</label><input id="apply-name" value="${userName}" required></div>
      <div class="field"><label>Email</label><input id="apply-email" type="email" value="${userEmail}" required></div>
      <div class="field" style="margin-bottom:20px;"><label>Note to recruiter (optional)</label><textarea id="apply-note" placeholder="Say a bit about why you're a fit..."></textarea></div>
      <button class="btn btn-primary" style="width:100%;" type="submit">${icon('send')} Submit application</button>
    </form>
  `);
  
  document.getElementById('applyForm').addEventListener('submit',async e=>{
    e.preventDefault();
    
    const applicationData = {
      name: document.getElementById('apply-name').value,
      email: document.getElementById('apply-email').value,
      note: document.getElementById('apply-note').value
    };
    
    // Try to save to Supabase first
    const client = getSupabase();
    if (client && isSupabaseConfigured()) {
      try {
        const { data: { user } } = await client.auth.getUser();
        if (user) {
          // Save application to Supabase
          const { error: applicationError } = await client
            .from('applications')
            .insert({
              job_id: id,
              user_id: user.id,
              status: 'Applied',
              notes: applicationData.note
            });
          
          if (applicationError) throw applicationError;
          
          // Also add to applicants table for recruiter view
          const { error: applicantError } = await client
            .from('applicants')
            .insert({
              job_id: id,
              user_id: user.id,
              name: applicationData.name,
              email: applicationData.email,
              role: j.title,
              experience: profileExperience.length > 0 ? `${profileExperience.length} positions` : 'Not specified',
              status: 'Applied'
            });
          
          if (applicantError) throw applicantError;

          const {error: notificationError} = await client.from('notifications').insert({
            user_id:user.id,
            type:'application',
            title:'Application submitted',
            message:`Your application for ${j.title} at ${j.company} was submitted.`,
            job_title:j.title,
            company:j.company,
            read:false
          });
          if(notificationError){
            console.error('Could not create application notification:', notificationError);
          }else{
            await loadNotificationsFromSupabase();
          }
          
          closeModal();
          showToast('Application sent to ' + j.company);
          return;
        }
      } catch (error) {
        console.error('Error submitting application to Supabase:', error);
        // Fall back to local notification
      }
    }
    
    // Fallback - just show success message
    closeModal();
    showToast('Application sent to ' + j.company);
  });
}

/* ================= SCREEN: MAIL ================= */
function screenMail(){
  const notifications = window.MAIL_NOTIFICATIONS || [];
  const mailContent = renderMailItems(notifications);
  
  return `
  <div class="screen-head"><span class="eyebrow">Mail</span><h2>Your notifications</h2>
  <p>Stay updated on your job applications, interviews, and offers.</p></div>
  <div class="card mail-list">
    ${mailContent || '<p class="muted">No notifications yet.</p>'}
  </div>`;
}

/* ================= SCREEN: INTERVIEW ================= */
let groqApiKey = localStorage.getItem('hirez-groq-api-key') || '';
let interviewChatMessages = [];
let currentRole = localStorage.getItem('hirez-target-role') || 'Software Developer';

const DEFAULT_GROQ_MODEL = 'openai/gpt-oss-20b';
const GROQ_MODELS = [
  {id: 'openai/gpt-oss-20b', name: 'GPT-OSS 20B', description: 'Fast, recommended default'},
  {id: 'openai/gpt-oss-120b', name: 'GPT-OSS 120B', description: 'Higher capability'},
];
let selectedModel = localStorage.getItem('hirez-groq-model') || DEFAULT_GROQ_MODEL;
if(!GROQ_MODELS.some(model => model.id === selectedModel)){
  selectedModel = DEFAULT_GROQ_MODEL;
  localStorage.setItem('hirez-groq-model', selectedModel);
}

function screenInterview(){
  const cats=Object.keys(INTERVIEW_Q);
  const total=cats.reduce((a,c)=>a+INTERVIEW_Q[c].length,0);
  return `
  <div class="screen-head"><span class="eyebrow">Interview prep</span><h2>Practice before it counts</h2>
  <p>Pick a category, click a card to flip it, and read the tip on how to structure your answer.</p></div>
  
  <div class="cat-row" id="catRow"></div>
  <div class="interview-progress"><span style="font-size:13px;font-weight:700;white-space:nowrap;">Practiced ${interviewState.practiced.size}/${total}</span>
    <div class="progress"><span style="width:${(interviewState.practiced.size/total*100)}%;"></span></div></div>
  <div class="flip-grid" id="flipGrid"></div>
  
  `;
}
function renderCatRow(){
  const catRow = document.getElementById('catRow');
  if(catRow){
    catRow.innerHTML=Object.keys(INTERVIEW_Q).map(c=>
      `<button class="chip ${interviewState.category===c?'active':''}" data-cat="${c}">${c}</button>`
    ).join('');
    document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',async ()=>{interviewState.category=b.dataset.cat;await renderScreen();}));
  }
}
function renderFlipGrid(){
  const flipGrid = document.getElementById('flipGrid');
  if(!flipGrid) return;
  
  const qs=INTERVIEW_Q[interviewState.category];
  flipGrid.innerHTML=qs.map((item,i)=>{
    const key=interviewState.category+i;
    return `<div class="flip-card ${interviewState.flipped.has(key)?'flipped':''}" data-flip="${key}">
      <div class="flip-inner">
        <div class="flip-face flip-front"><span class="cat-lbl">${interviewState.category}</span><p class="q">${item.q}</p><span class="hint">${icon('arrow')} Tap for the tip</span></div>
        <div class="flip-face flip-back"><span class="cat-lbl">How to answer</span><p>${item.tip}</p></div>
      </div></div>`;
  }).join('');
  document.querySelectorAll('[data-flip]').forEach(el=>el.addEventListener('click',()=>{
    const key=el.dataset.flip;
    el.classList.toggle('flipped');
    interviewState.flipped.has(key)?interviewState.flipped.delete(key):interviewState.flipped.add(key);
    if(!interviewState.practiced.has(key)){interviewState.practiced.add(key);
      const progressEl = document.querySelector('.interview-progress span');
      const progressBar = document.querySelector('.interview-progress .progress span');
      if(progressEl) progressEl.textContent='Practiced '+interviewState.practiced.size+'/'+Object.values(INTERVIEW_Q).reduce((a,c)=>a+c.length,0);
      if(progressBar) progressBar.style.width=(interviewState.practiced.size/Object.values(INTERVIEW_Q).reduce((a,c)=>a+c.length,0)*100)+'%';
    }
  }));
}

function configureGroqKey(){
  const modelOptions = GROQ_MODELS.map(model => 
    `<option value="${model.id}" ${selectedModel === model.id ? 'selected' : ''}>${model.name} - ${model.description}</option>`
  ).join('');
  
  openModal(`
    <div class="modal-head"><h3>Configure Groq API Key</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
    <div class="modal-body">
      <p class="muted">Enter your Groq API key to enable resume-aware AI chat. Your API key is stored locally in your browser.</p>
      <div class="field">
        <label>Groq API Key</label>
        <input type="password" id="groqApiKeyInput" value="${groqApiKey}" placeholder="gsk_...">
      </div>
      <div class="field">
        <label>AI Model</label>
        <select id="groqModelSelect">${modelOptions}</select>
      </div>
      <div class="field">
        <label>Target Role (for tailored career advice and interview practice)</label>
        <input type="text" id="targetRoleInput" value="${currentRole}" placeholder="e.g., Software Developer, Data Analyst">
      </div>
      <div class="field">
        <label>Get your API key from <a href="https://console.groq.com/keys" target="_blank" style="color:var(--pink-dark);">console.groq.com/keys</a></label>
      </div>
      <button class="btn btn-primary" onclick="saveGroqKey()">Save Configuration</button>
    </div>
  `);
}

  function screenAIChat(){
    const hasMessages = interviewChatMessages.length > 0;
    return `
    <section class="ai-assistant-screen">
      <header class="ai-assistant-header">
        <div>
          <span class="eyebrow">AI CAREER ASSISTANT</span>
          <h2>Resume &amp; career chat</h2>
          <p>Personalized to your saved resume and goals.</p>
        </div>
        <div class="ai-assistant-actions">
          <button class="btn btn-outline btn-sm" id="aiNewChatBtn">${icon('plus')} New chat</button>
          <button class="btn btn-outline btn-sm" id="aiChatSettingsBtn">${icon('pencil')} Settings</button>
        </div>
      </header>
      <div class="ai-assistant-thread">
        <div class="ai-assistant-welcome ${hasMessages ? 'hidden' : ''}" id="aiChatWelcome">
          <div class="ai-assistant-mark">${icon('chat')}</div>
          <h2>What would you like to work on?</h2>
          <p>Ask about your resume, your next move, or interview practice.</p>
          <div class="ai-starter-grid">
            <button type="button" data-chat-prompt="Review my resume and suggest three high-impact improvements.">
              <strong>Improve my resume</strong><span>Get focused edits based on your experience</span>
            </button>
            <button type="button" data-chat-prompt="Help me tailor my resume for my target role.">
              <strong>Tailor for a role</strong><span>Bring the most relevant skills forward</span>
            </button>
            <button type="button" data-chat-prompt="Start a mock interview for my target role. Ask one question at a time.">
              <strong>Practice an interview</strong><span>Start a mock interview when you are ready</span>
            </button>
            <button type="button" data-chat-prompt="Rewrite an experience bullet from my resume to make its impact clearer.">
              <strong>Rewrite a bullet</strong><span>Make an experience statement more specific</span>
            </button>
          </div>
        </div>
        <div class="ai-chat-messages" id="aiChatMessages"></div>
      </div>
      <div class="ai-assistant-composer">
        <form id="aiChatForm">
          <textarea id="aiChatInput" placeholder="Message your career assistant..." rows="1" aria-label="Message your career assistant"></textarea>
          <div class="ai-composer-footer">
            <span>Resume context is included in your chat.</span>
            <button class="btn btn-primary" type="submit" id="aiChatSendBtn">${icon('send')} Send</button>
          </div>
        </form>
      </div>
    </section>`;
  }


function saveGroqKey(){
  const apiKey = document.getElementById('groqApiKeyInput').value.trim();
  const model = document.getElementById('groqModelSelect').value;
  const role = document.getElementById('targetRoleInput').value.trim();
  
  if(apiKey){
    // Basic validation for Groq API key format
    if(!apiKey.startsWith('gsk_')){
      showToast('Warning: Groq API keys typically start with "gsk_"');
    }
    groqApiKey = apiKey;
    localStorage.setItem('hirez-groq-api-key', apiKey);
  }
  
  if(model){
    selectedModel = model;
    localStorage.setItem('hirez-groq-model', model);
  }
  
  if(role){
    currentRole = role;
    localStorage.setItem('hirez-target-role', role);
  }
  
  closeModal();
  showToast('Configuration saved');
  renderScreen();
}

function buildResumeContext(){
  return JSON.stringify({
    name:profileName,
    email:profileContact.email,
    phone:profileContact.phone,
    location:profileContact.loc,
    targetRole:profileRole || currentRole,
    summary:profileSummary,
    skills:profileSkills,
    experience:profileExperience.map(item => ({role:item.role, company:item.org, dates:item.when, description:item.desc || ''})),
    education:profileEducation.map(item => ({degree:item.deg, institution:item.org, dates:item.when, description:item.desc || ''})),
    portfolio:profilePortfolio.map(item => ({title:item.title, type:item.type || '', link:item.link || '', tags:item.tags || [], description:item.desc || ''}))
  }, null, 2);
}

function addChatMessage(sender, message, saveToHistory = true){
  const messagesContainer = document.getElementById('aiChatMessages');
  if(!messagesContainer) return;
  document.getElementById('aiChatWelcome')?.classList.add('hidden');
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  if(window.marked && window.DOMPurify){
    try{
      const markdown = window.marked.parse(message, {gfm:true, breaks:true});
      bubble.innerHTML = window.DOMPurify.sanitize(markdown);
      if(window.renderMathInElement){
        window.renderMathInElement(bubble, {
          delimiters:[
            {left:'$$',right:'$$',display:true},
            {left:'\\[',right:'\\]',display:true},
            {left:'\\(',right:'\\)',display:false},
            {left:'$',right:'$',display:false}
          ],
          throwOnError:false,
          strict:'ignore'
        });
      }
    }catch(error){
      console.error('Could not render chat Markdown:', error);
      bubble.textContent = message;
    }
  }else{
    bubble.textContent = message;
  }
  messageDiv.appendChild(bubble);
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  if(saveToHistory) interviewChatMessages.push({sender, message});
}

let isChatRequestPending = false;
async function submitAIAnswer(){
  const input = document.getElementById('aiChatInput');
  if(!input || isChatRequestPending) return;

  const answer = input.value.trim();
  if(!answer) return;
  if(!groqApiKey){
    configureGroqKey();
    return;
  }

  input.value = '';
  addChatMessage('user', answer);

  const messagesContainer = document.getElementById('aiChatMessages');
  if(!messagesContainer) return;

  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-message ai typing';
  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-bubble';
  typingBubble.textContent = 'Thinking...';
  typingIndicator.appendChild(typingBubble);
  messagesContainer.appendChild(typingIndicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  const sendButton = document.getElementById('aiChatSendBtn');
  isChatRequestPending = true;
  if(sendButton) sendButton.disabled = true;

  try{
    const systemPrompt = `You are a helpful, conversational career assistant. Answer questions normally and use the user's resume context below to personalize resume edits, career advice, and role-specific help. Do not invent experience or qualifications that are not in the resume. Do not give numeric ratings, automatically quiz the user, or ask a follow-up interview question unless the user asks for interview practice. If they request a mock interview, ask one relevant question at a time and wait for their response. If they ask for a list of sample interview questions, provide the requested list.

Current target role: ${currentRole}
Saved resume and profile:
${buildResumeContext()}`;
    const messages = [
      {role:'system', content:systemPrompt},
      ...interviewChatMessages.slice(-30).map(message => ({
        role:message.sender === 'user' ? 'user' : 'assistant',
        content:message.message
      }))
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method:'POST',
      headers:{
        'Authorization':`Bearer ${groqApiKey}`,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model:selectedModel,
        messages,
        temperature:0.7,
        max_tokens:1000
      })
    });

    if(!response.ok){
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
    if(!reply) throw new Error('The API returned an empty response');
    addChatMessage('ai', reply);
  }catch(error){
    console.error('Error sending chat message to Groq:', error);
    addChatMessage('ai', `I couldn't get a reply: ${error.message}. Check your Groq API key and selected model, then try again.`);
  }finally{
    typingIndicator.remove();
    isChatRequestPending = false;
    if(sendButton) sendButton.disabled = false;
    input.focus();
  }
}

/* ================= SCREEN: LEARNING ================= */
function screenLearning(){
  return `
  <div class="screen-head"><span class="eyebrow">Skill learning</span><h2>Learn what the role actually needs</h2>
  <p>Short, focused courses, a few certifications, and a roadmap so you know what's next.</p></div>

  <div class="sec-title"><h3>Continue learning</h3></div>
  <div class="grid grid-3">${COURSES.map(courseCard).join('')}</div>

  <hr class="soft">
  <div class="sec-title"><h3>Certifications</h3></div>
  <div class="cert-row">${CERTS.map(c=>`<div class="card cert-card"><div class="ci">${icon(c.icon,'icon-lg')}</div><b>${c.title}</b><span>Shareable badge</span></div>`).join('')}</div>

  <hr class="soft">
  <div class="sec-title"><h3>Career roadmap</h3></div>
  <div class="roadmap-select" id="roadmapSelect"></div>
  <div class="roadmap" id="roadmapBody"></div>
  `;
}
function courseCard(c){
  return `<div class="card course-card card-hover">
    <div class="ctop"><span class="tag tag-pink">${c.category}</span><span class="tag">${c.level}</span></div>
    <h4>${c.title}</h4>
    <div class="course-meta"><span>${icon('clock')} ${c.duration}</span></div>
    <div class="progress"><span style="width:${c.progress}%;"></span></div>
    <span class="muted" style="font-size:11.5px;">${c.progress===100?'Completed':c.progress===0?'Not started':c.progress+'% complete'}</span>
  </div>`;
}
function renderRoadmapSelect(){
  document.getElementById('roadmapSelect').innerHTML=Object.keys(ROADMAPS).map(r=>
    `<button class="chip ${currentRoadmap===r?'active':''}" data-rm="${r}">${r}</button>`).join('');
  document.querySelectorAll('[data-rm]').forEach(b=>b.addEventListener('click',()=>{currentRoadmap=b.dataset.rm;renderRoadmapSelect();renderRoadmapBody();}));
}
function renderRoadmapBody(){
  document.getElementById('roadmapBody').innerHTML=ROADMAPS[currentRoadmap].map((s,i)=>
    `<div class="rm-step"><span class="n">STEP ${String(i+1).padStart(2,'0')}</span><h5>${s.title}</h5><p>${s.desc}</p></div>`).join('');
}

/* ================= SCREEN: RECRUITER PROFILE ================= */
function recruiterContactLinks(){
  const items = [];
  if(recruiterProfile.email) items.push(`<a href="mailto:${recruiterProfile.email}">${icon('mail')} ${recruiterProfile.email}</a>`);
  if(recruiterProfile.phone) items.push(`<a href="#">${icon('phone')} ${recruiterProfile.phone}</a>`);
  if(recruiterProfile.loc) items.push(`<a href="#">${icon('pin')} ${recruiterProfile.loc}</a>`);
  if(recruiterProfile.linkedin) items.push(`<a href="${recruiterProfile.linkedin}" target="_blank" rel="noopener">${icon('link')} LinkedIn</a>`);
  if(recruiterProfile.website) items.push(`<a href="${recruiterProfile.website}" target="_blank" rel="noopener">${icon('link')} Company website</a>`);
  return items.length ? items.join('') : '<span class="muted">No contact details added</span>';
}

function screenRecruiterProfile(){
  const companyInitials = profileInitials(recruiterProfile.company || 'Co');
  return `
  <div class="screen-head"><span class="eyebrow">Recruiter profile</span><h2>Your hiring identity</h2>
  <p>Everything candidates and your team see about you and the company you represent.</p></div>
  <div class="profile-layout">
    <div class="card profile-card">
      <div class="avatar avatar-lg" style="background:${colorFor(recruiterProfile.name || 'recruiter')};margin:0 auto 16px;">${profileInitials(recruiterProfile.name)}</div>
      <h3>${recruiterProfile.name || 'Your name'}</h3>
      <div class="role">${recruiterProfile.title || 'Job title'}</div>
      ${recruiterProfile.department ? `<div class="muted" style="font-size:13px;margin-top:4px;">${recruiterProfile.department}</div>` : ''}
      <div class="rec-company-pill">${icon('building')} ${recruiterProfile.company || 'Company name'}</div>
      ${recruiterProfile.loc ? `<div class="loc">${icon('pin')} ${recruiterProfile.loc}</div>` : ''}
      <button class="btn btn-ghost btn-sm" id="editRecruiterProfileBtn" style="margin-top:18px;width:100%;">${icon('pencil')} Edit profile</button>
      <div class="profile-contact">${recruiterContactLinks()}</div>
    </div>
    <div class="profile-main">
      <div class="profile-section card">
        <div class="head"><h4>${icon('building')} Company overview</h4></div>
        <div class="rec-meta-grid">
          <div><span class="muted">Industry</span><b>${recruiterProfile.industry || '—'}</b></div>
          <div><span class="muted">Company size</span><b>${recruiterProfile.companySize || '—'}</b></div>
          <div><span class="muted">Founded</span><b>${recruiterProfile.founded || '—'}</b></div>
          <div><span class="muted">Headquarters</span><b>${recruiterProfile.hq || '—'}</b></div>
        </div>
        <p style="margin-top:16px;">${recruiterProfile.description || 'Add a company description to help candidates understand your organisation.'}</p>
      </div>
      <div class="profile-section card">
        <div class="head"><h4>${icon('users')} Hiring focus</h4></div>
        <div class="rec-meta-grid">
          <div><span class="muted">Hiring locations</span><b>${recruiterProfile.hiringLocations || '—'}</b></div>
          <div><span class="muted">Recruiting team</span><b>${recruiterProfile.teamSize || '—'}</b></div>
          <div><span class="muted">Open roles</span><b>${recruiterProfile.openRoles || '0'}</b></div>
        </div>
        <div style="margin-top:16px;">
          <div class="muted" style="font-size:12px;margin-bottom:8px;">Roles you hire for</div>
          <div class="skill-pills">${(recruiterProfile.hiringRoles.length ? recruiterProfile.hiringRoles : ['Not set']).map(r=>`<span class="tag">${r}</span>`).join('')}</div>
        </div>
        <div style="margin-top:16px;">
          <div class="muted" style="font-size:12px;margin-bottom:8px;">Hiring specialties</div>
          <div class="skill-pills">${(recruiterProfile.specialties.length ? recruiterProfile.specialties : ['Not set']).map(s=>`<span class="tag tag-gold">${s}</span>`).join('')}</div>
        </div>
      </div>
      <div class="profile-section card" style="margin-bottom:0;">
        <div class="head"><h4>${icon('badge')} Quick stats</h4></div>
        <div class="grid grid-3">
          <div class="stat-card"><div class="stat-num">${recruiterProfile.openRoles || '0'}</div><div class="stat-label">Open roles</div></div>
          <div class="stat-card"><div class="stat-num">${recruiterProfile.hiringRoles.length || '0'}</div><div class="stat-label">Hiring areas</div></div>
          <div class="stat-card"><div class="stat-num">${recruiterProfile.specialties.length || '0'}</div><div class="stat-label">Specialties</div></div>
        </div>
      </div>
    </div>
  </div>`;
}

function openEditRecruiterProfileModal(){
  const p = recruiterProfile;
  const sizes = ['1–10 employees','11–50 employees','51–200 employees','201–500 employees','500+ employees'];
  openModal(`
    <div class="modal-head"><h3>Edit recruiter profile</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
    <form id="editRecruiterProfileForm" class="onboarding-form" style="max-height:70vh;overflow:auto;padding-right:4px;">
      <div class="sec-title" style="margin-top:0;"><h3>Contact</h3></div>
      <div class="field-row">
        <div class="field"><label>Full name</label><input id="rp-name" value="${p.name}" required></div>
        <div class="field"><label>Work email</label><input id="rp-email" type="email" value="${p.email}" required></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Phone</label><input id="rp-phone" value="${p.phone}"></div>
        <div class="field"><label>Location</label><input id="rp-loc" value="${p.loc}"></div>
      </div>
      <div class="sec-title"><h3>Your role</h3></div>
      <div class="field-row">
        <div class="field"><label>Job title</label><input id="rp-title" value="${p.title}" required></div>
        <div class="field"><label>Department</label><input id="rp-department" value="${p.department}"></div>
      </div>
      <div class="field"><label>LinkedIn</label><input id="rp-linkedin" value="${p.linkedin}"></div>
      <div class="sec-title"><h3>Company</h3></div>
      <div class="field-row">
        <div class="field"><label>Company name</label><input id="rp-company" value="${p.company}" required></div>
        <div class="field"><label>Industry</label><input id="rp-industry" value="${p.industry}"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Company size</label>
          <select id="rp-company-size">
            <option value="">Select size</option>
            ${sizes.map(s=>`<option ${p.companySize===s?'selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="field"><label>Founded</label><input id="rp-founded" value="${p.founded}"></div>
      </div>
      <div class="field"><label>Website</label><input id="rp-website" value="${p.website}"></div>
      <div class="field"><label>Company description</label><textarea id="rp-description" rows="3">${p.description}</textarea></div>
      <div class="field-row">
        <div class="field"><label>Headquarters</label><input id="rp-hq" value="${p.hq}"></div>
        <div class="field"><label>Hiring locations</label><input id="rp-hiring-locations" value="${p.hiringLocations}"></div>
      </div>
      <div class="sec-title"><h3>Hiring</h3></div>
      <div class="field"><label>Roles you hire for (comma separated)</label><input id="rp-hiring-roles" value="${p.hiringRoles.join(', ')}"></div>
      <div class="field-row">
        <div class="field"><label>Recruiting team size</label><input id="rp-team-size" value="${p.teamSize}"></div>
        <div class="field"><label>Open roles</label><input id="rp-open-roles" type="number" min="0" value="${p.openRoles}"></div>
      </div>
      <div class="field"><label>Hiring specialties (comma separated)</label><input id="rp-specialties" value="${p.specialties.join(', ')}"></div>
      <button class="btn btn-primary" style="width:100%;margin-top:8px;" type="submit">${icon('check')} Save profile</button>
    </form>
  `);
  document.getElementById('editRecruiterProfileForm').addEventListener('submit', async e=>{
    e.preventDefault();
    recruiterProfile = {
      name: document.getElementById('rp-name').value.trim(),
      email: document.getElementById('rp-email').value.trim(),
      phone: document.getElementById('rp-phone').value.trim(),
      loc: document.getElementById('rp-loc').value.trim(),
      title: document.getElementById('rp-title').value.trim(),
      department: document.getElementById('rp-department').value.trim(),
      linkedin: document.getElementById('rp-linkedin').value.trim(),
      company: document.getElementById('rp-company').value.trim(),
      industry: document.getElementById('rp-industry').value.trim(),
      companySize: document.getElementById('rp-company-size').value,
      website: document.getElementById('rp-website').value.trim(),
      founded: document.getElementById('rp-founded').value.trim(),
      hq: document.getElementById('rp-hq').value.trim(),
      description: document.getElementById('rp-description').value.trim(),
      hiringLocations: document.getElementById('rp-hiring-locations').value.trim(),
      hiringRoles: document.getElementById('rp-hiring-roles').value.split(',').map(s=>s.trim()).filter(Boolean),
      teamSize: document.getElementById('rp-team-size').value.trim(),
      openRoles: document.getElementById('rp-open-roles').value.trim(),
      specialties: document.getElementById('rp-specialties').value.split(',').map(s=>s.trim()).filter(Boolean),
    };
    try{
      await persistRecruiterProfileToSupabase();
    }catch(error){
      console.error('Error saving recruiter profile to Supabase:', error);
      showToast('Could not save your profile. Please try again.');
      return;
    }
    closeModal();
    renderScreen();
    showToast('Recruiter profile updated');
  });
}

/* ================= SCREEN: RECRUITER DASHBOARD ================= */
async function screenRecruiterDashboard(){
  const company = recruiterProfile.company || 'Your company';
  let openRoles = recruiterProfile.openRoles || '0';
  let totalApplicants = '0';
  let shortlisted = '0';
  let interviewsScheduled = '0';
  
  // Load real statistics from Supabase if configured
  const client = getSupabase();
  if (client && isSupabaseConfigured()) {
    try {
      const { data: { user } } = await client.auth.getUser();
      if (user) {
        // Get recruiter profile
        const { data: recruiterProfileData } = await client
          .from('recruiter_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single();
        
        if (recruiterProfileData) {
          // Get jobs count
          const { data: jobs } = await client
            .from('jobs')
            .select('id')
            .eq('recruiter_id', recruiterProfileData.id)
            .eq('status', 'active');
          
          openRoles = jobs ? jobs.length.toString() : '0';
          
          // Get total applicants
          const jobIds = jobs ? jobs.map(j => j.id) : [];
          if (jobIds.length > 0) {
            const { data: applicants } = await client
              .from('applicants')
              .select('id, status')
              .in('job_id', jobIds);
            
            if (applicants) {
              totalApplicants = applicants.length.toString();
              shortlisted = applicants.filter(a => a.status === 'Shortlisted').length.toString();
            }
            
            // Get scheduled interviews
            const { data: interviews } = await client
              .from('interview_schedules')
              .select('id')
              .eq('recruiter_id', recruiterProfileData.id)
              .gte('interview_date', new Date().toISOString().split('T')[0]);
            
            interviewsScheduled = interviews ? interviews.length.toString() : '0';
          }
        }
      }
    } catch (error) {
      console.error('Error loading dashboard statistics from Supabase:', error);
    }
  }
  
  return `
  <div class="screen-head"><span class="eyebrow">Recruiter · ${company}</span><h2>Dashboard</h2>
  <p>Welcome back${recruiterProfile.name ? ', '+recruiterProfile.name.split(' ')[0] : ''}. Here's what's happening across your open roles this week.</p></div>
  <div class="grid grid-4">
    ${statCard(openRoles,'Active postings','')}
    ${statCard(totalApplicants,'Total applicants','')}
    ${statCard(shortlisted,'Shortlisted','')}
    ${statCard(interviewsScheduled,'Interviews scheduled','')}
  </div>
  <div class="grid grid-2" style="margin-top:22px;align-items:start;">
    <div class="card chart-card">
      <div class="chead"><h4 style="font-size:16px;">Applications this week</h4></div>
      <div class="bars">
        ${[0,0,0,0,0,0,0].map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${v*4}px;"></div><div class="bar-lbl">${['M','T','W','T','F','S','S'][i]}</div></div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h4 style="font-size:16px;margin-bottom:16px;">Recent activity</h4>
      <div class="activity-feed"><p class="muted">No recent activity</p></div>
    </div>
  </div>`;
}
function statCard(num,label,trend){
  return `<div class="stat-card"><div class="stat-num">${num}</div><div class="stat-label">${label}</div>${trend?'<div class="stat-trend">'+icon('trend')+trend+'</div>':''}</div>`;
}

/* ================= SCREEN: RECRUITER POST JOB ================= */
function screenRecruiterPost(){
  return `
  <div class="screen-head"><span class="eyebrow">Post a job</span><h2>Get your role in front of candidates</h2>
  <p>Fill in the details below — it'll appear in your postings list right after.</p></div>
  <div class="grid grid-2" style="align-items:start;">
    <div class="card">
      <form id="postJobForm">
        <div class="field-row"><div class="field"><label>Job title</label><input id="pj-title" placeholder="e.g. Backend Engineer" required></div>
        <div class="field"><label>Department</label><input id="pj-dept" placeholder="e.g. Engineering"></div></div>
        <div class="field-row"><div class="field"><label>Location</label><input id="pj-loc" placeholder="e.g. Bengaluru or Remote" required></div>
        <div class="field"><label>Type</label><select id="pj-type"><option>Full-time</option><option>Part-time</option><option>Internship</option></select></div></div>
        <div class="field-row"><div class="field"><label>Experience level</label><select id="pj-level"><option>Entry</option><option>Mid</option><option>Senior</option></select></div>
        <div class="field"><label>Salary range</label><input id="pj-salary" placeholder="e.g. ₹10–15 LPA"></div></div>
        <div class="field"><label>Description</label><textarea id="pj-desc" placeholder="What will this person do day to day?"></textarea></div>
        <div class="field" style="margin-bottom:22px;"><label>Skills (comma separated)</label><input id="pj-skills" placeholder="e.g. Node.js, PostgreSQL"></div>
        <button class="btn btn-primary" style="width:100%;" type="submit">${icon('plus')} Post job</button>
      </form>
    </div>
    <div>
      <h4 style="font-size:16px;margin-bottom:14px;">Your postings <span class="muted" style="font-weight:400;">(<span id="postedCount">0</span>)</span></h4>
      <div id="postedList" class="job-list"></div>
    </div>
  </div>`;
}
async function renderPostedList(){
  const el=document.getElementById('postedList');
  if(!el)return;
  
  // Load posted jobs from Supabase if configured
  const client = getSupabase();
  if (client && isSupabaseConfigured()) {
    try {
      const { data: { user } } = await client.auth.getUser();
      if (user) {
        const { data: recruiterProfile } = await client
          .from('recruiter_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single();
        
        if (recruiterProfile) {
          const { data: jobs } = await client
            .from('jobs')
            .select('*')
            .eq('recruiter_id', recruiterProfile.id)
            .order('posted_date', { ascending: false });
          
          if (jobs && jobs.length > 0) {
            postedJobsByRecruiter = jobs.map(job => ({
              id: job.id,
              title: job.title,
              dept: job.department,
              loc: job.location,
              type: job.type,
              level: job.level,
              salary: job.salary
            }));
          }
        }
      }
    } catch (error) {
      console.error('Error loading posted jobs from Supabase:', error);
    }
  }
  
  document.getElementById('postedCount').textContent=postedJobsByRecruiter.length;
  if(postedJobsByRecruiter.length===0){el.innerHTML=`<div class="card empty-state">${icon('briefcase','icon-lg')}<p>Nothing posted yet — it'll show up here.</p></div>`;return;}
  el.innerHTML=postedJobsByRecruiter.map(j=>`
    <div class="card">
      <div class="jtop"><div><h4 style="font-size:15px;">${j.title}</h4><span class="muted" style="font-size:12.5px;">${j.dept||'General'} · ${j.loc}</span></div><span class="badge badge-pending">Live</span></div>
      <div class="job-tags" style="margin-top:10px;"><span class="tag">${j.type}</span><span class="tag">${j.level}</span>${j.salary?'<span class="tag" style="font-family:var(--font-mono);">'+j.salary+'</span>':''}</div>
    </div>`).join('');
}

/* ================= SCREEN: RECRUITER APPLICANTS ================= */
let applicants=JSON.parse(JSON.stringify(APPLICANTS));
function screenRecruiterApplicants(){
  return `
  <div class="screen-head"><span class="eyebrow">Applicants</span><h2>Review who's applied</h2>
  <p>Move candidates through your pipeline — status updates instantly.</p></div>
  <div class="table-wrap"><table>
    <thead><tr><th>Candidate</th><th>Applying for</th><th>Experience</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody id="applicantsBody"></tbody>
  </table></div>`;
}
async function renderApplicantsBody(){
  const el=document.getElementById('applicantsBody');
  if(!el)return;
  
  // Reload applicants from Supabase if configured
  const client = getSupabase();
  if (client && isSupabaseConfigured()) {
    await loadApplicantsFromSupabase();
  }
  
  // Update local applicants from global APPLICANTS
  applicants = JSON.parse(JSON.stringify(APPLICANTS));
  
  el.innerHTML=applicants.map(a=>`
    <tr>
      <td style="display:flex;align-items:center;gap:10px;"><div class="avatar" style="background:${colorFor(a.name)};width:30px;height:30px;font-size:11px;">${a.name.split(' ').map(w=>w[0]).join('')}</div>${a.name}</td>
      <td>${a.role}</td><td class="muted">${a.exp}</td>
      <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
      <td class="action-row">
        <button class="btn btn-sm btn-ghost" data-status="${a.id}:Shortlisted">Shortlist</button>
        <button class="btn btn-sm btn-outline" data-status="${a.id}:Rejected">Reject</button>
      </td>
    </tr>`).join('');
  el.querySelectorAll('[data-status]').forEach(b=>b.addEventListener('click',async ()=>{
    const [id,status]=b.dataset.status.split(':');
    const a=applicants.find(x=>x.id==id);
    a.status=status;
    
    // Try to update in Supabase
    if (client && isSupabaseConfigured()) {
      try {
        const { error } = await client
          .from('applicants')
          .update({ status: status })
          .eq('id', id);
        
        if (error) throw error;
        
        // Also update application status if exists
        const { data: applicantData } = await client
          .from('applicants')
          .select('user_id, job_id')
          .eq('id', id)
          .single();
        
        if (applicantData) {
          await client
            .from('applications')
            .update({ status: status })
            .eq('user_id', applicantData.user_id)
            .eq('job_id', applicantData.job_id);
        }
      } catch (error) {
        console.error('Error updating applicant status in Supabase:', error);
      }
    }
    
    renderApplicantsBody();
    showToast(a.name+' moved to '+status);
    
    // Add notification for jobseeker when shortlisted or interview scheduled
    if(status === 'Shortlisted' || status === 'Interview'){
      // Try to create notification in Supabase
      if (client && isSupabaseConfigured()) {
        try {
          const { data: applicantData } = await client
            .from('applicants')
            .select('user_id')
            .eq('id', id)
            .single();
          
          if (applicantData) {
            const {error: notificationError} = await client
              .from('notifications')
              .insert({
                user_id: applicantData.user_id,
                type: status === 'Shortlisted' ? 'shortlist' : 'interview',
                title: status === 'Shortlisted' ? 'Application Shortlisted' : 'Interview Scheduled',
                message: `Your application for ${a.role} has been ${status.toLowerCase()}`,
                job_title: a.role,
                company: recruiterProfile.company || 'Company',
                read: false
              });
            if(notificationError) throw notificationError;
          }
        } catch (error) {
          console.error('Error creating notification in Supabase:', error);
        }
      }
    }
  }));
}

/* ================= SCREEN: RECRUITER SCHEDULE ================= */
function screenRecruiterSchedule(){
  return `
  <div class="screen-head"><span class="eyebrow">Schedule</span><h2>Upcoming interviews</h2>
  <p>Keep track of who you're talking to and when.</p></div>
  <div class="sec-title"><span></span><button class="btn btn-primary btn-sm" id="addScheduleBtn">${icon('plus')} Schedule new</button></div>
  <div class="schedule-list" id="scheduleList"></div>`;
}
async function renderScheduleList(){
  const el=document.getElementById('scheduleList');
  if(!el)return;
  
  // Reload schedule from Supabase if configured
  const client = getSupabase();
  if (client && isSupabaseConfigured()) {
    await loadScheduleFromSupabase();
  }
  
  if(SCHEDULE.length===0){el.innerHTML=`<div class="card empty-state">${icon('calendar','icon-lg')}<p>No interviews scheduled yet.</p></div>`;return;}
  el.innerHTML=SCHEDULE.map(s=>`
    <div class="card schedule-item">
      <div class="schedule-date"><div class="d">${s.date}</div><div class="m">${s.month}</div></div>
      <div style="flex:1;"><b>${s.candidate}</b><div class="muted" style="font-size:13px;">${s.role}</div></div>
      <div class="tag" style="font-family:var(--font-mono);">${icon('clock')} ${s.time}</div>
    </div>`).join('');
}
async function openScheduleModal(){
  openModal(`
    <div class="modal-head"><h3>Schedule an interview</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
    <form id="schedForm">
      <div class="field"><label>Candidate</label><input id="sf-cand" required></div>
      <div class="field"><label>Role</label><input id="sf-role" required></div>
      <div class="field-row"><div class="field"><label>Date</label><input id="sf-date" type="date" required></div>
      <div class="field"><label>Time</label><input id="sf-time" type="time" required></div></div>
      <button class="btn btn-primary" style="width:100%;margin-top:6px;" type="submit">${icon('calendar')} Confirm</button>
    </form>`);
  
  document.getElementById('schedForm').addEventListener('submit',async e=>{
    e.preventDefault();
    
    const scheduleData = {
      candidate: document.getElementById('sf-cand').value,
      role: document.getElementById('sf-role').value,
      date: document.getElementById('sf-date').value,
      time: document.getElementById('sf-time').value
    };
    
    const d = new Date(scheduleData.date + 'T00:00:00');
    
    // Try to save to Supabase first
    const client = getSupabase();
    if (client && isSupabaseConfigured()) {
      try {
        const { data: { user } } = await client.auth.getUser();
        if (user) {
          // Get recruiter profile
          const { data: recruiterProfile } = await client
            .from('recruiter_profiles')
            .select('id')
            .eq('user_id', user.id)
            .single();
          
          if (recruiterProfile) {
            const { error } = await client
              .from('interview_schedules')
              .insert({
                recruiter_id: recruiterProfile.id,
                candidate_name: scheduleData.candidate,
                role: scheduleData.role,
                interview_date: scheduleData.date,
                interview_time: scheduleData.time
              });
            
            if (error) throw error;
            
            // Reload schedule from Supabase
            await loadScheduleFromSupabase();
            closeModal();
            renderScheduleList();
            showToast('Interview scheduled');
            return;
          }
        }
      } catch (error) {
        console.error('Error scheduling interview in Supabase:', error);
        // Fall back to local storage
      }
    }
    
    // Fallback to local storage
    SCHEDULE.push({
      id: Date.now(),
      candidate: scheduleData.candidate,
      role: scheduleData.role,
      date: String(d.getDate()).padStart(2, '0'),
      month: d.toLocaleString('en', { month: 'short' }).toUpperCase(),
      time: scheduleData.time
    });
    closeModal();
    renderScheduleList();
    showToast('Interview scheduled (local)');
  });
}

/* ================= POST-RENDER HOOKS ================= */
async function afterRender(key){
  if(key==='jobseeker:onboarding'){
    const form = document.getElementById('onboardingForm');
    if(form){
      form.addEventListener('submit', handleOnboardingSubmit);
    }
  }
  if(key==='jobseeker:overview'){
    document.getElementById('ctaForm')?.addEventListener('submit',e=>{e.preventDefault();showToast('You\'re on the list — we\'ll be in touch');e.target.reset();});
  }
  if(key==='jobseeker:profile'){
    document.getElementById('downloadProfilePdfBtn')?.addEventListener('click', downloadResumePdf);
    const btn=document.getElementById('editProfileBtn');
    btn.addEventListener('click',async()=>{
      editMode=!editMode;
      ['pf-name','pf-role'].forEach(id=>document.getElementById(id).setAttribute('contenteditable',editMode));
      if(!editMode){
        // Save changes
        const nameEl = document.getElementById('pf-name');
        const roleEl = document.getElementById('pf-role');
        if(nameEl) profileName = nameEl.textContent.trim();
        if(roleEl) profileRole = roleEl.textContent.trim();
        if(await saveJobseekerProfileChanges()) showToast('Profile updated');
      }
      btn.innerHTML=editMode?(icon('check')+' Save changes'):(icon('pencil')+' Edit profile');
    });
    // Add skill button
    document.getElementById('addSkillBtn')?.addEventListener('click',()=>{
      openModal(`<div class="modal-head"><h3>Add skill</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
        <form id="addSkillForm"><div class="field"><label>Skill</label><input id="newSkillInput" required></div>
        <button class="btn btn-primary" style="width:100%;">Add</button></form>`);
      document.getElementById('addSkillForm').addEventListener('submit',async e=>{
        e.preventDefault();const v=document.getElementById('newSkillInput').value.trim();if(!v) return;profileSkills.push(v);
        if(!await saveJobseekerProfileChanges()) return;
        closeModal();await renderScreen();showToast('Skill added');
      });
    });
    // Remove skill handlers
    document.querySelectorAll('.rm-skill').forEach(b=>b.addEventListener('click',async()=>{
      const i=+b.dataset.i;profileSkills.splice(i,1);
      if(!await saveJobseekerProfileChanges()) return;
      renderScreen();showToast('Skill removed');
    }));
    // Add education button
    document.getElementById('addEduProfileBtn')?.addEventListener('click',()=>{
      openModal(`<div class="modal-head"><h3>Add education</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
        <form id="addEduForm">
          <div class="field"><label>Degree</label><input id="newEduDeg" required></div>
          <div class="field"><label>Institution</label><input id="newEduOrg" required></div>
          <div class="field"><label>Dates</label><input id="newEduWhen" required></div>
          <button class="btn btn-primary" style="width:100%;">Add education</button>
        </form>`);
      document.getElementById('addEduForm').addEventListener('submit',async e=>{
        e.preventDefault();const deg=document.getElementById('newEduDeg').value.trim();const org=document.getElementById('newEduOrg').value.trim();const when=document.getElementById('newEduWhen').value.trim();profileEducation.push({deg,org,when});
        // Sync to resume education entries
        eduEntries = [...profileEducation];
        if(!await saveJobseekerProfileChanges()) return;
        closeModal();await renderScreen();showToast('Education added');
      });
    });
    // Remove education handlers
    document.querySelectorAll('.rm-edu').forEach(b=>b.addEventListener('click',async()=>{
      const i=+b.dataset.i;profileEducation.splice(i,1);
      // Sync to resume education entries
      eduEntries = [...profileEducation];
      if(!await saveJobseekerProfileChanges()) return;
      renderScreen();showToast('Education removed');
    }));
    // Add experience button
    document.getElementById('addExpProfileBtn')?.addEventListener('click',()=>{
      openModal(`<div class="modal-head"><h3>Add experience</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
        <form id="addExpForm">
          <div class="field"><label>Role</label><input id="newExpRole" required></div>
          <div class="field"><label>Company</label><input id="newExpOrg" required></div>
          <div class="field"><label>Dates</label><input id="newExpWhen" required></div>
          <div class="field"><label>Description</label><textarea id="newExpDesc"></textarea></div>
          <button class="btn btn-primary" style="width:100%;">Add experience</button>
        </form>`);
      document.getElementById('addExpForm').addEventListener('submit',async e=>{
        e.preventDefault();
        const role=document.getElementById('newExpRole').value.trim();
        const org=document.getElementById('newExpOrg').value.trim();
        const when=document.getElementById('newExpWhen').value.trim();
        const desc=document.getElementById('newExpDesc').value.trim();
        profileExperience.push({role,org,when,desc});
        // Sync to resume experience entries
        expEntries = [...profileExperience];
        if(!await saveJobseekerProfileChanges()) return;
        closeModal();await renderScreen();showToast('Experience added');
      });
    });
    // Remove experience handlers
    document.querySelectorAll('.rm-exp').forEach(b=>b.addEventListener('click',async()=>{
      const i=+b.dataset.i;profileExperience.splice(i,1);
      // Sync to resume experience entries
      expEntries = [...profileExperience];
      if(!await saveJobseekerProfileChanges()) return;
      renderScreen();showToast('Experience removed');
    }));
    // Portfolio add/remove handlers
    document.getElementById('addPortfolioBtn')?.addEventListener('click',()=>{
      openModal(`<div class="modal-head"><h3>Add project</h3><button class="btn-icon" onclick="closeModal()">${icon('x')}</button></div>
        <form id="addPortfolioForm">
          <div class="field"><label>Project name</label><input id="newProjTitle" required></div>
          <div class="field"><label>Type</label><input id="newProjType"></div>
          <div class="field"><label>Link</label><input id="newProjLink" placeholder="https://"></div>
          <div class="field"><label>Tags (comma separated)</label><input id="newProjTags"></div>
          <div class="field"><label>Description</label><textarea id="newProjDesc"></textarea></div>
          <button class="btn btn-primary" style="width:100%;">Add project</button>
        </form>`);
      document.getElementById('addPortfolioForm').addEventListener('submit',async e=>{
        e.preventDefault();
        const title=document.getElementById('newProjTitle').value.trim();
        const type=document.getElementById('newProjType').value.trim();
        const link=document.getElementById('newProjLink').value.trim();
        const tags=document.getElementById('newProjTags').value.trim();
        const desc=document.getElementById('newProjDesc').value.trim();
        profilePortfolio.unshift({title,type,link,tags,desc});
        if(!await saveJobseekerProfileChanges()) return;
        closeModal();await renderScreen();showToast('Project added');
      });
    });
    document.querySelectorAll('.rm-portfolio').forEach(b=>b.addEventListener('click',async()=>{
      const i=+b.dataset.i;profilePortfolio.splice(i,1);
      if(!await saveJobseekerProfileChanges()) return;
      renderScreen();showToast('Project removed');
    }));
  }
  if(key==='jobseeker:resume'){
    expEntries = profileExperience.map(x=>({...x}));
    eduEntries = profileEducation.map(x=>({...x}));
    
    renderExpList();renderEduList();updateResumePreview();
    document.querySelectorAll('#in-name,#in-role,#in-email,#in-phone,#in-loc,#in-summary,#in-skills').forEach(el=>el.addEventListener('input',()=>{updateResumePreview();markResumeDirty();}));
    document.getElementById('addExpBtn').addEventListener('click',()=>{expEntries.push({role:'Role',org:'Company',when:'Dates',desc:'What you did.'});renderExpList();markResumeDirty();updateResumePreview();});
    document.getElementById('addEduBtn').addEventListener('click',()=>{eduEntries.push({deg:'Degree',org:'Institution',when:'Dates'});renderEduList();markResumeDirty();updateResumePreview();});
    document.querySelectorAll('.tpl-btn').forEach(b=>b.addEventListener('click',()=>{
      document.querySelectorAll('.tpl-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
      const prev=document.getElementById('resumePreview');prev.className='resume-preview tpl-'+b.dataset.tpl;
    }));
    document.getElementById('downloadPdfBtn').addEventListener('click', downloadResumePdf);
    document.getElementById('downloadProfilePdfBtn')?.addEventListener('click', downloadResumePdf);
    // Save resume data back to profile (name, role, contact, skills)
    document.getElementById('saveResumeBtn')?.addEventListener('click', saveResumeData);
    document.getElementById('saveResumeBtnBelow')?.addEventListener('click', saveResumeData);
    // also wire the floating save button to trigger the same save
    document.getElementById('resumeSaveNow')?.addEventListener('click', saveResumeData);
  }
  if(key==='jobseeker:jobs'){
    // Load saved jobs from Supabase
    loadSavedJobsFromSupabase();
    renderFilterRow();renderJobList();
    document.getElementById('jobSearchInput').addEventListener('input',e=>{jobFilters.search=e.target.value;renderJobList();});
    document.getElementById('jobLocInput').addEventListener('input',e=>{jobFilters.loc=e.target.value;renderJobList();});
    document.getElementById('jobSearchBtn').addEventListener('click',()=>renderJobList());
    document.getElementById('savedToggle').addEventListener('click',()=>{showSavedOnly=!showSavedOnly;renderJobList();});
    document.getElementById('refreshJobsBtn')?.addEventListener('click',async()=>{
      document.getElementById('refreshJobsBtn').disabled = true;
      document.getElementById('refreshJobsBtn').textContent = 'Refreshing...';
      await loadJobsFromSupabase();
      await loadSavedJobsFromSupabase();
      renderJobList();
      document.getElementById('refreshJobsBtn').disabled = false;
      document.getElementById('refreshJobsBtn').innerHTML = icon('download') + ' Refresh';
      showToast('Jobs refreshed');
    });
    // Start auto-sync when entering jobs section
    startJobsAutoSync();
  } else {
    // Stop auto-sync when leaving jobs section
    stopJobsAutoSync();
  }
  if(key==='jobseeker:mail'){
    // Mark notifications as read when clicked
    document.querySelectorAll('.mail-item').forEach(item => {
      item.addEventListener('click', async () => {
        if(await markNotificationAsRead(item.dataset.id)){
          item.classList.remove('unread');
          item.classList.add('read');
          item.querySelector('.mail-indicator')?.remove();
        }
      });
    });
  }
  if(key==='jobseeker:interview'){
    renderCatRow();
    renderFlipGrid();
  }
  if(key==='jobseeker:assistant'){
    interviewChatMessages.forEach(message => addChatMessage(message.sender, message.message, false));
    const form = document.getElementById('aiChatForm');
    const input = document.getElementById('aiChatInput');
    form?.addEventListener('submit', async event=>{
      event.preventDefault();
      await submitAIAnswer();
    });
    input?.addEventListener('keydown', event=>{
      if(event.key === 'Enter' && !event.shiftKey){
        event.preventDefault();
        form?.requestSubmit();
      }
    });
    input?.addEventListener('input', ()=>{
      input.style.height = 'auto';
      input.style.height = `${Math.min(input.scrollHeight, 180)}px`;
    });
    document.getElementById('aiChatSettingsBtn')?.addEventListener('click', configureGroqKey);
    document.getElementById('aiNewChatBtn')?.addEventListener('click', async()=>{
      if(isChatRequestPending) return;
      interviewChatMessages = [];
      await renderScreen();
    });
    document.querySelectorAll('[data-chat-prompt]').forEach(button=>button.addEventListener('click', ()=>{
      if(!input || isChatRequestPending) return;
      input.value = button.dataset.chatPrompt;
      form?.requestSubmit();
    }));
    if(interviewChatMessages.length) document.getElementById('aiChatMessages').scrollTop = document.getElementById('aiChatMessages').scrollHeight;
  }
  if(key==='jobseeker:learning'){renderRoadmapSelect();renderRoadmapBody();}
  if(key==='recruiter:profile'){
    document.getElementById('editRecruiterProfileBtn')?.addEventListener('click', openEditRecruiterProfileModal);
  }
  if(key==='recruiter:post'){
    renderPostedList();
    document.getElementById('postJobForm').addEventListener('submit',async e=>{
      e.preventDefault();
      
      const jobData = {
        title: document.getElementById('pj-title').value,
        dept: document.getElementById('pj-dept').value,
        loc: document.getElementById('pj-loc').value,
        type: document.getElementById('pj-type').value,
        level: document.getElementById('pj-level').value,
        salary: document.getElementById('pj-salary').value,
        description: document.getElementById('pj-desc').value,
        skills: document.getElementById('pj-skills').value.split(',').map(s => s.trim()).filter(Boolean)
      };
      
      // Try to save to Supabase first
      const client = getSupabase();
      if (client && isSupabaseConfigured()) {
        try {
          const { data: { user } } = await client.auth.getUser();
          if (user) {
            // Get recruiter profile
            const { data: recruiterProfile } = await client
              .from('recruiter_profiles')
              .select('id, company')
              .eq('user_id', user.id)
              .single();
            
            if (recruiterProfile) {
              const { data, error } = await client
                .from('jobs')
                .insert({
                  recruiter_id: recruiterProfile.id,
                  title: jobData.title,
                  company: recruiterProfile.company,
                  location: jobData.loc,
                  type: jobData.type,
                  level: jobData.level,
                  salary: jobData.salary,
                  description: jobData.description,
                  skills: jobData.skills,
                  department: jobData.dept,
                  status: 'active'
                })
                .select()
                .single();
              
              if (error) throw error;
              
              // Add to local posted jobs with Supabase ID
              postedJobsByRecruiter.unshift({
                id: data.id,
                title: jobData.title,
                dept: jobData.dept,
                loc: jobData.loc,
                type: jobData.type,
                level: jobData.level,
                salary: jobData.salary
              });
              
              e.target.reset();
              renderPostedList();
              showToast('Job posted successfully to Supabase');
              return;
            }
          }
        } catch (error) {
          console.error('Error posting job to Supabase:', error);
          // Fall back to local storage
        }
      }
      
      // Fallback to local storage
      postedJobsByRecruiter.unshift({
        id: Date.now(),
        title: jobData.title,
        dept: jobData.dept,
        loc: jobData.loc,
        type: jobData.type,
        level: jobData.level,
        salary: jobData.salary
      });
      e.target.reset();
      renderPostedList();
      showToast('Job posted successfully (local)');
    });
  }
  if(key==='recruiter:applicants'){await renderApplicantsBody();}
  if(key==='recruiter:schedule'){renderScheduleList();document.getElementById('addScheduleBtn').addEventListener('click',openScheduleModal);}
}

/* ================= INIT ================= */
async function initApp() {
  // Load data from Supabase if configured
  await loadJobsFromSupabase();
  await loadCoursesFromSupabase();
  await loadInterviewQuestionsFromSupabase();
  await loadRoadmapsFromSupabase();
  await loadNotificationsFromSupabase();
  await loadApplicantsFromSupabase();
  await loadScheduleFromSupabase();
  
  renderSubnav();
  await renderScreen();
}

// Initialize the app
initApp();

/* ================= SIDEBAR COLLAPSE TOGGLE ================= */
(function(){
  const subnav = document.getElementById('siteSubnav');
  const collapseBtn = document.getElementById('subnavCollapse');
  if(!subnav || !collapseBtn) return;
  function setSidebarState(collapsed){
    if(collapsed){
      subnav.classList.add('collapsed');
      collapseBtn.textContent='›';
    } else {
      subnav.classList.remove('collapsed');
      collapseBtn.textContent='‹';
    }
    localStorage.setItem('hirez-sidebar-collapsed', collapsed? '1' : '0');
  }
  collapseBtn.addEventListener('click', ()=>{
    setSidebarState(!subnav.classList.contains('collapsed'));
  });
  // initialize from saved state
  const saved = localStorage.getItem('hirez-sidebar-collapsed')==='1';
  setSidebarState(saved);
})();
