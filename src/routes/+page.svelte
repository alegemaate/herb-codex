<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import { SITE_CONSTANTS } from "#lib/constants.js";
  import { DATA } from "#lib/data.js";
  import {
    classificationTree,
    plantOfTheDay,
    randomPlant,
  } from "#lib/plants.js";
  import { excerpt } from "#lib/markdown.js";
  import PlantCard from "#lib/components/PlantCard.svelte";
  import Seo from "#lib/components/Seo.svelte";
  import UseBadges from "#lib/components/UseBadges.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const familyCount = classificationTree().length;
  const edibleCount = DATA.filter((p) => p.facts.uses.includes("food")).length;

  // Starts with the prerender date, then switches to the visitor's date.
  // svelte-ignore state_referenced_locally
  let featured = $state(plantOfTheDay(new Date(data.renderedAt)));
  onMount(() => {
    featured = plantOfTheDay(new Date());
  });

  const goToRandomPlant = () => goto(resolve(`plants/${randomPlant().id}/`));
</script>

<Seo
  title="Home"
  description="HerbCodex documents common wild plants and their uses."
  path="/"
  image={DATA[0].image}
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONSTANTS.SITE_NAME,
    url: SITE_CONSTANTS.SITE_URL,
  }}
/>

<section class="intro">
  <h1>HerbCodex</h1>
  <p>
    A field guide to useful, and not so useful, plants that grow wild around us.
  </p>

  <ul class="stats">
    <li><strong>{DATA.length}</strong> plants</li>
    <li><strong>{familyCount}</strong> families</li>
    <li><strong>{edibleCount}</strong> edible</li>
  </ul>

  <div class="actions">
    <a class="button" href={resolve("plants/")}>Browse all plants</a>
    <button class="button secondary" onclick={goToRandomPlant}>
      Show me a random plant
    </button>
  </div>
</section>

<hr />

<section class="featured" aria-labelledby="featured-heading">
  <h2 id="featured-heading">Plant of the day</h2>
  <a class="featured-card" href={resolve(`plants/${featured.id}/`)}>
    <img src={featured.image} alt={featured.name} loading="eager" />
    <div class="featured-text">
      <h3>{featured.name}</h3>
      <p class="species">{featured.classification.species}</p>
      <UseBadges uses={featured.facts.uses} />
      <p class="excerpt">{excerpt(featured.description)}</p>
      <span class="read-more">Read more →</span>
    </div>
  </a>
</section>

<hr />

<section aria-labelledby="explore-heading">
  <h2 id="explore-heading">Explore</h2>
  <ul class="grid">
    {#each DATA.slice(0, 6) as plant (plant.id)}
      <li><PlantCard {plant} /></li>
    {/each}
  </ul>
  <p>
    <a href={resolve("plants/")}>See all {DATA.length} plants</a> or browse by
    <a href={resolve("classifications/")}>classification</a>.
  </p>
</section>

<style>
  section {
    width: 100%;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    font-size: 1.1rem;
  }

  .stats strong {
    font-family: Jockey One;
    font-size: 2rem;
    color: var(--color-header);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .button {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border-radius: var(--border-radius);
    border: 0.125rem solid var(--color-header);
    background: var(--color-header);
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }

  .button:hover {
    text-decoration: none;
    filter: brightness(1.15);
  }

  .button.secondary {
    background: transparent;
    color: var(--color-text);
  }

  .featured-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: 1.5rem;
    color: inherit;
  }

  .featured-card:hover {
    text-decoration: none;
  }

  .featured-card img {
    width: 100%;
    height: 22rem;
    object-fit: cover;
    border-radius: var(--border-radius);
    background-color: var(--color-placeholder);
  }

  .featured-text h3 {
    font-family: Jockey One;
    font-size: 2rem;
    margin: 0;
  }

  .species {
    font-style: italic;
    color: var(--color-muted);
    margin: 0;
  }

  .excerpt {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    color: var(--color-theme-1);
  }

  .grid {
    display: grid;
    list-style: none;
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  @media screen and (max-width: 720px) {
    .featured-card {
      grid-template-columns: 1fr;
    }

    .featured-card img {
      height: 14rem;
    }

    .stats strong {
      font-size: 1.6rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    .stats strong {
      color: #9fd88f;
    }
  }
</style>
