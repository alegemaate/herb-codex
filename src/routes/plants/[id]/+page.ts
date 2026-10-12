import { DATA, RENAMED_PLANTS } from "#lib/data.js";
import { error, redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const renamed = RENAMED_PLANTS[params.id];
  if (renamed) {
    redirect(301, `/plants/${renamed}/`);
  }

  const plant = DATA.find((d) => d.id === params.id);

  if (plant) {
    return {
      plant,
    };
  }

  error(404, "Not found");
};

// Old ids are not linked from anywhere, so list them for the prerenderer.
export const entries: EntryGenerator = () =>
  Object.keys(RENAMED_PLANTS).map((id) => ({ id }));

export const prerender = true;
export const trailingSlash = "always";
