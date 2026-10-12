<script lang="ts">
  import type { Map as MapLibreMap, RasterTileSource } from "maplibre-gl";
  import { gbifTileUrl } from "#lib/gbif.js";

  let { gbifTaxonKey, plantName }: { gbifTaxonKey: number; plantName: string } =
    $props();

  const MONTHS = [
    "All year",
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

  let container: HTMLDivElement | undefined = $state();
  let status: "waiting" | "loading" | "ready" | "error" = $state("waiting");
  /** 0 = all year, 1 = January. */
  let month = $state(0);
  let map: MapLibreMap | undefined;
  let currentTiles = "";

  const createMap = async (element: HTMLElement, taxonKey: number) => {
    const [maplibre, { default: workerUrl }] = await Promise.all([
      import("maplibre-gl"),
      import("maplibre-gl/dist/maplibre-gl-worker.mjs?url"),
      import("maplibre-gl/dist/maplibre-gl.css"),
    ]);
    maplibre.setWorkerUrl(workerUrl);

    const dark = matchMedia("(prefers-color-scheme: dark)").matches;
    const newMap = new maplibre.Map({
      container: element,
      style: `https://tiles.openfreemap.org/styles/${dark ? "dark" : "positron"}`,
      center: [-95, 45],
      zoom: 1.8,
      minZoom: 1,
      maxZoom: 12,
      cooperativeGestures: true,
      attributionControl: { compact: true },
    });
    newMap.addControl(new maplibre.NavigationControl({ showCompass: false }));

    newMap.on("load", () => {
      currentTiles = gbifTileUrl(taxonKey, month);
      newMap.addSource("gbif", {
        type: "raster",
        tiles: [currentTiles],
        tileSize: 256,
        attribution: `Records: <a href="https://www.gbif.org/species/${taxonKey}" target="_blank" rel="noopener">GBIF</a>`,
      });
      newMap.addLayer({
        id: "gbif",
        type: "raster",
        source: "gbif",
        paint: { "raster-opacity": 0.85 },
      });
      // The compact attribution starts open and covers small maps.
      element
        .querySelector(".maplibregl-compact-show")
        ?.classList.remove("maplibregl-compact-show");
      status = "ready";
    });

    return newMap;
  };

  // Load the map library only when the map scrolls into view.
  $effect(() => {
    const element = container;
    const taxonKey = gbifTaxonKey;
    if (!element) {
      return;
    }

    let cancelled = false;
    const load = async () => {
      status = "loading";
      try {
        const created = await createMap(element, taxonKey);
        if (cancelled) {
          created.remove();
        } else {
          map = created;
        }
      } catch (error) {
        console.error(error);
        status = "error";
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void load();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      map?.remove();
      map = undefined;
    };
  });

  // Swap the tiles when the month changes.
  $effect(() => {
    const url = gbifTileUrl(gbifTaxonKey, month);
    if (status === "ready" && url !== currentTiles) {
      map?.getSource<RasterTileSource>("gbif")?.setTiles([url]);
      currentTiles = url;
    }
  });
</script>

<div class="plant-map">
  <div class="controls">
    <label for="map-month">Records in</label>
    <input
      id="map-month"
      type="range"
      min="0"
      max="12"
      step="1"
      bind:value={month}
      disabled={status !== "ready"}
    />
    <output for="map-month">{MONTHS[month]}</output>
  </div>

  <div
    class="map"
    bind:this={container}
    role="region"
    aria-label={`Map of ${plantName} records`}
  >
    {#if status === "waiting" || status === "loading"}
      <p class="message">Loading map…</p>
    {:else if status === "error"}
      <p class="message">
        The map could not load.
        <a href={`https://www.gbif.org/species/${gbifTaxonKey}`}
          >See the records on GBIF</a
        >.
      </p>
    {/if}
  </div>

  <div class="legend">
    <span>Fewer records</span>
    <span class="scale" aria-hidden="true"></span>
    <span>More records</span>
  </div>
  <p class="note">
    Each hexagon shows how many times {plantName} has been recorded there, from herbarium
    specimens, surveys and iNaturalist photos. Gaps can mean nobody has looked, not
    that the plant is absent.
  </p>
</div>

<style>
  .plant-map {
    width: 100%;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .controls input {
    flex: 1;
    max-width: 18rem;
    accent-color: var(--color-header);
  }

  .controls label {
    white-space: nowrap;
  }

  .controls output {
    min-width: 6rem;
    font-weight: 700;
  }

  .map {
    position: relative;
    width: 100%;
    height: 28rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    background: var(--color-placeholder);
  }

  .message {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 1rem;
    color: var(--color-muted);
  }

  .legend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--color-muted);
  }

  /* Matches GBIF's "classic" hexagon colours */
  .scale {
    width: 8rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: linear-gradient(to right, #ffff00, #ffaa00, #ff5500, #cc0000);
  }

  .note {
    font-size: 0.8rem;
    color: var(--color-muted);
  }

  @media screen and (max-width: 720px) {
    .map {
      height: 20rem;
    }
  }
</style>
