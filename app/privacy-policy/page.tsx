import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Privacy Policy — British Top Betting Sites",
  description:
    "Read the Privacy Policy for British Top Betting Sites (britishtopbettingsites.com). How we collect, use, and protect your data under UK GDPR.",
  alternates: { canonical: "https://britishtopbettingsites.com/privacy-policy" },
}

const sections: { id: string; title: string; content: React.ReactNode }[] = [
  {
    id: "intro",
    title: "About This Policy",
    content: (
      <>
        <p>
          British Top Betting Sites (britishtopbettingsites.com) is committed to protecting the privacy and personal data of every visitor. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <p className="mt-3">
          By accessing britishtopbettingsites.com you acknowledge the practices described in this policy. This document applies only to data collected through this website. Linked third-party sites — including bookmaker operators — maintain their own privacy policies, which we encourage you to review independently.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-3">We may collect the following categories of data automatically when you visit our site:</p>
        <ul className="space-y-2">
          {[
            "IP address and approximate geographic region",
            "Browser type, version, and operating system",
            "Pages visited, time on site, and navigation path",
            "Cookie consent preferences and session data",
            "Contact form submissions where applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm">
          We do not request, store, or process sensitive personal data categories such as financial details, health records, or identification documents.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2">
        {[
          "To deliver and improve editorial content relevant to UK sports bettors",
          "To analyse site traffic patterns and optimise page performance",
          "To measure the effectiveness of our affiliate partnerships",
          "To respond to privacy enquiries and data subject requests",
          "To meet our legal obligations under UK GDPR and the Data Protection Act 2018",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "lawful",
    title: "Lawful Basis for Processing",
    content: (
      <>
        <p className="mb-3 text-sm">We process personal data under the following lawful bases defined by UK GDPR:</p>
        <ul className="space-y-2">
          {[
            "Legitimate interests — improving site quality and measuring affiliate performance",
            "Consent — analytics and optional cookies where you have opted in",
            "Legal obligation — compliance with applicable UK legislation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <>
        <p className="text-sm">
          We employ appropriate technical and organisational security controls to safeguard personal data against unauthorised access, accidental loss, disclosure, or alteration. These measures include TLS/SSL encryption for all data transmitted to and from our servers, strict access controls, and scheduled security reviews.
        </p>
        <p className="mt-3 text-sm">
          Despite these precautions, no internet transmission can be guaranteed completely secure. We encourage users to exercise caution when sharing personal information online.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p className="text-sm">
        We retain personal data only for as long as necessary to fulfil the purposes described in this policy or as required by applicable law. Analytics data is held in aggregated and anonymised form. Cookie consent records are stored for the duration of your visits.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Affiliate Links & Third-Party Data",
    content: (
      <p className="text-sm">
        britishtopbettingsites.com contains affiliate links to UKGC-licensed UK sportsbooks. When you follow these links, third-party cookies and tracking technologies operated by those platforms may be activated, subject to their own privacy policies. We do not sell, rent, or otherwise share personally identifiable visitor data with any third party for commercial marketing purposes.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Rights Under UK GDPR",
    content: (
      <>
        <p className="mb-3 text-sm">As a UK data subject, you are entitled to:</p>
        <ul className="space-y-2">
          {[
            "Right of access — request a copy of the personal data we hold about you",
            "Right to rectification — correct inaccurate or incomplete information",
            "Right to erasure — request deletion of your personal data",
            "Right to restriction — limit how we process your data",
            "Right to data portability — receive your data in a structured format",
            "Right to object — object to processing based on legitimate interests",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm">We will respond within 30 calendar days of receiving any request.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p className="text-sm">
        We use cookies to improve browsing experience and measure site usage. For full details, please see our{" "}
        <Link href="/cookie-policy" className="text-primary hover:underline underline-offset-2 font-medium">
          Cookie Policy
        </Link>. You can update your preferences at any time via the cookie consent banner or your browser settings.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Policy Updates",
    content: (
      <p className="text-sm">
        This Privacy Policy may be revised periodically. The &ldquo;Last updated&rdquo; date at the head of this page reflects the most recent revision. Continued use of britishtopbettingsites.com following any changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <Lock className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-4xl text-white">Privacy Policy</h1>
          </div>
          <p className="text-white/40 text-xs ml-12">
            britishtopbettingsites.com &middot; Last updated: {year}
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* TOC sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <nav
            className="sticky top-6 bg-card border border-border rounded-2xl p-4"
            aria-label="Privacy Policy table of contents"
          >
            <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Contents
            </p>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#pp-${s.id}`}
                    className="block text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main
          className="flex-1 space-y-6"
          aria-label="Privacy Policy content"
        >
          {sections.map((s) => (
            <section
              key={s.id}
              id={`pp-${s.id}`}
              className="bg-card border border-border rounded-2xl overflow-hidden"
              aria-labelledby={`pp-h-${s.id}`}
            >
              <div className="border-b border-border px-6 py-4">
                <h2 id={`pp-h-${s.id}`} className="font-heading font-bold text-base text-foreground">
                  {s.title}
                </h2>
              </div>
              <div className="px-6 py-5 text-muted-foreground leading-relaxed">
                {s.content}
              </div>
            </section>
          ))}

          <div className="bg-surface border border-border rounded-2xl px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Privacy enquiries and data subject requests:{" "}
              <a
                href="mailto:privacy@britishtopbettingsites.com"
                className="text-primary hover:underline underline-offset-2 font-medium"
              >
                privacy@britishtopbettingsites.com
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
