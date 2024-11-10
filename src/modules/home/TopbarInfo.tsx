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
      <Container className="flex-between justify-center lg:justify-between">
        <div className="lg:flex gap-x-5 hidden ">
          <div className="flex items-center  gap-x-1">
            <MapPin color="#684DF4" fill="#FFFDFC" size={20} />
            <p className="text-primary-white text-sm">
              Road No. 6, Mirpur 10, 1216
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <Phone color="#684DF4" fill="#FFFDFC" size={20} />
            <Link
              href={"tel: (+880)1332371530"}
              className="text-primary-white hover:text-primary-light-blue text-sm"
            >
              {" "}
              +8801332371530
            </Link>
          </div>
          <div className="flex items-center gap-x-1 text-sm">
            <Mail color="#684DF4" fill="#FFFDFC" size={20} />
            <Link
              href={"mailto:support@marscodex.com"}
              className="text-primary-white hover:text-primary-light-blue"
            >
              {" "}
              support@marscodex.com
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-primary-white text-sm">Follow Us On :</p>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Facebook size={18} color="#fff" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Linkedin size={18} color="#fff" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Instagram size={18} color="#fff" />
          </Link>
          <Link href={"https://www.facebook.com/marscodex"} target="_blank">
            <Youtube size={20} color="#fff" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopbarInfo;
