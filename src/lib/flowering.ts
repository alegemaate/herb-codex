import data from "./flowering.json";

// Saved by `yarn update:flowering` (scripts/update-flowering.js).

export interface Flowering {
  /** Observations of the plant in flower, January first. */
  counts: number[];
  total: number;
  /** Date the data was fetched, e.g. "2026-10-12". */
  updated: string;
}

const taxa: Record<string, { counts: number[] | null; total: number }> =
  data.taxa;

/** Null when there is no data or too few observations to chart. */
export const floweringFor = (inaturalistId: number): Flowering | null => {
  const entry = taxa[inaturalistId];
  return entry?.counts
    ? { counts: entry.counts, total: entry.total, updated: data.updated }
    : null;
};

/** Months with at least 10% of the peak count, 1 = January. */
export const floweringMonths = ({ counts }: Flowering) => {
  const peak = Math.max(...counts);
  return counts.flatMap((count, i) => (count >= peak * 0.1 ? [i + 1] : []));
};
