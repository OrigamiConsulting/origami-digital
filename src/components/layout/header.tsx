'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'

type NavLink = {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Website Design', href: '/services/website-design' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'Google Ads', href: '/services/google-ads' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isActive = useCallback(
    (href: string): boolean => {
      if (href === '/') return pathname === '/'
      return pathname.startsWith(href)
    },
    [pathname]
  )

  function handleDropdownEnter() {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
      dropdownTimeout.current = null
    }
    setDropdownOpen(true)
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#141414]/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo — text only */}
          <Link
            href="/"
            className="flex items-center gap-0.5 transition-opacity hover:opacity-80"
            aria-label="Origami Digital - Home"
          >
            <span className="text-xl text-white font-[family-name:var(--font-display)] font-bold">
              Origami
            </span>
            <span className="text-xl text-white font-[family-name:var(--font-display)] font-normal ml-1.5">
              Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                {...(link.dropdown
                  ? {
                      onMouseEnter: handleDropdownEnter,
                      onMouseLeave: handleDropdownLeave,
                    }
                  : {})}
              >
                <Link
                  href={link.href}
                  className={[
                    'relative px-4 py-2 text-sm font-medium tracking-wide font-[family-name:var(--font-body)] transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className={[
                        'ml-1 inline-block h-3 w-3 transition-transform duration-200',
                        dropdownOpen ? 'rotate-180' : '',
                      ].join(' ')}
                      fill="none"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 5L6 8L9 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {/* Active indicator — small centered dot */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#0A8FBF]" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div
                    className={[
                      'absolute left-0 top-full pt-2 transition-all duration-200',
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none',
                    ].join(' ')}
                  >
                    <div className="min-w-[220px] rounded-xl border border-white/10 bg-[#1E1E1E]/95 backdrop-blur-lg p-2 shadow-2xl">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={[
                            'block rounded-lg px-4 py-2.5 text-sm font-[family-name:var(--font-body)] transition-colors duration-150',
                            isActive(item.href)
                              ? 'bg-[#0A8FBF]/15 text-[#0A8FBF]'
                              : 'text-neutral-400 hover:bg-white/5 hover:text-white',
                          ].join(' ')}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#EF6351] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#D94F3F] hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex w-5 flex-col items-center justify-center gap-[5px]">
                <span
                  className={[
                    'block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center',
                    mobileMenuOpen
                      ? 'translate-y-[7px] rotate-45'
                      : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'block h-[2px] w-full rounded-full bg-white transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0 scale-x-0' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center',
                    mobileMenuOpen
                      ? '-translate-y-[7px] -rotate-45'
                      : '',
                  ].join(' ')}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay — CSS transitions only, no Framer Motion */}
      <div
        className={[
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#141414]/98 backdrop-blur-sm lg:hidden transition-all duration-300',
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          className="flex flex-col items-center gap-2"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className="flex flex-col items-center"
              style={{
                transition: `opacity 0.4s ease ${index * 0.06}s, transform 0.4s ease ${index * 0.06}s`,
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <Link
                href={link.href}
                className={[
                  'px-4 py-3 text-2xl md:text-3xl font-medium font-[family-name:var(--font-display)] transition-colors duration-200',
                  isActive(link.href)
                    ? 'text-[#0A8FBF]'
                    : 'text-white hover:text-[#0A8FBF]',
                ].join(' ')}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>

              {/* Mobile dropdown sub-links */}
              {link.dropdown && isActive(link.href) && (
                <div className="flex flex-col items-center gap-1 pb-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        'px-4 py-1.5 text-base font-[family-name:var(--font-body)] transition-colors duration-150',
                        isActive(item.href)
                          ? 'text-[#0A8FBF]'
                          : 'text-neutral-400 hover:text-white',
                      ].join(' ')}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div
            style={{
              transition: `opacity 0.4s ease ${navLinks.length * 0.06}s, transform 0.4s ease ${navLinks.length * 0.06}s`,
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EF6351] px-8 py-3 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#D94F3F] hover:scale-[1.02] active:scale-[0.98]"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
