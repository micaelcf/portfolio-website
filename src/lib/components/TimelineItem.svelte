<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { AcademicCap } from 'svelte-heros-v2';
	// export const data: {date: Date; label: string; icon: SvelteComponent};
	export let data: { date: Date; label: string; icon: typeof AcademicCap } = {
		date: new Date(),
		label: 'Something happened',
		icon: AcademicCap
	};
</script>

<div class="standard-container-row">
	<div class="inline-grid overflow-hidden items-center">
		<svelte:component
			this={data.icon}
			class="w-12 col-start-1 row-start-1 z-[2] pointer-events-none"
			size="100%"
		/>
	</div>
	<div class="w-8 h-8 bg-current rounded-full mx-2 z-[1] border-2 border-black" />
	<h1 class="md:text-lg w-14">
		{data.date.getMonth() + 1}/{data.date.getFullYear()}
	</h1>

	<div class="line" />
	<h1 class="md:text-lg w-48">{@html data.label}</h1>
</div>

<style>
	.line {
		@apply h-[2px] w-5 bg-current mx-3;
	}
</style>
