import { supabase } from '$lib/supabase';

export async function load() {
    // Fetch all rows from a table named 'management_booking'
    const { data, error } = await supabase
        .from('management_booking') 
        .select(`
            *,
            management_member ( memid, firstname),
            management_facility ( facid, name )
        `);

    if (error) {
        console.error('Fetch error:', error);
        return { bookings: [] };
    }

    return { bookings:data };
}
