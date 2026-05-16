<!-- src/routes/members/+page.svelte -->
<script>
    import MemberCard from '$lib/components/MemberCard.svelte';
    
    let { data } = $props(); 
</script>

<h1>Members</h1>

<div class="grid">
    {#each data.projects as member (member.memid)}
        <!-- Pass individual properties as props -->
        <MemberCard 
            firstname={member.firstname} 
            surname={member.surname} 
            address={member.address} 
            joindate={member.joindate} 
        />
    {:else}
        <p>No members found.</p>
    {/each}
</div>
