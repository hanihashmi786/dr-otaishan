import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Amiri } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/contexts/language-context"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
})

export const metadata: Metadata = {
  title: "Dr. Abdulaziz Al-Otaishan | Civil Engineer & Business Leader",
  description:
    "Portfolio of Dr. Abdulaziz Turki Al-Otaishan - Distinguished Saudi civil engineer, retired Brigadier General, and accomplished business executive with extensive experience in construction management and government advisory roles.",
  generator: "v0.app",
  keywords: [
    "Civil Engineering",
    "Project Management",
    "Saudi Arabia",
    "Engineering Consultant",
    "Military Leadership",
  ],
  authors: [{ name: "Dr. Abdulaziz Turki Al-Otaishan" }],
  openGraph: {
    title: "Dr. Abdulaziz Al-Otaishan | Civil Engineer & Business Leader",
    description: "Distinguished Saudi civil engineer with PhD in Project Management",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-serif antialiased ${playfairDisplay.variable} ${amiri.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
