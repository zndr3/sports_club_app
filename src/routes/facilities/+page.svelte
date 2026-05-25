<script>
	// 'data' comes from the load function above
	let { data } = $props();
	import FacilityCard from '$lib/components/FacilityCard.svelte';
	import CreateFacilityForm from '$lib/components/CreateFacilityForm.svelte';
	let showForm = $state(false);
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-7xl mx-auto">
		<div class="mb-8 flex justify-between items-center">
			<div>
				<h1 class="text-4xl font-bold text-gray-900 mb-2">Facilities</h1>
				<p class="text-gray-600">Browse all available sports facilities</p>
			</div>
			<button
				onclick={() => (showForm = !showForm)}
				class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
			>
				Create Facility
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
						<CreateFacilityForm />
					</div>
				</div>
			</div>
		{/if}

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
