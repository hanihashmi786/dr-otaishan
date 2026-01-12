"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/contexts/language-context"
import { memberships } from "@/lib/data/profile-data"
import { Award } from "lucide-react"

export function MembershipsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="memberships" className="py-20 bg-[#1a1612]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {language === "ar" ? "العضويات المهنية" : "Professional Memberships"}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar"
            ? "عضويات في جمعيات ومؤسسات هندسية دولية"
            : "Memberships in International Engineering Associations"}
        </p>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {memberships.map((membership, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:shadow-xl hover:shadow-[#c9a961]/10 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#c9a961]/10 text-[#c9a961] group-hover:bg-[#c9a961]/20 transition-colors">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-[#e8dcc8] group-hover:text-[#c9a961] transition-colors text-balance">
                      {t(membership.title)}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#b8a685] text-balance">{t(membership.organization)}</p>
                {membership.role && (
                  <Badge variant="outline" className="border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961] text-xs">
                    {t(membership.role)}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
