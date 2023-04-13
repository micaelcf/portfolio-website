<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { currentPage } from '$lib/stores';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { getScrollPercent } from '$lib/utils';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// self.addEventListener('scroll', () => {
		// 	console.log(getScrollPercent());
		// });
		currentPage.set($page.route.id?.replace('/', '') as string);
	});
</script>

<div class="bg-slate-200 dark:bg-[#001220] dark:text-white transition-colors duration-700 ease-out">
	<div class="hisdden mdd: absolute bottom-0 right-0 m-2 z-50" />
	<NavBar />
	<slot />
	<!-- <div class="absolute bottom-0 md:hidden m-2 z-50">
		<ThemeToggle />
	</div> -->
	{#if $page.route.id != '/'}
		<div class="mt-40">
			<div class="absolute md:top-0 right-0 -mt-10 md:mt-2 mr-2 z-50"><ThemeToggle /></div>
			<Footer />
		</div>
	{/if}
</div>
