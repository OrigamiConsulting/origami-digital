import { MOBILITY_URL } from '../content'

/**
 * Sitemap served at https://mobility.origami-digital.co.za/sitemap.xml
 * (the proxy rewrites the subdomain's /sitemap.xml here). The parent site's
 * sitemap lists the subdomain URL too; this one exists so a Search Console
 * property for the subdomain has a sitemap of its own.
 */
export const dynamic = 'force-static'

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${MOBILITY_URL}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
