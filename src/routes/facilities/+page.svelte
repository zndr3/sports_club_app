<script>
	// 'data' comes from the load function above
	let { data } = $props();
	import FacilityCard from '$lib/components/FacilityCard.svelte';
	import CreateFacilityForm from '$lib/components/CreateFacilityForm.svelte';
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-gray-900 mb-2">Facilities</h1>
			<p class="text-gray-600">Browse all available sports facilities</p>
		</div>

		<div class="mb-8">
			<CreateFacilityForm />
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.facilities as facility (facility.facid)}
				<FacilityCard data = {facility} />
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
