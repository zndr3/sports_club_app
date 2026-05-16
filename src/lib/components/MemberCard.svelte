<script>
    // Define the custom props this card accepts
    let { firstname, surname, address, joindate } = $props();
</script>

<div class="card">
    <h3>{firstname} {surname}</h3>
    <span>Address: {address}</span>
    <span>Join Date: {joindate}</span>
</div>

<style>
    .card { display: flex; flex-direction: column; border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
</style>