<script lang="ts">
  import { DATA } from "#lib/data.js";
  import PlantCard from "#lib/components/PlantCard.svelte";
  import Seo from "#lib/components/Seo.svelte";
</script>

<Seo
  title="Plants"
  description="Information about useful and not so useful plants."
  path="/plants/"
  image={DATA[0].image}
/>

<div class="text-column">
  <h1>Plants</h1>

  <p>Information about useful and not so useful plants.</p>

  <hr />

  <p>
    Weeds are plants that grow where they are not wanted. They compete with
    crops for water, light and nutrients and some may produce chemicals that
    inhibit the growth of other plants. This being said, some weeds are useful
    and can be used for culinary or medicinal purposes.
  </p>

  <ul class="plant-list">
    {#each DATA as plant, i (plant.id)}
      <li><PlantCard {plant} eager={i < 2} /></li>
    {/each}
  </ul>
</div>

<style>
  .plant-list {
    display: grid;
    list-style: none;
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 1rem;
  }

  .plant-list li {
    margin-bottom: 1rem;
  }
</style>
