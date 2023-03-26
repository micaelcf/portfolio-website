<script lang="ts">
	import { AtSymbol, Cube, Home, Identification } from 'svelte-heros-v2';
	import { onMount } from 'svelte/internal';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';

	let mainDiv: Element;
	let home: Element;
	let about: Element;
	let projects: Element;
	let contact: Element;

	// const moveBar = (el: Element) => {
	// 	const rect = el.getBoundingClientRect();
	// 	const w = 50;
	// 	anime({
	// 		targets: '#bar',
	// 		width: w,
	// 		height: 4,
	// 		left: rect.left + rect.width / 2 - w / 2,
	// 		top: home.getBoundingClientRect().bottom + 4,
	// 		easing: 'easeInOutElastic'
	// 	});
	// };

	function handleClick(ev: MouseEvent) {
		// moveBar(ev.target as Element);
	}

	onMount(() => {
		// moveBar(home);
	});
</script>

<div
	bind:this={mainDiv}
	class=" w-full absolute top-0 z-10 md:py-3 flex flex-row items-center justify-evenly md:justify-end pr-1 gap-4"
>
	<button bind:this={home} on:click={handleClick} class="btn">
		<Home size="100%" class="w-6 pointer-events-none" tabindex="-1" />
		Home
	</button>
	<button bind:this={about} on:click={handleClick} class="btn">
		<Identification tabindex="-1" size="100%" class="w-6 pointer-events-none" />
		About
	</button>
	<button bind:this={projects} on:click={handleClick} class="btn">
		<Cube class="w-6 pointer-events-none" tabindex="-1" size="100%" />
		Projects
	</button>
	<button bind:this={contact} on:click={handleClick} class="btn">
		<AtSymbol tabindex="-1" size="100%" class="w-6 pointer-events-none" />
		Contact
	</button>
	<!-- <div id="bar" class="flex-none absolute top-11 bg-current" /> -->
</div>

<style>
	.btn {
		@apply flex flex-col md:flex-row gap-px md:gap-1 p-0 items-center;
	}
</style>
