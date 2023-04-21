<!-- Tabs.svelte -->
<script lang="ts">
	import anime from 'animejs';
	import { fly, scale, slide } from 'svelte/transition';

	interface Skill {
		name: string;
		icon: string;
		link: string;
	}

	interface Tab {
		title: string;
		skills: Skill[];
	}

	export let tabs: Tab[] = [];
	let activeTab: Tab = tabs[0];

	function setActive(tab: Tab) {
		activeTab = tab;
	}

	const hoverHandler = (ev: Event, entering: boolean, active: boolean) => {
		const tget = ev.target as Element;
		if (active) {
			anime({ targets: tget, marginTop: 0, duration: 300, easing: 'easeOutCubic' });
			return;
		}
		anime({
			targets: tget,
			marginTop: [0, -10],
			duration: 300,
			easing: 'easeOutCubic',
			direction: entering ? 'normal' : 'reverse'
		});
	};
</script>

<div class="flex flex-col h-full">
	<div class="flex justify-evenly h-10 border-b border-current shadow-xl">
		{#each tabs as tab}
			<button
				class="py-2 px-4 font-semibold {activeTab === tab
					? 'bg-pink-500/70 dark:bg-lime-500/70'
					: 'bg-slate-400 dark:bg-slate-800'} border border-b-0 border-current rounded-t-lg transition-colors duration-500 ease-out"
				on:click={() => setActive(tab)}
				on:mouseenter={(ev) => hoverHandler(ev, true, activeTab === tab)}
				on:mouseleave={(ev) => hoverHandler(ev, false, activeTab === tab)}
			>
				{tab.title}
			</button>
		{/each}
	</div>
	{#each tabs as tab}
		{#if activeTab === tab}
			<div
				class="p-4 h-fit grid grid-cols-4 items-start place-items-center gap-y-3 md:gap-y-5 z-[3]"
				transition:slide
			>
				{#each tab.skills as skill}
					<a
						target="_blank"
						href={skill.link}
						class="flex flex-col justify-center items-center gap-1 md:gap-2 w-fit"
					>
						<div aria-label={skill.name} class="w-10 md:w-16">
							{@html skill.icon}
						</div>
						<p class="w-fit text-sm md:text-base">
							{skill.name}
						</p>
					</a>
				{/each}
			</div>
		{/if}
	{/each}
</div>
