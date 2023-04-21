<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';

	const getTitle = (id: string | null) => {
		const mId = id?.split('/')[1];
		const sufix = ' | Micael Portfolio';
		if (!mId) {
			return 'Home' + sufix;
		}
		return mId.slice(0, 1).toUpperCase() + mId.slice(1) + sufix;
	};
	$: title = getTitle($page.route.id);

	const getContent = (ti: string) => {
		const selector = ti.split(' | ')[0].toLowerCase();
		switch (selector) {
			case 'home':
				return "I'm Micael and this is the home page of my portfolio, including a short bio and main links.";
			case 'about':
				return "A brief description of myself and profissional experience. \
				Take a look at all the technologies I've used or studied.It has a small timeline of my history with technology";
			case 'projects':
				return 'A list of my projects and their respective technologies';
			case 'contact':
				return 'A contact form for sending me a message, show where I can get in touch';
			default:
				return '404 error';
		}
	};
	$: content = getContent(title);
</script>

<svelte:head>
	<meta name="description" {content} />
	<title>{title}</title>
</svelte:head>

<div class="bg-slate-200 dark:bg-[#001220] dark:text-white transition-colors duration-700 ease-out">
	<div class="hisdden mdd: absolute bottom-0 right-0 m-2 z-50" />
	<NavBar />
	<slot />
	{#if $page.route.id != '/'}
		<div class="mt-20">
			<div class="absolute md:top-0 right-0 -mt-10 md:mt-2 mr-2 z-50"><ThemeToggle /></div>
			<Footer />
		</div>
	{:else}
		<div class="absolute bottom-0 md:bottom-auto md:top-0 right-0 mb-2 md:mb-0 md:mt-2 mr-2 z-50">
			<ThemeToggle />
		</div>
	{/if}
</div>
