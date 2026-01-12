import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { LeadershipSection } from "@/components/leadership-section"
import { AcademicSection } from "@/components/academic-section"
import { CertificationsSection } from "@/components/certifications-section"
import { MembershipsSection } from "@/components/memberships-section"
import { AwardsSection } from "@/components/awards-section"
import { PublicationsSection } from "@/components/publications-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1612] via-[#1a1612] to-[#0f0e0c]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <LeadershipSection />
      <AcademicSection />
      <CertificationsSection />
      <MembershipsSection />
      <AwardsSection />
      <PublicationsSection />
      <Footer />
    </main>
  )
}
