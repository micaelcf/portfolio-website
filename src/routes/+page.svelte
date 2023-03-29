<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';

	import '../app.postcss';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	// import Particles from '$lib/components/Particles.svelte';
	import { onMount } from 'svelte';
	import { scrollPercent } from '$lib/stores';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	//@ts-ignore
	import Sparticles from 'sparticles';
	import { cloudParticlesOptions, getScrollPercent, particlesOptions } from '$lib/utils';
	import { append, append_dev, query_selector_all } from 'svelte/internal';

	let mainDiv: Element;
	let dHeight: number;
	let nav: Element;
	let sections; //: Element[];
	let windowHeight: number;

	function addParticles(node: Node, options = particlesOptions) {
		new Sparticles(node, options);
	}
	// let lenis: Lenis;
	onMount(() => {
		windowHeight = self.innerHeight;
		mainDiv = document.querySelector('#mainDiv') as Element;
		dHeight = mainDiv.getBoundingClientRect().height;
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
	<div use:addParticles={cloudParticlesOptions} class="absolute top-0 w-full h-screen" />
	<div use:addParticles style="top:100vh;" class="absolute w-full h-[300vh]" />
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
</style>
