<script lang="ts">
    import { supabase } from '$lib/supabase';
    import { onMount } from 'svelte';

    let starttime = $state('');
    let slots = $state('');
    let management_memid_id = $state(null);
    let management_facid_id = $state(null);
    let isLoading = $state(false);
    let successMessage = $state('');
    let errorMessage = $state('');
    let members: Array<{memid: number, firstname: string, surname: string}> = $state([]);
    let facilities: Array<{facid: number, name: string}> = $state([]);
    let membersLoading = $state(true);
    let facilitiesLoading = $state(true);

    onMount(async () => {
        await loadMembers();
        await loadFacilities();
    });

    async function loadMembers() {
        try {
            const { data, error } = await supabase
                .from('management_member')
                .select('memid, firstname, surname')
                .order('firstname', { ascending: true });

            if (error) {
                console.error('Error loading members:', error);
                errorMessage = 'Failed to load members list';
            } else {
                members = data || [];
            }
        } catch (err) {
            console.error('Unexpected error loading members:', err);
        } finally {
            membersLoading = false;
        }
    }

    async function loadFacilities() {
        try {
            const { data, error } = await supabase
                .from('management_facility')
                .select('facid, name')
                .order('name', { ascending: true });

            if (error) {
                console.error('Error loading facilities:', error);
                errorMessage = 'Failed to load facilities list';
            } else {
                facilities = data || [];
            }
        } catch (err) {
            console.error('Unexpected error loading facilities:', err);
        } finally {
            facilitiesLoading = false;
        }
    }

    async function handleSubmit() {
        isLoading = true;
        successMessage = '';
        errorMessage = '';

        // Validate form inputs
        if (!starttime || !slots || !management_memid_id || !management_facid_id) {
            errorMessage = 'Please fill in all required fields';
            isLoading = false;
            return;
        }

        try {
            console.log('Submitting booking data:', { starttime, slots, management_memid_id, management_facid_id });

            const insertData = {
                starttime,
                slots: parseInt(slots),
                memid_id: parseInt(management_memid_id),
                facid_id: parseInt(management_facid_id),
            };

            const { data, error } = await supabase
                .from('management_booking')
                .insert([insertData])
                .select();

            if (error) {
                console.error('Supabase insert error:', error);
                errorMessage = `Error creating booking: ${error.message}`;
            } else {
                console.log('Booking created successfully:', data);
                successMessage = 'Booking created successfully!';
                starttime = '';
                slots = '';
                management_memid_id = null;
                management_facid_id = null;
                
                // Refresh after 2 seconds instead of immediate reload for better UX
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        } finally {
            isLoading = false;
        }
    }
</script>

<div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Create New Booking</h2>

    {#if successMessage}
        <div class="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-800 font-medium">{successMessage}</p>
        </div>
    {/if}

    {#if errorMessage}
        <div class="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800 font-medium">{errorMessage}</p>
        </div>
    {/if}

    <form onsubmit={handleSubmit} class="space-y-4">
        <div>
            <label for="starttime" class="block text-sm font-medium text-gray-700 mb-1">
                Start Time
            </label>
            <input
                type="datetime-local"
                id="starttime"
                bind:value={starttime}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="slots" class="block text-sm font-medium text-gray-700 mb-1">
                Number of Slots
            </label>
            <input
                type="number"
                id="slots"
                bind:value={slots}
                required
                placeholder="Enter number of slots"
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="member" class="block text-sm font-medium text-gray-700 mb-1">
                Member
            </label>
            {#if membersLoading}
                <div class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                    Loading members...
                </div>
            {:else}
                <select
                    id="member"
                    bind:value={management_memid_id}
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                    <option value={null}>Select a member</option>
                    {#each members as member (member.memid)}
                        <option value={member.memid}>
                            {member.firstname} {member.surname}
                        </option>
                    {/each}
                </select>
            {/if}
        </div>

        <div>
            <label for="facility" class="block text-sm font-medium text-gray-700 mb-1">
                Facility
            </label>
            {#if facilitiesLoading}
                <div class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                    Loading facilities...
                </div>
            {:else}
                <select
                    id="facility"
                    bind:value={management_facid_id}
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                    <option value={null}>Select a facility</option>
                    {#each facilities as facility (facility.facid)}
                        <option value={facility.facid}>
                            {facility.name}
                        </option>
                    {/each}
                </select>
            {/if}
        </div>

        <button
            type="submit"
            disabled={isLoading}
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
            {isLoading ? 'Creating...' : 'Create Booking'}
        </button>
    </form>
</div>
