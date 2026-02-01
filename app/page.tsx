import { HeroSection } from "@/components/ui/hero-section-view";
import { NavBara } from "@/components/ui/navbar-view";
import { AboutSection } from "@/components/ui/about-section-view";
import { Screen } from "@/components/ui/conatiner-view";
import { FAQSection } from "@/components/ui/faq-view";
import { Footer } from "@/components/ui/footer-view";
import { ServicesPage } from "@/components/ui/services-section";
import { TestimonialsSection } from "@/components/ui/testimonials-sections";

export default function Home() {
  return (
    <Screen>
      <NavBara />
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </Screen>
  );
}
