import { writable } from 'svelte/store';

export const selectedBook = writable('GEN');

export const totalChapters = writable(50);

export const selectedChapter = writable(1);
