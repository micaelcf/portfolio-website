<script lang="ts">
	import anime from 'animejs';
	import { AcademicCap } from 'svelte-heros-v2';
	import TimelineItem from './TimelineItem.svelte';
	import { onMount } from 'svelte';
	import { getScrollPercent } from '$lib/utils';
	export let items = [
		{ date: new Date('2019-01-02'), label: 'Something happened', icon: AcademicCap }
	];
	let progress: Element;
	let mainDiv: Element;
	const updatePosition = (ref: Element) => {
		// console.log(mainDiv.parentElement?.offsetTop);
		anime.set(progress, {
			top: mainDiv.parentElement!.offsetTop,
			left:
				ref.getBoundingClientRect().left +
				ref.getBoundingClientRect().width / 2 -
				progress.getBoundingClientRect().width / 2
		});
	};
	onMount(() => {
		const childs = Array.from(mainDiv.children) as HTMLElement[];
		const firstPoint = childs[0].children[1];
		const icons = childs.map((child) => {
			// return the path element
			//     icon              svg				 path
			return child.children[0].children[0].children[0];
		});

		updatePosition(firstPoint);
		self.addEventListener('resize', () => updatePosition(firstPoint));

		let progressAnim = anime({
			targets: progress,
			height: mainDiv.getBoundingClientRect().height + 22,
			duration: 2000,
			easing: 'easeInOutSine'
		});
		anime({
			targets: icons,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 2000,
			delay: anime.stagger(progressAnim.duration / icons.length, { start: 500 })
		});
	});
</script>

<div class="standard-container-col">
	<h1 class="text-2xl w-56 text-colored-default mb-1 md:mb-2 font-bold ml-3">Timeline</h1>
	<div bind:this={mainDiv} class="flex flex-col items-start gap-10">
		{#each items as item}
			<TimelineItem data={item} />
		{/each}
	</div>
	<div bind:this={progress} class="w-4 h-0 bg-default z-0 absolute" />
</div>
