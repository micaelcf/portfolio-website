<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
	import avatar2 from '$lib/assets/avatar2.png';
	import {
		AcademicCap,
		ArrowDown,
		ArrowUp,
		BuildingOffice,
		ChevronDown,
		ChevronUp,
		CodeBracket,
		CommandLine,
		Cube,
		MagnifyingGlass,
		MagnifyingGlassCircle
	} from 'svelte-heros-v2';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { tabs } from '$lib/stores';

	let profile: Element;

	const items = [
		{
			date: new Date('2019-06-02'),
			label:
				'Start bachelor at Federal University of Pará (<a target="_blank" href="https://www.portal.ufpa.br/" class="underline">UFPA</a>)',
			icon: AcademicCap
		},
		{
			date: new Date('2019-09-02'),
			label: 'Basic programing skills with C and Linux',
			icon: CommandLine
		},
		{
			date: new Date('2020-02-02'),
			label: 'Experience with Python and Java with POO. Backend and ML projects',
			icon: Cube
		},
		{
			date: new Date('2020-06-02'),
			label: 'Front-end projects with frameworks and NodeJS',
			icon: CodeBracket
		},
		{
			date: new Date('2021-03-02'),
			label: 'Research assistence at UFPA',
			icon: MagnifyingGlassCircle
		},
		{
			date: new Date('2021-07-02'),
			label:
				'Intern at <a target="_blank" href="https://www.ctic.ufpa.br/" class="underline">CTIC</a> - UFPA',
			icon: BuildingOffice
		},
		{
			date: new Date('2023-01-02'),
			label:
				'Researcher at <a target="_blank" href="https://gedae.ufpa.br/" class="underline">GEDAE</a>',
			icon: MagnifyingGlass
		}
	];
	function getL(n: number = 8) {
		let res = ``;
		for (let i = 1; i <= n; i++) {
			res += `-${i}px -${i}px 0px 0px rgb(63,63,63), `;
		}
		res = res.slice(0, -2);
		return res;
	}

	onMount(() => {
		anime({
			targets: profile,
			translateX: 9,
			translateY: 9,
			boxShadow: getL(9),
			duration: 1000,
			easing: 'easeOutCubic'
		});
	});

	let updatePosition: () => void;
	const showMoreTransition = (
		node: Node,
		{ duration = 500, easing = 'easeOutSine' }: { duration?: number; easing?: string }
	) => {
		const h = (node as Element).getBoundingClientRect().height;
		const animation = anime({
			targets: node,
			height: [0, h],
			duration,
			easing: easing,
			autoplay: false,
			update() {
				updatePosition();
			}
		});
		return {
			duration: animation.duration,
			tick: (t: number) => {
				animation.seek(animation.duration * t);
			}
		};
	};

	const tabCaracter = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
	let showMore = false;
</script>

<div class="w-full min-h-screen h-fit flex flex-col md:p-0">
	<h1 id="hed" class="w-fit self-center mt-16 mb-5 md:mb-10 text-6xl">
		Passion Fuels Purpose!<span class="text-5xl md:text-6xl">🔥</span>
	</h1>

	<div
		class="grid grid-flow-row md:grid-cols-2 justify-items-center items-center gap-y-10 md:gap-y-20 md:px-3"
	>
		<div class="standard-container-col max-w-2xl w-fit">
			<h1 class="text-2xl text-colored-default mb-1 md:mb-2 font-bold">My experience</h1>
			<div class="text-justify text-sm md:text-base px-3 md:px-0 flex flex-col">
				<p>
					Student of Computer Engineering at the Federal University of Pará, I gained experience in
					complete software development, from back-end to front-end. I've worked with web and mobile
					applications and digital games. I got to know Machine Learning and AI at university and
					also developed projects in this area, which include data preparation and visualization, to
					then be analyzed.
				</p>
				<p>
					{@html tabCaracter}My professional experience gave me a lot of knowledge with python,
					javascript with Node, teamwork and application of design patterns.
				</p>
				{#if showMore}
					<div transition:showMoreTransition={{}} class="overflow-hidden">
						<p>
							{@html tabCaracter}At CTIC (UFPA), I improved my skills in linux, web servers and
							python language. I was responsible for the integration of a server monitoring software
							with a chat system, I did this with python and shell scripts. During this work, I
							generated documentation and worked in teams. As a research assistant at PROEX I worked
							on machine learning models, analyzed and visualized data and improved my knowledge in
							python and ML. Today I participate in a project of scientific initiation at GEDAE by
							CNPq, where I have the responsibility to research, analyze and work on top of the data
							generated from a microgrid of isolated energy and, from this, elaborate an interface
							to inform and advise the consumers of this microgrid. This project is special for me
							because it allows me to use all my knowledge of ML and software development, as well
							as to deepen my knowledge in these areas.
						</p>
						<p>
							{@html tabCaracter}In In 2021 I started studying game development by myself, where I
							learned to deal with the logic of programming a game, and learned how to use game
							engines to achieve my goals in this area. I've always been passionate about games, and
							since my vocation is to be a developer and programmer, as I'm passionate about
							technology, I couldn't help but study this area as well.
						</p>
						<p>
							{@html tabCaracter}Also in 2021, I started studying forex trading and its relationship
							with data analysis, I practiced a little bit of trading and also gained some
							experience in the forex market. This experience helped me to consolidate my knowledge
							with pandas, analysis and data visualization, as well as giving me a certain vision of
							the financial market.
						</p>
					</div>
				{/if}
				<button
					on:click={() => {
						showMore = !showMore;
					}}
					aria-label={showMore ? 'Show less' : 'Show more'}
					name={showMore ? 'Show less' : 'Show more'}
					class="flex gap-1 text-colored-default text-sm md:text-base font-semibold w-fit rounded-lg py-1 px-1 self-center bg-pink-500/20 dark:bg-lime-500/20"
				>
					{showMore ? 'Show less' : 'Show more'}
					<svelte:component
						this={showMore ? ChevronUp : ChevronDown}
						size="100%"
						class="w-6 pointer-events-none"
						tabindex="-1"
					/>
				</button>
				<!-- <br /> -->
				<p class="[&>span]:text-colored-default [&>span]:font-semibold mt-2">
					<span>Study</span>,
					<span>organization</span>,
					<span>innovation</span>
					and <span>creativity</span> are my allies when it comes to a new challenge.
				</p>
			</div>
		</div>
		<div bind:this={profile} class="bg-default rounded-lg h-fit w-fit overflow-hidden">
			<img src={avatar2} alt="Micael Fernandes" />
		</div>

		<!-- Skills -->
		<div class="w-full max-w-2xl h-full max-md:min-h-[390px] flex flex-col">
			<h1 class="text-2xl text-colored-default text-center mb-2 md:mb-4 font-bold">Skills</h1>
			<Skills {tabs} />
		</div>
		<!-- Timeline -->
		<Timeline {items} bind:updatePosition />
	</div>
</div>
