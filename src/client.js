import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ozayiwyhuhyxtshoojoo.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log("Supabase Key:", supabaseKey); // This should print your API key if loaded correctly

export const supabase = createClient(supabaseUrl, supabaseKey);