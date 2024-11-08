import Container from "@/components/shared/Container";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const TopbarInfo = () => {
  return (
    <div className="bg-primary-blue  py-3">
      <Container className="flex-between">
        <div className="flex gap-x-5">
          <div className="flex  gap-x-1">
            <MapPin color="#FFFDFC" />
            <p className="text-primary-white">Road No. 6, Mirpur 10, 1216</p>
          </div>
          <div className="flex gap-x-1">
            <Phone color="#FFFDFC" />
            <p className="text-primary-white"> +8801332371530</p>
          </div>
          <div className="flex gap-x-1">
            <Mail color="#FFFDFC" />
            <p className="text-primary-white"> support@marscodex.com</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <p className="text-primary-white">Follow Us On :</p>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Facebook color="#FFFDFC" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Linkedin color="#FFFDFC" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Instagram color="#FFFDFC" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Youtube color="#FFFDFC" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopbarInfo;
