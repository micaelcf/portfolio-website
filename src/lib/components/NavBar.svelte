<script lang="ts">
	import { AtSymbol, Cube, Home, Identification } from 'svelte-heros-v2';
	import { onMount } from 'svelte/internal';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	import { currentSection } from '$lib/stores';

	let mainDiv: Element;
	let home: Element;
	let about: Element;
	let projects: Element;
	let contact: Element;

	const moveCloud = (el: Element) => {
		const pad = 10;
		anime({
			targets: '#cloud',
			width: el.getBoundingClientRect().width + pad,
			height: el.getBoundingClientRect().height + pad,
			top: home.getBoundingClientRect().top - pad / 2,
			left: el.getBoundingClientRect().left - pad / 2,
			easing: 'easeOutExpo',
			duration: 1000,
			delay: 300
		});
	};
	let canScrool = true;
	function handleClick(ev: Event) {
		canScrool = true;
		const el = ev.target as HTMLButtonElement;
		const destY = Number(el.value) * self.innerHeight;
		self.scrollTo({ top: destY, behavior: 'smooth' });
	}

	function handleHover(ev: Event) {
		moveCloud(ev.target as Element);
	}

	onMount(() => {
		moveCloud(home);
		[home, about, projects, contact].forEach((el) => {
			el.addEventListener('mouseover', handleHover);
			el.addEventListener('mouseout', () => {
				moveCloud(home);
			});
		});
	});
</script>

<div class="">
	<div
		bind:this={mainDiv}
		class=" w-full absolute top-0 z-10 md:py-3 flex flex-row items-center justify-evenly md:justify-end pr-1 gap-4"
	>
		<button value="0" bind:this={home} on:click={handleClick} class="btn">
			<Home size="100%" class="w-6 pointer-events-none" tabindex="-1" />
			Home
		</button>
		<button value="1" bind:this={about} on:click={handleClick} class="btn">
			<Identification tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			About
		</button>
		<button value="2" bind:this={projects} on:click={handleClick} class="btn">
			<Cube class="w-6 pointer-events-none" tabindex="-1" size="100%" />
			Projects
		</button>
		<button value="3" bind:this={contact} on:click={handleClick} class="btn md:mr-1">
			<AtSymbol tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			Contact
		</button>
	</div>
	<div id="cloud" style="wid" class="absolute rounded-lg z-0 right-0 bg-white/60" />
</div>

<style>
	.btn {
		@apply flex flex-col md:flex-row gap-px md:gap-1 p-0 items-center;
	}
</style>
