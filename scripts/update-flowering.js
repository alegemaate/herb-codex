/* eslint-disable no-console -- command-line script that reports progress */
// Fetches flowering observations from iNaturalist and saves them to
// src/lib/flowering.json. Run with `yarn update:flowering`, then commit the file.
//
// Requests are sent one at a time at ~55/minute, under iNaturalist's limit.
// A failed request keeps the old value for that plant and makes the script
// exit with an error, so stale data is never saved silently.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { runnerImport } from "vite";

const OUTPUT = new URL("../src/lib/flowering.json", import.meta.url);
const ROOT = new URL("..", import.meta.url).pathname;

/** iNaturalist annotation "Flowers and Fruits" = "Flowers". */
const PHENOLOGY_TERM = 12;
const FLOWERING_VALUE = 13;
const NORTH_AMERICA = 97394;
/** Below this many observations, the chart is too noisy to show. */
const MIN_OBSERVATIONS = 20;
const DELAY_MS = 1100;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchCounts = async (taxonId) => {
  const url = new URL("https://api.inaturalist.org/v1/observations/histogram");
  url.search = new URLSearchParams({
    taxon_id: String(taxonId),
    place_id: String(NORTH_AMERICA),
    interval: "month_of_year",
    term_id: String(PHENOLOGY_TERM),
    term_value_id: String(FLOWERING_VALUE),
    quality_grade: "research",
  }).toString();

  const response = await fetch(url, {
    headers: { "User-Agent": "HerbCodex (https://www.herbcodex.org)" },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const body = await response.json();
  const byMonth = body.results.month_of_year;
  return Array.from({ length: 12 }, (_, i) => byMonth[i + 1] ?? 0);
};

const { module } = await runnerImport(`${ROOT}src/lib/data.ts`, {
  configFile: false,
  root: ROOT,
  logLevel: "error",
});

const previous = existsSync(OUTPUT)
  ? JSON.parse(readFileSync(OUTPUT, "utf8")).taxa
  : {};
const taxa = {};
const failures = [];

for (const [i, plant] of module.DATA.entries()) {
  const id = String(plant.taxonIds.inaturalist);
  try {
    const counts = await fetchCounts(id);
    const total = counts.reduce((a, b) => a + b, 0);
    taxa[id] = {
      plant: plant.id,
      counts: total >= MIN_OBSERVATIONS ? counts : null,
      total,
    };
    console.log(`${plant.id}: ${total} observations`);
  } catch (error) {
    failures.push(plant.id);
    taxa[id] = previous[id] ?? { plant: plant.id, counts: null, total: 0 };
    console.error(`${plant.id}: failed (${error.message}), kept old value`);
  }
  if (i < module.DATA.length - 1) {
    await sleep(DELAY_MS);
  }
}

const output = {
  source: "iNaturalist research-grade observations annotated as flowering",
  place: "North America",
  updated: new Date().toISOString().slice(0, 10),
  taxa,
};
writeFileSync(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);

if (failures.length > 0) {
  console.error(`\nFailed: ${failures.join(", ")}. Run the script again.`);
  process.exit(1);
}
console.log(`\nSaved ${Object.keys(taxa).length} plants.`);
