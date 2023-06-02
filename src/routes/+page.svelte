<script>
	import Book from 'phosphor-svelte/lib/Book';
	import Search from 'phosphor-svelte/lib/ListMagnifyingGlass';
</script>

<main>
	<div
		class="flex flex-col flex-wrap justify-center gap-5 items-center md:flex-row md:gap-10 container"
	>
		<a href="/books">
			<div class="card p-5 flex flex-col justify-center items-center gap-5">
				<Book size={50} />
				<h5>ALL BOOKS</h5>
			</div>
		</a>

		<a href="/books?testament=old">
			<div class="card p-5 flex flex-col justify-center items-center gap-5">
				<Book size={50} />
				<h5>OLD TESTAMENT</h5>
			</div>
		</a>

		<a href="/books?testament=new">
			<div class="card p-5 flex flex-col justify-center items-center gap-5">
				<Book size={50} />
				<h5>NEW TESTAMENT</h5>
			</div>
		</a>

		<a href="/search">
			<div class="card p-5 flex flex-col justify-center items-center gap-5">
				<Search size={50} />
				<h5>SEARCH</h5>
			</div>
		</a>
	</div>
</main>

<style>
	.container {
		height: 80vh;
	}
</style>
