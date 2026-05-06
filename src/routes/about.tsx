import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { pillars, aboutParagraphs } from "@/content/about";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-12">
      <section className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Hi, I'm {profile.name.split(" ")[0]} — I build{" "}
              <span className="gradient-text">products people use</span>.
            </>
          }
          description={`Based in ${profile.location}. I've spent the last few years shipping full-stack products across web, mobile and AI — usually solo, sometimes with small teams, always end-to-end.`}
        />

        <Reveal className="mt-12 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:border-gold/30 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
