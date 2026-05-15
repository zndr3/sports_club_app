<script>
    // 'data' comes from the load function above
    let { data } = $props(); 
</script>

<h1>Members</h1>

<div class="grid">
    {#each data.projects as member (member.memid)}
        <div class="card">
            <h3>{member.firstname} {member.surname}</h3>
            <span>Address: {member.address}</span>
            <span>Join Date: {member.joindate}</span>
        </div>
    {:else}
        <p>No members found. Time to create one!</p>
    {/each}
</div>

<style>
    .grid { display: flex; gap: 1rem; flex-wrap: wrap; }
    .card { display: flex; flex-direction: column; border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
</style>
