import { HeroSection } from "@/components/hero-section-view";
import { NavBara } from "@/components/navbar-view";
import { AboutSection } from "@/components/ui/about-section-view";
import { Screen } from "@/components/ui/conatiner-view";

export default function Home() {
  return (
    <Screen>
      <NavBara />
      <HeroSection />
      {/* <AboutSection /> */}
    </Screen>
  );
}
