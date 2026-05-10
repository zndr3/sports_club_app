import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yiwjvbnexolwgaynjaxg.supabase.co';

const supabaseKey = 'sb_publishable_z6geJbTcvSOpNGIhG7HnJw_t78sVWcH';

export const supabase = createClient(supabaseUrl, supabaseKey);
