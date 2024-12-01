"use client";
import AnimatedBg from "@/components/animation/AnimatedBg";
import Container from "@/components/shared/Container";
import heroImage from "@/assets/hero/hero_img.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedButton from "@/components/ui/animatedButton";
import lineImage from "@/assets/hero-shape2.png";
import MovementElement from "@/components/animation/MovementElement";
import PlayButton from "@/components/client-components/PlayButton";
import AnimatedText from "@/components/animation/AnimatedText";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <AnimatedBg>
      <Container className="min-h-[calc(100vh-200px)] py-10 flex-between flex-col-reverse lg:flex-row lg:gap-x-10 relative">
        <div className="flex-1 md:space-y-5 space-y-3 z-20">
          <h4 className="md:text-2xl text-xl font-semibold uppercase text-primary-blue">
            <AnimatedText delay={0.05} duration={0.3}>
              Solution For Your Business
            </AnimatedText>
          </h4>
          <h1 className="text-3xl  xl:text-5xl font-bold text-deep-blue ">
            Providing Technology <br />{" "}
            <span className="flex gap-2 flex-wrap">
              For Smart{" "}
              <span className="text-primary-blue font-semibold inline">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: [
                      "It Solution.",
                      "Tech Innovations.",
                      "Digital Solutions.",
                    ],
                  }}
                ></Typewriter>
              </span>
            </span>
          </h1>
          <p className="text-primary-gray">
            Rapidiously streamline revolutionary networks with technically sound
            deliverables. Authoritatively integrate installed base
            web-readiness. Quickly maximize superior process.
          </p>
          <div className="flex items-center justify-center md:justify-start lg:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
            <AnimatedButton>
              <div className="flex gap-x-2 text-xl truncate ">
                About Us{" "}
                <ArrowRight
                  color="#fff"
                  className="group-hover:translate-x-12 duration-1000"
                ></ArrowRight>
              </div>
            </AnimatedButton>
            <div className="flex items-center gap-x-3 cursor-pointer">
              <PlayButton></PlayButton>
              <div>
                <h5 className="font-semibold truncate">Discover Our Story</h5>
                <p className="text-primary-gray">Subscribe Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 z-20">
          <MovementElement duration={0.8}>
            <Image src={heroImage} alt="hero_image"></Image>
          </MovementElement>
        </div>
        <div className="absolute top-0 lg:left-20 z-0">
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
