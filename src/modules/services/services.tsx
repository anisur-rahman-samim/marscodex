import AnimatedBg from "@/components/animation/AnimatedBg";
import Container from "@/components/shared/Container";
import React from "react";

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
      </Container>
    </AnimatedBg>
  );
};

export default Services;
