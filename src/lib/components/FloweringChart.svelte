<script lang="ts">
  import type { Flowering } from "#lib/flowering.js";

  let {
    flowering,
    inaturalistId,
  }: { flowering: Flowering; inaturalistId: number } = $props();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const peak = $derived(Math.max(...flowering.counts));

  const formatDate = (isoDate: string) =>
    new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
</script>

<figure class="flowering">
  <figcaption>
    <strong>When it flowers</strong>
    <span class="subtitle">
      {flowering.total.toLocaleString("en")} photos of it in flower across North America,
      by month, from
      <a
        href={`https://www.inaturalist.org/taxa/${inaturalistId}`}
        target="_blank"
        rel="noopener">iNaturalist</a
      >, as of {formatDate(flowering.updated)}
    </span>
  </figcaption>

  <div class="chart" aria-hidden="true">
    {#each flowering.counts as count, i (i)}
      <div class="column">
        <div class="plot">
          <div
            class="bar"
            class:empty={count === 0}
            style:height={`${(count / peak) * 100}%`}
          ></div>
        </div>
        <span class="label">{MONTHS[i].slice(0, 1)}</span>
        <span class="tooltip">
          {MONTHS[i]}: {count.toLocaleString("en")}
        </span>
      </div>
    {/each}
  </div>

  <table class="visually-hidden">
    <caption>Observations in flower by month</caption>
    <thead>
      <tr><th scope="col">Month</th><th scope="col">Observations</th></tr>
    </thead>
    <tbody>
      {#each flowering.counts as count, i (i)}
        <tr><th scope="row">{MONTHS[i]}</th><td>{count}</td></tr>
      {/each}
    </tbody>
  </table>
</figure>

<style>
  .flowering {
    margin: 1rem 0;
    width: 100%;
    max-width: 32rem;
    --bar-color: #2f7a22;
  }

  @media (prefers-color-scheme: dark) {
    .flowering {
      --bar-color: #58a647;
    }
  }

  figcaption {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
  }

  .subtitle {
    font-size: 0.8rem;
    color: var(--color-muted);
  }

  .chart {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2px;
    border-bottom: 1px solid var(--color-rule);
  }

  .column {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plot {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 6rem;
  }

  .bar {
    width: 70%;
    min-height: 2px;
    border-radius: 4px 4px 0 0;
    background: var(--bar-color);
  }

  .bar.empty {
    background: var(--color-rule);
    opacity: 0.4;
  }

  .label {
    font-size: 0.75rem;
    color: var(--color-muted);
    padding-top: 0.25rem;
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.2rem 0.5rem;
    border-radius: 0.4rem;
    background: var(--color-text);
    color: var(--color-surface);
    font-size: 0.75rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s;
    z-index: 1;
  }

  .column:hover .tooltip {
    opacity: 1;
  }

  .column:hover .bar:not(.empty) {
    filter: brightness(1.15);
  }
</style>
