<script lang="ts">
	import SideBar from '$lib/components/SideBar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let books = data.books;
</script>

<main>
	<div>
		<SideBar {books} />
	</div>
</main>
