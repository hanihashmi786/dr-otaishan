"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/lib/contexts/language-context"
import { profileInfo } from "@/lib/data/profile-data"
import { User, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  const { t, language } = useLanguage()

  const details = [
    {
      icon: User,
      label: language === "ar" ? "القبيلة" : "Tribe",
      value: t(profileInfo.tribe),
    },
    {
      icon: Calendar,
      label: language === "ar" ? "تاريخ الميلاد" : "Date of Birth",
      value: t(profileInfo.birthDate),
    },
    {
      icon: MapPin,
      label: language === "ar" ? "مكان الميلاد" : "Birth Place",
      value: t(profileInfo.birthPlace),
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#1a1612]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
              {language === "ar" ? "نبذة شخصية" : "About"}
            </span>
          </h2>
          <p className="text-center text-[#b8a685] mb-12 text-lg">
            {language === "ar" ? "معلومات شخصية وأساسية" : "Personal & Background Information"}
          </p>

          <Card className="p-8 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 shadow-xl mb-8">
            <p className="text-lg leading-relaxed text-[#e8dcc8]">{t(profileInfo.summary)}</p>
          </Card>

          <Card className="p-8 bg-[#1a1612]/60 backdrop-blur border-[#c9a961]/20 shadow-xl">
            <div className="grid gap-6">
              {details.map((detail, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#c9a961]/10 text-[#c9a961]">
                      <detail.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#b8a685] mb-1">{detail.label}</p>
                      <p className="text-lg font-medium text-[#e8dcc8]">{detail.value}</p>
                    </div>
                  </div>
                  {index < details.length - 1 && <Separator className="mt-6 bg-[#c9a961]/10" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
