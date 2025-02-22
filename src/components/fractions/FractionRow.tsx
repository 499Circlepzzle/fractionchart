
import { motion } from "framer-motion";
import React from "react";

interface FractionRowProps {
  baseWidth: string;
  baseHeight: string;
  delay: number;
  children: React.ReactNode;
}

export const FractionRow = ({ baseWidth, baseHeight, delay, children }: FractionRowProps) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className="relative w-full flex justify-center"
    >
      <div
        style={{
          width: baseWidth,
          height: baseHeight,
        }}
        className="flex border-2 border-black rounded-sm shadow-md overflow-hidden"
      >
        {children}
      </div>
    </motion.div>
  );
};
