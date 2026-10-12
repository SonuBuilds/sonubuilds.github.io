import { skills } from "@/data/portfolio";
import { Reveal } from "../ui/Reveal";

const skillCategoryMeta: Record<string, { dotColor: string; shadowClass: string; cardBorder: string; cardGlow: string; tagBorder: string; tagText: string; tagShadow: string }> = {
  "Frontend": { dotColor: "bg-cyan-400", shadowClass: "shadow-glow-cyan", cardBorder: "border-cyan-500/20", cardGlow: "hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,245,212,0.18)]", tagBorder: "border-cyan-500/25", tagText: "text-zinc-300", tagShadow: "shadow-[0_0_8px_rgba(0,245,212,0.15)]" },
  "Backend": { dotColor: "bg-violet-400", shadowClass: "shadow-glow-violet", cardBorder: "border-violet-500/20", cardGlow: "hover:border-violet-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]", tagBorder: "border-violet-500/30", tagText: "text-violet-200", tagShadow: "shadow-[0_0_8px_rgba(168,85,247,0.15)]" },
  "Databases": { dotColor: "bg-amber-400", shadowClass: "shadow-glow-amber animate-pulse", cardBorder: "border-amber-500/20", cardGlow: "hover:border-amber-400/40 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]", tagBorder: "border-amber-500/30", tagText: "text-amber-200", tagShadow: "shadow-[0_0_8px_rgba(251,191,36,0.15)]" },
  "Game & 3D": { dotColor: "bg-teal-400", shadowClass: "shadow-glow-cyan", cardBorder: "border-teal-500/20", cardGlow: "hover:border-teal-400/40 hover:shadow-[0_0_25px_rgba(0,245,212,0.15)]", tagBorder: "border-teal-500/30", tagText: "text-teal-200", tagShadow: "shadow-[0_0_8px_rgba(0,245,212,0.15)]" },
  "Other Tools": { dotColor: "bg-emerald-400", shadowClass: "shadow-glow-emerald animate-pulse", cardBorder: "border-emerald-500/20", cardGlow: "hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]", tagBorder: "border-emerald-500/30", tagText: "text-emerald-200", tagShadow: "shadow-[0_0_8px_rgba(16,185,129,0.15)]" },
  "Languages": { dotColor: "bg-cyan-400", shadowClass: "shadow-glow-cyan", cardBorder: "border-cyan-500/20", cardGlow: "hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,245,212,0.18)]", tagBorder: "border-cyan-500/25", tagText: "text-zinc-300", tagShadow: "shadow-[0_0_8px_rgba(0,245,212,0.15)]" },
  "Concepts": { dotColor: "bg-indigo-400", shadowClass: "shadow-[0_0_12px_rgba(99,102,241,0.5)]", cardBorder: "border-indigo-500/20", cardGlow: "hover:border-indigo-400/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]", tagBorder: "border-indigo-500/30", tagText: "text-indigo-200", tagShadow: "shadow-[0_0_8px_rgba(99,102,241,0.15)]" },
};

export function Skills() {
  const skillCategories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "Game & 3D", items: skills.gameAnd3d },
    { title: "Languages", items: skills.languages },
    { title: "Other Tools", items: skills.other },
    { title: "Concepts", items: skills.toolsAndConcepts },
  ];

  return (
    <section id="skills" className="py-24 scroll-mt-12">
      <div className="container-x">
        <Reveal>
          <div className="mb-12">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              02 / Technical Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Core Skills &amp; Stack
            </h2>
            <p className="mt-2 text-sm md:text-base text-zinc-400 max-w-xl">
              Technologies and tooling I use daily to turn ambitious designs into production reality.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => {
            const meta = skillCategoryMeta[category.title] || {
              dotColor: "bg-cyan-400",
              shadowClass: "shadow-glow-cyan",
              cardBorder: "border-cyan-500/20",
              cardGlow: "hover:border-cyan-400/40",
              tagBorder: "border-cyan-500/25",
              tagText: "text-zinc-300",
              tagShadow: "",
            };
            return (
              <Reveal key={category.title} delay={i * 0.06} width="100%">
                <div className={`p-5 rounded-2xl hairline-border card-3d-tilt h-full flex flex-col justify-between ${meta.cardBorder} ${meta.cardGlow} transition-all`}>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2.5 h-2.5 rounded-full ${meta.dotColor} ${meta.shadowClass}`} />
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, j) => (
                        <span
                          key={j}
                          className={`tag-neon px-2.5 py-1 rounded-full bg-black/60 border ${meta.tagBorder} ${meta.tagText} ${meta.tagShadow} text-xs font-mono`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
