import Link from "next/link"
import { Shield } from "lucide-react"

const footerLinks = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Cookie Policy",        href: "/cookie-policy" },
  { label: "About Us",             href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
]

const safetyPartners = [
  { src: "/Gambling_Commission_logo.png", alt: "Gambling Commission", href: "https://www.gamblingcommission.gov.uk/", darkBg: true },
  { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/", darkBg: true },

  { src: "/gordon.png", alt: "Gordon Moody Association", href: "https://gordonmoody.org.uk/", darkBg: true },
  { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/", darkBg: true },
    { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/", darkBg: true },
  
]

function FooterBrand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group mb-3"
      aria-label="VIP UK Betting Sites — return to homepage"
    >
      <svg width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 2 L32 8 L32 20 C32 28 18 34 18 34 C18 34 4 28 4 20 L4 8 Z"
          fill="hsl(220,28%,10%)"
          stroke="hsl(43,96%,52%)"
          strokeWidth="1.5"
        />
        <path d="M9 18 L11 12 L14.5 15.5 L18 10 L21.5 15.5 L25 12 L27 18 Z" fill="hsl(43,96%,52%)" />
        <rect x="9" y="18" width="18" height="3" rx="1" fill="hsl(43,96%,52%)" />
        <rect x="11" y="22" width="14" height="5" rx="1" fill="hsl(43,96%,52%)" />
        <text x="18" y="26.5" textAnchor="middle" fontSize="4" fontWeight="900" fill="hsl(220,28%,10%)" fontFamily="system-ui, sans-serif" letterSpacing="0.5">VIP</text>
      </svg>
      <div className="flex items-baseline gap-0 leading-none">
        <span className="font-heading font-extrabold text-[15px] tracking-tight text-primary">VIP</span>
        <span className="font-heading font-extrabold text-[15px] tracking-tight text-white ml-1">UK</span>
        <span className="font-heading font-extrabold text-[15px] tracking-tight text-white ml-1">Betting</span>
        <span className="font-heading font-bold text-[15px] tracking-tight text-primary ml-1">Sites</span>
      </div>
    </Link>
  )
}

export function Footer() {
  return (
    <footer
      className="w-full bg-navy text-navy-foreground"
      aria-label="VIP UK Betting Sites site footer"
    >

      {/* Main footer body */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand column */}
          <div className="flex-shrink-0 max-w-xs">
            <FooterBrand />
            <p className="text-[12px] text-white/50 leading-relaxed mt-1">
              Independent expert rankings of fully UKGC-licensed UK betting operators. VIP UK Betting Sites does not operate a sportsbook. All rankings are the result of independent editorial review.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-white/45 tracking-wide">UKGC Licensed Operators Only</span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/35 mb-4">
                Pages
              </p>
              <nav
                className="flex flex-col gap-2.5"
                aria-label="Footer site navigation"
              >
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
          </div>
        </div>
      </div>

      {/* Responsible gambling partner logos */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p
            className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4"
            id="footer-partners-label"
          >
            Responsible Gambling Partners
          </p>
          <div
            className="flex flex-row flex-wrap items-center gap-3"
            aria-labelledby="footer-partners-label"
            role="list"
          >
            {safetyPartners.map(({ src, alt, href, darkBg }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-3 py-2 rounded-lg border transition-colors hover:opacity-90 ${
                  darkBg
                    ? "bg-white/8 border-white/10 hover:bg-white/14"
                    : "bg-white border-white/20 hover:bg-white/90"
                }`}
                aria-label={`Visit ${alt} — opens in new tab`}
                role="listitem"
              >
                <img src={src} alt={alt} className="h-5 w-auto object-contain" />
              </a>
            ))}

          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-white/38 leading-relaxed">
            <span className="text-destructive font-semibold">18+</span> · vipukbettingsites.com is an independent betting site comparison service. We may receive affiliate commission when users visit operators via our links — this does not affect our editorial ratings or rankings. All featured operators hold a valid UKGC licence. Please bet responsibly. If you are concerned about your gambling habits, visit{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
              aria-label="BeGambleAware.org — opens in new tab"
            >
              BeGambleAware.org
            </a>.
          </p>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/28 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} vipukbettingsites.com. All rights reserved.</span>
        <span
          className="text-destructive font-heading font-bold border border-destructive/40 px-2 py-0.5 bg-destructive/10 rounded"
          aria-label="Adults 18 and over only"
        >
          18+
        </span>
      </div>
    </footer>
  )
}
