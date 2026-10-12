"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";

const serviceIcons = [
  {
    bg: "bg-cyan-500/15",
    text: "text-cyan-400",
    border: "border-cyan-400/30",
    cardBorder: "border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)]",
    glow: "shadow-[0_0_12px_rgba(0,245,212,0.25)]",
    svg: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    bg: "bg-indigo-500/15",
    text: "text-indigo-400",
    border: "border-indigo-400/30",
    cardBorder: "border-indigo-500/20 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
    glow: "shadow-[0_0_12px_rgba(99,102,241,0.25)]",
    svg: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    bg: "bg-purple-500/15",
    text: "text-purple-400",
    border: "border-purple-400/30",
    cardBorder: "border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    glow: "shadow-[0_0_12px_rgba(168,85,247,0.25)]",
    svg: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    bg: "bg-teal-500/15",
    text: "text-teal-400",
    border: "border-teal-400/30",
    cardBorder: "border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    glow: "shadow-[0_0_12px_rgba(20,184,166,0.25)]",
    svg: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              04 / Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
              What I Deliver
            </h2>
            <p className="mt-4 max-w-lg text-sm sm:text-base leading-6 text-zinc-400">
              Whether you need an MVP built from scratch, cross-platform mobile apps, or enterprise web refactoring, I partner end-to-end to deliver production-ready software.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const iconConfig = serviceIcons[i % serviceIcons.length];
            return (
              <motion.a
                key={s.title}
                href="#contact"
                className={`p-6 rounded-2xl hairline-border card-3d-tilt flex flex-col justify-between group ${iconConfig.cardBorder} transition-all cursor-pointer`}
                title={`Discuss ${s.title}`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${iconConfig.bg} ${iconConfig.text} border ${iconConfig.border} ${iconConfig.glow} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    {iconConfig.svg}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                    0{i + 1} · Service
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {s.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors">
                  <span>Start a project</span>
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
