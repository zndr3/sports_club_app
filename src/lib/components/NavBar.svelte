<script lang="ts">
    import { resolve } from '$app/paths';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
    
</script>

<nav class="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo/Brand -->
			<div class="flex-shrink-0">
				<a
					href={resolve('/')}
					class="text-white font-bold text-2xl hover:text-blue-100 transition-colors duration-200"
				>
					Sports Club
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-center space-x-1">
					<a
						href={resolve('/')}
						class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
					>
						Home
					</a>
					<a
						href={resolve('/facilities')}
						class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
					>
						Facilities
					</a>
					<a
						href={resolve('/members')}
						class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
					>
						Members
					</a>
					<a
						href={resolve('/bookings')}
						class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
					>
						Bookings
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMenu}
					class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
					aria-expanded="false"
					aria-label="Toggle menu"
				>
					<svg
						class={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{#if !isOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isOpen}
		<div class="md:hidden bg-blue-700 animate-in fade-in slide-in-from-top-2 duration-200">
			<div class="px-2 pt-2 pb-3 space-y-1">
				<a
					href={resolve('/')}
					onclick={closeMenu}
					class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors duration-200 w-full text-left"
				>
					Home
				</a>
				<a
					href={resolve('/facilities')}
					onclick={closeMenu}
					class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors duration-200 w-full text-left"
				>
					Facilities
				</a>
				<a
					href={resolve('/members')}
					onclick={closeMenu}
					class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors duration-200 w-full text-left"
				>
					Members
				</a>
				<a
					href={resolve('/bookings')}
					onclick={closeMenu}
					class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors duration-200 w-full text-left"
				>
					Bookings
				</a>
			</div>
		</div>
	{/if}
</nav>
