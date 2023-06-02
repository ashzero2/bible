import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const book = url.searchParams.get('testament') || 'all';

	return {
		books: book
	};
}) satisfies PageLoad;
