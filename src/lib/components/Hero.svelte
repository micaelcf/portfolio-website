<script lang="ts">
	import { ComputerDesktop } from 'svelte-heros-v2';
	import LinkedIn from '$lib/components/icons/LinkedIn.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import avatar from '$lib/assets/avatar.webp';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { blobPaths } from '$lib/stores';

	let profileWidht: number = 350;
	let sc: number = 0.67;

	onMount(() => {
		const firstPath = document.querySelector('.blobPath')?.getAttribute('d') as string;

		anime({
			targets: '.blobPath',
			d: blobPaths.concat([firstPath]),
			duration: 30000,
			easing: 'easeInOutSine',
			loop: true
		});
	});
</script>

<div class="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full">
	<div class="flex flex-col">
		<div class="flex flex-col items-start gap-3 p-1 md:p-2 pop max-w-xs md:max-w-sm">
			<h1 class="m-0 flex flex-row items-end text-2xl md:text-3xl">
				Hello everyone
				<div class=" text-5xl md:text-6xl w-fit h-fit">👋</div>
				,
			</h1>
			<h1 class="text-5xl md:text-7xl font-concert p-0 m-0">I'm Micael</h1>
			<h1
				class="text-oxford-500 text-xs md:text-base [&>span]:text-pink-500 [&>span]:font-semibold dark:[&>span]:text-lime-500"
			>
				<ComputerDesktop
					tabindex="-1"
					color="currentColor"
					variation="solid"
					size="100%"
					class="inline-block h-fit w-[18px] md:w-6"
				/>
				<span>Full stack</span> developer at heart, with an emphasis on the
				<span>front-end</span>
				and user-friendly interfaces. Checkout my <span>skills</span> and projects.
			</h1>
		</div>
		<div class="flex flex-row mt-3 pop w-fit">
			<a
				href="https://www.linkedin.com/in/micael-fernandes21/"
				target="_blank"
				class="w-12 p-2 hover:bg-black/20 hover:dark:bg-white/20"
			>
				<LinkedIn />
			</a>
			<a
				href="https://github.com/FirerPlayer"
				target="_blank"
				class="w-12 p-2 hover:bg-black/20 hover:dark:bg-white/20"
			>
				<GitHub />
			</a>
		</div>
	</div>

	<!-- Blob profile picture -->
	<div class="w-fit md:ml-12 flex justify-center">
		<div class="z-[2]" bind:clientWidth={profileWidht}>
			<img
				style="clip-path: url(#blob);width: {profileWidht}px;"
				src={avatar}
				alt="Micael Fernandes"
				class="w]"
			/>
		</div>

		<svg
			class="absolute z-[1]"
			style="width: {profileWidht}px;height: {profileWidht}px;"
			viewBox="0 0 {profileWidht} {profileWidht}"
			width="100%"
			height="100%"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<clipPath id="blob">
					<path
						class="blobPath"
						transform="translate({profileWidht / 2} {profileWidht / 2}) scale({sc})"
						d="M138.6 -134.9C177.3 -99.9 204.6 -50 215 10.4C225.4 70.7 218.8 141.4 180.1 182.4C141.4 223.4 70.7 234.7 0.8 233.9C-69.1 233.1 -138.1 220.1 -182 179.1C-225.8 138.1 -244.4 69.1 -227.5 16.9C-210.7 -35.4 -158.4 -70.7 -114.5 -105.7C-70.7 -140.7 -35.4 -175.4 7.3 -182.7C50 -190 99.9 -169.9 138.6 -134.9"
					/>
				</clipPath>
			</defs>
			<g>
				<path
					class="blobPath stroke-pink-500 dark:stroke-lime-500"
					transform="translate({profileWidht / 2} {profileWidht / 2}) scale({sc})"
					d="M138.6 -134.9C177.3 -99.9 204.6 -50 215 10.4C225.4 70.7 218.8 141.4 180.1 182.4C141.4 223.4 70.7 234.7 0.8 233.9C-69.1 233.1 -138.1 220.1 -182 179.1C-225.8 138.1 -244.4 69.1 -227.5 16.9C-210.7 -35.4 -158.4 -70.7 -114.5 -105.7C-70.7 -140.7 -35.4 -175.4 7.3 -182.7C50 -190 99.9 -169.9 138.6 -134.9"
					fill="none"
					stroke-width="10"
				/>
			</g>
		</svg>
	</div>
</div>
