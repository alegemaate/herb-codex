<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Classifications</h1>

	<p>Classification Index</p>

	<ul>
		{#each Object.entries(data.classifications) as [family, genuses]}
			<li>
				<h2 class="family-title">{family}</h2>
				<ul>
					{#each Object.entries(genuses) as [genus, plants]}
						<li>
							<h3 class="genus-title">{genus}</h3>
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
		margin-top: 1em;
	}

	.genus-title {
		margin-top: 0;
	}

	.plant-link {
		display: block;
		margin-left: 2em;
	}
</style>
