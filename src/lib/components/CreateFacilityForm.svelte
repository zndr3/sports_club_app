<script lang="ts">
    import { supabase } from '$lib/supabase';

    let name = $state('');
    let membercost = $state('');
    let guestcost = $state('');
    let initialoutlay = $state('');
    let monthlymaintenance = $state('');
    let isLoading = $state(false);
    let successMessage = $state('');
    let errorMessage = $state('');

    async function handleSubmit() {
        isLoading = true;
        successMessage = '';
        errorMessage = '';

        // Validate form inputs
        if (!name.trim() || !membercost || !guestcost || !initialoutlay || !monthlymaintenance) {
            errorMessage = 'Please fill in all required fields';
            isLoading = false;
            return;
        }

        try {
            console.log('Submitting facility data:', { name, membercost, guestcost, initialoutlay, monthlymaintenance });

            const insertData = {
                name: name.trim(),
                membercost: parseFloat(membercost),
                guestcost: parseFloat(guestcost),
                initialoutlay: parseFloat(initialoutlay),
                monthlymaintenance: parseFloat(monthlymaintenance),
            };

            const { data, error } = await supabase
                .from('management_facility')
                .insert([insertData])
                .select();

            if (error) {
                console.error('Supabase insert error:', error);
                errorMessage = `Error creating facility: ${error.message}`;
            } else {
                console.log('Facility created successfully:', data);
                successMessage = 'Facility created successfully!';
                name = '';
                membercost = '';
                guestcost = '';
                initialoutlay = '';
                monthlymaintenance = '';
                
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

<div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Add New Facility</h2>

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
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Facility Name
            </label>
            <input
                type="text"
                id="name"
                bind:value={name}
                required
                placeholder="Enter facility name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="membercost" class="block text-sm font-medium text-gray-700 mb-1">
                Member Cost ($)
            </label>
            <input
                type="number"
                id="membercost"
                bind:value={membercost}
                required
                placeholder="Enter member cost"
                step="0.01"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="guestcost" class="block text-sm font-medium text-gray-700 mb-1">
                Guest Cost ($)
            </label>
            <input
                type="number"
                id="guestcost"
                bind:value={guestcost}
                required
                placeholder="Enter guest cost"
                step="0.01"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="initialoutlay" class="block text-sm font-medium text-gray-700 mb-1">
                Initial Outlay ($)
            </label>
            <input
                type="number"
                id="initialoutlay"
                bind:value={initialoutlay}
                required
                placeholder="Enter initial outlay"
                step="0.01"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="monthlymaintenance" class="block text-sm font-medium text-gray-700 mb-1">
                Monthly Maintenance ($)
            </label>
            <input
                type="number"
                id="monthlymaintenance"
                bind:value={monthlymaintenance}
                required
                placeholder="Enter monthly maintenance cost"
                step="0.01"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
        </div>

        <button
            type="submit"
            disabled={isLoading}
            class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
        >
            {isLoading ? 'Creating...' : 'Create Facility'}
        </button>
    </form>
</div>
