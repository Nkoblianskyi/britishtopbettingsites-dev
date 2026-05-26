"use client"

import Link from "next/link"

function BritishLogoMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      {/* Circle background */}
      <circle cx="18" cy="18" r="17" fill="hsl(221 83% 53%)" />
      {/* Football/soccer ball paths */}
      <circle cx="18" cy="18" r="10" fill="white" opacity="0.15" />
      {/* Union Jack simplified cross */}
      <path d="M18 8 L18 28 M8 18 L28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Diagonal crosses */}
      <path d="M11 11 L25 25 M25 11 L11 25" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Star centre */}
      <circle cx="18" cy="18" r="3" fill="white" />
    </svg>
  )
}

function SiteWordmark() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-baseline gap-1">
        <span className="font-heading font-extrabold text-[13px] md:text-[15px] tracking-tight text-navy-foreground">
          British
        </span>
        <span className="font-heading font-extrabold text-[13px] md:text-[15px] tracking-tight text-primary">
          Top
        </span>
      </div>
      <div className="flex items-baseline gap-1 mt-[1px]">
        <span className="font-heading font-bold text-[11px] md:text-[12px] tracking-wider text-navy-foreground/80 uppercase">
          Betting Sites
        </span>
      </div>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-navy border-b border-white/10 shadow-[0_1px_24px_hsl(222_47%_11%/0.5)]"
      role="banner"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="British Top Betting Sites — return to homepage"
          >
            <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <BritishLogoMark />
            </div>
            <SiteWordmark />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <img
                src="/flag.png"
                alt="United Kingdom flag"
                className="h-4 w-auto rounded-sm object-cover"
              />
              <span className="text-[10px] font-heading font-semibold text-white/50 tracking-wide">
                britishtopbettingsites.com
              </span>
            </div>
            <span
              className="text-[11px] font-heading font-bold text-white border border-white/20 px-2 py-1 bg-white/10 uppercase tracking-widest rounded-md"
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
