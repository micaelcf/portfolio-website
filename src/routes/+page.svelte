<script lang="ts">
	import '../app.postcss';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import { onMount } from 'svelte';

	let mainDiv; //: Element;
	let abt: Element;
	let sections; //: Element[];
	let y: number;

	// $: console.log(y);
	// $: console.log(visualViewport?.width);

	onMount(() => {});
</script>

<!-- <div class="bg-blue-300 dark:bg-cyan-800 w-full h-full"> -->
<!-- <div class="w-fit m-logo text-xl md:text-4xl text-white p-2">
		Micael
		<div class="w-fit ml-auto font-sans">Dev</div>
	</div> -->
<div id="mainDiv" class="">
	<section class=" bg-webemerald-400"><Hero /></section>
	<section class="bg-yellow-300"><About /></section>
	<section bind:this={abt} class="bg-cyan-300"><Projects /></section>
	<section class="bg-red-300"><Contact /></section>
</div>

<!-- <div class="fixed bottom-0">
		<svg
			id="visual"
			viewBox="0 0 2440 540"
			width="2440"
			height="540"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><path
				d="M0 465L22.7 467C45.3 469 90.7 473 135.8 476.8C181 480.7 226 484.3 271.2 477.3C316.3 470.3 361.7 452.7 406.8 446.3C452 440 497 445 542.2 450.7C587.3 456.3 632.7 462.7 677.8 470.7C723 478.7 768 488.3 813.2 490.7C858.3 493 903.7 488 948.8 475.8C994 463.7 1039 444.3 1084.2 442.7C1129.3 441 1174.7 457 1220 458.3C1265.3 459.7 1310.7 446.3 1355.8 437.7C1401 429 1446 425 1491.2 425.8C1536.3 426.7 1581.7 432.3 1626.8 438.2C1672 444 1717 450 1762.2 450.7C1807.3 451.3 1852.7 446.7 1897.8 444.7C1943 442.7 1988 443.3 2033.2 446.8C2078.3 450.3 2123.7 456.7 2168.8 460.2C2214 463.7 2259 464.3 2304.2 463.5C2349.3 462.7 2394.7 460.3 2417.3 459.2L2440 458L2440 541L2417.3 541C2394.7 541 2349.3 541 2304.2 541C2259 541 2214 541 2168.8 541C2123.7 541 2078.3 541 2033.2 541C1988 541 1943 541 1897.8 541C1852.7 541 1807.3 541 1762.2 541C1717 541 1672 541 1626.8 541C1581.7 541 1536.3 541 1491.2 541C1446 541 1401 541 1355.8 541C1310.7 541 1265.3 541 1220 541C1174.7 541 1129.3 541 1084.2 541C1039 541 994 541 948.8 541C903.7 541 858.3 541 813.2 541C768 541 723 541 677.8 541C632.7 541 587.3 541 542.2 541C497 541 452 541 406.8 541C361.7 541 316.3 541 271.2 541C226 541 181 541 135.8 541C90.7 541 45.3 541 22.7 541L0 541Z"
				fill="#0066FF"
				stroke-linecap="round"
				stroke-linejoin="miter"
			/></svg
		>
	</div> -->

<!-- </div> -->
<style>
	#mainDiv {
	}
	#mainDiv > section {
		@apply w-full h-screen flex justify-center items-center;
	}
</style>
