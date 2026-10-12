import { education } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Education() {
  return (
    <section id="education" className="py-24 scroll-mt-12 border-t border-white/5">
      <div className="container-x">
        <Reveal>
          <div className="mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              05 / Academic Background
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Education &amp; Qualifications
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl hairline-border card-3d-tilt h-full hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white pr-2 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="tag-neon px-2.5 py-1 rounded-full bg-black/60 border border-cyan-500/25 text-xs text-cyan-300 font-mono whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                    {edu.institution}
                  </h4>
                  {edu.location && (
                    <p className="text-xs sm:text-sm text-zinc-400">
                      {edu.location}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
