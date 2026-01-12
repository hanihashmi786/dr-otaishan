"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/contexts/language-context"
import { academicExperience } from "@/lib/data/profile-data"
import { GraduationCap } from "lucide-react"

export function AcademicSection() {
  const { t, language } = useLanguage()

  return (
    <section id="academic" className="py-20 bg-gradient-to-br from-[#1a1612] via-[#1a1612] to-[#0f0e0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {t(academicExperience.title)}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar" ? "التدريس والبحث الأكاديمي" : "Teaching & Academic Research"}
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {academicExperience.positions.map((position, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:shadow-xl hover:shadow-[#c9a961]/10 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#c9a961]/10 text-[#c9a961] group-hover:bg-[#c9a961]/20 transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#e8dcc8] group-hover:text-[#c9a961] transition-colors text-balance">
                    {t(position.title)}
                  </h3>
                  <p className="text-[#b8a685] text-balance">{t(position.institution)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
