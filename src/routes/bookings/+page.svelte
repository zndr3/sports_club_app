<script>
	import BookingCard from '$lib/components/BookingCard.svelte';
	// 'data' comes from the load function above
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-2">Bookings</h1>
			<p class="text-gray-600">Manage and view all facility bookings</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.bookings as booking (booking.id)}
				<BookingCard  data = {booking} />
			{:else}
				<div class="col-span-full">
					<div class="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
						<p class="text-blue-800 text-lg font-medium">No bookings found. Ready to create one?</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
