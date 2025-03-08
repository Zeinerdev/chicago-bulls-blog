import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://swzmuctsfhzvfeyonwxk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3em11Y3RzZmh6dmZleW9ud3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTI5MTgsImV4cCI6MjA1Njc2ODkxOH0.pwyEBE3-l44Vpp140jJy8d9Md1RpmIXI2f8QmkSfSCg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
