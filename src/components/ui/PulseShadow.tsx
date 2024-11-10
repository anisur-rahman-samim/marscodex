"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface PulseShadowProps {
  children: ReactNode;
}

const PulseShadow: React.FC<PulseShadowProps> = ({ children }) => {
  return (
    <motion.div
      className="flex items-center justify-center w-10 h-10 bg-[rgb(113,125,192)] rounded-full"
      style={{ boxShadow: "0px 0px 5px 2px rgb(113,125,192)" }}
      initial={{ boxShadow: "0px 0px 0px rgb(212,220,254)" }}
      animate={{
        boxShadow: [
          "0px 0px 5px 2px rgb(113,125,192)", // Initial state
          "0px 0px 6px 3px rgb(113,125,192)", // Initial state
          "0px 0px 7px 4px rgb(113,125,192)", // Initial state
          "0px 0px 8px 5px rgb(113,125,192)", // Initial state
          "0px 0px 9px 6px rgb(113,125,192)", // Initial state
          "0px 0px 10px 7px rgb(113,125,192)", // Initial state
          "0px 0px 12px 8px rgb(113,125,192)", // Expanded shadow
          "0px 0px 13px 9px rgb(113,125,192)", // Expanded shadow
          "0px 0px 14px 10px rgb(113,125,192)", // Expanded shadow
          "0px 0px 15px 11px rgb(113,125,192)", // Expanded shadow
          "0px 0px 14px 10px rgb(113,125,192)", // Expanded shadow
          "0px 0px 13px 9px rgb(113,125,192)", // Expanded shadow
          "0px 0px 12px 8px rgb(113,125,192)", // Expanded shadow
          "0px 0px 11px 7px rgb(113,125,192)", // Expanded shadow
          "0px 0px 10px 6px rgb(113,125,192)", // Expanded shadow
          "0px 0px 9px 5px rgb(113,125,192)", // Expanded shadow
          "0px 0px 8px 4px rgb(113,125,192)", // Expanded shadow
          "0px 0px 7px 3px rgb(113,125,192)", // Expanded shadow
          "0px 0px 6px 2px rgb(113,125,192)", // Expanded shadow
          "0px 0px 5px 1px rgb(113,125,192)", // Expanded shadow
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PulseShadow;
