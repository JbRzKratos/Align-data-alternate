import type { Metadata, Viewport } from "next"
import { Inter, Inter_Tight } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aliigndata.com"),
  title: {
    default: "Aliign Data — Global Business Intelligence Network",
    template: "%s | Aliign Data",
  },
  description:
    "Aliign Data is the global business intelligence network powering B2B sales, marketing, and revenue operations with verified contacts, technographic data, and compliant lead pipelines.",
  keywords: [
    "B2B data",
    "business intelligence",
    "verified contacts",
    "technographic database",
    "lead generation",
    "healthcare database",
    "professional email lists",
    "data appending",
    "regional databases",
    "GDPR compliant data",
  ],
  authors: [{ name: "Aliign Data Inc.", url: "https://www.aliigndata.com" }],
  creator: "Aliign Data Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aliigndata.com",
    siteName: "Aliign Data",
    title: "Aliign Data — Global Business Intelligence Network",
    description:
      "The global business intelligence network powering B2B sales, marketing, and revenue operations with 75M+ verified contacts across 100+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliign Data — Global Business Intelligence Network",
    description:
      "The global business intelligence network powering B2B sales, marketing, and revenue operations with 75M+ verified contacts across 100+ countries.",
    creator: "@aliigndata",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.aliigndata.com",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "bg-background font-sans text-foreground antialiased",
        inter.variable,
        interTight.variable
      )}
    >
      <head>
        {/* Google Fonts preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
