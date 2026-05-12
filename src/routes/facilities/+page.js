import { supabase } from '$lib/supabase';

export async function load() {
    // Fetch all rows from a table named 'management_facility'
    const { data, error } = await supabase
        .from('management_facility')
        .select('*');

    if (error) {
        console.error('Fetch error:', error);
        return { projects: [] };
    }

    return { projects: data };
}
