import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/content/skills";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="pt-32 pb-12">
      <section className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="gradient-text">tools</span> I reach for.
            </>
          }
          description="A pragmatic stack chosen for shipping fast and scaling cleanly."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-gold/30 transition-colors">
                <h3 className="text-sm font-semibold text-gold uppercase tracking-wider">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs hover:border-gold/40 hover:text-foreground transition-colors"
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
    </div>
  );
}
