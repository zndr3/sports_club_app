<!-- src/routes/members/+page.svelte -->
<script>
    import MemberCard from '$lib/components/MemberCard.svelte';
    import CreateMemberForm from '$lib/components/CreateMemberForm.svelte';
    
    let { data } = $props(); 
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Members</h1>
            <p class="text-gray-600">Manage and view all club members</p>
        </div>

        <div class="mb-8">
            <CreateMemberForm />
        </div>

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
