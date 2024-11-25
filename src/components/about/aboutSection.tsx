import aboutImage from "@/assets/about1.png";
import Image from "next/image";
import AnimatedBg from "../animation/AnimatedBg";
import Container from "../shared/Container";
import check from "@/assets/check.png";
import aboutImage2 from "@/assets/about2.png";
import aboutImage3 from "@/assets/about3.png";

const AboutSection = () => {
  return (
    <AnimatedBg>
      <Container className="py-10 flex flex-col lg:flex-row justify-between items-center lg:gap-x-10 gap-x-5  relative">
        <div id="about" className="flex-1 overflow-x-hidden">
          <Image
            src={aboutImage}
            alt="about_image"
            className=" max-h-[500px] max-w-[500px]"
          ></Image>
          <div className="absolute top-0 -translate-x-20">
            <Image src={aboutImage2} alt="about_image"></Image>
          </div>
          <div className="absolute top-0  translate-x-56">
            <Image src={aboutImage3} alt="about_image"></Image>
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <p className="text-2xl  text-primary-blue">
            About Company
          </p>
          <h1 className="text-4xl font-bold">
            We Elevate Our Clients with Innovative <br /> and Tailored IT
            Solutions.
          </h1>
          <p className="text-black/80 text-lg">
            Continually harness backward-compatible initiatives and synergistic
            content. Objectively strategize cutting edge niches with
            collaborative synergy. Globally pontificate e-business processes
            through orthoonal web readiness enhance backend value.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">
                Dramatically re-engineer value added IT systems via mission
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">
                Website & Mobile application design & Development
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">
                Professional User Experince & Interface researching
              </p>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedBg>
  );
};

export default AboutSection;
