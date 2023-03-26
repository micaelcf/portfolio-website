<script lang="ts">
	import { scrollPercent } from '$lib/stores';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	import { onMount } from 'svelte/internal';

	let h1Text: Element;
	onMount(() => {
		let anim = anime({
			targets: h1Text,
			translateX: [-self.innerWidth / 2, 0],
			translateY: [-0, 50, -50, 50, -50, 50, -44],
			easing: 'linear'
		});
		scrollPercent.subscribe((scrollPercent) => {
			const relativePercent = (scrollPercent * 3.08) / 3;
			anim.seek((relativePercent / 100) * anim.duration);
		});
	});
</script>

<div class=" w-full h-full flex flex-col items-center bg-gradient-to-b from-lake-700 to-lake-800">
	<h1 bind:this={h1Text} class="text-4xl mt-16">Contact</h1>
</div>
