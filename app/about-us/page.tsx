import { Hero } from "@/components/shared/Hero";
import { AboutUsSection } from "./about-us";
import { MissionVision } from "./mission-vision";

export default function AboutUsPage() {
  return (
    <main>
      <Hero
        title="About Us"
        description={
          <p className="mb-2">
            Discover our story, our heart, and our mission to spread the love of
            Christ.
          </p>
        }
      />
      <AboutUsSection />
      <MissionVision />
    </main>
  );
}
