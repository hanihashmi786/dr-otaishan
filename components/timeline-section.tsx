"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/contexts/language-context"
import { timeline } from "@/lib/data/profile-data"
import { GraduationCap, Briefcase, Building2, Landmark, ExternalLink } from "lucide-react"

const categoryIcons = {
  education: GraduationCap,
  military: Briefcase,
  business: Building2,
  government: Landmark,
}

const categoryColors = {
  education: "from-blue-500 to-blue-600",
  military: "from-green-500 to-green-600",
  business: "from-[#c9a961] to-[#d4b76e]",
  government: "from-purple-500 to-purple-600",
}

export function TimelineSection() {
  const { t, language } = useLanguage()

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-[#1a1612] via-[#1a1612] to-[#0f0e0c]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {language === "ar" ? "المسيرة المهنية" : "Career Timeline"}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar" ? "رحلة من الإنجازات والتميز" : "A Journey of Excellence and Achievement"}
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a961] via-[#c9a961]/50 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = categoryIcons[item.category]
                const isLeft = index % 2 === 0

                return (
                  <div key={index} className="relative">
                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 top-0 transform md:-translate-x-1/2 z-10">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${categoryColors[item.category]} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`pl-20 md:pl-0 ${isLeft ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)] md:text-left"}`}
                    >
                      <Card className="p-6 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 hover:border-[#c9a961]/40 hover:shadow-xl hover:shadow-[#c9a961]/10 transition-all duration-300 group">
                        <div className="space-y-3">
                          <div
                            className={`flex items-start ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start gap-4`}
                          >
                            <Badge variant="outline" className="border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961]">
                              {item.year}
                              {item.hijriYear && <span className="mx-1 text-[#b8a685]/50">|</span>}
                              {item.hijriYear}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-balance text-[#e8dcc8] group-hover:text-[#c9a961] transition-colors">
                            {t(item.title)}
                          </h3>
                          <p className="text-[#b8a685] text-pretty leading-relaxed">{t(item.description)}</p>
                          {item.websiteUrl && (
                            <div className="pt-4">
                              <a
                                href={item.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#c9a961] hover:text-[#d4b76e] transition-colors text-sm font-medium"
                              >
                                {language === "ar" ? "عرض الموقع" : "View Website"}
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
