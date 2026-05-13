<script>
    // 'data' comes from the load function above
    let { data } = $props(); 
</script>

<h1>Bookings</h1>

<div class="grid">
    {#each data.projects as booking}
        <div class="card">
            <h3>{booking.id}</h3>
            <span>Start Time: {booking.starttime}</span>
            <span>Slot: {booking.slots}</span>
            <span>Member: {booking.management_member?.firstname ?? 'N/A'}</span>
            <span>Facility: {booking.management_facility.name}</span>
        </div>
    {:else}
        <p>No management bookings found. Time to create one!</p>
    {/each}
</div>

<style>
    .grid { display: flex; gap: 1rem; flex-wrap: wrap; }
    .card { display: flex; flex-direction: column; border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
</style>
