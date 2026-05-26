import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ShieldAlert,
  AlertTriangle,
  Phone,
  ExternalLink,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Responsible Gambling — British Top Betting Sites",
  description:
    "Responsible gambling guidance, warning signs, and free UK support services from British Top Betting Sites. Strictly 18+.",
  alternates: { canonical: "https://britishtopbettingsites.com/responsible-gambling" },
}

const guidelines = [
  {
    num: "01",
    title: "Only Stake What You Can Afford to Lose",
    body: "Never use money allocated to essential costs — rent, bills, or food — to fund any betting activity. Treat your betting budget as expendable entertainment spend, not investment.",
  },
  {
    num: "02",
    title: "Set Your Limits Before You Place a Single Bet",
    body: "Decide your session budget and time limit in advance. Use your operator's built-in deposit limit tools to enforce your decisions and remove the temptation to exceed them.",
  },
  {
    num: "03",
    title: "Never Chase Losses",
    body: "Accepting a losing session is fundamental discipline. Attempting to recover losses through further bets is one of the most documented pathways into harmful gambling behaviour.",
  },
  {
    num: "04",
    title: "Bet Only When Fully Clear-Headed",
    body: "Avoid placing bets when emotionally distressed, fatigued, or under the influence of alcohol or any other substance that impairs rational judgement.",
  },
]

const safeBehaviours = [
  "Set a firm monthly betting budget and record it in writing",
  "Activate deposit limits on every operator account you hold",
  "Maintain a balanced range of hobbies and social activities",
  "Take scheduled breaks from all betting platforms",
  "Review your activity and total spend at least once a month",
  "Use self-exclusion tools proactively if you feel any concern",
]

const warningSignals = [
  "Betting amounts that cause genuine financial stress",
  "Concealing gambling activity from family or close friends",
  "Using credit or borrowed funds to finance betting",
  "Neglecting work or family responsibilities as a result",
  "Persistent irritability when unable to bet",
  "Repeated failed attempts to reduce your betting",
]

const supportOrgs = [
  {
    name:    "GambleAware",
    url:     "https://www.begambleaware.org",
    display: "begambleaware.org",
    desc:    "Free confidential support and expert advice — 24 hours a day",
    phone:   "0808 8020 133",
  },
  {
    name:    "GamCare",
    url:     "https://www.gamcare.org.uk",
    display: "gamcare.org.uk",
    desc:    "National gambling helpline, live chat, and counselling services",
    phone:   "0808 8020 133",
  },
  {
    name:    "GamStop",
    url:     "https://www.gamstop.co.uk",
    display: "gamstop.co.uk",
    desc:    "UK national self-exclusion register — blocks all UKGC operators",
    phone:   null,
  },
  {
    name:    "Gambling Therapy",
    url:     "https://www.gamblingtherapy.org",
    display: "gamblingtherapy.org",
    desc:    "Free international online support and professional therapy",
    phone:   null,
  },
]

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero banner */}
      <div className="bg-navy px-4 py-10 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-5 tracking-wide"
            aria-label="Return to homepage"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <ShieldAlert className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-2xl md:text-4xl text-white leading-tight">
                  Responsible Gambling
                </h1>
                <p className="text-white/50 text-sm mt-0.5">
                  Betting must always remain an affordable form of entertainment
                </p>
              </div>
            </div>
            <span
              className="text-destructive font-heading font-bold text-sm border border-destructive/50 px-3 py-1.5 bg-destructive/10 rounded-xl flex-shrink-0"
              aria-label="Adults 18 and over only"
            >
              18+ Only
            </span>
          </div>
        </div>
      </div>

      <main
        className="container mx-auto max-w-5xl px-4 py-10 space-y-8"
        aria-label="Responsible Gambling information"
      >

        {/* Critical warning banner */}
        <div
          className="flex items-start gap-4 border-2 border-destructive/35 bg-destructive/8 rounded-2xl px-6 py-5"
          role="alert"
          aria-label="Important responsible gambling warning"
        >
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-heading font-bold text-foreground mb-1.5">Important Warning</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sports betting can become addictive and cause serious financial, psychological, and personal harm. Never wager money you cannot afford to lose. If gambling is negatively affecting your daily life, seek professional support without delay — free confidential help is available 24 hours a day.
            </p>
            <p className="text-destructive font-heading font-bold text-xs mt-2 uppercase tracking-wider">
              Strictly 18+ Only — No Exceptions
            </p>
          </div>
        </div>

        {/* Four core guidelines */}
        <section aria-labelledby="rg-guidelines">
          <h2 id="rg-guidelines" className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-5">
            Four Core Guidelines
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {guidelines.map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-card border border-border rounded-2xl p-5 flex gap-4"
              >
                <div
                  className="w-10 h-10 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center flex-shrink-0 font-heading font-extrabold text-sm text-primary"
                  aria-hidden="true"
                >
                  {num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safe behaviours / Warning indicators */}
        <section aria-labelledby="rg-checklist">
          <h2 id="rg-checklist" className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-5">
            Know the Signs
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-heading font-bold text-sm text-foreground">Safe Betting Behaviours</h3>
              </div>
              <ul className="px-5 py-4 space-y-3" aria-label="Safe betting behaviours">
                {safeBehaviours.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-destructive/25 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-destructive/25 px-5 py-4 bg-destructive/8">
                <XCircle className="w-4 h-4 text-destructive" aria-hidden="true" />
                <h3 className="font-heading font-bold text-sm text-destructive">Warning Signals</h3>
              </div>
              <ul className="px-5 py-4 space-y-3" aria-label="Problem gambling warning signals">
                {warningSignals.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Free UK support services */}
        <section aria-labelledby="rg-support">
          <h2 id="rg-support" className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-5">
            Free UK Support Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {supportOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-2xl p-5 flex flex-col gap-2 hover:border-primary/40 transition-colors card-hover"
                aria-label={`Visit ${org.name} at ${org.display} — opens in new tab`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-heading font-bold text-foreground text-sm">{org.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true" />
                </div>
                <span className="text-primary text-xs font-heading font-semibold">{org.display}</span>
                <p className="text-muted-foreground text-xs leading-relaxed">{org.desc}</p>
                {org.phone && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-primary mt-1"
                    aria-label={`Helpline: ${org.phone}`}
                  >
                    <Phone className="w-3 h-3" aria-hidden="true" />
                    {org.phone}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Age restriction */}
        <div
          className="text-center border-2 border-destructive/30 bg-destructive/8 rounded-2xl py-5 px-6"
          role="note"
          aria-label="Age restriction notice"
        >
          <p className="font-heading font-extrabold text-sm uppercase tracking-widest text-foreground">
            Under 18s Are Strictly Prohibited From Gambling in the UK
          </p>
          <p className="text-xs text-muted-foreground mt-1.5">
            Operators are legally required to verify your age before permitting any betting activity.
          </p>
        </div>

      </main>
    </div>
  )
}
