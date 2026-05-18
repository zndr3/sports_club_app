<script>
    import { supabase } from '$lib/supabase';

    let firstname = '';
    let surname = '';
    let address = '';
    let joindate = '';
    let isLoading = false;
    let successMessage = '';
    let errorMessage = '';

    async function handleSubmit(e) {
        e.preventDefault();
        isLoading = true;
        successMessage = '';
        errorMessage = '';

        try {
            const { error } = await supabase
                .from('management_member')
                .insert([
                    {
                        firstname,
                        surname,
                        address,
                        joindate,
                    },
                ]);

            if (error) {
                errorMessage = `Error creating member: ${error.message}`;
            } else {
                successMessage = 'Member created successfully!';
                firstname = '';
                surname = '';
                address = '';
                joindate = '';
                // Optional: Trigger a parent event to refresh the member list
                window.location.reload();
            }
        } catch (err) {
            errorMessage = `Unexpected error: ${err.message}`;
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

    <form on:submit={handleSubmit} class="space-y-4">
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

        <button
            type="submit"
            disabled={isLoading}
            class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
            {isLoading ? 'Creating Member...' : 'Create Member'}
        </button>
    </form>
</div>
