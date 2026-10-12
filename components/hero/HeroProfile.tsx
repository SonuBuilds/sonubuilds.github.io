"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export function HeroProfile() {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers (different translation depths)
  // glow: small movement
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  
  // portrait: medium movement
  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  
  // deco: slightly larger movement
  const decoX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const decoY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -0.5 to 0.5
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    
    // Only enable parallax if user doesn't prefer reduced motion and is on desktop
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion && window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[380px] md:h-[480px] lg:h-[600px] flex items-center justify-center group mx-auto lg:mx-0 lg:ml-auto">
      
      {/* 1. Subtle Ambient Glow (Back layer) */}
      <motion.div 
        style={isClient ? { x: glowX, y: glowY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary/10 dark:bg-accent-primary/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none transition-all duration-1000 group-hover:bg-accent-primary/20 group-hover:blur-[120px]"
      />

      {/* 2. Soft Atmospheric Light */}
      <motion.div 
        style={isClient ? { x: glowX, y: glowY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute w-[50%] h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground-primary/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none mix-blend-screen"
      />

      {/* 3. Decorative Technical Elements */}
      <motion.div
        style={isClient ? { x: decoX, y: decoY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {/* Subtle framing brackets */}
        <div className="absolute top-[10%] left-[5%] w-3 h-3 border-t border-l border-foreground-muted/30 opacity-50" />
        <div className="absolute bottom-[10%] right-[5%] w-3 h-3 border-b border-r border-foreground-muted/30 opacity-50" />
        
        {/* Tiny metadata */}
        <div className="absolute top-[15%] right-[8%] text-[8px] font-mono text-foreground-muted/40 tracking-[0.3em] uppercase rotate-90 origin-right">
          SYS.RDY // 2026
        </div>
        
        {/* Subtle orbit/dot */}
        <div className="absolute top-[45%] left-[8%] flex items-center justify-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-foreground-muted/20 to-transparent absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,245,212,0.5)]" />
        </div>

        {/* Minimal geometric lines */}
        <div className="absolute bottom-[20%] left-[10%] w-8 h-[1px] bg-foreground-muted/20" />
      </motion.div>

      {/* 4. Portrait Layer */}
      <motion.div
        style={isClient ? { x: portraitX, y: portraitY } : {}}
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.4, 
          ease: [0.16, 1, 0.3, 1], // Premium easing
          delay: 0.2 
        }}
        className="relative z-10 w-full max-w-[280px] md:max-w-[400px] lg:max-w-[480px] h-full flex items-end justify-center pointer-events-none"
      >
        <div className="relative w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]">
          <img 
            src="/sonu-profile.webp"
            alt={profile.name}
            className="w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 25px rgba(0,245,212,0.25))",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            }}
          />
        </div>
      </motion.div>

      {/* Cyber HUD Overlays from Ref/stitch_sonu_kumar_portfolio_modernization */}
      <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,245,212,0.35)] pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,245,212,0.9)] animate-pulse" />
        <span>3D ECOSYSTEM ACTIVE</span>
      </div>

      <div className="absolute bottom-2 right-2 z-20 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-violet-500/40 text-[9px] font-mono text-violet-300 shadow-[0_0_12px_rgba(168,85,247,0.3)] pointer-events-none">
        <span>WebGL 2.0 · 60FPS · Lerp Physics</span>
      </div>

    </div>
  );
}
