<script lang="ts">
	import anime from 'animejs';
	import { AcademicCap } from 'svelte-heros-v2';
	import TimelineItem from './TimelineItem.svelte';
	import { onMount } from 'svelte';

	export let items = [
		{ date: new Date('2019-01-02'), label: 'Something happened', icon: AcademicCap }
	];
	let progress: Element;
	let timelineDiv: Element;
	let firstPoint: Element;

	export const updatePosition = (ref: Element = firstPoint) => {
		anime.set(progress, {
			top: timelineDiv.parentElement!.offsetTop,
			left:
				ref.getBoundingClientRect().left +
				ref.getBoundingClientRect().width / 2 -
				progress.getBoundingClientRect().width / 2
		});
	};
	const timeDuration = 3000;
	const progressAnim = (h: number) => {
		anime({
			targets: progress,
			height: h,
			duration: timeDuration,
			easing: 'easeInOutSine',
			begin: () => {
				updatePosition();
			}
		});
	};
	const restartProgressAnim = () => {
		progressAnim(timelineDiv.getBoundingClientRect().height + 22);
	};

	onMount(() => {
		const childs = Array.from(timelineDiv.children) as HTMLElement[];
		firstPoint = childs[0].children[1];
		const icons = childs.map((child) => {
			// return the path element
			//     icon              svg				 path
			return child.children[0].children[0].children[0];
		});

		let iconsAnim = anime({
			targets: icons,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 2000,
			delay: anime.stagger(timeDuration / icons.length, { start: 500 }),
			autoplay: false
		});

		// define as opções de observação
		const opcoes = {
			rootMargin: '0px',
			threshold: 0.7 // define a porcentagem de visibilidade do elemento para disparar a ação
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				// console.log('Elemento está visível!');
				// execute a ação que você deseja quando o elemento estiver visível
				// por exemplo, adicione uma classe CSS ou faça uma animação

				iconsAnim.play();
				restartProgressAnim();
				self.addEventListener('resize', () => {
					restartProgressAnim();
					// iconsAnim.restart();
				});
				observer.disconnect();
			}
		}, opcoes);

		observer.observe(timelineDiv);
	});
</script>

<div class="standard-container-col">
	<h1 class="text-2xl w-56 text-colored-default mb-1 md:mb-2 font-bold ml-3">Timeline</h1>
	<div bind:this={timelineDiv} class="flex flex-col items-start gap-10">
		{#each items as item}
			<TimelineItem data={item} />
		{/each}
	</div>
	<div bind:this={progress} class="w-4 h-0 bg-default z-0 absolute" />
</div>
