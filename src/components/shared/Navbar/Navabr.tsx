"use client";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navlink from "./component/NavLink";
import { cn } from "@/lib/utils";
import Container from "@/components/shared/Container";

/**
 * Wishlist - Available to only buyer type user
 * Cart - Available to no-user or buyer
 *
 * SellerProfileDropdown - Shows modal for admin approval (may change in future)
 */

// motion variants
const smallMenuLinkVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

const smallMenuVariants = {
  initial: {
    y: "-10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
  exit: {
    y: "10%",
    opacity: 0,
  },
};

export default function Navbar() {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);
  const [hideMobileSearchBar, setHideMobileSearchBar] = useState(true);
  const [squeezeOnScroll, setSqueezeOnScroll] = useState(false);

  // Squeeze navbar on scroll
  const handleSqueezeOnScroll = () => {
    if (Math.round(window?.pageYOffset) >= 150) {
      setSqueezeOnScroll(true);
      return;
    }

    setSqueezeOnScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSqueezeOnScroll);

    return () => window.addEventListener("scroll", handleSqueezeOnScroll); // Clean up
  }, []);

  return (
    <nav className="relative z-[9999] w-full bg-white">
      {/* ------------ Desktop Version ------------- */}
      <div
        className={cn(
          "hidden w-full border-b border-b-gray-300 transition-all duration-300 ease-in-out lg:block",
          squeezeOnScroll ? "px-6 py-3 shadow" : "px-0 py-5"
        )}
      >
        <Container className=" items-center justify-between lg:flex lg:gap-x-10 2xl:w-[75%]">
          {/* Logo -- left */}
          <Link href="/" >
            <Image src={logo} alt="logo" className=" w-[150px]" />
          </Link>

          {/* Links & Icons -- right */}
          <div className="flex flex-grow items-center justify-end text-center lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12">
            <Navlink route="/home" setHideMobileMenu={setHideMobileMenu}>
              Home
            </Navlink>
            <Navlink route="/contact" setHideMobileMenu={setHideMobileMenu}>
              Contact
            </Navlink>
            <Navlink route="/about" setHideMobileMenu={setHideMobileMenu}>
              About Us
            </Navlink>

            <Navlink
              route="/all-products"
              setHideMobileMenu={setHideMobileMenu}
            >
              Products
            </Navlink>
          </div>
        </Container>
      </div>

      {/* ------------ Mobile Version -------------- */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out lg:hidden",
          squeezeOnScroll ? "px-2 py-3" : "px-0 py-5"
        )}
      >
        {/* Menu Header */}
        <div className="relative flex items-center justify-between px-4">
          {/* menu icon */}
          <button
            className="w-1/3"
            onClick={() => setHideMobileMenu(!hideMobileMenu)}
          >
            {hideMobileMenu ? (
              <Menu color="#FE6201" size={24} />
            ) : (
              <X color="#FE6201" size={24} />
            )}
          </button>

          {/* center */}
          <Link href="/" className="w-1/3">
            <Image src={logo} alt="logo" className="mx-auto block" />
          </Link>

          {/* right */}
          <div className="flex w-1/3 items-center justify-end gap-x-4 text-lg font-bold">
            <div>
              {/* search bar */}
              <AnimatePresence>
                <motion.div
                  className="search-bar-container absolute left-16 top-12 z-[9999] w-3/4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                ></motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="absolute left-0 top-[60px] z-[9999] h-auto w-full">
          <AnimatePresence>
            {!hideMobileMenu && (
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-10%", opacity: 0 }}
              >
                <motion.ul
                  className="flex list-none flex-col items-start gap-y-6 border-b border-b-gray-300 bg-white px-4 py-7"
                  variants={smallMenuVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/home"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Home
                    </Navlink>
                  </motion.li>
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/contact"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Contact
                    </Navlink>
                  </motion.li>
                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/about"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      About Us
                    </Navlink>
                  </motion.li>

                  <motion.li variants={smallMenuLinkVariants}>
                    <Navlink
                      route="/all-products"
                      setHideMobileMenu={setHideMobileMenu}
                    >
                      Products
                    </Navlink>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
