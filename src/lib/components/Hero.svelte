<script lang="ts">
	import profile from '$lib/assets/profile.webp';
	import { onMount, query_selector_all } from 'svelte/internal';

	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	let img: Element;
	let waveHand: Element;
	onMount(() => {
		const poped = query_selector_all('.pop');
		const popAnim = anime({
			targets: poped,
			boxShadow: [
				'1px 1px rgb(62,62,62), 2px 2px rgb(62,62,62), 3px 3px rgb(62,62,62), 4px 4px rgb(62,62,62), 5px 5px rgb(62,62,62), 6px 6px rgb(62,62,62), 7px 7px rgb(62,62,62), 8px 8px rgb(62,62,62)'
			],
			translateX: -8,
			translateY: -8,
			duration: 500,
			easing: 'easeOutSine',
			delay: 1000
		});
		anime({
			targets: waveHand,
			easing: 'easeInOutSine',
			translateX: [-8, 8],
			loop: true,
			delay: 500,
			direction: 'alternate'
		});
		poped.forEach((el) => {
			el.addEventListener('mouseenter', () => {
				popAnim.reverse();
				popAnim.restart();
			});
			el.addEventListener('mouseleave', () => {
				popAnim.reverse();
				popAnim.restart();
			});
		});
	});
</script>

<div class="flex flex-col md:flex-row items-center justify-center h-screen w-full">
	<div class="flex flex-col items-start border-2 border-[#3e3e3e] p-2 pop">
		<h1 class="m-0 flex flex-row items-end text-2xl md:text-3xl">
			Hello everyone
			<div bind:this={waveHand} class=" text-5xl md:text-6xl w-fit">👋</div>
			,
		</h1>
		<h1 class="text-5xl md:text-7xl font-concert">I'm Micael</h1>
	</div>
	<img
		bind:this={img}
		class="w-32 md:w-48 mt-8 md:ml-12 pop rounded-2xl"
		src={profile}
		alt="Micael Fernandes"
	/>
</div>
