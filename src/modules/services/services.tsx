"use client";
import AnimatedBg from "@/components/animation/AnimatedBg";
import Container from "@/components/shared/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { servicesData } from "@/components/utils/services-data";
import Autoplay from "embla-carousel-autoplay";
import ServicesCard from "./servicesCard";

const Services = () => {
  return (
    <AnimatedBg>
      <Container className="md:py-10 py-5">
        <div className="space-y-2">
          <p className="text-2xl text-primary-blue text-center">OUR SERVICES</p>
          <h1 className="lg:text-4xl text-xl font-bold text-center">
            We Provide Exclusive Services
          </h1>
        </div>
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
            {servicesData?.slice(0, 8)?.map((data) => (
              <CarouselItem
                key={data?.id}
                className="md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1">
                  <ServicesCard data={data}></ServicesCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      
</div>
      </Container>
    </AnimatedBg>
  );
};

export default Services;
