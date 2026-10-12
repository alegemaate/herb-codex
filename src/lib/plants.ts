import { DATA, type Plant, type PlantUse } from "./data.js";

export const USE_LABELS: Record<PlantUse, string> = {
  food: "Edible",
  medicinal: "Medicinal",
  tea: "Tea",
  wildlife: "Wildlife",
  soil: "Soil builder",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Formats flowering months as a range, e.g. "Jun–Sep". */
export const formatMonths = (months: number[]) => {
  if (months.length === 0) {
    return "Does not flower";
  }
  const first = MONTHS[months[0] - 1];
  const last = MONTHS[months[months.length - 1] - 1];
  return first === last ? first : `${first}–${last}`;
};

export const familyId = (family: string) => family.toLocaleLowerCase();

export const genusId = (family: string, genus: string) =>
  `${familyId(family)}-${genus.toLocaleLowerCase()}`;

/** Plants grouped by family, then genus, both sorted by name. */
export const classificationTree = () => {
  const tree: Record<string, Record<string, Plant[]>> = {};

  for (const plant of DATA) {
    const { family, genus } = plant.classification;
    tree[family] ??= {};
    tree[family][genus] ??= [];
    tree[family][genus].push(plant);
  }

  return Object.entries(tree)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, genera]) => ({
      family,
      genera: Object.entries(genera)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([genus, plants]) => ({ genus, plants })),
    }));
};

/** The same plant for everyone on a given day. */
export const plantOfTheDay = (date: Date) => {
  const day = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
  return DATA[day % DATA.length];
};

export const randomPlant = () => DATA[Math.floor(Math.random() * DATA.length)];

/** Previous and next plants in the list, wrapping at both ends. */
export const neighbours = (id: string) => {
  const index = DATA.findIndex((plant) => plant.id === id);
  return {
    previous: DATA[(index - 1 + DATA.length) % DATA.length],
    next: DATA[(index + 1) % DATA.length],
  };
};
