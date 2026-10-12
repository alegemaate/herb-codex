<script lang="ts">
  import { resolve } from "$app/paths";
  import type { Plant } from "#lib/data.js";
  import UseBadges from "./UseBadges.svelte";

  let { plant, eager = false }: { plant: Plant; eager?: boolean } = $props();
</script>

<a href={resolve(`plants/${plant.id}/`)} class="plant-card">
  <img
    src={plant.image}
    alt={plant.name}
    class="plant-card_image"
    loading={eager ? "eager" : "lazy"}
  />
  <h2 class="plant-card_name">{plant.name}</h2>
  <p class="plant-card_species">{plant.classification.species}</p>
  <UseBadges uses={plant.facts.uses} />
</a>

<style>
  .plant-card {
    display: block;
    width: 100%;
    color: inherit;
  }

  .plant-card:hover {
    text-decoration: none;
  }

  .plant-card:hover .plant-card_name {
    color: var(--color-theme-1);
  }

  .plant-card_image {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: var(--border-radius);
    background-color: var(--color-placeholder);
  }

  .plant-card_name {
    margin: 0.5em 0 0 0;
  }

  .plant-card_species {
    font-style: italic;
    font-size: 1rem;
    margin: 0;
    color: var(--color-muted);
  }
</style>
