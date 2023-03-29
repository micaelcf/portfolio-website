import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const scrollPercent = writable(0);

export const currentSection = writable(0);

currentSection.subscribe((section) => {
	if (browser) {
		window.scrollTo(0, section * window.innerHeight);
	}
  
});
