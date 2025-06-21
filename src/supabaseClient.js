import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbxwdkuzaattsavvfyjz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZieHdka3V6YWF0dHNhdnZmeWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0OTQzMjUsImV4cCI6MjA2NjA3MDMyNX0.pFDZ_aWa8b21fcmQTv5V0n7jtmff6ew86WejTLr9Jyc'; // Replace this!

export const supabase = createClient(supabaseUrl, supabaseKey);
