"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X, Check } from "lucide-react"

export function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem("btbsCookieConsent")) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const handleChoice = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem("btbsCookieConsent", value)
      localStorage.setItem("btbsCookieConsentDate", new Date().toISOString())
    } catch { /* silent */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-5 left-4 right-4 sm:left-5 sm:right-auto sm:max-w-sm z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences for British Top Betting Sites"
    >
      <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-foreground/10 overflow-hidden">
        {/* Blue top bar */}
        <div className="h-[3px] w-full bg-primary rounded-t-2xl" aria-hidden="true" />

        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Cookie className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <span className="font-heading font-bold text-sm text-foreground">
                Cookie Preferences
              </span>
            </div>
            <button
              onClick={() => handleChoice("essential")}
              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface transition-colors rounded-lg"
              aria-label="Dismiss — essential cookies only"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Body text */}
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            We use cookies to improve your experience on{" "}
            <span className="font-semibold text-foreground">britishtopbettingsites.com</span>.
            Analytics cookies help us understand how visitors use the site. You can
            accept all cookies or limit to essential only.{" "}
            <Link
              href="/cookie-policy"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Read our full Cookie Policy"
            >
              Learn more
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-2" role="group" aria-label="Cookie consent choices">
            <button
              onClick={() => handleChoice("accepted")}
              className="w-full h-9 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-white font-heading font-bold text-[12px] uppercase tracking-wide rounded-xl transition-all duration-200 shadow-sm shadow-primary/20"
              aria-label="Accept all cookies"
            >
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              Accept All Cookies
            </button>
            <button
              onClick={() => handleChoice("essential")}
              className="w-full h-9 flex items-center justify-center bg-surface hover:bg-muted border border-border text-muted-foreground hover:text-foreground font-heading font-semibold text-[12px] rounded-xl transition-colors duration-200"
              aria-label="Accept essential cookies only"
            >
              Essential Only
            </button>
          </div>

          {/* GDPR note */}
          <p className="text-[10px] text-muted-foreground/60 text-center mt-3 leading-relaxed">
            UK GDPR compliant · You can change preferences at any time via our{" "}
            <Link href="/cookie-policy" className="underline underline-offset-1">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
