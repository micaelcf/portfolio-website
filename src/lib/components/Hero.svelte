<script lang="ts">
	import profile from '$lib/assets/profile.webp';
	import { onMount, query_selector_all } from 'svelte/internal';
	import { ComputerDesktop } from 'svelte-heros-v2';
	// import Facebook from 'svelte-simples/Facebook.svelte';
	//@ts-ignore
	import anime from 'animejs/lib/anime.es.js';
	import LinkedIn from './icons/LinkedIn.svelte';
	import GitHub from './icons/GitHub.svelte';
	import { getOptionsD, wavePaths } from '$lib/wavesPaths';
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
		anime.set('.svg', {
			marginTop: -self.innerHeight + 217
		});
		for (let i = 0; i < wavePaths.length; i++) {
			anime({
				targets: `#w${i + 1}`,
				d: getOptionsD(wavePaths[i]),
				duration: 7500,
				easing: 'linear',
				loop: true
			});
		}
	});
</script>

<div
	class="flex z-40 flex-col-reverse md:flex-row items-center justify-center h-full w-full bg-sky-200"
>
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
					tabindex="-1"
					color="black"
					variation="solid"
					size="100%"
					class="inline-block h-fit w-[18px] md:w-6"
				/>
				Full stack developer at heart, with an emphasis on the front-end and user-friendly interfaces
			</h1>
		</div>
		<div class="hidden md:flex flex-row mt-3 ml-2 pop w-fit border-2 border-[#3e3e3e]">
			<a href="https://www.linkedin.com/in/micael-fernandes21/" class="w-12 p-2 hover:bg-black/20">
				<LinkedIn />
			</a>
			<a href="https://github.com/FirerPlayer" class="w-12 p-2 hover:bg-black/20">
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
<div class="z-40 bg-transparent svg overflow-hidden">
	<svg
		id="visual"
		viewBox="0 0 960 400"
		width="100%"
		height="400"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
	>
		<path
			class="fill-lake-700"
			id="w1"
			d="M0 305L26.7 297.3C53.3 289.7 106.7 274.3 160 276.8C213.3 279.3 266.7 299.7 320 311C373.3 322.3 426.7 324.7 480 325.2C533.3 325.7 586.7 324.3 640 317C693.3 309.7 746.7 296.3 800 288.7C853.3 281 906.7 279 933.3 278L960 277L960 401L933.3 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
		/><path
			class="fill-lake-600"
			id="w2"
			d="M0 326L26.7 321.3C53.3 316.7 106.7 307.3 160 306.8C213.3 306.3 266.7 314.7 320 317.3C373.3 320 426.7 317 480 313C533.3 309 586.7 304 640 308.5C693.3 313 746.7 327 800 331.7C853.3 336.3 906.7 331.7 933.3 329.3L960 327L960 401L933.3 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
		/><path
			class="fill-lake-500"
			id="w3"
			d="M0 332L26.7 329C53.3 326 106.7 320 160 324.2C213.3 328.3 266.7 342.7 320 344.7C373.3 346.7 426.7 336.3 480 328.7C533.3 321 586.7 316 640 317.2C693.3 318.3 746.7 325.7 800 330.7C853.3 335.7 906.7 338.3 933.3 339.7L960 341L960 401L933.3 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
		/><path
			class="fill-lake-400"
			id="w4"
			d="M0 346L26.7 350.7C53.3 355.3 106.7 364.7 160 363.3C213.3 362 266.7 350 320 343.3C373.3 336.7 426.7 335.3 480 337.2C533.3 339 586.7 344 640 347C693.3 350 746.7 351 800 355.3C853.3 359.7 906.7 367.3 933.3 371.2L960 375L960 401L933.3 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
		/><path
			class="fill-lake-300"
			id="w5"
			d="M0 366L26.7 367.3C53.3 368.7 106.7 371.3 160 374.2C213.3 377 266.7 380 320 381.7C373.3 383.3 426.7 383.7 480 381C533.3 378.3 586.7 372.7 640 373.2C693.3 373.7 746.7 380.3 800 382.5C853.3 384.7 906.7 382.3 933.3 381.2L960 380L960 401L933.3 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
		/>
	</svg>
</div>
