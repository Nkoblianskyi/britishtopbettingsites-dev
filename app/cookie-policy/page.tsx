import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Cookie Policy — British Top Betting Sites",
  description:
    "British Top Betting Sites cookie policy — what cookies we use, why, and how to manage your preferences. britishtopbettingsites.com.",
  alternates: { canonical: "https://britishtopbettingsites.com/cookie-policy" },
}

const cookieTypes = [
  {
    name:     "Strictly Necessary",
    badge:    "Required",
    badgeCls: "bg-primary/15 text-primary border border-primary/25",
    desc:
      "These cookies are essential for the core operation of britishtopbettingsites.com — including storing your cookie consent preference and maintaining session state. They cannot be disabled while the site is in use and collect no personally identifiable information.",
    examples: ["Cookie consent flag", "Session identifier"],
    canBlock: false,
  },
  {
    name:     "Performance & Analytics",
    badge:    "Optional",
    badgeCls: "bg-surface text-muted-foreground border border-border",
    desc:
      "Allow us to understand how visitors interact with our content so we can improve editorial quality, page structure, and site performance. All data collected is aggregated and anonymised — we never build individual visitor profiles.",
    examples: ["Page view counts", "Scroll depth", "Traffic source"],
    canBlock: true,
  },
  {
    name:     "Affiliate & Attribution",
    badge:    "Optional",
    badgeCls: "bg-surface text-muted-foreground border border-border",
    desc:
      "Used to measure the performance of our affiliate partnerships and to ensure that ranking comparisons remain accurate and independently funded. No personally identifiable information is shared with third-party advertisers.",
    examples: ["Click tracking", "Referral attribution"],
    canBlock: true,
  },
]

export default function CookiePolicyPage() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="bg-navy px-4 py-10 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-5 tracking-wide"
            aria-label="Return to homepage"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Cookie className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-4xl text-white">Cookie Policy</h1>
          </div>
          <p className="text-white/40 text-xs ml-12">
            britishtopbettingsites.com &middot; Last updated: {year}
          </p>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-10 space-y-6"
        aria-label="Cookie Policy content"
      >

        {/* Intro */}
        <section aria-labelledby="cp-what" className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 id="cp-what" className="font-heading font-bold text-base text-foreground">What Are Cookies?</h2>
          </div>
          <div className="px-6 py-5 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your browser across sessions and retain certain preferences — such as your consent choices — so your experience is consistent on return visits.
            </p>
            <p>
              Cookies used on britishtopbettingsites.com do not collect personally identifiable information unless you have explicitly provided it through a site feature. All consent preferences are stored locally on your device.
            </p>
          </div>
        </section>

        {/* Cookie types */}
        <section aria-labelledby="cp-types">
          <h2 id="cp-types" className="font-heading font-bold text-base text-foreground mb-4">
            Cookies We Use
          </h2>
          <div className="space-y-3">
            {cookieTypes.map((ct) => (
              <div
                key={ct.name}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <h3 className="font-heading font-bold text-sm text-foreground">{ct.name}</h3>
                  <span className={`${ct.badgeCls} text-[10px] font-heading font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full`}>
                    {ct.badge}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{ct.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ct.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-[10px] font-heading font-semibold bg-surface border border-border text-muted-foreground px-2.5 py-1 rounded-full uppercase tracking-wide"
                      >
                        {ex}
                      </span>
                    ))}
                    {ct.canBlock && (
                      <span className="text-[10px] font-heading font-semibold bg-destructive/8 border border-destructive/25 text-destructive px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Can be declined
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Managing preferences */}
        <section aria-labelledby="cp-manage" className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 id="cp-manage" className="font-heading font-bold text-base text-foreground">Managing Your Preferences</h2>
          </div>
          <div className="px-6 py-5 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              You can update your cookie preferences at any time via the consent banner displayed on your first visit. Selecting &ldquo;Essential Only&rdquo; disables all non-essential cookies while retaining full site functionality.
            </p>
            <p>You can also manage cookie storage directly through your browser:</p>
            <ul className="space-y-1.5 mt-1">
              {["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <p>
              Note: disabling strictly necessary cookies may affect certain site features, including the storage of your consent preferences.
            </p>
          </div>
        </section>

        {/* Third-party */}
        <section aria-labelledby="cp-third" className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 id="cp-third" className="font-heading font-bold text-base text-foreground">Third-Party Cookies</h2>
          </div>
          <div className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              Certain third-party services integrated with britishtopbettingsites.com — including analytics platforms and affiliate tracking networks — may set their own cookies, governed by their respective privacy and cookie policies. We recommend reviewing the policies of any third-party services you interact with through our site.
            </p>
          </div>
        </section>

        {/* Updates */}
        <section aria-labelledby="cp-updates" className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <h2 id="cp-updates" className="font-heading font-bold text-base text-foreground">Policy Updates</h2>
          </div>
          <div className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              This Cookie Policy may be revised periodically to reflect changes in our cookie practices or applicable regulatory requirements. The &ldquo;Last updated&rdquo; date at the head of this page indicates when the most recent revision was published. Continued use of britishtopbettingsites.com following any updates constitutes acceptance of the revised policy.
            </p>
          </div>
        </section>

        {/* Contact */}
        <div className="bg-surface border border-border rounded-2xl px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Cookie or privacy enquiries:{" "}
            <a
              href="mailto:cookies@britishtopbettingsites.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
            >
              cookies@britishtopbettingsites.com
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}
