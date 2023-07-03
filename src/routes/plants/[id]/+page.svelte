<script lang="ts">
	import { SITE_CONSTANTS } from '$lib/constants';
	import type { PageData } from './$types';
	import Gallery from './Gallery.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.plant.name} | HerbCodex</title>
	<meta
		name="description"
		content="Usage, location and other information about {data.plant.name} ({data.plant
			.classification.species})."
	/>
	<link rel="canonical" href={`${SITE_CONSTANTS.SITE_URL}/plants/${data.plant.id}`} />
</svelte:head>

<div class="text-column">
	<img src={data.plant.image} alt={data.plant.name} class="banner" loading="eager" />

	<h1>{data.plant.name}</h1>

	<hr />

	<p class="family">
		Family: {data.plant.classification.family} - Genus: {data.plant.classification.genus} - Species:
		{data.plant.classification.species}
	</p>

	<p>Other names: {data.plant.otherNames.join(', ')}</p>

	<p class="description">
		{data.plant.description}
	</p>

	<h2>Gallery</h2>
	<hr />
	<Gallery images={data.plant.gallery} />

	{#if data.plant.mapUrl}
		<h2>Map</h2>
		<hr />
		<iframe
			class="map"
			loading="lazy"
			src={data.plant.mapUrl}
			title={`${data.plant.name} map`}
			frameborder="0"
			allowfullscreen
		/>
		<a href="https://www.eddmaps.org">Courtesy of EDDMaps</a>
	{/if}
</div>

<style>
	.banner {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		border-radius: var(--border-radius);
		background-color: #ccc;
	}

	.description {
		white-space: pre-wrap;
	}

	.family {
		color: #000;
		font-style: italic;
	}

	.map {
		width: 100%;
		height: 30rem;
	}
</style>
