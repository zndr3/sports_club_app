<script>
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
			{#each data.projects as booking (booking.id)}
				<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-blue-600">
					<div class="p-6">
						<div class="flex items-center justify-between mb-4">
							<h3 class="text-lg font-bold text-gray-900">Booking #{booking.id}</h3>
							<span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
								Active
							</span>
						</div>
						<div class="space-y-3 text-sm">
							<div class="flex justify-between items-start">
								<span class="text-gray-600 font-medium">Start Time:</span>
								<span class="text-gray-900 font-semibold">{booking.starttime}</span>
							</div>
							<div class="flex justify-between items-start">
								<span class="text-gray-600 font-medium">Slot:</span>
								<span class="text-gray-900 font-semibold">{booking.slots}</span>
							</div>
							<div class="flex justify-between items-start">
								<span class="text-gray-600 font-medium">Member:</span>
								<span class="text-gray-900 font-semibold">{booking.management_member?.firstname ?? 'N/A'}</span>
							</div>
							<div class="flex justify-between items-start border-t pt-3">
								<span class="text-gray-600 font-medium">Facility:</span>
								<span class="text-blue-600 font-semibold">{booking.management_facility.name}</span>
							</div>
						</div>
					</div>
				</div>
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
