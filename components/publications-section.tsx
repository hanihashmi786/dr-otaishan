"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/contexts/language-context"
import { publications } from "@/lib/data/profile-data"
import { BookOpen, Download, X, ChevronLeft, ChevronRight } from "lucide-react"

export function PublicationsSection() {
  const { t, language } = useLanguage()
  const [selectedBook, setSelectedBook] = useState<number | null>(null)

  useEffect(() => {
    if (selectedBook !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBook(null)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedBook])

  const openLightbox = (index: number) => {
    if (publications.parts[index].fileUrl) {
      setSelectedBook(index)
    }
  }

  const closeLightbox = () => {
    setSelectedBook(null)
  }

  const goToPrev = () => {
    if (selectedBook !== null) {
      const prevIndex = selectedBook === 0 ? publications.parts.length - 1 : selectedBook - 1
      if (publications.parts[prevIndex].fileUrl) {
        setSelectedBook(prevIndex)
      }
    }
  }

  const goToNext = () => {
    if (selectedBook !== null) {
      const nextIndex = selectedBook === publications.parts.length - 1 ? 0 : selectedBook + 1
      if (publications.parts[nextIndex].fileUrl) {
        setSelectedBook(nextIndex)
      }
    }
  }

  return (
    <section id="publications" className="py-20 bg-[#1a1612]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#c9a961] to-[#d4b76e] bg-clip-text text-transparent">
            {language === "ar" ? "المؤلفات" : "Publications"}
          </span>
        </h2>
        <p className="text-center text-[#b8a685] mb-16 text-lg">
          {language === "ar" ? "كاتب أسبوعي بجريدة الاقتصادية" : "Weekly Writer in Al-Eqtisadiah Newspaper"}
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-[#1a1612]/60 backdrop-blur border border-[#c9a961]/20 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[#c9a961]/10 text-[#c9a961]">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-balance text-[#e8dcc8]">{t(publications.title)}</h3>
                <Badge variant="outline" className="border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961]">
                  {language === "ar" ? "8 أجزاء" : "8 Parts"}
                </Badge>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {publications.parts.map((part, index) => (
                part.fileUrl && (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="p-4 bg-[#1a1612]/40 border border-[#c9a961]/10 hover:border-[#c9a961]/30 hover:bg-[#c9a961]/5 transition-all group cursor-pointer rounded-lg"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-[#c9a961] text-[#1a1612] font-bold shrink-0">{index + 1}</Badge>
                        <p className="text-sm text-balance text-[#b8a685] group-hover:text-[#c9a961] transition-colors flex-1">
                          {t(part)}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-11">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            openLightbox(index)
                          }}
                          className="flex-1 px-3 py-2 text-xs border border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961] hover:bg-[#c9a961]/20 hover:text-[#c9a961] hover:border-[#c9a961]/50 rounded-md transition-all inline-flex items-center justify-center gap-2"
                        >
                          <BookOpen className="h-3 w-3" />
                          {language === "ar" ? "عرض" : "View"}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const link = document.createElement("a")
                            link.href = part.fileUrl!
                            link.download = `part-${index + 1}.pdf`
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                          }}
                          className="flex-1 px-3 py-2 text-xs border border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961] hover:bg-[#c9a961]/20 hover:text-[#c9a961] hover:border-[#c9a961]/50 rounded-md transition-all inline-flex items-center justify-center gap-2"
                        >
                          <Download className="h-3 w-3" />
                          {language === "ar" ? "تحميل" : "Download"}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedBook !== null && publications.parts[selectedBook].fileUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0f0e0c]/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-2 -right-2 md:top-0 md:right-0 z-20 w-12 h-12 flex items-center justify-center bg-[#c9a961] hover:bg-[#d4b76e] text-[#1a1612] rounded-full shadow-xl shadow-[#c9a961]/30 transition-all duration-300 hover:scale-110"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Arrows */}
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

            {/* PDF Container */}
            <div className="bg-gradient-to-br from-[#1a1612] to-[#0f0e0c] rounded-2xl border border-[#c9a961]/30 overflow-hidden shadow-2xl shadow-[#c9a961]/20 flex flex-col h-full">
              {/* Book Info Header */}
              <div className="p-5 md:p-6 border-b border-[#c9a961]/20 bg-[#1a1612] flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#c9a961] mb-1">
                    {t(publications.parts[selectedBook])}
                  </h3>
                  <p className="text-[#b8a685] text-sm">
                    {language === "ar" ? `الجزء ${selectedBook + 1} من ${publications.parts.length}` : `Part ${selectedBook + 1} of ${publications.parts.length}`}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = publications.parts[selectedBook].fileUrl!
                    link.download = `part-${selectedBook + 1}.pdf`
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="border-[#c9a961]/30 bg-[#c9a961]/5 text-[#c9a961] hover:bg-[#c9a961]/20 hover:text-[#c9a961] hover:border-[#c9a961]/50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {language === "ar" ? "تحميل" : "Download"}
                </Button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-[#f5f0e6]" style={{ WebkitOverflowScrolling: 'touch' }}>
                <iframe
                  src={`${publications.parts[selectedBook].fileUrl}#toolbar=1&navpanes=1&scrollbar=1&zoom=page-width`}
                  className="w-full h-full min-h-[600px] border-0"
                  title={t(publications.parts[selectedBook])}
                  scrolling="yes"
                  style={{ minHeight: '600px', height: '100%' }}
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-4 md:hidden">
              <button
                onClick={goToPrev}
                className="w-10 h-10 flex items-center justify-center bg-[#1a1612] border border-[#c9a961]/30 text-[#c9a961] rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5">
                {publications.parts.map((part, index) => (
                  part.fileUrl && (
                    <button
                      key={index}
                      onClick={() => setSelectedBook(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedBook ? "bg-[#c9a961] w-5" : "bg-[#c9a961]/30"
                      }`}
                    />
                  )
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

            {/* Desktop Dots */}
            <div className="hidden md:flex justify-center gap-2 mt-4">
              {publications.parts.map((part, index) => (
                part.fileUrl && (
                  <button
                    key={index}
                    onClick={() => setSelectedBook(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === selectedBook ? "bg-[#c9a961] w-8" : "bg-[#c9a961]/30 hover:bg-[#c9a961]/50"
                    }`}
                  />
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
