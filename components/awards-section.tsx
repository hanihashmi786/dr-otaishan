"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/contexts/language-context"
import { awards } from "@/lib/data/profile-data"
import { Medal } from "lucide-react"

export function AwardsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-[#1a1612] via-[#1a1612] to-[#0f0e0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {language === "ar" ? "الأوسمة والميداليات" : "Awards & Medals"}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar" ? "تقديرات وأوسمة ملكية ووطنية" : "Royal & National Honors"}
        </p>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:shadow-xl hover:shadow-[#c9a961]/10 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#c9a961] to-[#d4b76e] shadow-lg group-hover:scale-110 transition-transform">
                  <Medal className="h-8 w-8 text-[#1a1612]" />
                </div>
                <h3 className="font-bold text-balance text-[#e8dcc8] group-hover:text-[#c9a961] transition-colors">
                  {t(award.title)}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
