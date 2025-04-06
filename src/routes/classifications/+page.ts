import { DATA, type Plant } from "$lib/data.js";

/** @type {import('./$types').PageLoad} */
export function load() {
  // Make into a tree
  const tree: Record<string, Record<string, Plant[]>> = {};

  DATA.forEach((c) => {
    const {
      classification: { genus, family },
    } = c;

    if (!tree[family]) {
      tree[family] = {};
    }

    if (!tree[family][genus]) {
      tree[family][genus] = [];
    }

    tree[family][genus].push(c);
  });

  return {
    classifications: tree,
  };
}

export const prerender = true;
export const trailingSlash = "always";
