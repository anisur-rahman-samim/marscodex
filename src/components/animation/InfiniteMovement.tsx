"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  x = "10%",
  y = "10%",
}: TProsType) => {
  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{ y: y, x: x }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: duration,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default InfiniteMovement;
