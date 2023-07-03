import { DATA } from '$lib/data.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const plant = DATA.find((d) => d.id === params.id);

	if (plant) {
		return {
			plant
		};
	}

	throw error(404, 'Not found');
}
