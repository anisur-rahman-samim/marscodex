import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Container from "./Container";
import particle from "@/assets/particle_7.png";
import borderImage from "@/assets/footerBorder.png";
import { StepForward } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#080E1C] py-16 relative">
      <Container>
        <div className="flex flex-col flex-wrap xl:justify-between justify-center gap-y-10 gap-x-2 md:flex-row">
          {/* Logo and description */}
          <div>
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className=" w-[180px]"
            />

            <p className="mt-4 max-w-[320px] text-primary-white/70 mx-auto">
              Rapidiously streamline revolutionary networks with technically
              sound deliverables. Authoritatively integrate installed base
              web-readiness. Quickly maximize superior process.
            </p>
            <div className="flex items-center gap-x-2  mt-4">
              <Link
                href={"https://www.facebook.com/marscodex"}
                target="_blank"
                className="border border-white rounded-full p-1"
              >
                <Facebook size={18} color="#fff" />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="border border-white rounded-full p-1"
              >
                <Linkedin size={18} color="#fff" />
              </Link>
              <Link
                href={"#"}
                target="_blank"
                className="border border-white rounded-full p-1"
              >
                <Instagram size={18} color="#fff" />
              </Link>
              <Link
                href={"https://www.youtube.com/@Marscodex"}
                target="_blank"
                className="border border-white rounded-full p-1"
              >
                <Youtube size={20} color="#fff" />
              </Link>
            </div>
          </div>

          {/* Links and supports informations */}
          <div className="flex xl:justify-between justify-center items-center flex-wrap gap-6 lg:gap-28">
            {/* Account Links */}
            <div>
              <div className="mb-3">
                <h3 className=" font-semibold text-primary-white">SERVICES</h3>
                <Image src={borderImage} alt="border_image"></Image>
              </div>
              <ul className="space-y-2 text-primary-white">
                <li className="flex items-center gap-x-1">
                  <StepForward size={18} /> <p> App Development</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <StepForward size={18} /> <p> Web Development</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <StepForward size={18} /> <p> UI/UX Design</p>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-3">
                <h3 className="font-semibold text-primary-white">
                  Quick Links
                </h3>
                <Image src={borderImage} alt="border_image"></Image>
              </div>
              <ul className="space-y-2 text-primary-white">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/whyChoiceUs">Why Choice Us</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <div className="mb-3">
                <h3 className="font-semibold text-primary-white">Support</h3>
                <Image src={borderImage} alt="border_image"></Image>
              </div>
              <ul className="space-y-2 text-primary-white">
                <li>Road No. 6, Mirpur 10, 1216</li>
                <li>support@marscodex.com</li>
                <li>+8801332371530</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Image
        src={particle}
        alt="particle"
        className="absolute bottom-0 right-0 brightness-50 max-h-[250px]"
      ></Image>
    </div>
  );
};

export default Footer;
