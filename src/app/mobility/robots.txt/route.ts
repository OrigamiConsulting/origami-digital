import { MOBILITY_URL } from '../content'

/**
 * robots.txt served at https://mobility.origami-digital.co.za/robots.txt
 * (the proxy rewrites the subdomain's /robots.txt here).
 */
export const dynamic = 'force-static'

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${MOBILITY_URL}/sitemap.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
