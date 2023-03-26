import { writable } from 'svelte/store';

export const scrollPercent = writable(0);

scrollPercent.subscribe((value) => {
	// console.log('Scroll percents: ', value, '%');
}); // logs '0'
