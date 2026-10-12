import { type Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { ArrowLink } from "../ui/ArrowLink";

export function ProjectChapter({ project }: { project: Project }) {
  return (
    <a href={`/work/${project.slug}`} className="group block relative py-8 md:py-12" data-cursor="VIEW">
      <div className="container-x">
        <div className="card-3d-tilt hairline-border p-6 md:p-10 rounded-3xl border-white/10 hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr] gap-8 md:gap-12 items-center">
            
            <div className="flex flex-col items-start">
              {/* Top Row: Category + Status Badge from Ref/index.html */}
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  {project.number} · {project.category.split(" ")[0]}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-400/40 flex items-center gap-1 shadow-[0_0_12px_rgba(16,185,129,0.35)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Production
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs md:text-sm text-zinc-400 mb-4 leading-relaxed">
                {project.resumeDesc || project.description}
              </p>
              
              {/* High Impact Callout from Ref/index.html */}
              <div className="w-full px-3 py-2 rounded-xl bg-black/60 border border-cyan-500/25 text-xs text-zinc-300 flex items-center gap-2 mb-4 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="truncate">{project.result}</span>
              </div>

              {/* Stack Tags with tag-neon from Ref/index.html */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.slice(0, 5).map(tech => (
                  <span key={tech} className="tag-neon px-2 py-0.5 rounded-full bg-zinc-800/80 border border-cyan-500/25 text-[10px] text-zinc-300 font-mono">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="tag-neon px-2 py-0.5 rounded-full bg-zinc-800/80 border border-cyan-500/20 text-[10px] text-zinc-400 font-mono">
                    +{project.stack.length - 5}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-6">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Explore Technical Architecture
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                
                {project.url && (
                  <object className="relative z-20">
                    <ArrowLink href={project.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-300 text-xs">
                      Visit live
                    </ArrowLink>
                  </object>
                )}
              </div>
            </div>

            {/* Right Column: Visual Preview with isolated slow hover scroll */}
            <div className="w-full">
              <ProjectVisual project={project} />
            </div>

          </div>
        </div>
      </div>
    </a>
  );
}
