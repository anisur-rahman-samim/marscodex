import AnimatedBg from "@/components/animation/AnimatedBg";
import Container from "@/components/shared/Container";
import heroImage from "@/assets/hero_img_1_1.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/ui/animatedButton";

const HeroSection = () => {
  return (
    <AnimatedBg>
      <Container className="min-h-[calc(100vh-24px)] pt-5 flex-between lg:gap-x-10">
        <div className="flex-1 space-y-5">
          <h4 className="text-2xl font-semibold uppercase text-primary-blue">
            Solution For Your Business
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold text-deep-blue">
            Providing Technology <br /> For Smart{" "}
            <span className="text-primary-blue font-semibold">IT Solution</span>
          </h1>
          <p className="text-primary-gray">
            Rapidiously streamline revolutionary networks with technically sound
            deliverables. Authoritatively integrate installed base
            web-readiness. Quickly maximize superior process.
          </p>
          <div className="flex gap-x-5">
            <AnimatedButton>
              <div className="flex gap-x-2 text-xl ">
              About Us{" "}
              <ArrowRight
                color="#fff"
                className="group-hover:translate-x-12 duration-1000"
              ></ArrowRight>
               </div>
            </AnimatedButton>
           
          </div>
        </div>
        <div className="flex-1">
          <Image src={heroImage} alt="hero_image"></Image>
        </div>
      </Container>
    </AnimatedBg>
  );
};

export default HeroSection;
