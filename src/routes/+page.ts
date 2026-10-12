import type { PageLoad } from "./$types";

// Serialised at prerender, so hydration renders the same plant of the day.
export const load: PageLoad = () => ({ renderedAt: new Date().toISOString() });

export const prerender = true;
export const trailingSlash = "always";
