"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/components/utils/portfolioData";
const AllProject = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Carousel
        opts={{
          loop: true,
          duration: 55,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full mt-8"
      >
        <CarouselContent>
          {portfolioData?.map((data) => (
            <CarouselItem key={data?.id} className="md:basis-1/2 xl:basis-1/3 ">
              <div className="p-1">
                <ProjectCard data={data}></ProjectCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AllProject;
