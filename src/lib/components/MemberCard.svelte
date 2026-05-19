<script>
    // Define the custom props this card accepts
    let data = $props();
</script>

<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-purple-600">
    <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">{data.firstname} {data.surname}</h3>
        <div class="space-y-3 text-sm">
            <div class="flex justify-between items-start">
                <span class="text-gray-600 font-medium">Address:</span>
                <span class="text-gray-900 font-semibold text-right">{data.address}</span>
            </div>
            <div class="flex justify-between items-start border-t pt-3">
                <span class="text-gray-600 font-medium">Member Since:</span>
                <span class="text-purple-600 font-semibold">{data.joindate}</span>
            </div>
        </div>
    </div>
</div>