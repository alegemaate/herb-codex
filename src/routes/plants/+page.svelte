<script lang="ts">
	import { SITE_CONSTANTS } from '$lib/constants';
	import { DATA } from '$lib/data';
</script>

<svelte:head>
	<title>Plants | HerbCodex</title>
	<meta name="description" content="Information about useful and not so useful plants." />
	<link rel="canonical" href={`${SITE_CONSTANTS.SITE_URL}/plants`} />
</svelte:head>

<div class="text-column">
	<h1>Plants</h1>

	<p>Information about useful and not so useful plants.</p>

	<hr />

	<p>
		Weeds are plants that grow where they are not wanted. They compete with crops for water, light
		and nutrients and some may produce chemicals that inhibit the growth of other plants. This being
		said, some weeds are useful and can be used for culinary or medicinal purposes.
	</p>

	<ul class="plant-list">
		{#each DATA as item, i}
			<a href="/plants/{item.id}" class="plant-link">
				<li class="plant-card">
					<img
						src={item.image}
						alt={item.name}
						class="plant-card_image"
						loading={i < 2 ? 'eager' : 'lazy'}
					/>
					<h2 class="plant-card_name">{item.name}</h2>
				</li>
			</a>
		{/each}
	</ul>
</div>

<style>
	.plant-list {
		display: grid;
		list-style: none;
		padding: 0;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
	}

	.plant-card {
		margin-bottom: 1rem;
		width: 100%;
	}

	.plant-card_image {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		border-radius: var(--border-radius);
	}

	.plant-card_name {
		margin-top: 0.5em;
	}
</style>
