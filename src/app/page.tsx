import AboutSection from "@/components/about/aboutSection";
import HeroSection from "@/modules/home/HeroSection";
import WhyChoiceUs from "@/modules/why-choice-us/WhyChoiceUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <WhyChoiceUs></WhyChoiceUs>
    </div>
  );
}
