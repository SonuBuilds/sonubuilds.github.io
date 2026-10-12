import { experience } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-12">
      <div className="container-x">
        <Reveal>
          <div className="mb-14">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              03 / Proven Track Record
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-6 md:pl-8 space-y-10 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-zinc-800">
          {experience.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline Neon Node from Ref/index.html */}
              <span className={`absolute -left-[20px] md:-left-[28px] top-1.5 w-3 h-3 rounded-full ring-4 ring-black transition-all ${
                i === 0 
                  ? "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" 
                  : "bg-zinc-600 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.6)]"
              }`} />
              
              <Reveal delay={i * 0.08}>
                <div className="p-6 rounded-2xl hairline-border card-3d-tilt">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wide">
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">
                      {exp.company}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {exp.role}
                  </h3>
                  
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex gap-2.5">
                        <span className="text-cyan-400 opacity-70 mt-0.5">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags.map((tech) => (
                      <span key={tech} className="tag-neon px-2.5 py-1 rounded-full bg-black/60 border border-cyan-500/20 text-[11px] text-zinc-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
