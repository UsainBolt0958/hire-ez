// Supabase Configuration
const SUPABASE_CONFIG = {
  url: 'https://wtpgbkzrtjgbzmqlmtmy.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cGdia3pydGpnYnptcWxtdG15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMzE5OTUsImV4cCI6MjEwMzkwNzk5NX0.K3BgujiPMIY1lYP5vw_Ek7cM8qLQ6OamBdwhofyS7yU'
};

// Initialize Supabase client
let supabaseClient = null;

function initSupabase() {
  if (supabaseClient) return supabaseClient;
  
  try {
    if (window.supabase) {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      console.log('Supabase client initialized');
      return supabaseClient;
    } else {
      console.error('Supabase client not loaded. Make sure the CDN script is included.');
    }
  } catch (error) {
    console.error('Error initializing Supabase:', error);
  }
  
  return null;
}

// Get Supabase client instance
function getSupabase() {
  if (!supabaseClient) {
    return initSupabase();
  }
  return supabaseClient;
}

// Check if Supabase is configured
function isSupabaseConfigured() {
  return SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_PROJECT_URL' && 
         SUPABASE_CONFIG.anonKey !== 'YOUR_SUPABASE_ANON_KEY';
}