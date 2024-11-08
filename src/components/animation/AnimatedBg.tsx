"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const gradientColors: string[] = [
  "linear-gradient(45deg, #FAF1EB, #E1EAFF)", // Example gradient 1
  "linear-gradient(45deg, #D4DCFC, #F4EBE5)", // Example gradient 2
  "linear-gradient(45deg, #D4DCFC, #F7F1F1)", // Example gradient 3
  "linear-gradient(45deg, #EFF2F8, #FAF2EE)", // Example gradient 4
];

const AnimatedBg = ({ children }: { children: ReactNode }) => {
  const [bgIndex, setBgIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <motion.div
      style={{
        background: gradientColors[bgIndex],
        transition: "background 0.5s ease",
      }}
      animate={{ background: gradientColors[bgIndex] }}
      transition={{ duration: 1, ease: "easeInOut" }} // Optional smoother transition
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBg;
