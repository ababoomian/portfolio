import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Arno Baboomian" },
      {
        name: "description",
        content:
          "Selected projects: fitness CRM, AI healthcare platform, café management system, BLE weather app, wedding SaaS.",
      },
      { property: "og:title", content: "Projects — Arno Baboomian" },
      {
        property: "og:description",
        content: "End-to-end products across web, mobile and AI.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-32 pb-12">
      <section className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I've <span className="gradient-text">shipped</span>.
            </>
          }
          description="A look at recent work — what the problem was, what I built, and what changed because of it."
        />
        <div className="mt-12 grid gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
