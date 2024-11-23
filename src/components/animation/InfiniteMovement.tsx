"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { del } from "framer-motion/client";

type TProsType = {
  children: ReactNode;
  duration: number;
  className?: string;
  x?: string;
  y?: string;
};

const InfiniteMovement = ({
  children,
  duration,
  className,
  x,
  y,
}: TProsType) => {
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{ y: y, x: x }}
      transition={{
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          repeat: Infinity,
          repeatType: "reverse",
          duration: duration,
          delay: 0.3,
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
export default InfiniteMovement;
