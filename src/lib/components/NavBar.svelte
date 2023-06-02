<script lang="ts">
	import Search from 'phosphor-svelte/lib/ListMagnifyingGlass';
	import BookMark from 'phosphor-svelte/lib/BookBookmark';
	import User from 'phosphor-svelte/lib/UserCircle';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="flex items-center">
			<strong class="text-xl uppercase"> BIBLE </strong>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex justify-center items-center gap-6">
			<div class="flex gap-3 justify-center items-center">
				<button class="btn-sm rounded-md variant-filled">
					<BookMark size={22} />
				</button>
				<button class="btn-sm rounded-md variant-filled">
					<Search size={22} />
				</button>
			</div>
			<button class="btn-sm rounded-md variant-filled-primary">
				<User size={22} />
			</button>
		</div>
	</svelte:fragment>
</AppBar>
