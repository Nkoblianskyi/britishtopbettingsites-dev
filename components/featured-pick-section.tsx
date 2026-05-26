import Image from "next/image"
import { sportsbooks } from "@/lib/mock-data"
import { Star, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react"

const highlights = [
  "Verified UKGC licence — confirmed active",
  "Fast withdrawal — typically under 24 hours",
  "Competitive odds across 20+ sports",
  "Full suite of responsible gambling tools",
]

export function FeaturedPickSection() {
  const topPick = sportsbooks[0]

  return (
    <section
      className="w-full bg-background py-14 md:py-20 px-4"
      aria-labelledby="top-pick-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 px-3 py-1 rounded-full whitespace-nowrap">
            Our Top Pick This Month
          </span>
          <div className="flex-1 h-px bg-border" aria-hidden="true" />
        </div>

        {/* Horizontal featured card */}
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card rank-1-glow"
          aria-label={`Featured pick: ${topPick.name}`}
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" aria-hidden="true" />

          <div className="flex flex-col md:flex-row md:items-stretch">

            {/* Left — logo + score */}
            <div className="flex flex-col items-center justify-center gap-4 p-8 md:p-10 md:w-72 md:border-r md:border-border bg-surface/50">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-[0.12em] text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full">
                #1 Pick — {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
              </span>

              <div className="w-52 h-24 bg-white rounded-2xl border border-border flex items-center justify-center p-4 shadow-sm">
                <Image
                  src={topPick.logo || "/placeholder.svg"}
                  alt={`${topPick.name} official logo`}
                  width={180}
                  height={72}
                  className="max-h-16 w-full object-contain"
                />
              </div>

              <div className="text-center">
                <div className="font-heading font-extrabold leading-none tabular-nums">
                  <span className="text-5xl text-accent">{topPick.rating.toFixed(1)}</span>
                  <span className="text-xl text-muted-foreground">/10</span>
                </div>
                <div
                  className="flex items-center justify-center gap-0.5 mt-1.5"
                  aria-label={`${topPick.stars} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < topPick.stars ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">{topPick.reviews.toLocaleString()} reviews</p>
              </div>
            </div>

            {/* Right — offer + highlights + CTA */}
            <div className="flex flex-col justify-between gap-5 p-7 md:p-10 flex-1">

              {/* Offer */}
              <div>
                <p className="text-[11px] font-heading font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Welcome Offer
                </p>
                <h2
                  id="top-pick-heading"
                  className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight text-balance"
                >
                  {topPick.welcomeOffer}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">{topPick.bonus}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2 max-w-md">
                  {topPick.description}
                </p>
              </div>

              {/* Highlights checklist */}
              <ul className="space-y-2" aria-label="Key features">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={topPick.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading font-bold uppercase tracking-wide text-sm h-12 px-8 rounded-xl transition-all duration-200 shadow-md shadow-primary/25"
                  aria-label={`Claim offer at ${topPick.name} — opens in new tab`}
                >
                  Claim Offer
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#rankings"
                  className="inline-flex items-center gap-1.5 text-primary font-heading font-semibold text-sm hover:text-primary/80 transition-colors"
                >
                  View full rankings <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <p className="text-[10px] text-muted-foreground leading-relaxed">
                <span className="text-destructive font-bold">18+</span> · New customers only · T&amp;Cs Apply · BeGambleAware.org
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
