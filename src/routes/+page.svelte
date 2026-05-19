<script>
    import { resolve } from '$app/paths';
    let count = $state(0);

    $effect(() => {
        console.log(`The count is now ${count}`);
    });
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-12">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Welcome to Sports Club
            </h1>
            <p class="text-xl text-gray-600 mb-8">
                Manage facilities, members, and bookings all in one place
            </p>
        </div>

        <!-- Feature Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <!-- Facilities Link -->
            
            <a href={resolve('/facilities')} class="group no-underline">
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full p-8 border-t-4 border-green-600 hover:scale-105 cursor-pointer">
                    <div class="text-4xl mb-4">🏟️</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Facilities</h3>
                    <p class="text-gray-600">Browse and manage all sports facilities with pricing and maintenance information</p>
                </div>
            </a>

            <!-- Members Link -->
            <a href={resolve('/members')} class="group no-underline">
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full p-8 border-t-4 border-purple-600 hover:scale-105 cursor-pointer">
                    <div class="text-4xl mb-4">👥</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Members</h3>
                    <p class="text-gray-600">View all club members and their information including membership dates</p>
                </div>
            </a>

            <!-- Bookings Link -->
            <a href={resolve('/bookings')} class="group no-underline">
                <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full p-8 border-t-4 border-blue-600 hover:scale-105 cursor-pointer">
                    <div class="text-4xl mb-4">📅</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Bookings</h3>
                    <p class="text-gray-600">Manage facility bookings, view schedules, and track member reservations</p>
                </div>
            </a>
        </div>

        <!-- Demo Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-indigo-600">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Try the Demo Counter</h2>
            <div class="flex items-center gap-4">
                <button
                    onclick={() => count++}
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                    Count: {count}
                </button>

                
                {#if count > 10}
                    <p class="text-gray-600 text-lg">You've clicked <span class="font-bold text-indigo-600">{count}</span> times!</p>

                {:else if count > 5}
                    <p class="text-gray-600 text-lg">Keep going! You're at <span class="font-bold text-indigo-600">{count}</span>.</p>

                {:else}
                    <p class="text-gray-600 text-lg">Click the button to increase the count.</p>
                {/if}
            </div>
        </div>
    </div>
</div>
