"use client";

import { profile } from "@/data/portfolio";
import { HeroProfile } from "../hero/HeroProfile";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-12">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <Reveal>
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black hairline-border card-3d-tilt border-cyan-400/30 shadow-[0_0_30px_rgba(0,245,212,0.12)]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  About Sonu
                </span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6">
                  Engineering with Precision
                </h2>
                
                <div className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed mb-8">
                  <p>
                    I&apos;m a Full-Stack Product Engineer with a specialized focus on building highly interactive, scalable, and premium web &amp; mobile applications. I bridge the gap between design and engineering, ensuring architectural integrity meets pixel-perfect execution.
                  </p>
                  <p>
                    Over the years, I&apos;ve had the privilege of architecting complex ecosystems: e-commerce storefronts, high-frequency trading portals, and enterprise-grade backends. When not coding, I explore modern AI models and frontend performance benchmarks.
                  </p>
                </div>

                {/* Education Credentials Ribbon from Ref/index.html */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-white">B.Tech in Information Technology</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold">College of Eng. Ajmer</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="/resume" className="block">
                    <button className="py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:from-white hover:to-cyan-200 text-zinc-950 font-bold text-xs tracking-wide shadow-[0_0_28px_rgba(0,245,212,0.4)] active:scale-95 transition-all shimmer-action cursor-pointer">
                      View Full Resume
                    </button>
                  </a>
                  <a href={`https://linkedin.com/in/${profile.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="py-3 px-5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,245,212,0.2)] text-xs font-semibold active:scale-95 transition-all cursor-pointer">
                      LinkedIn Profile ↗
                    </button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <HeroProfile />
          </div>

        </div>
      </div>
    </section>
  );
}
