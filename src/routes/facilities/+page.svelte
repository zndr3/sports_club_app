<script>
	// 'data' comes from the load function above
	let { data } = $props();
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-2">Facilities</h1>
			<p class="text-gray-600">Browse all available sports facilities</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.projects as facility (facility.facid)}
				<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-green-600">
					<div class="p-6">
						<h3 class="text-xl font-bold text-gray-900 mb-4">{facility.name}</h3>
						<div class="space-y-3">
							<div class="flex justify-between items-center bg-gray-50 p-3 rounded">
								<span class="text-gray-600 font-medium">Member Cost:</span>
								<span class="text-green-600 font-bold text-lg">${facility.membercost}</span>
							</div>
							<div class="flex justify-between items-center bg-gray-50 p-3 rounded">
								<span class="text-gray-600 font-medium">Guest Cost:</span>
								<span class="text-blue-600 font-bold text-lg">${facility.guestcost}</span>
							</div>
							<div class="border-t pt-3">
								<div class="flex justify-between items-center mb-2">
									<span class="text-gray-600 font-medium">Initial Outlay:</span>
									<span class="text-gray-900 font-semibold">${facility.initialoutlay}</span>
								</div>
								<div class="flex justify-between items-center">
									<span class="text-gray-600 font-medium">Monthly Maintenance:</span>
									<span class="text-gray-900 font-semibold">${facility.monthlymaintenance}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div class="col-span-full">
					<div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
						<p class="text-green-800 text-lg font-medium">No facilities found. Add some to get started!</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
