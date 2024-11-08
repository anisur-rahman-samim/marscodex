import Container from "@/components/shared/Container";
import { MapPinCheck } from "lucide-react";

const TopbarInfo = () => {
  return (
    <div className="bg-primary-blue  py-2">
      <Container className="flex-between">
        <div>
          <div className="flex  gap-2">
            <MapPinCheck color="#FFFDFC" />
            <p className="text-primary-white">Road No. 6, Mirpur 10, 1216</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default TopbarInfo;
