import { NextResponse, type NextRequest } from 'next/server'

/**
 * Host-based routing for the Origami Mobility subdomain.
 *
 * `mobility.origami-digital.co.za` is a Vercel domain on this project. Requests
 * that arrive on it are served from the `/mobility` route of this site:
 *
 *   mobility.<host>/             -> rewrite to /mobility            (the page)
 *   mobility.<host>/sitemap.xml  -> rewrite to /mobility/sitemap.xml
 *   mobility.<host>/robots.txt   -> rewrite to /mobility/robots.txt
 *   mobility.<host>/mobility     -> 308 to mobility.<host>/         (one URL)
 *   mobility.<host>/<anything>   -> 308 to <host>/<anything>        (parent site)
 *
 * Static files, `/_next/*`, `/api/*` and `/mobility/*` assets pass through
 * untouched, so `next/image`, the contact API and `/mobility/og.png` work on
 * both hosts. The main host is never touched.
 *
 * Next 16 renamed the `middleware` file convention to `proxy`; this is the
 * same mechanism under its current name.
 */

const SUBDOMAIN_PREFIX = 'mobility.'
const PASSTHROUGH_PREFIXES = ['/_next/', '/api/', '/mobility/', '/images/', '/downloads/']
const HAS_FILE_EXTENSION = /\.[a-z0-9]+$/i

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').toLowerCase()
  if (!host.startsWith(SUBDOMAIN_PREFIX)) {
    return NextResponse.next()
  }

  const { pathname, search, protocol } = request.nextUrl

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/mobility'
    return NextResponse.rewrite(url)
  }

  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    const url = request.nextUrl.clone()
    url.pathname = `/mobility${pathname}`
    return NextResponse.rewrite(url)
  }

  if (pathname === '/mobility' || pathname === '/mobility/') {
    return NextResponse.redirect(`${protocol}//${host}/${search}`, 308)
  }

  if (
    PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    HAS_FILE_EXTENSION.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Every other path belongs to the parent site (header and footer links).
  const parentHost = host.slice(SUBDOMAIN_PREFIX.length)
  return NextResponse.redirect(`${protocol}//${parentHost}${pathname}${search}`, 308)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|images/|downloads/|mobility/|api/).*)'],
}
