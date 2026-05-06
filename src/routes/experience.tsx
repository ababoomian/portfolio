import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/content/skills";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Arno Baboomian" },
      {
        name: "description",
        content:
          "Engineering journey: Climatenet Armenia (React Native + BLE), independent freelance work, and self-taught beginnings.",
      },
      { property: "og:title", content: "Experience — Arno Baboomian" },
      {
        property: "og:description",
        content: "A timeline of what I've built and where.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="pt-32 pb-12">
      <section className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              The road <span className="gradient-text">so far</span>.
            </>
          }
          description="Companies, clients and side-quests that shaped how I build."
        />

        <div className="mt-16 relative">
          {/* timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-border to-transparent" />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="relative pl-10">
                  <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-background shadow-glow" />
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold">{e.role}</h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {e.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gold">{e.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
