"use client";

import * as React from "react";
import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "./SmoothScroll";
import { ScrollProgress } from "./ScrollProgress";
import Navbar from "../Navbar";
import { CustomCursor } from "../cursor/CustomCursor";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <CustomCursor />
        <ScrollProgress />
        
        {/* Background Layer: fixed behind all content */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Ambient Holographic Floating Glow Orbs with Obsidian Void theme */}
          <div className="absolute top-1/4 -left-20 w-[24rem] h-[24rem] rounded-full bg-cyan-400/20 blur-[100px] orb-1" />
          <div className="absolute top-2/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-600/20 blur-[110px] orb-2" />
          <div className="absolute top-1/2 left-1/3 w-[22rem] h-[22rem] rounded-full bg-emerald-500/15 blur-[90px] orb-3" />
          {/* Cybernetic scanlines overlay */}
          <div className="absolute inset-0 cyber-scanlines opacity-40" />
          {/* Background Grid Texture with holographic animated pulse */}
          <div className="absolute inset-0 grid-lines" />
          {/* Hero radial gradient */}
          <div className="absolute inset-0 bg-radial-hero" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          {children}
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}
