"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import Link from "next/link";

import { SplitText } from "../ui/SplitText";
import { Reveal } from "../ui/Reveal";
import { HeroProfile } from "./HeroProfile";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] pt-24 pb-16 flex items-center">
      <div className="container-x relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col max-w-3xl">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hairline-border mb-6 animate-float border-cyan-400/40 shadow-[0_0_20px_rgba(0,245,212,0.22)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-200 font-mono">
                  Full-Stack · React · React Native · AI
                </span>
              </div>
            </Reveal>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.2rem] font-semibold leading-[1.08] tracking-tight text-foreground-primary mb-6 max-w-[850px] [text-wrap:balance] lg:[text-wrap:auto]">
              <SplitText text="I build digital" delayOffset={3} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <SplitText text="products that feel" delayOffset={4} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <SplitText text="as good as they" delayOffset={5} />
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-fuchsia-400 bg-clip-text text-transparent italic font-serif shimmer-text-glow animate-pulse pr-2">
                <SplitText text="perform." delayOffset={6} />
              </span>
            </h1>

            <Reveal delay={0.65}>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[460px] mb-6 font-normal [text-wrap:balance]">
                {profile.subline}
              </p>
            </Reveal>

            {/* Key Metrics Ribbon with Glowing Gradient Borders from Stitch Obsidian Void */}
            <Reveal delay={0.7}>
              <div className="w-full max-w-lg grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-zinc-900/70 hairline-border mb-8 border-white/10 shadow-glass backdrop-blur-xl">
                <div className="text-center p-2.5 rounded-xl bg-gradient-to-b from-cyan-500/15 via-cyan-950/20 to-transparent border border-cyan-400/35 shadow-[0_0_20px_rgba(0,245,212,0.22)] backdrop-blur-md">
                  <div className="text-base font-bold text-white tracking-tight drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]">5+ Yrs</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Experience</div>
                </div>
                <div className="text-center p-2.5 rounded-xl bg-gradient-to-b from-teal-500/15 via-teal-950/20 to-transparent border border-teal-400/35 shadow-[0_0_20px_rgba(6,182,212,0.24)] backdrop-blur-md">
                  <div className="text-base font-bold text-cyan-300 tracking-tight drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]">30%</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Load Speed ↑</div>
                </div>
                <div className="text-center p-2.5 rounded-xl bg-gradient-to-b from-purple-500/15 via-purple-950/20 to-transparent border border-purple-400/35 shadow-[0_0_20px_rgba(168,85,247,0.24)] backdrop-blur-md">
                  <div className="text-base font-bold text-violet-300 tracking-tight drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]">10k+</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Schools</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.75}>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/#work" className="block">
                  <button className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 hover:from-white hover:to-cyan-300 text-zinc-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_0_28px_rgba(0,245,212,0.4)] active:scale-95 transition-all shimmer-action flex items-center gap-2 cursor-pointer">
                    <span>View Selected Work</span>
                    <span className="text-xs">↓</span>
                  </button>
                </Link>
                <Link href="/#contact" className="block">
                  <button className="py-3.5 px-6 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/70 hover:border-cyan-400/60 font-semibold text-xs sm:text-sm active:scale-95 transition-all shadow-glass hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] flex items-center gap-2 cursor-pointer">
                    <span>Let&apos;s Connect</span>
                    <ArrowUpRight size={15} />
                  </button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.85}>
              <div className="mt-14 flex flex-wrap gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-bold text-foreground-muted/60 uppercase tracking-[0.25em] items-center">
                <span className="hover:text-foreground-muted transition-colors cursor-default">React Native</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">React</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">Next.js</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">Node.js</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">TypeScript</span>
                <span>·</span>
                <span className="hover:text-foreground-muted transition-colors cursor-default">AI</span>
              </div>
            </Reveal>
          </div>

          <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            <HeroProfile />
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hidden md:flex">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground-muted text-center">
          Scroll to explore
        </span>
        <ArrowDown size={12} className="text-foreground-muted" />
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground-muted/50 to-transparent" />
      </div>
    </section>
  );
}
