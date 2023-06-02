<script lang="ts">
	import { bible } from '$lib/data';

	export let books: string;

	const oldBooks = bible.oldTestament;
	const newBooks = bible.newTestament;
</script>

<main>
	{#if books === 'old' || books === 'all'}
		{#each oldBooks as book}
			<h1>{book}</h1>
		{/each}
	{/if}
	{#if books === 'new' || books === 'all'}
		{#each newBooks as book}
			<h1>{book}</h1>
		{/each}
	{/if}
</main>
