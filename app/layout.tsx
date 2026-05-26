import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { ConsentBanner } from "@/components/consent-banner"

const _jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `British Top Betting Sites – Best UK Sportsbooks Ranked ${currentYear}`,
  description:
    "Discover the UK's best betting sites ranked and reviewed by experts. Compare welcome offers, odds, features and more at britishtopbettingsites.com. Bet responsibly — 18+.",
  metadataBase: new URL("https://britishtopbettingsites.com"),
  keywords: [
    "best betting sites UK",
    "top UK sportsbooks",
    "British betting sites",
    "online betting UK",
    "sports betting UK",
    "betting site reviews",
    "UK bookmakers",
  ],
  authors: [{ name: "British Top Betting Sites" }],
  creator: "British Top Betting Sites",
  publisher: "British Top Betting Sites",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://britishtopbettingsites.com",
    siteName: "British Top Betting Sites",
    title: `British Top Betting Sites – Best UK Sportsbooks ${currentYear}`,
    description:
      "Find the best UK betting sites with expert reviews, verified odds, and exclusive welcome bonuses. Updated rankings for ${currentYear}.",
  },
  twitter: {
    card: "summary_large_image",
    title: `British Top Betting Sites – Best UK Sportsbooks ${currentYear}`,
    description: "Expert-ranked UK betting sites with the best odds, bonuses and features.",
  },
  alternates: {
    canonical: "https://britishtopbettingsites.com",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#f7f7f7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${_jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <SiteFooter />
          <ConsentBanner />
        </div>
      </body>
    </html>
  )
}
