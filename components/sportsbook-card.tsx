"use client"

import Image from "next/image"
import { Star, ExternalLink, BadgeCheck, Flame, TrendingUp } from "lucide-react"
import type { Sportsbook } from "@/lib/mock-data"

interface SportsbookCardProps {
  site: Sportsbook
  rank: number
}

function StarRow({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < count ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function CardBadge({ site }: { site: Sportsbook }) {
  if (site.isVerifiedPick)
    return (
      <span className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-heading font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
        <BadgeCheck className="w-2.5 h-2.5" aria-hidden="true" />
        Top Pick
      </span>
    )
  if (site.isBestValue)
    return (
      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/25 text-[10px] font-heading font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
        Best Value
      </span>
    )
  if (site.isPopularChoice)
    return (
      <span className="inline-flex items-center gap-1 bg-surface text-foreground border border-border text-[10px] font-heading font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
        Popular
      </span>
    )
  if (site.isTrendingNow)
    return (
      <span className="inline-flex items-center gap-1 bg-orange-50 text-accent border border-accent/25 text-[10px] font-heading font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
        <Flame className="w-2.5 h-2.5" aria-hidden="true" />
        Trending
      </span>
    )
  return null
}

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100
  return (
    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden" aria-hidden="true">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function SportsbookCard({ site, rank }: SportsbookCardProps) {
  const isFirst = rank === 1

  return (
    <article
      className={`
        group relative overflow-hidden bg-card border rounded-2xl card-hover
        ${isFirst ? "border-primary/60 rank-1-glow" : "border-border hover:border-primary/40"}
      `}
      aria-label={`${site.name} ranked number ${rank} on British Top Betting Sites`}
    >
      {/* Top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-colors ${
          isFirst ? "bg-primary" : "bg-border group-hover:bg-primary/50"
        }`}
        aria-hidden="true"
      />

      {/* Badge + editor note row */}
      <div className="flex items-center justify-between gap-2 px-4 pt-3 md:px-5">
        <CardBadge site={site} />
        {isFirst && (
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground tracking-wide">
            <TrendingUp className="w-3 h-3" aria-hidden="true" />
            Editors&apos; Choice {new Date().getFullYear()}
          </span>
        )}
      </div>

      {/* DESKTOP layout */}
      <div className="hidden md:grid md:grid-cols-[56px_196px_1fr_148px_168px] md:items-center md:gap-0 px-5 py-5">

        {/* Rank */}
        <div className="flex items-center justify-center">
          <div
            className={`w-10 h-10 flex items-center justify-center font-heading font-extrabold text-xl leading-none rounded-xl border-2 ${
              isFirst
                ? "bg-primary border-primary text-white"
                : rank === 2
                ? "bg-surface border-border text-muted-foreground"
                : rank === 3
                ? "bg-orange-50 border-accent/30 text-accent"
                : "bg-surface border-border text-muted-foreground"
            }`}
            aria-label={`Rank ${rank}`}
          >
            {rank}
          </div>
        </div>

        {/* Logo — enlarged */}
        <div className="flex items-center justify-center px-3">
          <div className="w-44 h-[84px] bg-white rounded-xl border border-border flex items-center justify-center p-3 shadow-sm">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} official logo`}
              width={152}
              height={68}
              className="max-h-[60px] w-full object-contain"
            />
          </div>
        </div>

        {/* Offer — enlarged bonus text */}
        <div className="px-5 border-l border-border flex flex-col">
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Welcome Offer
          </div>
          <p className="text-foreground font-heading font-bold text-[18px] leading-snug">{site.welcomeOffer}</p>
          <p className="text-[13px] font-semibold text-primary mt-1">{site.bonus}</p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center justify-center border-l border-border px-4 text-center gap-1.5">
          <div
            className="font-heading font-extrabold text-4xl leading-none tabular-nums text-foreground"
            aria-label={`Score ${site.rating.toFixed(1)} out of 10`}
          >
            <span className="text-accent">{site.rating.toFixed(1)}</span>
            <span className="text-muted-foreground text-lg">/10</span>
          </div>
          <ScoreBar score={site.rating} />
          <StarRow count={site.stars} size="md" />
          <div className="text-[10px] text-muted-foreground">{site.reviews.toLocaleString()} reviews</div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center border-l border-border pl-5 gap-2">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={`w-full font-heading font-bold uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-all duration-200 rounded-xl ${
              isFirst
                ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
            aria-label={`Visit ${site.name} — opens in a new tab`}
          >
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <span className="text-[10px] text-muted-foreground tracking-wide">T&amp;Cs Apply · 18+</span>
        </div>
      </div>

      {/* MOBILE layout */}
      <div className="md:hidden px-4 pb-4 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-8 h-8 flex items-center justify-center font-heading font-extrabold text-base flex-shrink-0 rounded-lg border-2 ${
              isFirst
                ? "bg-primary border-primary text-white"
                : "bg-surface border-border text-muted-foreground"
            }`}
            aria-label={`Rank ${rank}`}
          >
            {rank}
          </div>
          <div className="flex-1 flex items-center justify-center bg-white h-[72px] px-3 py-2 rounded-xl border border-border shadow-sm">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} official logo`}
              width={140}
              height={56}
              className="max-h-[52px] w-full object-contain"
            />
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-heading font-extrabold text-2xl leading-none tabular-nums">
              <span className="text-accent">{site.rating.toFixed(1)}</span>
            </div>
            <StarRow count={site.stars} />
          </div>
        </div>

        <div className="px-3 py-2.5 mb-3 bg-surface rounded-xl border border-border">
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
            Welcome Offer
          </div>
          <div className="text-foreground font-heading font-bold text-base">{site.welcomeOffer}</div>
          <div className="text-[12px] font-semibold text-primary mt-0.5">{site.bonus}</div>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="flex w-full bg-primary hover:bg-primary/90 text-white font-heading font-bold uppercase tracking-wide text-sm h-11 items-center justify-center gap-2 transition-all duration-200 rounded-xl shadow-md shadow-primary/20"
          aria-label={`Visit ${site.name} — opens in a new tab`}
        >
          Visit Site
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Disclaimer strip */}
      <div className="border-t border-border px-4 md:px-5 py-2 bg-surface/60 rounded-b-2xl">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          <span className="text-destructive font-semibold">18+</span> · New customers only · UKGC Licensed · T&amp;Cs Apply · BeGambleAware.org
        </p>
      </div>
    </article>
  )
}
