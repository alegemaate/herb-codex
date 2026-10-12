import { DATA } from "#lib/data.js";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const plant = DATA.find((d) => d.id === params.id);

  if (plant) {
    return {
      plant,
    };
  }

  error(404, "Not found");
};

export const prerender = true;
export const trailingSlash = "always";
