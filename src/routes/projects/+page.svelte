<script lang="ts">
	import CardProject from '$lib/components/CardProject.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import { GlobeAlt } from 'svelte-heros-v2';

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

	const projects: ProjectProps[] = [
		{
			title: 'Roda Belém',
			description:
				'An app created to promote accessibility. With exploration, information, and reviews of accessible places, the app aims to make life easier for people with disabilities and reduced mobility.',
			tech: ['Svelte', 'TailwindCSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
			links: [
				{
					name: 'GitHub',
					icon: GitHub,
					url: 'https://firerplayer.github.io/RodaBelem/'
				},
				{
					name: 'Site',
					icon: GlobeAlt,
					url: 'https://roda-belem.vercel.app'
				}
			],
			image: ''
		},
		{
			title: 'GEDAE website',
			description: 'Web site front for GEDAE, a student group from UFPA.',
			tech: ['Svelte', 'TailwindCSS', 'JavaScript', 'HTML', 'TypeScript', 'CSS'],
			links: [
				{
					name: 'GitHub',
					icon: GitHub,
					url: 'https://github.com/FirerPlayer/GEDAE-website'
				},
				{
					name: 'Site',
					icon: GlobeAlt,
					url: 'https://gedae.vercel.app'
				}
			],
			image: ''
		},
		{
			title: 'Weather Picker',
			description:
				'A web application with autocomplete feature, that show the current temperature in the location that user can choice.',
			tech: ['React', 'TailwindCSS', 'JavaScript', 'CSS', 'HTML'],
			links: [
				{
					name: 'GitHub',
					icon: GitHub,
					url: 'https://github.com/FirerPlayer/Weather-Picker-react'
				},
				{
					name: 'Site',
					icon: GlobeAlt,
					url: 'https://fp-weatherpicker.netlify.app/'
				}
			],
			image: ''
		},
		{
			title: 'RNA ETHprice',
			description:
				'An LSTM Recurrent Neural Network that aims to predict the daily price movement of a Financial asset. In this case, it is the ETH/USD crypto asset (Ethereum versus dollar).',
			tech: ['Python', 'pandas', 'Scikit-learn'],
			links: [
				{
					name: 'GitHub',
					icon: GitHub,
					url: 'https://github.com/FirerPlayer/RNA_python-ETHprice'
				}
			],
			image: ''
		}
	];
</script>

<div class=" w-full min-h- flex flex-col items-center gap-y-10">
	<h1 class="text-4xl mt-16">Projects</h1>
	<div
		class="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 place-items-center bg-white/50 border-y-2 border-y-current"
	>
		{#each projects as project}
			<CardProject projectProps={project} />
		{/each}
	</div>
</div>
