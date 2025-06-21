<script lang="ts">
	import { getSkillIcon } from '$lib/stores';
	import anime from 'animejs';
	import { ComponentType, onMount } from 'svelte';
	import { CodeBracketSquare, Gift } from 'svelte-heros-v2';
	import { slide } from 'svelte/transition';
	let mainDiv: Element;
	let techsDiv: Element;
	let links: Element;
	let cardOpen = 0;
	export let showInteraction = false;
	enum CardAction {
		Close,
		Open
	}
	const openCloseCard = (opening: CardAction) => {
		const linkWidth = links.getBoundingClientRect().width;
		const techWidth = techsDiv.getBoundingClientRect().width;
		anime({
			targets: links.children,
			translateX: opening ? -linkWidth : 0,
			easing: 'easeOutExpo',
			duration: 600,
			delay: anime.stagger(125, { start: 400 })
		});
		anime({
			targets: techsDiv.children,
			translateX: opening ? techWidth : 0,
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

	type ProjectProps = {
		title: string;
		description: string;
		tech: string[];
		links: {
			name: string;
			icon: ComponentType;
			url: string;
		}[];
		image: string;
	};

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

<!-- w-[300px] h-[210px] md:w-[350px] md:h-[260px] -->
<div
	bind:this={mainDiv}
	class="inline-grid w-[290px] md:w-[350px] h-[300px] max-w-md [&>div]:col-start-1 [&>div]:row-start-1 text-black"
>
	<div class="z-10 p-1 bg-default w-full h-fit overflow-hidden">
		<h1 class="text-2xl font-bold">{projectProps.title}</h1>
	</div>
	{#if projectProps.image}
		<div
			style="background-image: url({projectProps.image});"
			class=" flex flex-col justify-between bg-cover bg-center z-[2]"
		/>
	{:else}
		<div class="bg-slate-300 dark:bg-slate-700 z-[2] flex items-center justify-center">
			<CodeBracketSquare size="80px" class="mt-6 pointer-events-none" tabindex="-1" />
		</div>
	{/if}
	<div bind:this={links} class="w-fit h-fit [&>div]:bg-default z-[1] grid">
		{#each projectProps.links as link}
			<div
				class="w-[45px] md:w-14 p1"
				on:focusin={() => {
					openCloseCard(CardAction.Open);
				}}
				on:focusout={() => {
					openCloseCard(CardAction.Close);
				}}
			>
				<a target="_blank" href={link.url} title={link.name}>
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
	<div
		bind:this={techsDiv}
		class="grid space-y-1 md:space-y-0 h-fit w-fit bg-black justify-self-end -translate-x-px"
	>
		{#each projectProps.tech as tech}
			<div class="flex items-center">
				<div class="hidden md:block text-xs md:text-sm font-semibold bg-default w-fit p-1">
					{tech}
				</div>
				<div class="w-6 ml-2 md:ml-1">{@html getSkillIcon(tech)}</div>
			</div>
		{/each}
	</div>
</div>
