import { projects } from "@/data/portfolio";
import { ProjectChapter } from "./ProjectChapter";

export function FeaturedWork() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <section id="work" className="py-24 scroll-mt-12">
      <div className="container-x mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              01 / Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <span className="text-xs text-zinc-400 font-mono">
            {projects.length} Curated Cases
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {featured.map(p => (
            <a 
              key={p.slug} 
              href={`#${p.slug}`} 
              className="tag-neon p-3 rounded-xl bg-zinc-900/60 hairline-border flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-cyan-300 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-semibold">{p.number}</span>
                <span className="font-sans font-medium text-white">{p.title}</span>
              </div>
              <span className="text-[10px] text-zinc-500 uppercase">{p.tags[0]}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {featured.map((project) => (
          <div key={project.slug} id={project.slug} className="scroll-mt-24">
            <ProjectChapter project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
