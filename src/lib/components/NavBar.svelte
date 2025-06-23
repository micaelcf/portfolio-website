<script lang="ts">
	import { AtSymbol, Cube, Home, Identification } from 'svelte-heros-v2';
	import { onMount } from 'svelte/internal';
	import anime from 'animejs';

	import { page } from '$app/stores';
	let mainDiv: Element;
	let active: Element;
	let cloud: Element;

	const moveCloud = (el: Element) => {
		const rect = el.getBoundingClientRect();
		anime({
			targets: cloud,
			width: rect.width,
			top: rect.bottom + 3,
			left: rect.left,
			easing: 'spring',
			duration: 500,
			endDelay: 300
		});
	};
	function handleClick(ev: Event) {
		active = ev.target as HTMLAnchorElement;
	}

	function handleHover(ev: Event) {
		moveCloud(ev.target as Element);
	}

	export function updateActive(btns: HTMLAnchorElement[]) {
		let route = $page.route.id?.replace('/', '') as string;
		active = btns.find((el) => el.href.replace('/', '') === route) ?? btns[0];
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const btns = Array.from(mainDiv.children) as HTMLAnchorElement[];
					if (!active) {
						updateActive(btns);
					}

					btns.forEach((el) => {
						el.addEventListener('mouseover', handleHover);
						el.addEventListener('focusin', handleHover);
						mainDiv.addEventListener('mouseout', () => moveCloud(active));
						mainDiv.addEventListener('focusout', () => moveCloud(active));
					});
					moveCloud(active);
					// console.log('nav is visible');
					// execute a ação que você deseja quando o elemento estiver visível
					// por exemplo, adicione uma classe CSS ou faça uma animação

					observer.disconnect();
				}
			},
			{ threshold: 1 }
		);

		observer.observe(mainDiv);
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
		class="w-full absolute top-0 z-10 md:py-3 md:pl-5 flex flex-row items-center justify-evenly md:justify-start pr-1 gap-4"
	>
		<a aria-label="home" href="/" on:click={handleClick} class={btnClass}>
			<Home size="100%" class="w-6 pointer-events-none" tabindex="-1" />
			Home
		</a>
		<a aria-label="about" href="/about" on:click={handleClick} class={btnClass}>
			<Identification tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			About
		</a>
		<a aria-label="projects" href="/projects" on:click={handleClick} class={btnClass}>
			<Cube class="w-6 pointer-events-none" tabindex="-1" size="100%" />
			Projects
		</a>
		<a aria-label="contact" href="/contact" on:click={handleClick} class={btnClass}>
			<AtSymbol tabindex="-1" size="100%" class="w-6 pointer-events-none" />
			Contact
		</a>
	</div>
	<div bind:this={cloud} class="absolute left-0 z-0 h-1 bg-default" />
</div>
