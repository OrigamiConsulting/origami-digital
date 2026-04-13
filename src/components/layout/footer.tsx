import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Website Design', href: '/services/website-design' },
  { label: 'Mobile Apps', href: '/services/mobile-apps' },
  { label: 'Custom Software', href: '/services/custom-software' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'AI Automation', href: '/services/ai-automation' },
  { label: 'Google Ads', href: '/services/google-ads' },
]

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M14 2L26 14L14 26L2 14L14 2Z"
                  fill="#0A8FBF"
                  opacity="0.9"
                />
                <path
                  d="M14 2L26 14L14 14L2 14L14 2Z"
                  fill="#297373"
                  opacity="0.7"
                />
                <path
                  d="M14 14L26 14L14 26Z"
                  fill="#0A8FBF"
                  opacity="0.5"
                />
              </svg>
              <span className="text-xl font-bold font-[family-name:var(--font-display)]">
                Origami Digital
              </span>
            </Link>

            <p className="text-sm font-semibold tracking-wider text-[#0A8FBF] uppercase">
              Build. Grow. Automate.
            </p>

            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              An AI-augmented digital agency delivering enterprise-quality
              websites, SEO, and automation solutions for South African
              businesses. No bloated overhead — just senior-level expertise
              and modern tools.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-300 uppercase font-[family-name:var(--font-display)]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-300 uppercase font-[family-name:var(--font-display)]">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-neutral-300 uppercase font-[family-name:var(--font-display)]">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@origami-digital.co.za"
                  className="flex items-start gap-3 text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  {/* Email icon */}
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0A8FBF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>hello@origami-digital.co.za</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                {/* Location icon */}
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#0A8FBF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                  />
                </svg>
                <span>Bedfordview, Johannesburg,<br />South Africa</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-neutral-400 transition-all duration-200 hover:bg-[#0A8FBF]/15 hover:text-[#0A8FBF]"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-neutral-400 transition-all duration-200 hover:bg-[#0A8FBF]/15 hover:text-[#0A8FBF]"
                aria-label="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Origami Digital. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-neutral-500 transition-colors duration-200 hover:text-neutral-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
