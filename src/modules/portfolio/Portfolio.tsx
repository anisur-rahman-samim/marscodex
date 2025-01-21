import AnimatedBg from "@/components/animation/AnimatedBg";
import AnimatedText from "@/components/animation/AnimatedText";
import Container from "@/components/shared/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppProjects from "./AppProjects";
import AllProject from "./AllProject";
import WebsiteProjects from "./WebsiteProjects";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <AnimatedBg>
        <Tabs defaultValue="all">
          <Container className="py-10">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-2">
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
              <TabsList className="grid w-full grid-cols-3 max-w-[300px]">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary-blue data-[state=active]:text-white duration-300"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="app"
                  className="data-[state=active]:bg-primary-blue data-[state=active]:text-white duration-300"
                >
                  App
                </TabsTrigger>
                <TabsTrigger
                  value="website"
                  className="data-[state=active]:bg-primary-blue data-[state=active]:text-white duration-300"
                >
                  Website
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <AllProject></AllProject>
            </TabsContent>
            <TabsContent value="app">
              <AppProjects></AppProjects>
            </TabsContent>
            <TabsContent value="website">
            <WebsiteProjects></WebsiteProjects>
            </TabsContent>
          </Container>
        </Tabs>
      </AnimatedBg>
    </div>
  );
};

export default Portfolio;
