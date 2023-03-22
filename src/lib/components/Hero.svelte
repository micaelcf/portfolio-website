<script lang="ts">
	import profile from '$lib/assets/profile.webp';
	import { onMount, query_selector_all } from 'svelte/internal';
	import { ComputerDesktop } from 'svelte-heros-v2';
	// import Facebook from 'svelte-simples/Facebook.svelte';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	import { gitHub, linkedin } from '$lib/icons';
	import LinkedIn from './icons/LinkedIn.svelte';
	import GitHub from './icons/GitHub.svelte';
	//}
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
			// duration: 500,
			easing: 'easeOutCirc',
			delay: 1000,
			complete: (anim: any) => {
				anime({
					targets: waveHand,
					easing: 'easeOutSine',
					translateX: [-8],
					loop: true,
					delay: 700,
					direction: 'alternate'
				});
			}
		});
	});
</script>

<div class="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full">
	<div class="flex flex-col">
		<div
			class="flex flex-col items-start gap-3 border-2 border-[#3e3e3e] p-1 md:p-2 pop max-w-xs md:max-w-sm"
		>
			<h1 class="m-0 flex flex-row items-end text-2xl md:text-3xl">
				Hello everyone
				<div bind:this={waveHand} class=" text-5xl md:text-6xl w-fit h-fit">👋</div>
				,
			</h1>
			<h1 class="text-5xl md:text-7xl font-concert p-0 m-0">I'm Micael</h1>
			<h1 class="text-oxford-500 text-xs md:text-base">
				<ComputerDesktop
					color="black"
					variation="solid"
					size="100%"
					class="inline-block h-fit w-[18px] md:w-6"
				/>
				Full stack developer at heart, with an emphasis on the front-end and user-friendly interfaces
			</h1>
		</div>
		<div class="hidden md:flex flex-row gap-3 mt-3 ml-2 pop w-fit p-2 border-2 border-[#3e3e3e]">
			<a href="https://www.linkedin.com/in/micael-fernandes21/" class="w-10">
				<LinkedIn />
			</a>
			<a href="https://github.com/FirerPlayer" class="w-10">
				<GitHub />
			</a>
		</div>
	</div>

	<div class="flex mb-4 md:mt-0 md:-top-9 md:relative">
		<div class="flex md:hidden flex-col gap-3 pop mr-5 w-fit h-fit p-2 border-2 border-[#3e3e3e]">
			<a href="https://www.linkedin.com/in/micael-fernandes21/" class="w-10">
				<LinkedIn />
			</a>
			<a href="https://github.com/FirerPlayer" class="w-10">
				<GitHub />
			</a>
		</div>
		<img
			bind:this={img}
			style=" box-shadow: none"
			class=" w-40 md:w-48 md:ml-12 pop border-2 border-[#3e3e3e] rounded-xl"
			src={profile}
			alt="Micael Fernandes"
		/>
	</div>
</div>
