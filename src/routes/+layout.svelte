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
