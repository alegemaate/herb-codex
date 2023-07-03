import { SITE_CONSTANTS } from '$lib/constants';
import { DATA } from '$lib/data';

const urlTemplateMap = (url: string) => `<url>
  <loc>${SITE_CONSTANTS.SITE_URL}${url}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`;

const sitemapTemplate = (urls: string) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${urls}
</urlset>`;

export const GET = () => {
	const urls = [
		'',
		'/plants',
		'/about',
		'/classifications',
		...DATA.map((plant) => `/plants/${plant.id}`)
	]
		.map(urlTemplateMap)
		.join('\n');

	return new Response(sitemapTemplate(urls), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
