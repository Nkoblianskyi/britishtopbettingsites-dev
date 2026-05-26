import { ClipboardCheck, Scale, RefreshCw, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: <ClipboardCheck className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Full Platform Audit",
    body: "Our team opens real accounts, makes genuine deposits, and places live bets on every operator we review. We examine licence validity, SSL security, withdrawal speed, and bonus terms line by line — before a single word is written. Nothing here is based on press releases.",
    tag: "Due Diligence",
  },
  {
    number: "02",
    icon: <Scale className="w-5 h-5 text-accent" aria-hidden="true" />,
    title: "Six-Point Scoring",
    body: "Each site is scored across six weighted pillars: regulatory standing, offer fairness, odds competitiveness, platform quality, payment processing, and customer support. Points are deducted for shady T&Cs, slow payouts, or missing responsible gambling tools. No exceptions, no matter the brand.",
    tag: "Scoring Model",
  },
  {
    number: "03",
    icon: <RefreshCw className="w-5 h-5 text-primary" aria-hidden="true" />,
    title: "Monthly Refresh",
    body: "The UK betting market moves fast — new bonuses drop, odds policies shift, and licences can be amended. We reassess every listed operator on a monthly cycle and update scores in real time whenever something material changes. Stale rankings have no place here.",
    tag: "Always Current",
  },
]

export function VerificationMethodSection() {
  return (
    <section
      className="bg-navy py-14 md:py-20 px-4"
      id="how-it-works"
      aria-labelledby="methodology-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Two-column header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-white/50 bg-white/8 border border-white/10 px-3 py-1 rounded-full mb-3">
              How It Works
            </span>
            <h2
              id="methodology-heading"
              className="font-heading font-extrabold text-2xl md:text-4xl text-white leading-tight tracking-tight text-balance"
            >
              Our Method Behind<br />Every Rating
            </h2>
          </div>
          <p className="text-white/55 text-sm leading-relaxed max-w-xs">
            No paid placements. No guesswork. Just a repeatable process that puts punters first, every single time.
          </p>
        </div>

        {/* Vertical stepper cards */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute left-[calc(1.25rem+1px)] top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-4 md:space-y-6 relative">
            {steps.map(({ number, icon, title, body, tag }) => (
              <div
                key={number}
                className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 group"
              >
                {/* Step indicator */}
                <div className="flex md:flex-col items-center gap-3 md:gap-0 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center relative z-10">
                    {icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/5 border border-white/10 hover:border-primary/40 rounded-2xl p-5 md:p-6 transition-all duration-200 group-hover:bg-white/8">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-4xl text-white/10 select-none leading-none">
                        {number}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white leading-snug">
                        {title}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 text-[10px] font-heading font-bold uppercase tracking-[0.1em] text-primary bg-primary/15 border border-primary/25 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary/10 border border-primary/25 rounded-2xl px-5 py-4">
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="text-white font-semibold">Editorial independence guaranteed.</span>{" "}
            Operators listed on British Top Betting Sites cannot purchase a ranking or influence our scores. Affiliate commissions are disclosed openly and have zero weight in our methodology.
          </p>
          <a
            href="/about"
            className="flex items-center gap-1.5 text-primary font-heading font-bold text-sm whitespace-nowrap hover:text-primary/80 transition-colors"
          >
            About Us <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
