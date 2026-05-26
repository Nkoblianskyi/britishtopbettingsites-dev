"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
  tag: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    tag: "Rankings",
    question: "How do you decide which betting sites make the list?",
    answer:
      "Every operator we feature must hold a current, active UKGC licence — that's the non-negotiable baseline. Beyond that, our analysts score each platform across six weighted pillars: regulatory standing, bonus fairness, odds quality, market depth, payment speed, and customer support. Sites must clear a minimum threshold in all six areas to appear here. Rankings are refreshed every month throughout " + new Date().getFullYear() + ".",
  },
  {
    tag: "Safety",
    question: "Are these betting sites genuinely safe to use?",
    answer:
      "Yes. UKGC-licensed operators must segregate customer funds, provide mandatory responsible gambling tools (deposit limits, reality checks, self-exclusion), and submit to independent compliance audits. We also review complaint histories on third-party review platforms before assigning a verified status. Only sites with a clean regulatory record and strong player protections make our list.",
  },
  {
    tag: "Scores",
    question: "What does the expert score out of 10 actually measure?",
    answer:
      "Our score is a composite metric calculated across the six pillars mentioned above. A score of 9.0+ means an elite-tier operator performing strongly in every category. Scores between 8.0 and 8.9 indicate a highly reliable site with minor limitations in one or two areas. Every score is reviewed quarterly and updated in real time if a major product change occurs.",
  },
  {
    tag: "Commercial",
    question: "Do you take payment from the sites you review?",
    answer:
      "We operate on an affiliate commission model — we may earn a referral fee when you click through and register at a listed site. This commercial arrangement does not influence editorial rankings. Positions cannot be purchased and scores are determined solely by our assessment methodology. We maintain a strict separation between editorial and commercial teams.",
  },
  {
    tag: "Bonuses",
    question: "How do welcome bonuses actually work?",
    answer:
      "A welcome bonus is an introductory offer for new accounts — most commonly a matched free bet or bonus funds. For example, a '£40 in free bets' deal typically requires you to place a qualifying deposit and bet; the site then credits your account with free bet tokens. Always read the full terms before signing up: minimum odds, qualifying bet size, wagering requirements, and expiry dates vary significantly between operators. Our reviews break down every condition.",
  },
  {
    tag: "Mobile",
    question: "Can I bet on my phone using these sites?",
    answer:
      "Every operator on our list has a fully responsive mobile browser experience, and the majority also offer dedicated iOS and Android apps. We test mobile usability as part of our review, checking navigation speed, in-play performance, and how straightforward it is to deposit, withdraw, and manage responsible gambling settings on a small screen. App availability is noted on each site card.",
  },
  {
    tag: "Support",
    question: "What should I do if gambling is becoming a problem?",
    answer:
      "Please reach out for support immediately. In the UK, free confidential help is available 24/7 from the National Gambling Helpline on 0808 8020 133 and from GamCare at gamcare.org.uk. You can also self-exclude from all UKGC-licensed online gambling sites simultaneously by registering with GAMSTOP at gamstop.co.uk. All licensed operators are legally required to provide these tools and to respond promptly to requests for support.",
  },
  {
    tag: "Updates",
    question: "How often is the list updated?",
    answer:
      "We run a full re-evaluation of all listed operators monthly. In addition, we monitor licence changes, regulatory fines, and major product updates in real time throughout the year. If an operator loses its UKGC licence or receives a material regulatory sanction, it is removed from the list immediately — regardless of the monthly cycle. Scores are never frozen.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  const half = Math.ceil(FAQ_ITEMS.length / 2)
  const leftItems = FAQ_ITEMS.slice(0, half)
  const rightItems = FAQ_ITEMS.slice(half)

  return (
    <section
      className="bg-background py-14 md:py-20 px-4"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/20 px-3 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="font-heading font-extrabold text-2xl md:text-4xl text-foreground leading-tight tracking-tight text-balance"
          >
            Questions, Answered Straight
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg leading-relaxed">
            No fluff. Just clear, honest answers about how we rank sites and how the UK betting market works.
          </p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {[...leftItems, ...rightItems].map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border bg-card card-hover overflow-hidden transition-colors ${
                  isOpen ? "border-primary/40 bg-primary/2" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  id={`faq-q-${index}`}
                  className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <span className="flex-shrink-0 mt-0.5 text-[9px] font-heading font-bold uppercase tracking-[0.08em] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <span className="font-heading font-semibold text-[14px] text-foreground leading-snug text-pretty">
                      {item.question}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "border-primary bg-primary text-white" : "border-border text-muted-foreground"
                    }`}
                  >
                    {isOpen
                      ? <Minus className="w-3 h-3" />
                      : <Plus className="w-3 h-3" />
                    }
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                    className="px-5 pb-5"
                  >
                    <div className="border-t border-border pt-3">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-[11px] text-muted-foreground leading-relaxed">
          18+ only · Gambling can be addictive · Please play responsibly ·{" "}
          <a
            href="/responsible-gambling"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            Responsible Gambling Guide
          </a>
        </p>

      </div>
    </section>
  )
}
