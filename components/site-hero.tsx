import Image from "next/image"
import { ShieldCheck, Star, Trophy, Zap } from "lucide-react"

const trustPills = [
  { icon: <Trophy className="w-3.5 h-3.5" aria-hidden="true" />, label: "Expert-Ranked" },
  { icon: <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />, label: "UKGC Licensed" },
  { icon: <Star className="w-3.5 h-3.5" aria-hidden="true" />, label: "Top Odds" },
  { icon: <Zap className="w-3.5 h-3.5" aria-hidden="true" />, label: "Fast Payouts" },
]

export function SiteHero() {
  return (
    <section
      className="relative w-full min-h-[300px] sm:min-h-[380px] flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Sports background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Floodlit UK football stadium — British Top Betting Sites"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-primary/40" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(221 83% 80% / 0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-5xl mx-auto w-full gap-5 py-12 sm:py-16">

        {/* Live badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5"
          aria-label={`Rankings updated for ${new Date().getFullYear()}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" aria-hidden="true" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-[0.18em] text-white/90">
            {new Date().getFullYear()} Rankings — Updated Every Month
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white tracking-tight text-balance"
        >
          Britain&apos;s
          <span className="relative mx-3">
            <span className="relative z-10 text-white">#1</span>
            <span
              className="absolute inset-0 -mx-1 rounded bg-primary/80"
              aria-hidden="true"
            />
          </span>
          Betting Site
          <br />
          <span className="text-primary">Comparison Hub</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
          We test every major UK sportsbook so you don&apos;t have to. Fresh odds, verified
          bonuses, and honest scores — all in one place. Only the best make our list.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <a
            href="#rankings"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            <Trophy className="w-4 h-4" aria-hidden="true" />
            See Top Sites
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-heading font-semibold text-sm px-6 py-3 rounded-full border border-white/20 transition-all duration-200"
          >
            How It Works
          </a>
        </div>

        {/* Trust pills row */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-2"
          aria-label="Site trust indicators"
          role="list"
        >
          {trustPills.map(({ icon, label }) => (
            <div
              key={label}
              role="listitem"
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-white/90"
            >
              {icon}
              <span className="font-heading font-semibold text-[11px] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
