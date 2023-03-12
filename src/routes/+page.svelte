<script lang="ts">
	import '../app.postcss';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	// gsap.registerPlugin(ScrollTrigger);
	import { onMount } from 'svelte';

	let mainDiv: Element;
	let sections: Element[];
	onMount(() => {
		sections = gsap.utils.toArray<Element>('section');

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '#mainDiv',
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.
				end: '+=3500'
			}
		});
	});
</script>

<div id="mainDiv" class={`w-[400%] h-full flex flex-nowrap overscroll-none bg-red-600`}>
	<section class="w-full h-full box-border bg-green-300"><Hero /></section>
	<section class="w-full h-full box-border bg-yellow-300"><About /></section>
	<section class="w-full h-full box-border bg-blue-300"><Projects /></section>
	<section class="w-full h-full box-border bg-purple-300"><Contact /></section>
</div>
