import check from "@/assets/check.png";
import Image from "next/image";

const WhyChoiceUs = () => {
  return (
    <div className="flex flex-col md:flex-row pt-10">
      <div className="flex-1 space-y-5">
        <p className="text-2xl font=-semibold text-deep-blue">WHY CHOOSE US</p>
        <h1 className="lg:text-4xl text-xl font-bold">
          You Get IT & Business Solution
        </h1>
        <p className="text-black/80 text-lg">
          Dynamically brand plug-and-play action items for extensive leadership.
          Dramatically seize prospective content through seamless collaboration.
          Quickly leverage existing 24/7 portals via scalable alignments.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <Image src={check} alt="checkIcon" className="size-7"></Image>
            <p className="text-lg font-semibold">
              Dramatically re-engineer value added IT systems via mission
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={check} alt="checkIcon" className="size-6"></Image>
            <p className="text-lg font-semibold">
              Website & Mobile application design & Development
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={check} alt="checkIcon" className="size-6"></Image>
            <p className="text-lg font-semibold">
              Professional User Experince & Interface researching
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default WhyChoiceUs;
