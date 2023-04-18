<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { CodeBracketSquare, Gift } from 'svelte-heros-v2';
	import { slide } from 'svelte/transition';
	import GitHub from './icons/GitHub.svelte';
	let mainDiv: Element;
	let techsDiv: Element;
	let links: Element;
	let cardOpen = 0;
	export let showInteraction = false;
	enum CardAction {
		Close,
		Open
	}
	const openCloseCard = (opening: number) => {
		anime({
			targets: links.children,
			translateX: opening ? -links.getBoundingClientRect().width : 0,
			easing: 'easeOutExpo',
			duration: 600,
			delay: anime.stagger(125, { start: 400 })
		});
		anime({
			targets: techsDiv.children,
			translateX: opening ? techsDiv.getBoundingClientRect().width : 0,
			easing: 'easeOutExpo',
			duration: 600,
			delay: anime.stagger(125, { start: 400 })
		});

		cardOpen = opening;
	};

	onMount(() => {
		if (projectProps.links.length > 4) {
			throw new Error('Too many links');
		}
		if (showInteraction) {
			openCloseCard(CardAction.Open);
			setTimeout(() => {
				openCloseCard(CardAction.Close);
			}, 1000);
		}
		mainDiv.addEventListener('mouseenter', () => {
			openCloseCard(CardAction.Open);
		});
		mainDiv.addEventListener('mouseleave', () => {
			openCloseCard(CardAction.Close);
		});
		mainDiv.addEventListener('touchstart', () => {
			if (cardOpen) {
				openCloseCard(CardAction.Close);
			} else {
				openCloseCard(CardAction.Open);
			}
		});
	});

	interface ProjectProps {
		title: string;
		description: string;
		tech: string[];
		links: {
			name: string;
			icon: any;
			url: string;
		}[];
		image: string;
	}

	export let projectProps: ProjectProps = {
		title: 'Project Title',
		description:
			'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Qui',
		tech: ['Svelte', 'Node', 'MongoDB', 'TypeScript', 'HTML', 'TailwindCSS'],
		links: [
			{
				name: 'GitHub',
				icon: Gift,
				url: ''
			},
			{
				name: 'GitHub',
				icon: Gift,
				url: ''
			},
			{
				name: 'GitHub',
				icon: Gift,
				url: ''
			},
			{
				name: 'GitHub',
				icon: Gift,
				url: ''
			}
		],
		image: 'https://picsum.photos/350/225'
	};
</script>

<div
	bind:this={mainDiv}
	class="inline-grid w-[300px] h-[210px] md:w-[350px] md:h-[260px] [&>div]:col-start-1 [&>div]:row-start-1"
>
	<div class="z-10 p-1 bg-default basdg-opacity-60 w-full h-fit overflow-hidden">
		<h1 class="text-2xl font-bold">{projectProps.title}</h1>
	</div>
	{#if projectProps.image}
		<div
			style="background-image: url({projectProps.image});"
			class=" flex flex-col justify-between bg-cover z-[2]"
		/>
	{:else}
		<div class="bg-slate-300 z-[2] flex items-center justify-center">
			<CodeBracketSquare size="80px" class="mt-6" />
		</div>
	{/if}
	<div bind:this={links} class="w-fit h-fit [&>div]:bg-default z-[1] grid">
		{#each projectProps.links as link}
			<div class="w-[40px] h-[40px] md:w-[60px] md:h-[60px]">
				<a target="_blank" href={link.url}>
					<svelte:component this={link.icon} size="100%" tabindex="-1" />
				</a>
			</div>
		{/each}
	</div>
	{#if cardOpen}
		<div
			transition:slide={{ duration: 400 }}
			class="z-10 bg-default basdg-opacity-60 h-fit px-1 md:px-2 py-px self-end"
		>
			<p class="text-sm md:text-base">{projectProps.description}</p>
		</div>
	{/if}
	<div bind:this={techsDiv} class="grid h-fit w-fit justify-self-end">
		{#each projectProps.tech as tech}
			<div>
				<span class="text-xs md:text-sm font-semibold">{tech} </span>
			</div>
		{/each}
	</div>
</div>
