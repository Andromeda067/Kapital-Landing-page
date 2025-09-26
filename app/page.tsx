import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PhotoCarousel } from "@/components/photo-carousel"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhotoCarousel />
      <ServicesSection />
      <TestimonialsCarousel />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
