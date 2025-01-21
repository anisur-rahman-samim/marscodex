import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
type TProps = {
  id: number;
  type: string;
  name: string;
  projectType: string;
  image: string;
  color: string;
};

const ProjectCard = ({ data }: { data: TProps }) => {
  return (
    <Card style={{backgroundColor: data?.color}} className="max-w-[500px]  group cursor-pointer hover:shadow-2xl">
      <CardContent className="pt-4">
        <div className="space-y-2">
          <Image
            src={data?.image}
            alt="services_image"
            width={1200}
            height={1200}
            className="w-auto lg:h-[270px] xl:h-[300px] md:h-[240px] h-[230px] mx-auto group-hover:"
          ></Image>
          <div>
          <h1 className="xl:text-2xl text-xl  font-semibold">
            {data?.name}
          </h1>
          <p>{data?.projectType}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
