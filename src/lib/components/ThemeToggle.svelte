<script lang="ts">
	import { browser } from '$app/environment';
	import { elasticOut } from 'svelte/easing';
	import { Moon, Sun } from 'svelte-heros-v2';

	let isDark: boolean;

	if (browser) {
		isDark =
			document.documentElement.classList.contains('dark') ||
			localStorage.getItem('theme') === 'dark' ||
			(matchMedia('(prefers-color-scheme: dark)').matches &&
				localStorage.getItem('theme') === null);

		if (isDark) {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
			isDark = true;
		}
	}

	const handleThemeChange = () => {
		isDark = !isDark;
		if (browser) {
			if (isDark) {
				localStorage.setItem('theme', 'dark');
				document.documentElement.classList.add('dark');
			} else {
				localStorage.setItem('theme', 'light');
				document.documentElement.classList.remove('dark');
			}
		}
	};

	const transverse = (node: Element, { duration = 800, delay = 0, easing = elasticOut }) => {
		return {
			duration,
			delay,
			easing,
			css: (t: number) => `transform: rotate(${360 * t}deg);`
		};
	};
</script>

<button on:click={handleThemeChange} class="ring-1 ring-current rounded-full p-1 w-10 md:w-12">
	{#key isDark}
		<div in:transverse={{}}>
			<svelte:component
				this={isDark ? Moon : Sun}
				size="100%"
				class={`${isDark ? '' : 'fill-yellow-400'} pointer-events-none`}
				color={isDark ? '#06b6d4' : 'black'}
				variation={isDark ? 'solid' : undefined}
				tabindex="-1"
			/>
		</div>
	{/key}
</button>
