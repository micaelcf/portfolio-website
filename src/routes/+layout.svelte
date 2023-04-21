<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-slate-200 dark:bg-[#001220] dark:text-white transition-colors duration-700 ease-out">
	<div class="hisdden mdd: absolute bottom-0 right-0 m-2 z-50" />
	<NavBar />
	<slot />
	{#if $page.route.id != '/'}
		<div class="mt-20">
			<div class="absolute md:top-0 right-0 -mt-10 md:mt-2 mr-2 z-50"><ThemeToggle /></div>
			<Footer />
		</div>
	{:else}
		<div class="absolute bottom-0 md:bottom-auto md:top-0 right-0 mb-2 md:mb-0 md:mt-2 mr-2 z-50">
			<ThemeToggle />
		</div>
	{/if}
</div>
