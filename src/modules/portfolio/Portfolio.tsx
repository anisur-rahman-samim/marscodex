import AnimatedBg from "@/components/animation/AnimatedBg";
import AnimatedText from "@/components/animation/AnimatedText";
import Container from "@/components/shared/Container";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <AnimatedBg>
        <Container>
          <div className="flex flex-clo md:flex-row justify-center md:justify-between items-center">
            <div>
              <p className="text-2xl  text-primary-blue">
                <AnimatedText delay={0.05} duration={0.3}>
                  CASE STUDY
                </AnimatedText>
              </p>
              <h1 className="md:text-4xl  font-bold">Our Portfolio / Works</h1>
            </div>
          </div>
        </Container>
      </AnimatedBg>
    </div>
  );
};

export default Portfolio;
