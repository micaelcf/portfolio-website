<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';
	import avatar2 from '$lib/assets/avatar2.png';
	import {
		AcademicCap,
		BuildingOffice,
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
</script>

<div class="w-full min-h-screen h-fit flex flex-col md:p-0">
	<h1 id="hed" class="w-fit self-center mt-16 mb-5 md:mb-10 text-6xl">
		Passion Fuels Purpose!<span class="text-5xl md:text-6xl">🔥</span>
	</h1>

	<div class="grid grid-flow-row md:grid-cols-2 justify-items-center gap-y-10 md:gap-y-20">
		<div class="standard-container-col max-w-sm w-fit">
			<h1 class="text-2xl text-colored-default mb-1 md:mb-2 font-bold">My experience</h1>
			<p
				class="text-justify text-sm md:text-base [&>span]:text-colored-default [&>span]:font-semibold px-3 md:px-0"
			>
				Student of Computer Engineering at the Federal University of Pará, I gained experience in
				complete software development, from back-end to front-end. I've worked with web and mobile
				applications and digital games. I got to know Machine Learning and AI at university and also
				developed projects in this area, which include data preparation and visualization, to then
				be analyzed. My professional experience gave me a lot of knowledge with python, javascript
				with Node and teamwork. <span>Study</span>,
				<span>organization</span>,
				<span>innovation</span>
				and <span>creativity</span> are my allies when it comes to a new challenge.
				<!-- Estudante de Engenharia da Computação da Univerdade Federal do Pará, ganhei
							experiencia em desenvolvimento completo de software, do back-end ao front-end. Já trabalhei com
							aplicativos web, mobile e games digitais. Conheci Machine Learning e IA na univerisidade e
							também desenvolvi projetos nessa área, que incluem preparação e visualização de dados, para em
							seguida ser analisado. Minha experiencia profissional me deu muito conhecimento com python,
							javascript com Node e trabalho em equipe. Estudo, organização, inovação e criatividade são meus
							aliados na hora de um novo desafio. -->
			</p>
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
		<Timeline {items} />
	</div>
</div>
