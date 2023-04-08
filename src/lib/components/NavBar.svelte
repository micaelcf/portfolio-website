<script lang="ts">
	import { AtSymbol, Cube, Home, Identification } from 'svelte-heros-v2';
	import { onMount } from 'svelte/internal';
	import anime from 'animejs';
	import { currentPage } from '$lib/stores';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	let mainDiv: Element;
	let active: Element;
	let cloudMoving = false;

	// $: Array.from(mainDiv.children).forEach((el) => {
	// 	if ((el as HTMLButtonElement).value === $page.route.id?.replace('/', '')) {
	// 		console.log(el);
	// 	}
	// });

	const moveCloud = (el: Element) => {
		const pad = 10;
		const rect = el.getBoundingClientRect();
		anime({
			targets: '#cloud',
			width: rect.width + pad,
			height: rect.height + pad,
			top: rect.top - pad / 2,
			left: rect.left - pad / 2,
			easing: 'spring',
			duration: 1000,
			endDelay: 300
		});
	};
	function handleClick(ev: Event) {
		let value = (ev.target as HTMLButtonElement).value;
		goto(value === 'home' ? '/' : value);
		active = ev.target as HTMLButtonElement;
	}

	function handleHover(ev: Event) {
		moveCloud(ev.target as Element);
	}

	export function updateActive(btns: HTMLButtonElement[]) {
		let route = $page.route.id?.replace('/', '') as string;
		btns.forEach((el) => {
			if (el.value === $currentPage || el.value === route) {
				active = el;
			}
		});
	}

	onMount(() => {
		const btns = Array.from(mainDiv.children) as HTMLButtonElement[];
		if (!active) {
			updateActive(btns);
			moveCloud(active);
		}

		btns.forEach((el) => {
			el.addEventListener('mouseover', handleHover);
			el.addEventListener('focusin', handleHover);
			mainDiv.addEventListener('mouseout', () => moveCloud(active));
			mainDiv.addEventListener('focusout', () => moveCloud(active));
		});
	});

	const btnClass = `flex flex-col md:flex-row gap-px md:gap-1 p-0 items-center`;
</script>

<svelte:window
	on:resize={() => {
		moveCloud(active);
	}}
/>
<div class="">
	<div
		bind:this={mainDiv}
		class=" w-full absolute top-0 z-10 md:py-3 flex flex-row items-center justify-evenly md:justify-end pr-1 gap-4"
	>
		<button value="home" on:click={handleClick} class={btnClass}>
			<Home size="100%" class="w-6 pointer-events-none" tabindex="-1" />
			Home
		</button>
		<button value="about" on:click={handleClick} class={btnClass}>
			<Identification tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			About
		</button>
		<button value="projects" on:click={handleClick} class={btnClass}>
			<Cube class="w-6 pointer-events-none" tabindex="-1" size="100%" />
			Projects
		</button>
		<button value="contact" on:click={handleClick} class="{btnClass} md:mr-1">
			<AtSymbol tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			Contact
		</button>
	</div>
	<div
		id="cloud"
		class="absolute z-0 right-0 shadow-[0px_4px_0px_-1px_rgb(236,72,153)] dark:shadow-[0px_4px_0px_-1px_rgb(163,230,53)]"
	/>
</div>
