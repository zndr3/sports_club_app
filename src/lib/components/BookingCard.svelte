<script>
	let { data } = $props();
</script>

<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-blue-600">
	<div class="p-6">
		<div class="flex items-center justify-between mb-4">
			<h3 class="text-lg font-bold text-gray-900">Booking #{data.id}</h3>
			<span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
				Active
			</span>
		</div>
		<div class="space-y-3 text-sm">
			<div class="flex justify-between items-start">
				<span class="text-gray-600 font-medium">Start Time:</span>
				<span class="text-gray-900 font-semibold">{data.starttime}</span>
			</div>
			<div class="flex justify-between items-start">
				<span class="text-gray-600 font-medium">Slot:</span>
				<span class="text-gray-900 font-semibold">{data.slots}</span>
			</div>
			<div class="flex justify-between items-start">
				<span class="text-gray-600 font-medium">Member:</span>
				<span class="text-gray-900 font-semibold">{data.management_member?.firstname ?? 'N/A'}</span>
			</div>
			<div class="flex justify-between items-start border-t pt-3">
				<span class="text-gray-600 font-medium">Facility:</span>
				<span class="text-blue-600 font-semibold">{data.management_facility.name}</span>
			</div>
		</div>
	</div>
</div>
