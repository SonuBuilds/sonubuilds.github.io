"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { type Project } from "@/data/portfolio";
import { SmartImage } from "../ui/SmartImage";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

export function ProjectVisual({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const clipInset = useTransform(scrollYProgress, [0, 0.4], ["10%", "0%"]);

  const hasPlaceholder = project.slug === "radheadda" || project.slug === "smartclass";

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] bg-background-secondary border border-border-subtle group-hover:border-cyan-500/30 transition-all"
      style={{
        scale,
        clipPath: useTransform(clipInset, (v) => `inset(${v} round 2rem)`)
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr opacity-20 transition-opacity duration-500 group-hover:opacity-40 pointer-events-none" style={{ backgroundImage: `linear-gradient(to top right, var(--tw-gradient-stops))` }} />
      
      {hasPlaceholder ? (
        <div className="absolute inset-4 md:inset-8 lg:inset-12">
          <ProjectPlaceholder slug={project.slug} />
        </div>
      ) : (
        <div className="group/preview absolute inset-0 md:inset-8 lg:inset-12 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-cyan-400/40 transition-colors pointer-events-auto cursor-pointer">
          {project.images?.desktop && (
            <SmartImage 
              src={project.images.desktop}
              alt={project.title}
              fill
              className="object-cover object-top transition-[object-position] duration-1000 ease-out group-hover/preview:duration-[14000ms] group-hover/preview:ease-linear group-hover/preview:object-bottom"
              sizes="(max-width: 1200px) 90vw, 1000px"
            />
          )}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono text-cyan-300 opacity-0 group-hover/preview:opacity-100 transition-opacity pointer-events-none flex items-center gap-1 shadow-lg">
            <span>Scroll Preview</span>
            <span className="text-xs">↓</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
