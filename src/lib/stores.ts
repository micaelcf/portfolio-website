import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const scrollPercent = writable(0);

export const currSection = writable(0);
currSection.subscribe((value) => {
	if (browser) {
		self.scrollTo();
	}
});
