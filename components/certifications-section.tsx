"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/contexts/language-context"
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    title: { en: "Bachelor of Science in Civil Engineering", ar: "بكالوريوس العلوم في الهندسة المدنية" },
    institution: { en: "St. Martin's College", ar: "كلية سانت مارتن" },
    location: { en: "Olympia, Washington, USA", ar: "أوليمبيا، واشنطن، الولايات المتحدة" },
    year: "1970",
    image: "/certificates/bs-in-ce.jpg",
  },
  {
    id: 2,
    title: { en: "Engineer Construction Officer Course Diploma", ar: "دبلوم دورة ضابط البناء الهندسي" },
    institution: { en: "United States Army Engineer School", ar: "مدرسة الهندسة بالجيش الأمريكي" },
    location: { en: "Fort Belvoir, Virginia, USA", ar: "فورت بلفوار، فيرجينيا، الولايات المتحدة" },
    year: "1972",
    image: "/certificates/us-army.jpg",
  },
  {
    id: 3,
    title: { en: "Value Engineering Workshop Certificate", ar: "شهادة ورشة هندسة القيمة" },
    institution: { en: "U.S. Army Corps of Engineers", ar: "سلاح المهندسين بالجيش الأمريكي" },
    location: { en: "Los Angeles, California, USA", ar: "لوس أنجلوس، كاليفورنيا، الولايات المتحدة" },
    year: "1975",
    image: "/certificates/corps-of-engineering.jpg",
  },
  {
    id: 4,
    title: { en: "Master of Science in Civil Engineering", ar: "ماجستير العلوم في الهندسة المدنية" },
    institution: { en: "University of Washington", ar: "جامعة واشنطن" },
    location: { en: "Seattle, Washington, USA", ar: "سياتل، واشنطن، الولايات المتحدة" },
    year: "1975",
    image: "/certificates/ms-in-ce.jpg",
  },
  {
    id: 5,
    title: { en: "Candidate in Philosophy Certificate", ar: "شهادة مرشح للدكتوراه في الفلسفة" },
    institution: { en: "University of Washington", ar: "جامعة واشنطن" },
    location: { en: "Seattle, Washington, USA", ar: "سياتل، واشنطن، الولايات المتحدة" },
    year: "1978",
    image: "/certificates/candidate-philosophy.jpg",
  },
  {
    id: 6,
    title: { en: "King Abdulaziz Badge of Second Class", ar: "وسام الملك عبدالعزيز من الدرجة الثانية" },
    institution: { en: "Kingdom of Saudi Arabia", ar: "المملكة العربية السعودية" },
    location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
    year: "1987",
    image: "/certificates/king-award.jpg",
  },
]

export function CertificationsSection() {
  const { t, language } = useLanguage()
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  useEffect(() => {
    if (selectedCert !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedCert])

  const openLightbox = (index: number) => {
    setSelectedCert(index)
  }

  const closeLightbox = () => {
    setSelectedCert(null)
  }

  const goToPrev = () => {
    if (selectedCert !== null) {
      setSelectedCert(selectedCert === 0 ? certificates.length - 1 : selectedCert - 1)
    }
  }

  const goToNext = () => {
    if (selectedCert !== null) {
      setSelectedCert(selectedCert === certificates.length - 1 ? 0 : selectedCert + 1)
    }
  }

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c] via-[#1a1612] to-[#0f0e0c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a961]/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <Award className="h-8 w-8 text-[#c9a961]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8dcc8] mb-4">
            {language === "ar" ? "الشهادات والدبلومات" : "Certifications & Diplomas"}
          </h2>
          <p className="text-[#b8a685] text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "مجموعة من الشهادات والدبلومات الأكاديمية والمهنية"
              : "A collection of academic and professional certifications and diplomas"}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={cert.id} onClick={() => openLightbox(index)} className="group cursor-pointer">
              <div className="relative bg-gradient-to-br from-[#1a1612] to-[#0f0e0c] rounded-xl border border-[#c9a961]/20 overflow-hidden hover:border-[#c9a961]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a961]/10">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={t(cert.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#c9a961]/90 text-[#1a1612] px-6 py-3 rounded-full font-semibold shadow-xl">
                      {language === "ar" ? "عرض الشهادة" : "View Certificate"}
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#c9a961] font-bold text-lg">{cert.year}</span>
                    <div className="h-px flex-1 bg-[#c9a961]/30" />
                  </div>
                  <h3 className="text-[#e8dcc8] font-semibold text-lg leading-tight group-hover:text-[#c9a961] transition-colors">
                    {t(cert.title)}
                  </h3>
                  <p className="text-[#b8a685] text-sm">{t(cert.institution)}</p>
                  <p className="text-[#b8a685]/70 text-xs">{t(cert.location)}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c9a961]/20 to-transparent rotate-45 translate-x-8 -translate-y-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0f0e0c]/90 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Modal Container - constrained size */}
          <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-2 -right-2 md:top-0 md:right-0 z-20 w-12 h-12 flex items-center justify-center bg-[#c9a961] hover:bg-[#d4b76e] text-[#1a1612] rounded-full shadow-xl shadow-[#c9a961]/30 transition-all duration-300 hover:scale-110"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Arrows - positioned on sides */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-10 h-10 hidden md:flex items-center justify-center bg-[#1a1612]/80 hover:bg-[#c9a961]/20 text-[#c9a961] rounded-full border border-[#c9a961]/30 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-10 h-10 hidden md:flex items-center justify-center bg-[#1a1612]/80 hover:bg-[#c9a961]/20 text-[#c9a961] rounded-full border border-[#c9a961]/30 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Certificate Card */}
            <div className="bg-gradient-to-br from-[#1a1612] to-[#0f0e0c] rounded-2xl border border-[#c9a961]/30 overflow-hidden shadow-2xl shadow-[#c9a961]/20">
              {/* Image Container - constrained height */}
              <div className="relative w-full h-[50vh] max-h-[400px] bg-[#f5f0e6]">
                <Image
                  src={certificates[selectedCert].image || "/placeholder.svg"}
                  alt={t(certificates[selectedCert].title)}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Certificate Info - compact */}
              <div className="p-5 md:p-6 text-center border-t border-[#c9a961]/20 bg-[#1a1612]">
                <h3 className="text-xl md:text-2xl font-bold text-[#c9a961] mb-2">
                  {t(certificates[selectedCert].title)}
                </h3>
                <p className="text-[#e8dcc8] text-base">{t(certificates[selectedCert].institution)}</p>
                <p className="text-[#b8a685] text-sm">
                  {t(certificates[selectedCert].location)} • {certificates[selectedCert].year}
                </p>
              </div>
            </div>

            {/* Mobile Navigation - below card */}
            <div className="flex justify-center items-center gap-4 mt-4 md:hidden">
              <button
                onClick={goToPrev}
                className="w-10 h-10 flex items-center justify-center bg-[#1a1612] border border-[#c9a961]/30 text-[#c9a961] rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCert(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedCert ? "bg-[#c9a961] w-5" : "bg-[#c9a961]/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="w-10 h-10 flex items-center justify-center bg-[#1a1612] border border-[#c9a961]/30 text-[#c9a961] rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop Dots - below card */}
            <div className="hidden md:flex justify-center gap-2 mt-4">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedCert ? "bg-[#c9a961] w-8" : "bg-[#c9a961]/30 hover:bg-[#c9a961]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
