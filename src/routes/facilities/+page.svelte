<script>
	// 'data' comes from the load function above
	let { data } = $props();
</script>

<h1>Facilities</h1>

<div class="grid">
	{#each data.projects as facility (facility.facid)}
		<div class="card">
			<h3>{facility.name}</h3>
			<span>Member Cost: {facility.membercost}</span>
			<span>Guest Cost: {facility.guestcost}</span>
			<span>Initial Outlay: {facility.initialoutlay}</span>
			<span>Monthly Maintenance: {facility.monthlymaintenance}</span>
		</div>
	{:else}
		<p>No management facilities found. Time to create one!</p>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.card {
		display: flex;
		flex-direction: column;
		border: 1px solid #ccc;
		padding: 1rem;
		border-radius: 8px;
	}
</style>
