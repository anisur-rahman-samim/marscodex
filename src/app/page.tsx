import AboutSection from "@/components/about/aboutSection";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/modules/home/HeroSection";
import Portfolio from "@/modules/portfolio/Portfolio";
import Services from "@/modules/services/services";
import WhyChoiceUs from "@/modules/why-choice-us/WhyChoiceUs";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Services></Services>
      <WhyChoiceUs></WhyChoiceUs>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}
