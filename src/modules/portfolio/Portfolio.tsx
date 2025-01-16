import AnimatedBg from "@/components/animation/AnimatedBg";
import AnimatedText from "@/components/animation/AnimatedText";
import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  return (
    <div id="portfolio" >
      <AnimatedBg>
        <Tabs defaultValue="account" >
          <Container className="py-10">
            <div className="flex flex-clo md:flex-row justify-center md:justify-between items-center">
              <div>
                <p className="text-2xl  text-primary-blue">
                  <AnimatedText delay={0.05} duration={0.3}>
                    CASE STUDY
                  </AnimatedText>
                </p>
                <h1 className="md:text-4xl  font-bold">
                  Our Portfolio / Works
                </h1>
              </div>
              <TabsList className="grid w-full grid-cols-2 max-w-[300px]">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            </div>

           
            <TabsContent value="account">All</TabsContent>
            <TabsContent value="password">App</TabsContent>
          </Container>
        </Tabs>
      </AnimatedBg>
    </div>
  );
};

export default Portfolio;
