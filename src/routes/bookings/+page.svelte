<script>
	import BookingCard from '$lib/components/BookingCard.svelte';
	import CreateBookingForm from '$lib/components/CreateBookingForm.svelte';
	// 'data' comes from the load function above
	let { data } = $props();
	let showForm = $state(false);
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8 flex justify-between items-center">
			<div>
				<h1 class="text-4xl font-bold text-gray-900 mb-2">Bookings</h1>
				<p class="text-gray-600">Manage and view all facility bookings</p>
			</div>
			<button
				onclick={() => (showForm = !showForm)}
				class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
			>
				Create Booking
			</button>
		</div>

		{#if showForm}
			<div class="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50 p-4">
				<div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
					<button
						onclick={() => (showForm = false)}
						class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
					>
						×
					</button>
					<div class="p-6">
						<CreateBookingForm />
					</div>
				</div>
			</div>
		{/if}

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
