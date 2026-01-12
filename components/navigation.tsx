"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Languages, Download } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"

const navItems = [
  { id: "home", label: { en: "Home", ar: "الرئيسية" } },
  { id: "about", label: { en: "About", ar: "نبذة" } },
  { id: "timeline", label: { en: "Timeline", ar: "المسيرة" } },
  { id: "leadership", label: { en: "Leadership", ar: "القيادة" } },
  { id: "academic", label: { en: "Academic", ar: "الأكاديمي" } },
  { id: "certifications", label: { en: "Certifications", ar: "الشهادات" } },
  { id: "memberships", label: { en: "Memberships", ar: "العضويات" } },
  { id: "awards", label: { en: "Awards", ar: "الأوسمة" } },
  { id: "publications", label: { en: "Publications", ar: "المؤلفات" } },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://blobs.vusercontent.net/blob/CV%20-%20ATO-bpKMVRF3gTRDcPqzT8MFNBn1yBtEoY.pdf"
    link.download = "Dr-AlOtaishan-CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1612]/95 backdrop-blur-lg border-b border-[#c9a961]/20 shadow-lg shadow-[#c9a961]/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#c9a961] font-bold text-xl hover:text-[#d4b76e] transition-colors"
          >
            {language === "ar" ? "د. العطيشان" : "Dr. Al-Otaishan"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-[#e8dcc8]/80 hover:text-[#c9a961] hover:bg-[#c9a961]/10 transition-colors"
              >
                {t(item.label)}
              </Button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[#e8dcc8]/80 hover:bg-[#c9a961]/10 hover:text-[#c9a961] transition-colors"
              aria-label="Download CV"
            >
              <Download className="h-5 w-5" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-[#e8dcc8]/80 hover:bg-[#c9a961]/10 hover:text-[#c9a961] transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[#e8dcc8]/80 hover:bg-[#c9a961]/10 hover:text-[#c9a961] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 bg-[#1a1612]/95 backdrop-blur-lg rounded-lg mt-2 p-4 border border-[#c9a961]/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-[#e8dcc8]/80 hover:text-[#c9a961] hover:bg-[#c9a961]/10"
                >
                  {t(item.label)}
                </Button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-start px-4 py-2 rounded-md text-[#e8dcc8]/80 hover:text-[#c9a961] hover:bg-[#c9a961]/10"
              >
                <Download className="h-5 w-5 mr-2" />
                {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
