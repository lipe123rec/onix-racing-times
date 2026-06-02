import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

export const SUPABASE_URL = 'https://hnruwlxmarapeaexaarh.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhucnV3bHhtYXJhcGVhZXhhYXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODQ4NjksImV4cCI6MjA5NDc2MDg2OX0.973-fgI5bMxZJHcvVqBG0yh7xxbxzsjXqMUkELo_Emk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
