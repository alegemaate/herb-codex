import { classificationTree } from "#lib/plants.js";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => ({
  classifications: classificationTree(),
});

export const prerender = true;
export const trailingSlash = "always";
