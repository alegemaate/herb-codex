<script lang="ts">
	import { SITE_CONSTANTS } from '$lib/constants';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Classifications | HerbCodex</title>
	<meta name="description" content="Plant classification hierarchy." />
	<link rel="canonical" href={`${SITE_CONSTANTS.SITE_URL}/classifications`} />
</svelte:head>

<div class="text-column">
	<h1>Classifications</h1>

	<h2>Classification Index</h2>

	<hr />

	<ul>
		{#each Object.entries(data.classifications) as [family, genuses]}
			<li>
				<h3 class="family-title">{family}</h3>
				<ul>
					{#each Object.entries(genuses) as [genus, plants]}
						<li>
							<h4 class="genus-title">{genus}</h4>
							{#each plants as plant}
								<a class="plant-link" href={`/plants/${plant.id}`}>
									{plant.classification.species} ({plant.name})</a
								>
							{/each}
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style>
	.family-title {
		margin-top: 1rem;
	}

	.genus-title {
		margin-top: 0;
	}

	.plant-link {
		display: block;
	}
</style>
