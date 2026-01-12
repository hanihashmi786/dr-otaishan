"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/contexts/language-context"
import { leadershipRoles } from "@/lib/data/profile-data"
import { Briefcase, ExternalLink } from "lucide-react"

export function LeadershipSection() {
  const { t, language } = useLanguage()

  return (
    <section id="leadership" className="py-20 bg-[#1a1612]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {language === "ar" ? "المناصب القيادية" : "Leadership Roles"}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar" ? "مناصب تنفيذية واستشارية متميزة" : "Executive & Advisory Positions"}
        </p>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {leadershipRoles.map((role, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:shadow-xl hover:shadow-[#c9a961]/10 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#c9a961]/10 text-[#c9a961] group-hover:bg-[#c9a961]/20 transition-colors">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-[#e8dcc8] group-hover:text-[#c9a961] transition-colors text-balance">
                      {t(role.title)}
                    </h3>
                    <p className="text-[#b8a685] text-sm mb-2 text-balance">{t(role.organization)}</p>
                    <Badge variant="outline" className="border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961] text-xs">
                      {role.period}
                    </Badge>
                    {role.websiteUrl && (
                      <a
                        href={role.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#c9a961] hover:text-[#d4b76e] transition-colors text-xs font-medium mt-2"
                      >
                        {language === "ar" ? "عرض الموقع" : "View Website"}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
