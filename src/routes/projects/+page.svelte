<script lang="ts">
	import CardProject from '$lib/components/CardProject.svelte';
	import { projects } from '$lib/stores';
</script>

<div class=" w-full min-h-screen flex flex-col items-center gap-y-10">
	<h1 class="text-4xl mt-16">Projects</h1>
	<div
		class="w-full flex flex-wrap justify-around gap-y-10 md:gap-y-16 gap-x-12 md:gap-x-32 py-10 px-12 md:px-28 bg-white/50 dark:bg-black/50 border-y-2 border-y-current"
	>
		{#each projects as project}
			<CardProject projectProps={project} />
		{/each}
	</div>
</div>
