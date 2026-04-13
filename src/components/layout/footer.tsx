import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="noise-texture bg-[#141414] relative" role="contentinfo">
      <div className="h-px bg-gradient-to-r from-transparent via-[#0A8FBF]/30 to-transparent" />

      <div className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr_1.2fr] gap-12 md:gap-16">
            {/* Column 1: Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/images/logo/origami-horse.png"
                  alt=""
                  width={32}
                  height={18}
                  className="h-[18px] w-auto brightness-0 invert"
                  aria-hidden="true"
                />
                <span className="text-xl text-white font-[family-name:var(--font-display)]">
                  <span className="font-bold">Origami</span>{' '}
                  <span className="font-normal">Digital</span>
                </span>
              </Link>
              <p className="text-[#0A8FBF] text-sm font-semibold tracking-wider uppercase mt-3">
                Build. Grow. Automate.
              </p>
              <p className="text-[#8A8A8A] text-sm mt-4 max-w-sm leading-relaxed">
                An AI-augmented digital agency in Johannesburg delivering enterprise-quality websites, apps, and automation solutions.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#8A8A8A] text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get in Touch */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Get in Touch
              </h3>

              {/* Email */}
              <a
                href="mailto:hello@origami-digital.co.za"
                className="text-[#8A8A8A] text-sm hover:text-[#0A8FBF] transition-colors duration-200 block"
              >
                hello@origami-digital.co.za
              </a>

              {/* Phone */}
              <a
                href="tel:+27781900107"
                className="text-[#8A8A8A] text-sm hover:text-[#0A8FBF] transition-colors duration-200 block mt-2"
              >
                +27 (0)78 190 0107
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27781900107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8A8A8A] text-sm hover:text-[#25D366] transition-colors duration-200 mt-2"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>

              {/* Address */}
              <p className="text-[#8A8A8A] text-sm mt-4 leading-relaxed">
                Kloof Estates, Bedfordview
                <br />
                Johannesburg, South Africa
              </p>

              {/* Social links — LinkedIn only */}
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#0A8FBF]/20 hover:border-[#0A8FBF]/30 flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4 text-[#8A8A8A]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-white/5 pt-8 flex items-center justify-between">
            <p className="text-xs text-[#8A8A8A]/60">
              &copy; 2026 Origami Digital. All rights reserved.
            </p>
            <a
              href="#"
              className="text-xs text-[#8A8A8A]/60 hover:text-white transition-colors duration-200"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
