<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/facilities">Facilities</a>
	<a href="/members">Members</a>
	<a href="/bookings">Bookings</a>
</nav>

{@render children()}

<style>
	
	nav {
		display: flex;
		gap: 2rem;
		padding: 1rem 2rem;
		background-color: #2c3e50;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	nav a {
		color: #ecf0f1;
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	nav a:hover {
		background-color: #34495e;
		color: #fff;
	}

	nav a:focus {
		outline: 2px solid #3498db;
		outline-offset: 2px;
	}
</style>
