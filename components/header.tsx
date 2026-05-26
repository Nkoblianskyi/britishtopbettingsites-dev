"use client"

import Link from "next/link"

function VipLogoMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      {/* Dark background shield */}
      <path
        d="M18 2 L32 8 L32 20 C32 28 18 34 18 34 C18 34 4 28 4 20 L4 8 Z"
        fill="hsl(220,28%,10%)"
        stroke="hsl(43,96%,52%)"
        strokeWidth="1.5"
      />
      {/* Crown */}
      <path
        d="M9 18 L11 12 L14.5 15.5 L18 10 L21.5 15.5 L25 12 L27 18 Z"
        fill="hsl(43,96%,52%)"
      />
      <rect x="9" y="18" width="18" height="3" rx="1" fill="hsl(43,96%,52%)" />
      {/* VIP text area */}
      <rect x="11" y="22" width="14" height="5" rx="1" fill="hsl(43,96%,52%)" />
      <text
        x="18"
        y="26.5"
        textAnchor="middle"
        fontSize="4"
        fontWeight="900"
        fill="hsl(220,28%,10%)"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.5"
      >
        VIP
      </text>
    </svg>
  )
}

function SiteName() {
  return (
    <div className="flex items-baseline gap-0 leading-none select-none">
      <span className="font-heading font-extrabold text-[13px] md:text-[15px] tracking-tight text-primary">VIP</span>
      <span className="font-heading font-extrabold text-[13px] md:text-[15px] tracking-tight text-foreground ml-1">UK</span>
      <span className="font-heading font-extrabold text-[13px] md:text-[15px] tracking-tight text-foreground ml-1">Betting</span>
      <span className="font-heading font-bold text-[13px] md:text-[15px] tracking-tight text-primary ml-1">Sites</span>
    </div>
  )
}

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-navy border-b border-border shadow-[0_2px_20px_hsl(220_18%_4%/0.6)]"
      role="banner"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="VIP UK Betting Sites — return to homepage"
          >
            <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <VipLogoMark />
            </div>
            <SiteName />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* UK flag + domain */}
            <div className="hidden sm:flex items-center gap-1.5">
              <img
                src="/flag.png"
                alt="United Kingdom flag"
                className="h-4 w-auto rounded-sm object-cover"
                aria-hidden="false"
              />
              <span className="text-[10px] font-heading font-semibold text-muted-foreground tracking-wide">
                vipukbettingsites.com
              </span>
            </div>
            {/* 18+ badge */}
            <span
              className="text-[11px] font-heading font-bold text-destructive border border-destructive/40 px-2 py-1 bg-destructive/10 uppercase tracking-widest rounded"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
