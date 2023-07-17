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

	<p>Plant classification hierarchy map.</p>

	<hr />

	<ul class="family-tree">
		{#each Object.entries(data.classifications) as [family, genuses]}
			<li>
				<h2 id={family.toLocaleLowerCase()}>{family}</h2>
				<ul class="genus-tree">
					{#each Object.entries(genuses) as [genus, plants]}
						<li class="genus">
							<p id={`${family.toLocaleLowerCase()}-${genus.toLocaleLowerCase()}`}>{genus}</p>
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
	.family-tree {
		list-style: none;
		padding-left: 0;
	}

	.genus-tree {
		list-style: none;
		padding-left: 1rem;
	}

	.genus {
		margin-top: 0.5rem;
	}

	.plant-link {
		display: block;
		margin-left: 1rem;
	}
</style>
