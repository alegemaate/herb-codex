<script lang="ts">
  import { SITE_CONSTANTS } from "#lib/constants.js";

  interface Props {
    title: string;
    description: string;
    /** Path from the site root, e.g. "/plants/". */
    path: string;
    image?: string;
    type?: "website" | "article";
    jsonLd?: object;
  }

  let {
    title,
    description,
    path,
    image,
    type = "website",
    jsonLd,
  }: Props = $props();

  const fullTitle = $derived(`${title} | ${SITE_CONSTANTS.SITE_NAME}`);
  const url = $derived(`${SITE_CONSTANTS.SITE_URL}${path}`);

  // Escape "<" so the JSON cannot close the script tag early.
  const jsonLdTag = $derived(
    jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</` +
          "script>"
      : "",
  );
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <meta property="og:site_name" content={SITE_CONSTANTS.SITE_NAME} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  {#if image}
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
  {:else}
    <meta name="twitter:card" content="summary" />
  {/if}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonLdTag}
</svelte:head>
