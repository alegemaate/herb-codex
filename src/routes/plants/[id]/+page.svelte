<script lang="ts">
  import { SITE_CONSTANTS } from "$lib/constants";
  import type { PageData } from "./$types";
  import Gallery from "./Gallery.svelte";

  export let data: PageData;

  const { plant } = data;
  const { family, genus, species } = plant.classification;

  const familyId = family.toLocaleLowerCase();
  const genusId = `${familyId}-${genus.toLocaleLowerCase()}`;
</script>

<svelte:head>
  <title>{plant.name} | HerbCodex</title>
  <meta
    name="description"
    content="Usage, location and other information about {plant.name} ({plant
      .classification.species})."
  />
  <link
    rel="canonical"
    href={`${SITE_CONSTANTS.SITE_URL}/plants/${plant.id}/`}
  />
</svelte:head>

<div class="text-column">
  <img src={plant.image} alt={plant.name} class="banner" loading="eager" />

  <h1>{plant.name}</h1>

  <hr />

  <p class="family">
    Family: <a href="/classifications/#{familyId}">{family}</a>
    - Genus:
    <a href="/classifications/#{genusId}">{genus}</a>
    - Species:
    {species}
  </p>

  <p>Other names: {plant.otherNames.join(", ")}</p>

  <p class="description">
    {plant.description}
  </p>

  <h2>Gallery</h2>
  <hr />
  <Gallery images={plant.gallery} />

  {#if plant.mapUrl}
    <h2>Map</h2>
    <hr />
    <iframe
      class="map"
      loading="lazy"
      src={plant.mapUrl}
      title={`${plant.name} map`}
      frameborder="0"
      allowfullscreen
    ></iframe>
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

  @media screen and (max-width: 768px) {
    .banner {
      height: 8rem;
    }
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
