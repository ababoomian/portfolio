import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 shadow-elegant"
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          project.accent,
        )}
      />

      <div className="relative grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
        {/* Image */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-black/20 aspect-[16/10] lg:aspect-auto lg:h-full">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              width={1280}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-gold">
                {project.category}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Problem</p>
              <p className="mt-1 text-foreground/90">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Solution</p>
              <p className="mt-1 text-foreground/90">{project.solution}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Impact</p>
              <p className="mt-1 text-gold">{project.impact}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
            {project.features.map((f) => (
              <span key={f} className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsPreview({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6">
      {projects.slice(0, 3).map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
      <div className="flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80"
        >
          See all projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
