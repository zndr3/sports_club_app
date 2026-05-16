<script>
    let count = $state(0);

    $effect(() => {
    console.log(`The count is now ${count}`);
    });

</script>

<button onclick={() => count++}>
Increase
</button>

<h1>Welcome to SvelteKit Practice</h1>


