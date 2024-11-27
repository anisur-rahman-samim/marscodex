import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
type TProps = {
  image: string;
  description: string;
  name: string;
};

const ServicesCard = ({ data }: { data: TProps }) => {
  return (
    <Card className="bg-[#FFFFFF] max-w-[500px] group">
      <CardContent className="pt-4">
        <div className="space-y-5">
          <Image
            src={data?.image}
            alt="services_image"
            width={1200}
            height={1200}
            className="w-[145px] h-[115px] mx-auto group-hover:"
          ></Image>
          <h1 className="text-3xl text-center font-semibold">{data?.name}</h1>
          <p>{data?.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
