import { Reveal } from "../ui/Reveal";

const processData = [
  { title: "Discovery & Planning", description: "Understanding requirements, defining architecture, and establishing the technical roadmap for the product." },
  { title: "Design & Prototyping", description: "Crafting intuitive UX/UI flows and establishing the design system for consistent visual language." },
  { title: "Development & Engineering", description: "Building scalable frontends and robust backends with modern frameworks and best practices." },
  { title: "Testing & Deployment", description: "Rigorous QA, performance optimization, and seamless CI/CD production deployment." }
];

export function Process() {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              06 / Engineering Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
              How I Deliver
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
              A structured methodology to guarantee architectural quality, speed, and transparency.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processData.map((step, i) => (
            <Reveal key={i} delay={i * 0.08} width="100%">
              <div className="p-6 md:p-8 rounded-2xl hairline-border card-3d-tilt h-full flex flex-col justify-between hover:border-cyan-500/40 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-cyan-500/25 text-[11px] font-mono text-cyan-300 mb-4">
                    Phase 0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
