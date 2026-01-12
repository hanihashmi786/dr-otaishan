"use client"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/contexts/language-context"
import { profileInfo, stats } from "@/lib/data/profile-data"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1612] via-[#1a1612] to-[#0f0e0c]"
    >
      {/* Textured Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a961]/5 via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#3a3428]/10 via-transparent to-transparent" />

      {/* Elegant Dune Wave Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 w-full h-64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gold-gradient)"
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgb(201, 169, 97)", stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: "rgb(212, 183, 110)", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "rgb(201, 169, 97)", stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[480px_1fr] gap-16 items-center">
            <div className="flex justify-center lg:justify-start animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="relative">
                {/* Glowing Aura */}
                <div
                  className="absolute -inset-8 bg-gradient-to-br from-[#c9a961]/20 via-[#d4b76e]/10 to-transparent rounded-full blur-3xl animate-pulse"
                  style={{ animationDuration: "4s" }}
                />

                {/* Ornate Frame Container */}
                <div className="relative">
                  {/* Outer Decorative Ring */}
                  <div
                    className="absolute -inset-6 rounded-full border-2 border-[#c9a961]/30 animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#c9a961] rounded-full shadow-lg shadow-[#c9a961]/50" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#c9a961] rounded-full shadow-lg shadow-[#c9a961]/50" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#c9a961] rounded-full shadow-lg shadow-[#c9a961]/50" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#c9a961] rounded-full shadow-lg shadow-[#c9a961]/50" />
                  </div>

                  {/* Premium Gold Frame */}
                  <div className="relative p-2 rounded-full bg-gradient-to-br from-[#c9a961] via-[#d4b76e] to-[#c9a961] shadow-2xl shadow-[#c9a961]/30">
                    {/* Inner Dark Border */}
                    <div className="p-3 rounded-full bg-gradient-to-br from-[#1a1612] via-[#1a1612] to-[#1a1612]">
                      {/* Image Container with subtle inner glow */}
                      <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-[#c9a961]/20 shadow-inner">
                        <Image
                          src="/images/image.png"
                          alt={t(profileInfo.name)}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                        />
                        {/* Subtle Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Ornaments */}
                  <div className="absolute -top-4 -left-4 w-16 h-16">
                    <div className="w-full h-full border-t-4 border-l-4 border-[#c9a961] rounded-tl-3xl shadow-lg shadow-[#c9a961]/50" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16">
                    <div className="w-full h-full border-t-4 border-r-4 border-[#c9a961] rounded-tr-3xl shadow-lg shadow-[#c9a961]/50" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16">
                    <div className="w-full h-full border-b-4 border-l-4 border-[#c9a961] rounded-bl-3xl shadow-lg shadow-[#c9a961]/50" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16">
                    <div className="w-full h-full border-b-4 border-r-4 border-[#c9a961] rounded-br-3xl shadow-lg shadow-[#c9a961]/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
              {/* Name with Enhanced Typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight">
                <span className="inline-block bg-gradient-to-r from-[#c9a961] via-[#d4b76e] to-[#c9a961] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(201,169,97,0.3)]">
                  {t(profileInfo.name)}
                </span>
              </h1>

              {/* Title with Divider */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a961]/50 to-[#c9a961]/20 max-w-[100px]" />
                  <p className="text-xl md:text-2xl lg:text-3xl text-[#d4b76e] font-light text-balance tracking-wide">
                    {t(profileInfo.title)}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c9a961]/50 to-[#c9a961]/20 max-w-[100px]" />
                </div>
              </div>

              {/* Summary */}
              <p className="text-base md:text-lg text-[#e8dcc8]/70 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t(profileInfo.summary)}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                {stats.map((stat, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-5 py-3 text-base border-[#c9a961]/40 bg-gradient-to-br from-[#c9a961]/10 to-[#c9a961]/5 hover:from-[#c9a961]/20 hover:to-[#c9a961]/10 transition-all duration-300 shadow-lg hover:shadow-[#c9a961]/20"
                  >
                    <span className="font-bold text-[#c9a961] text-2xl mr-3">{stat.value}</span>
                    <span className="text-[#e8dcc8]/80 text-sm font-medium">{t(stat.label)}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Elegant Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  )
}
