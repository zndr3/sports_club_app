<script>
	// Define the custom props this card accepts
	let { data } = $props();
</script>

<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-green-600">
	<div class="p-6">
		<h3 class="text-xl font-bold text-gray-900 mb-4">{data.name}</h3>
		<div class="space-y-3">
			<div class="flex justify-between items-center bg-gray-50 p-3 rounded">
				<span class="text-gray-600 font-medium">Member Cost:</span>
				<span class="text-green-600 font-bold text-lg">${data.membercost}</span>
			</div>
			<div class="flex justify-between items-center bg-gray-50 p-3 rounded">
				<span class="text-gray-600 font-medium">Guest Cost:</span>
				<span class="text-blue-600 font-bold text-lg">${data.guestcost}</span>
			</div>
			<div class="border-t pt-3">
				<div class="flex justify-between items-center mb-2">
					<span class="text-gray-600 font-medium">Initial Outlay:</span>
					<span class="text-gray-900 font-semibold">${data.initialoutlay}</span>
				</div>
				<div class="flex justify-between items-center">
					<span class="text-gray-600 font-medium">Monthly Maintenance:</span>
					<span class="text-gray-900 font-semibold">${data.monthlymaintenance}</span>
				</div>
			</div>
		</div>
	</div>
</div>
