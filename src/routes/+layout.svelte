<script lang="ts">
	import { page } from '$app/stores';
	import circuit from '$lib/assets/circuit-board.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { currentPage } from '$lib/stores';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { getScrollPercent } from '$lib/utils';

	onMount(() => {
		// self.addEventListener('scroll', () => {
		// 	console.log(getScrollPercent());
		// });
		currentPage.set($page.route.id?.replace('/', '') as string);
	});
</script>

<div
	class=" bg-slate-200 dark:bg-[#001220] dark:text-white transition-colors duration-700 ease-out"
>
	<!-- <div class="fixed bottom-0 right-0 m-2 z-50">
		<ThemeToggle />
	</div> -->
	<NavBar />
	<slot />
</div>
