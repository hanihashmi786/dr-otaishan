"use client"

import { useLanguage } from "@/lib/contexts/language-context"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1612] border-t border-[#c9a961]/20">
      <div className="container mx-auto px-4 py-8">
        <Separator className="mb-6 bg-[#c9a961]/10" />
        <div className="text-center space-y-2">
          <p className="text-[#e8dcc8]">
            {language === "ar" ? "د. عبد العزيز بن تركي العطيشان" : "Dr. Abdulaziz Turki Al-Otaishan"}
          </p>
          <p className="text-sm text-[#b8a685]">
            © {currentYear} {language === "ar" ? "جميع الحقوق محفوظة" : "All Rights Reserved"}
          </p>
        </div>
      </div>
    </footer>
  )
}
