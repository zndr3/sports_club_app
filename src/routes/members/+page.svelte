<!-- src/routes/members/+page.svelte -->
<script>
    import MemberCard from '$lib/components/MemberCard.svelte';
    import CreateMemberForm from '$lib/components/CreateMemberForm.svelte';
    
    let { data } = $props();
    let showForm = $state(false);
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="mb-8 flex justify-between items-center">
            <div>
                <h1 class="text-4xl font-bold text-gray-900 mb-2">Members</h1>
                <p class="text-gray-600">Manage and view all club members</p>
            </div>
            <button
                onclick={() => (showForm = !showForm)}
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
            >
                Create Member
            </button>
        </div>

        {#if showForm}
            <div class="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50 p-4">
                <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
                    <button
                        onclick={() => (showForm = false)}
                        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                        ×
                    </button>
                    <div class="p-6">
                        <CreateMemberForm />
                    </div>
                </div>
            </div>
        {/if}

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each data.members as member (member.memid)}
                <!-- Pass individual properties as props -->
                <MemberCard data = {member}/>
            {:else}
                <div class="col-span-full">
                    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                        <p class="text-purple-800 text-lg font-medium">No members found. Ready to add some?</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
