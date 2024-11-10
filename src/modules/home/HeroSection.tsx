import AnimatedBg from "@/components/animation/AnimatedBg";
import Container from "@/components/shared/Container";
import heroImage from "@/assets/hero_img_1_1.png";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import AnimatedButton from "@/components/ui/animatedButton";
import PulseShadow from "@/components/ui/PulseShadow";
import lineImage from "@/assets/hero-shape2.png";

const HeroSection = () => {
  return (
    <AnimatedBg>
      <Container className="min-h-[calc(100vh-24px)] pt-5 flex-between lg:gap-x-10 relative">
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
          <div className="flex items-center lg:gap-x-8 gap-x-4">
            <AnimatedButton>
              <div className="flex gap-x-2 text-xl ">
                About Us{" "}
                <ArrowRight
                  color="#fff"
                  className="group-hover:translate-x-12 duration-1000"
                ></ArrowRight>
              </div>
            </AnimatedButton>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <PulseShadow>
                <div className="bg-primary-blue p-2 rounded-full hover:animate-pulse ">
                  <Play color="#fff" fill="#fff" />
                </div>
              </PulseShadow>
              <div>
                <h5 className="font-semibold">Discover Our Story</h5>
                <p className="text-primary-gray">Subscribe Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={heroImage} alt="hero_image"></Image>
        </div>
        <div className="absolute top-0 lg:left-20">
          <Image
            src={lineImage}
            alt="line_image"
            width={500}
            className="opacity-5 xl:w-[1000px]"
          ></Image>
        </div>
      </Container>
    </AnimatedBg>
  );
};

export default HeroSection;
