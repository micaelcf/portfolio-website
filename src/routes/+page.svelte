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
	import Sparticles from 'sparticles';
	import { getScrollPercent, particlesOptions } from '$lib/utils';
	import { append, append_dev, query_selector_all } from 'svelte/internal';

	let mainDiv: Element;
	let dHeight: number;
	let nav: Element;
	let sections; //: Element[];
	let windowHeight: number;

	let anim: any;
	let randArray: number[][];
	function getRandomIntInclusive(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}
	// function getRandomShadows(n: number, height = 2000, blur = 1) {
	// 	let shadows = `${getRandomIntInclusive(0, height)}px ${getRandomIntInclusive(
	// 		0,
	// 		height
	// 	)}px ${blur}px rgba(255,255,255,0.6)`;
	// 	for (let i = 0; i < n - 1; i++) {
	// 		shadows += `,${getRandomIntInclusive(0, height)}px ${getRandomIntInclusive(
	// 			0,
	// 			height
	// 		)}px ${blur}px rgba(255,255,255,0.6)`;
	// 	}
	// 	return shadows;
	// }

	function addParticles(node: Node) {
		new Sparticles(node, particlesOptions);
	}

	$: randArray = [...Array(7)].map(() => [
		getRandomIntInclusive(5, 15),
		getRandomIntInclusive(5, 40),
		getRandomIntInclusive(5, 40)
	]);
	// let lenis: Lenis;
	onMount(() => {
		windowHeight = self.innerHeight;
		// const smShadows = getRandomShadows(800, self.innerHeight * 8);
		// const mdShadows = getRandomShadows(300, self.innerHeight * 8);
		// const lgShadows = getRandomShadows(150, self.innerHeight * 8);
		mainDiv = document.querySelector('#mainDiv') as Element;
		dHeight = mainDiv.getBoundingClientRect().height;
		self.addEventListener('scroll', () => {
			scrollPercent.set(getScrollPercent(self.scrollY, mainDiv.scrollHeight));
		});
		// anime({
		// 	targets: '.ssm',
		// 	// top: self.innerHeight,
		// 	boxShadow: { value: smShadows, duration: 100, easing: 'linear' },
		// 	// top: self.innerHeight,
		// 	easing: 'linear',
		// 	duration: 50_000,
		// 	// loop: true,
		// 	direction: 'alternate'
		// });
		// anime({
		// 	targets: '.md',
		// 	boxShadow: { value: mdShadows, duration: 100, easing: 'linear' },
		// 	// top: self.innerHeight,
		// 	easing: 'linear',
		// 	duration: 100_000
		// 	// loop: true
		// 	// direction: 'alternate'
		// });
		// anime({
		// 	targets: '.g',
		// 	boxShadow: { value: lgShadows, duration: 100, easing: 'linear' },
		// 	// top: self.innerHeight,
		// 	easing: 'linear',
		// 	duration: 130_000,
		// 	loop: true,
		// 	direction: 'alternate'
		// });
	});
</script>

<div id="mainDiv" class=" text-black">
	<NavBar />
	<section class="normal"><Hero /></section>
	<section class="normal"><About /></section>
	<section class="normal"><Projects /></section>
	<section class=""><Contact /></section>
	<div use:addParticles style="top:{windowHeight}px;" class="absolute w-full h-[300vh]" />

	<!-- <div id="particules">
		<div style="" class="sm w-1 h-1" />
		<div style="" class="md w-2 h-2" />
		<div style="" class="lg w-3 h-3" />
	</div> -->
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
		@apply w-full h-screen border-t-2;
		/* scroll-snap-align: center; */
		/* scroll-margin-top: 90px; */
	}

	/* #particules > div {
		@apply rounded-full absolute top-[100vh] blur-[.5px];
	} */
</style>
