import { SportsbookCard } from "./sportsbook-card"
import { sportsbooks } from "@/lib/mock-data"
import { Info, Shield } from "lucide-react"

export function LeaderboardSection() {
  return (
    <section
      className="w-full bg-background py-10 md:py-14 section-sport"
      id="rankings"
      aria-labelledby="rankings-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 px-3 py-1 rounded-full mb-2">
              <Shield className="w-3 h-3" aria-hidden="true" />
              Expert Rankings {new Date().getFullYear()}
            </span>
            <h2
              id="rankings-heading"
              className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight tracking-tight"
            >
              Top UK Betting Sites This Month
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Independently reviewed and ranked by our team of sports betting specialists.
            </p>
          </div>
          <span className="hidden md:inline-flex items-center text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1.5 rounded-xl bg-surface gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Independently Reviewed
          </span>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid md:grid-cols-[52px_160px_1fr_140px_160px] px-5 mb-2 text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground gap-0"
          aria-hidden="true"
        >
          <div className="text-center">Rank</div>
          <div className="text-center">Site</div>
          <div className="pl-5">Offer</div>
          <div className="text-center pl-4">Score</div>
          <div className="text-center pl-5">Action</div>
        </div>

        {/* Cards list */}
        <ol className="space-y-3" aria-label="UK betting sites ranked by expert score">
          {sportsbooks.map((site, index) => (
            <li key={site.id}>
              <SportsbookCard site={site} rank={index + 1} />
            </li>
          ))}
        </ol>

        {/* Disclosure note */}
        <div
          className="mt-6 flex items-start gap-3 bg-surface border border-border rounded-2xl px-4 py-3.5"
          role="note"
          aria-label="Ranking methodology disclosure"
        >
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Rankings on British Top Betting Sites are produced through independent editorial review. We may earn affiliate commission when you visit an operator via our links — this has no bearing on our ratings or scores. Every listed operator holds an active UKGC licence.{" "}
            <span className="text-destructive font-semibold">18+</span> · Gamble responsibly · BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
