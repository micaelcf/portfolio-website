import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

export const scrollPercent = writable(0);

export const currentPage = writable('home');
