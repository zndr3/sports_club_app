import { supabase } from '$lib/supabase';

export async function load() {
    // Fetch all rows from a table named 'management_facility'
    const { data, error } = await supabase
        .from('management_member')
        .select('*');

    if (error) {
        console.error('Fetch error:', error);
        return { members: [] };
    }

    return { members: data };
}
