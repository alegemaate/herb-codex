<script lang="ts">
	import { DATA } from '$lib/data';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Plants</h1>

	<p>Information about useful and not so useful plants.</p>

	<p>
		Weeds are plants that grow where they are not wanted. They compete with crops for water, light
		and nutrients and some may produce chemicals that inhibit the growth of other plants. This being
		said, some weeds are useful and can be used for culinary or medicinal purposes.
	</p>

	<ul>
		{#each DATA as item}
			<li>
				<a href="/plants/{item.id}" class="plant-link">{item.name}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
