<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';

	import '../app.postcss';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { onMount } from 'svelte';
	import { scrollPercent } from '$lib/stores';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	//@ts-ignore
	// import Sparticles from 'sparticles';
	import { cloudParticlesOptions, getScrollPercent, particlesOptions } from '$lib/utils';
	import { append, append_dev, query_selector_all } from 'svelte/internal';

	let mainDiv: Element;

	// function addParticles(node: Node, options = particlesOptions) {
	// 	new Sparticles(node, options);
	// }

	onMount(() => {
		mainDiv = document.querySelector('#mainDiv') as Element;
		self.addEventListener('scroll', () => {
			scrollPercent.set(getScrollPercent(self.scrollY, mainDiv.scrollHeight));
		});
	});
</script>

<div id="mainDiv" class=" text-black">
	<NavBar />
	<section class="normal"><Hero /></section>
	<section class="normal"><About /></section>
	<section class="normal"><Projects /></section>
	<section class=""><Contact /></section>
	<!-- <div use:addParticles style="top:100vh;" class="absolute w-full h-[300vh]" />
	<div use:addParticles={cloudParticlesOptions} class="absolute top-0 z-auto w-full h-screen" /> -->
</div>

<style>
	#mainDiv {
		@apply w-full h-full;
		scroll-behavior: smooth;
		/* overflow-y: scroll;] */
		/* overflow-y: scroll;
		overflow-x: hidden; */
		/* scroll-snap-type: y proximity; */
	}
	#mainDiv > section {
		@apply w-full h-screen;
		/* scroll-snap-align: center; */
		/* scroll-margin-top: 90px; */
	}

	/* #particules > div {
		@apply rounded-full absolute top-[100vh] blur-[.5px];
	} */
</style>
