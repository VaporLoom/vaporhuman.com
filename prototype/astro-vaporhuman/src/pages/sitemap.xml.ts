import { site } from "../data/site";

export function GET() {
  const urls = site.crawlablePages
    .map((path) => `  <url>\n    <loc>${new URL(path, site.origin).toString()}</loc>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
