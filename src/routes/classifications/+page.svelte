<script lang="ts">
  import { resolve } from "$app/paths";
  import { familyId, genusId } from "#lib/plants.js";
  import Seo from "#lib/components/Seo.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const plantCount = (genera: { plants: unknown[] }[]) =>
    genera.reduce((total, g) => total + g.plants.length, 0);

  const countLabel = (genera: number, plants: number) =>
    `${genera} ${genera === 1 ? "genus" : "genera"}, ${plants} ${plants === 1 ? "plant" : "plants"}`;

  let allOpen = $state(true);
</script>

<Seo
  title="Classifications"
  description="Plant classification hierarchy."
  path="/classifications/"
/>

<div class="text-column">
  <h1>Classifications</h1>

  <p>
    Every plant in HerbCodex, grouped by family and genus. Select a family or
    genus to fold it away.
  </p>

  <hr />

  <div class="toolbar">
    <span class="legend">
      <span class="level family-level">Family</span> →
      <span class="level genus-level">Genus</span> →
      <span class="level">Species</span>
    </span>
    <button class="toggle" onclick={() => (allOpen = !allOpen)}>
      {allOpen ? "Collapse all" : "Expand all"}
    </button>
  </div>

  <ul class="tree">
    {#each data.classifications as { family, genera } (family)}
      <li>
        <details open={allOpen}>
          <summary id={familyId(family)} class="node family-node">
            {family}
            <span class="count"
              >{countLabel(genera.length, plantCount(genera))}</span
            >
          </summary>
          <ul>
            {#each genera as { genus, plants } (genus)}
              <li>
                <details open={allOpen}>
                  <summary id={genusId(family, genus)} class="node genus-node">
                    <i>{genus}</i>
                  </summary>
                  <ul>
                    {#each plants as plant (plant.id)}
                      <li>
                        <a
                          class="node species-node"
                          href={resolve(`plants/${plant.id}/`)}
                        >
                          <img src={plant.image} alt="" loading="lazy" />
                          <span>
                            <i>{plant.classification.species}</i>
                            <span class="common">{plant.name}</span>
                          </span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                </details>
              </li>
            {/each}
          </ul>
        </details>
      </li>
    {/each}
  </ul>
</div>

<style>
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  .legend {
    font-size: 0.85rem;
    color: var(--color-muted);
  }

  .level {
    padding: 0.1rem 0.5rem;
    border-radius: 1rem;
    background: var(--badge-bg);
    color: var(--badge-text);
  }

  .family-level {
    background: var(--color-header);
    color: #fff;
  }

  .genus-level {
    background: var(--badge-food-bg);
  }

  .toggle {
    font-size: 0.9rem;
    padding: 0.35rem 0.9rem;
    border-radius: var(--border-radius);
    border: 0.0625rem solid var(--color-rule);
    background: transparent;
    color: var(--color-text);
    cursor: pointer;
  }

  /* Tree connector lines */
  .tree,
  .tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tree ul {
    margin-left: 1.25rem;
    padding-left: 1rem;
    border-left: 0.125rem solid var(--color-rule);
  }

  .tree ul > li {
    position: relative;
  }

  .tree ul > li::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 1.15rem;
    width: 0.85rem;
    border-top: 0.125rem solid var(--color-rule);
  }

  .tree ul > li:last-child::after {
    /* Hide the vertical line below the last child's connector */
    content: "";
    position: absolute;
    left: -1.15rem;
    top: 1.25rem;
    bottom: 0;
    width: 0.25rem;
    background: var(--color-surface);
  }

  .node {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.35rem 0;
    padding: 0.3rem 0.8rem;
    border-radius: 1rem;
  }

  summary.node {
    cursor: pointer;
    list-style-position: inside;
  }

  .family-node {
    background: var(--color-header);
    color: #fff;
    font-family: Jockey One;
    font-size: 1.4rem;
    scroll-margin-top: 1rem;
  }

  .genus-node {
    background: var(--badge-food-bg);
    color: var(--badge-text);
    scroll-margin-top: 1rem;
  }

  .count {
    font-family: Merriweather, serif;
    font-size: 0.75rem;
    opacity: 0.8;
  }

  .species-node {
    padding-left: 0.3rem;
    background: var(--badge-bg);
    color: var(--badge-text);
  }

  .species-node:hover {
    text-decoration: none;
    outline: 0.125rem solid var(--color-theme-1);
  }

  .species-node img {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    object-fit: cover;
    background: var(--color-placeholder);
  }

  .common {
    display: block;
    font-size: 0.8rem;
    color: var(--color-muted);
  }

  summary:target {
    outline: 0.2rem solid var(--color-theme-1);
  }
</style>
