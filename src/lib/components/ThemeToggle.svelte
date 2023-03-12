<script lang="ts">
	import { browser } from '$app/environment';
	import { elasticOut } from 'svelte/easing';
	import { Moon, Sun } from 'svelte-heros-v2';

	let isDark: boolean;

	if (browser) {
		isDark = document.documentElement.classList.contains('dark');
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

<button on:click={handleThemeChange} class="hover:bg-primary-400/40 rounded-full p-1 w-[32px]">
	{#key isDark}
		<div in:transverse={{}}>
			<svelte:component
				this={isDark ? Moon : Sun}
				size="full"
				class={`${isDark ? '' : 'fill-yellow-400'}`}
				color={isDark ? '#06b6d4' : 'black'}
				variation={isDark ? 'solid' : undefined}
				tabindex="-1"
			/>
		</div>
	{/key}
</button>
