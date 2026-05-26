import {
  Trophy,
  ShieldCheck,
  Wallet,
  BarChart2,
  Smartphone,
  HeartHandshake,
} from "lucide-react"

const guideCards = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />,
    bg: "bg-primary/8 border-primary/20",
    title: "UKGC Licence is Non-Negotiable",
    body: "Every site on our list holds an active UK Gambling Commission licence. That means legal protection for your funds, mandatory responsible gambling tools, and a dispute resolution pathway if something goes wrong. We check licence status before every publication cycle — no exceptions.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-accent" aria-hidden="true" />,
    bg: "bg-orange-50 border-accent/20",
    title: "Read the Bonus Terms First",
    body: "That £50 free bet isn't always what it seems. Wagering requirements, minimum odds clauses, maximum stake caps, and short expiry windows can make a 'generous' offer nearly impossible to convert. Our reviews break down every condition so you know exactly what you're signing up for.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" aria-hidden="true" />,
    bg: "bg-primary/8 border-primary/20",
    title: "Competitive Odds Compound Over Time",
    body: "Even a 2% difference in odds adds up across hundreds of bets. We benchmark every operator's overrounds on Premier League football, horse racing, and tennis markets. Sites with consistently sharp prices earn a higher platform score — and save you money in the long run.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-accent" aria-hidden="true" />,
    bg: "bg-orange-50 border-accent/20",
    title: "Market Depth Matters Most",
    body: "The best UK betting sites offer deep markets beyond the Premier League — EFL, Scottish Premiership, lower-league football, horse racing from every UK track, cricket, rugby, golf, tennis, and more. A wide market selection means you'll always find value regardless of the sports calendar.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" aria-hidden="true" />,
    bg: "bg-primary/8 border-primary/20",
    title: "Mobile-First or Not at All",
    body: "More than 70% of UK sports bets are placed on mobile. We test every platform on real iOS and Android devices, checking load times under live betting conditions, stability during busy match periods, and how easy it is to deposit, withdraw, and set account limits on a small screen.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-accent" aria-hidden="true" />,
    bg: "bg-orange-50 border-accent/20",
    title: "Set Limits Before You Start",
    body: "Every UKGC-licensed operator must offer deposit limits, loss limits, cooling-off periods, and self-exclusion. Use them. Set a weekly deposit limit before your first bet and you'll never lose more than you intended. Responsible gambling tools exist to protect you — not to be ignored.",
  },
]

export function BettingGuide() {
  return (
    <section
      className="bg-surface py-14 md:py-20 px-4 section-sport"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 px-3 py-1 rounded-full mb-3">
            Bettor&apos;s Guide
          </span>
          <h2
            id="guide-heading"
            className="font-heading font-extrabold text-2xl md:text-4xl text-foreground leading-tight tracking-tight text-balance"
          >
            What Every UK Bettor Should Know
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Six things that actually separate great betting sites from average ones — and how to use that knowledge to bet smarter.
          </p>
        </div>

        {/* Masonry-style icon cards — 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guideCards.map(({ icon, bg, title, body }) => (
            <div
              key={title}
              className={`rounded-2xl border p-5 flex flex-col gap-3 bg-card card-hover ${bg}`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center border ${bg}`}
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3 className="font-heading font-bold text-[15px] text-foreground leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <p className="text-center text-[11px] text-muted-foreground mt-8 leading-relaxed">
          <span className="text-destructive font-bold">18+</span> only. Gambling involves financial risk.
          Never wager more than you can afford to lose. If you need support, visit{" "}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            BeGambleAware.org
          </a>{" "}
          or call 0808 8020 133.
        </p>

      </div>
    </section>
  )
}
