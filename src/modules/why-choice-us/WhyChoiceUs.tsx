import check from "@/assets/check.png";
import Image from "next/image";
import sectionImage from "@/assets/why_choice_us_1.png";
import Container from "@/components/shared/Container";
import AnimatedBg from "@/components/animation/AnimatedBg";
import sectionImage2 from "@/assets/why_3_2.png";
import sectionImage3 from "@/assets/why_3_3.png";
import InfiniteMovement from "@/components/animation/InfiniteMovement";
import AnimatedText from "@/components/animation/AnimatedText";

const WhyChoiceUs = () => {
  return (
    <AnimatedBg>
      <Container className="pt-10 flex flex-col  lg:flex-row justify-between items-center lg:gap-x-10 gap-x-5  ">
        <div className="flex-1 space-y-5">
          <p className="text-2xl  text-primary-blue">
            <AnimatedText delay={0.05} duration={0.3}>
              WHY CHOOSE US
            </AnimatedText>
          </p>
          <h1 className="lg:text-4xl text-xl font-bold">
            You Get IT & Business Solution
          </h1>
          <p className="text-black/80 text-lg">
            Dynamically brand plug-and-play action items for extensive
            leadership. Dramatically seize prospective content through seamless
            collaboration. Quickly leverage existing 24/7 portals via scalable
            alignments.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">Big Data Analysis</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">High Quality Performance</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">24/7 Online Support</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Image src={check} alt="checkIcon" className="size-7"></Image>
              <p className="text-lg font-semibold">Virtual Support Team</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative flex justify-end">
          <div>
            <Image
              src={sectionImage}
              alt="section_image"
              // className=" max-h-[500px] max-w-[500px]"
            ></Image>
            <div className="absolute top-0 translate-x-4 md:translate-x-10">
              <InfiniteMovement duration={5} y="20%">
                {" "}
                <Image src={sectionImage2} alt="section_image_2"></Image>
              </InfiniteMovement>
            </div>
            <div className="absolute top-0 hidden md:block translate-x-80">
              <InfiniteMovement duration={5} x="20%">
                <Image src={sectionImage3} alt="section_image_3"></Image>
              </InfiniteMovement>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedBg>
  );
};

export default WhyChoiceUs;
