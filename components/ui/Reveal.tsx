"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal } from "@/lib/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
}

export function Reveal({ children, delay = 0, width = "100%", className, ...props }: RevealProps) {
  return (
    <div style={{ width, position: "relative" }} className={className}>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ ...reveal.show.transition, delay }}
        className="h-full"
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
