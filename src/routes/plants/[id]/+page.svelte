<script lang="ts">
  import { resolve } from "$app/paths";
  import { SITE_CONSTANTS } from "#lib/constants.js";
  import { familyId, formatMonths, genusId, neighbours } from "#lib/plants.js";
  import { excerpt, renderMarkdown } from "#lib/markdown.js";
  import Seo from "#lib/components/Seo.svelte";
  import UseBadges from "#lib/components/UseBadges.svelte";
  import type { PageProps } from "./$types";
  import Gallery from "./Gallery.svelte";

  let { data }: PageProps = $props();

  const plant = $derived(data.plant);
  const { family, genus, species } = $derived(plant.classification);
  const facts = $derived(plant.facts);
  const { previous, next } = $derived(neighbours(plant.id));
  const isUsed = $derived(
    facts.uses.includes("food") || facts.uses.includes("medicinal"),
  );

  const path = $derived(`/plants/${plant.id}/`);
  const jsonLd = $derived({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Taxon",
        name: species.replace(/^\w\./, genus),
        alternateName: [plant.name, ...plant.otherNames],
        taxonRank: "species",
        image: plant.image,
        url: `${SITE_CONSTANTS.SITE_URL}${path}`,
        parentTaxon: {
          "@type": "Taxon",
          name: genus,
          taxonRank: "genus",
          parentTaxon: { "@type": "Taxon", name: family, taxonRank: "family" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Plants", path: "/plants/" },
          { name: plant.name, path },
        ].map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_CONSTANTS.SITE_URL}${item.path}`,
        })),
      },
    ],
  });
</script>

<Seo
  title={plant.name}
  description={excerpt(plant.description)}
  {path}
  image={plant.image}
  type="article"
  {jsonLd}
/>

<article class="text-column">
  <img src={plant.image} alt={plant.name} class="banner" loading="eager" />

  <h1>{plant.name}</h1>

  <hr />

  <p class="family">
    Family: <a href={resolve(`classifications/#${familyId(family)}`)}
      >{family}</a
    >
    - Genus:
    <a href={resolve(`classifications/#${genusId(family, genus)}`)}>{genus}</a>
    - Species:
    {species}
  </p>

  {#if plant.otherNames.length > 0}
    <p>Other names: {plant.otherNames.join(", ")}</p>
  {/if}

  {#if plant.caution || isUsed}
    <aside class="caution" aria-label="Safety">
      <strong>Caution</strong>
      {#if plant.caution}
        <p>{plant.caution}</p>
      {/if}
      {#if isUsed}
        <p class="caution-general">
          Make sure of the identification before you eat or use any wild plant,
          and pick only where no pesticides are used.
        </p>
      {/if}
    </aside>
  {/if}

  <section class="facts" aria-labelledby="facts-heading">
    <h2 id="facts-heading" class="visually-hidden">Quick facts</h2>
    <dl>
      <div class="fact-uses">
        <dt>Uses</dt>
        <dd><UseBadges uses={facts.uses} /></dd>
      </div>
      <div>
        <dt>Edible parts</dt>
        <dd>
          {facts.edibleParts.length > 0 ? facts.edibleParts.join(", ") : "None"}
        </dd>
      </div>
      <div>
        <dt>Type</dt>
        <dd class="capitalize">{facts.lifecycle} {facts.form}</dd>
      </div>
      <div>
        <dt>Flowers</dt>
        <dd>{formatMonths(facts.flowering)}</dd>
      </div>
      <div>
        <dt>Height</dt>
        <dd>{facts.height}</dd>
      </div>
      <div>
        <dt>Native to</dt>
        <dd>{facts.native}</dd>
      </div>
      <div>
        <dt>Habitat</dt>
        <dd class="capitalize">{facts.habitat.join(", ")}</dd>
      </div>
    </dl>
  </section>

  <div class="description">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- our own Markdown, escaped by renderMarkdown -->
    {@html renderMarkdown(plant.description)}
  </div>

  <section class="no-print">
    <h2>Gallery</h2>
    <hr />
    <Gallery images={plant.gallery} plantName={plant.name} />
  </section>

  {#if plant.mapUrl}
    <section class="no-print">
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
    </section>
  {/if}

  <nav class="pager no-print" aria-label="More plants">
    <a href={resolve(`plants/${previous.id}/`)} rel="prev">
      <span class="pager-label">← Previous</span>
      {previous.name}
    </a>
    <a href={resolve(`plants/${next.id}/`)} rel="next" class="pager-next">
      <span class="pager-label">Next →</span>
      {next.name}
    </a>
  </nav>
</article>

<style>
  .banner {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-radius: var(--border-radius);
    background-color: var(--color-placeholder);
  }

  @media screen and (max-width: 768px) {
    .banner {
      height: 8rem;
    }
  }

  .description :global(h2) {
    font-size: 1.5rem;
    margin-top: 1.6rem;
  }

  .description :global(ul) {
    padding-left: 1.25rem;
  }

  .description :global(li) {
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 0.35rem 0;
  }

  .description :global(strong) {
    font-weight: 700;
  }

  .family {
    font-style: italic;
  }

  .caution {
    border-left: 0.3rem solid var(--color-caution-border);
    background: var(--color-caution-bg);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    padding: 0.75rem 1rem;
    margin: 1rem 0;
  }

  .caution p {
    font-size: 1rem;
    margin: 0.3rem 0 0 0;
  }

  .caution-general {
    font-style: italic;
  }

  .facts dl {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 0.75rem 1.5rem;
    margin: 0.5rem 0 1rem 0;
  }

  .fact-uses {
    grid-column: 1 / -1;
  }

  .facts dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-muted);
  }

  .facts dd {
    margin: 0.15rem 0 0 0;
  }

  .capitalize::first-letter {
    text-transform: uppercase;
  }

  section {
    width: 100%;
  }

  .map {
    width: 100%;
    height: 30rem;
  }

  .pager {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 0.0625rem solid var(--color-rule);
  }

  .pager a {
    display: flex;
    flex-direction: column;
  }

  .pager-next {
    text-align: right;
  }

  .pager-label {
    font-size: 0.8rem;
    color: var(--color-muted);
  }

  @media print {
    .banner {
      height: 12rem;
    }

    .caution {
      border: 0.0625rem solid #000;
    }
  }
</style>
