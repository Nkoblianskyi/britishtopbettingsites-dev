import Link from "next/link"
import { Shield } from "lucide-react"

const footerLinks = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Cookie Policy",        href: "/cookie-policy" },
  { label: "About Us",             href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
]

const safetyOrgs = [
  {
    src:    "/gamble-aware.png",
    alt:    "BeGambleAware",
    href:   "https://www.begambleaware.org/",
    width:  130,
    height: 36,
  },
  {
    src:    "/gamcare.png",
    alt:    "GamCare",
    href:   "https://www.gamcare.org.uk/",
    width:  110,
    height: 36,
  },
  {
    src:    "/gordon.png",
    alt:    "Gambling Therapy",
    href:   "https://www.gamblingtherapy.org/",
    width:  100,
    height: 36,
  },
  {
    src:    "/commission.png",
    alt:    "UK Gambling Commission",
    href:   "https://www.gamblingcommission.gov.uk/",
    width:  120,
    height: 36,
  },
  {
    src:    "/gamstop.svg",
    alt:    "GamStop",
    href:   "https://www.gamstop.co.uk/",
    width:  100,
    height: 36,
  },
]

function FooterLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 group mb-4"
      aria-label="British Top Betting Sites — return to homepage"
    >
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="17" fill="hsl(221 83% 53%)" />
        <circle cx="18" cy="18" r="10" fill="white" opacity="0.15" />
        <path d="M18 8 L18 28 M8 18 L28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M11 11 L25 25 M25 11 L11 25" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <circle cx="18" cy="18" r="3" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-extrabold text-[14px] tracking-tight text-white">British</span>
          <span className="font-heading font-extrabold text-[14px] tracking-tight text-primary">Top</span>
        </div>
        <span className="font-heading font-bold text-[11px] tracking-wider text-white/60 uppercase">
          Betting Sites
        </span>
      </div>
    </Link>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full bg-navy text-navy-foreground"
      aria-label="British Top Betting Sites site footer"
    >
      {/* Main body — 4-column grid on desktop */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.6fr] gap-10 lg:gap-8">

            {/* Col 1 — Brand */}
            <div>
              <FooterLogo />
              <p className="text-[12px] text-white/50 leading-relaxed mt-1 max-w-xs">
                British Top Betting Sites provides independent expert rankings of UKGC-licensed UK sportsbooks. We do not operate a bookmaker. All rankings are produced by our editorial team with no commercial influence on scores or placement.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] text-white/40 tracking-wide">UKGC Licensed Operators Only</span>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">
                Pages
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer site navigation">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 — Site info */}
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4">
                About
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Domain</p>
                  <p className="text-[13px] text-white/60 font-heading font-semibold">britishtopbettingsites.com</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Jurisdiction</p>
                  <p className="text-[13px] text-white/60">United Kingdom</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Regulator</p>
                  <p className="text-[13px] text-white/60">UKGC</p>
                </div>
              </div>
            </div>

            {/* Col 4 — Safer Gambling orgs */}
            <div>
              <p
                className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4"
                id="footer-rg-label"
              >
                Safer Gambling
              </p>
              <div
                className="flex flex-row flex-wrap items-center gap-2.5"
                aria-labelledby="footer-rg-label"
                role="list"
              >
                {safetyOrgs.map(({ src, alt, href, width, height }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 rounded-xl border border-white/12 bg-white/8 hover:bg-white/14 transition-colors"
                    aria-label={`${alt} — opens in new tab`}
                    role="listitem"
                  >
                    <img
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className="object-contain"
                      style={{ maxHeight: 26, maxWidth: width }}
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="bg-black/20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-white/38 leading-relaxed mb-3">
            <span className="text-destructive font-semibold">18+</span> · britishtopbettingsites.com is an independent betting comparison and information service. We may receive affiliate commission when users visit operators via our links — this does not affect our editorial ratings or rankings. All featured operators hold a valid UKGC licence. Betting involves financial risk and is not suitable for all adults. Please gamble responsibly. If you are concerned about your gambling habits, visit{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity underline underline-offset-2"
              aria-label="BeGambleAware.org — opens in new tab"
            >
              BeGambleAware.org
            </a>{" "}
            or call the free helpline on{" "}
            <a href="tel:08088020133" className="text-primary hover:opacity-80 underline underline-offset-2">
              0808 8020 133
            </a>.
          </p>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/8 pt-3 text-[10px] text-white/25 uppercase tracking-widest">
            <span>&copy; {year} britishtopbettingsites.com. All rights reserved.</span>
            <span
              className="text-destructive font-heading font-bold border border-destructive/40 px-2 py-0.5 bg-destructive/10 rounded-md"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
