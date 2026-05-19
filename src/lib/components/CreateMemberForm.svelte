<script>
    import { supabase } from '$lib/supabase';
    import { onMount } from 'svelte';

    let firstname = $state('');
    let surname = $state('');
    let address = $state('');
    let zipcode = $state('');
    let joindate = $state('');
    let telephone = $state('');
    let recommendedby_id = $state(null);
    let isLoading = $state(false);
    let successMessage = $state('');
    let errorMessage = $state('');
    let members = $state([]);
    let membersLoading = $state(true);

    onMount(async () => {
        await loadMembers();
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

    async function handleSubmit() {
        isLoading = true;
        successMessage = '';
        errorMessage = '';

        // Validate form inputs
        if (!firstname.trim() || !surname.trim() || !address.trim() || !zipcode || !joindate || !telephone.trim()) {
            errorMessage = 'Please fill in all required fields';
            isLoading = false;
            return;
        }

        try {
            console.log('Submitting member data:', { firstname, surname, address, zipcode, joindate, telephone, recommendedby_id });

            const insertData = {
                firstname: firstname.trim(),
                surname: surname.trim(),
                address: address.trim(),
                zipcode: zipcode.trim(),
                joindate,
                telephone: telephone.trim(),
            };

            // Only add recommendedby_id if a member was selected (not null)
            if (recommendedby_id) {
                insertData.recommendedby_id = recommendedby_id;
            }

            const { data, error } = await supabase
                .from('management_member')
                .insert([insertData])
                .select();

            if (error) {
                console.error('Supabase insert error:', error);
                errorMessage = `Error creating member: ${error.message}`;
            } else {
                console.log('Member created successfully:', data);
                successMessage = 'Member created successfully!';
                firstname = '';
                surname = '';
                address = '';
                zipcode = '';
                joindate = '';
                telephone = '';
                recommendedby_id = null;
                
                // Refresh after 2 seconds instead of immediate reload for better UX
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            // errorMessage = `Unexpected error: ${err.message}`;
        } finally {
            isLoading = false;
        }
    }
</script>

<div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Add New Member</h2>

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
            <label for="firstname" class="block text-sm font-medium text-gray-700 mb-1">
                First Name
            </label>
            <input
                type="text"
                id="firstname"
                bind:value={firstname}
                required
                placeholder="Enter first name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="surname" class="block text-sm font-medium text-gray-700 mb-1">
                Surname
            </label>
            <input
                type="text"
                id="surname"
                bind:value={surname}
                required
                placeholder="Enter surname"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="address" class="block text-sm font-medium text-gray-700 mb-1">
                Address
            </label>
            <input
                type="text"
                id="address"
                bind:value={address}
                required
                placeholder="Enter address"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="zipcode" class="block text-sm font-medium text-gray-700 mb-1">
                Zip Code
            </label>
            <input
                type="text"
                id="zipcode"
                bind:value={zipcode}
                required
                placeholder="Enter zip code"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="joindate" class="block text-sm font-medium text-gray-700 mb-1">
                Join Date
            </label>
            <input
                type="date"
                id="joindate"
                bind:value={joindate}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="telephone" class="block text-sm font-medium text-gray-700 mb-1">
                Telephone
            </label>
            <input
                type="text"
                id="telephone"
                bind:value={telephone}
                required
                placeholder="Enter telephone number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>

        <div>
            <label for="recommendedby_id" class="block text-sm font-medium text-gray-700 mb-1">
                Recommended by 
            </label>
            <select
                id="recommendedby_id"
                bind:value={recommendedby_id}
                disabled={membersLoading}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white"
            >
                <option value={null}>None</option>
                {#each members as member (member.memid)}
                    <option value={member.memid}>
                        {member.firstname} {member.surname}
                    </option>
                {/each}
            </select>
            {#if membersLoading}
                <p class="text-sm text-gray-500 mt-1">Loading members...</p>
            {/if}
        </div>

        <button
            type="submit"
            disabled={isLoading}
            class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
            {isLoading ? 'Creating Member...' : 'Create Member'}
        </button>
    </form>
</div>
