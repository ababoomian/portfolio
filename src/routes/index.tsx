import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectsPreview } from "@/components/sections/ProjectCard";
import { Terminal } from "@/components/sections/Terminal";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arno Baboomian — Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Full-stack engineer crafting scalable web, mobile and AI products with React, TypeScript, React Native and Django.",
      },
      { property: "og:title", content: "Arno Baboomian — Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Full-stack engineer building scalable products end-to-end.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* About snippet + terminal */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                A builder who likes <span className="gradient-text">shipping</span>,
                not just coding.
              </>
            }
            description="I focus on real-world problems — from gym owners drowning in paperwork to hospital networks needing AI-powered insights. I care about clean architecture, fast iteration, and products that people actually use."
          />
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80"
            >
              More about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Terminal />
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Products I've <span className="gradient-text">designed & shipped</span>.
            </>
          }
          description="A handful of things I've built end-to-end — from idea, to architecture, to the last commit before launch."
          className="mb-12"
        />
        <ProjectsPreview projects={projects} />
      </section>

      {/* Skills snippet */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              The <span className="gradient-text">stack</span> I trust.
            </>
          }
          description="Pragmatic choices for full-stack, mobile and AI work."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="text-sm font-semibold text-gold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border glass-strong p-10 sm:p-16 text-center shadow-elegant">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-[var(--gradient-radial)] blur-3xl" />
            <h3 className="relative text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
              Have an idea worth <span className="gradient-text">building</span>?
            </h3>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
              I'm currently open for freelance, full-time and startup collaborations.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                See projects
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
