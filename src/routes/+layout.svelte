<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	
</svelte:head>

<NavBar />

<main class="min-h-screen bg-gray-50">
	{@render children()}
</main>
