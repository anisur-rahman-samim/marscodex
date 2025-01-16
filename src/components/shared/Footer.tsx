import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Container from "./Container";
import particle from "@/assets/particle_7.png";
import borderImage from "@/assets/footerBorder.png";
import { StepForward } from "lucide-react";

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
                  <Link href="/privacy-policy">Privacy Policy </Link>
                </li>
                <li>
                  <Link href="/terms-condition">Term of Use</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div>
              <h3 className="mb-4 font-semibold text-primary-white">Support</h3>
              <ul className="space-y-2 text-primary-white">
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>team@churchscroll.com</li>
                <li>+88015-88888-9999</li>
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
