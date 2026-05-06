import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arno Baboomian" },
      {
        name: "description",
        content:
          "Get in touch about freelance, full-time, or startup collaborations.",
      },
      { property: "og:title", content: "Contact — Arno Baboomian" },
      {
        property: "og:description",
        content: "Let's build something that matters.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mail client as a graceful no-backend fallback
    const body = encodeURIComponent(
      `Hi ${profile.name.split(" ")[0]},\n\n${form.message}\n\n— ${form.name}`,
    );
    const subject = encodeURIComponent(`Hello from ${form.name || "your portfolio"}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-32 pb-12">
      <section className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text">great</span>.
            </>
          }
          description="Tell me about your project, your idea, or just say hi. I read everything."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl glass p-5 hover:border-gold/40 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-semibold group-hover:text-gold transition-colors">
                  {profile.email}
                </div>
              </div>
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass p-5 hover:border-gold/40 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm font-semibold group-hover:text-gold transition-colors">
                  {profile.github_handle}
                </div>
              </div>
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass p-5 hover:border-gold/40 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-semibold group-hover:text-gold transition-colors">
                  {profile.linkedin_name}
                </div>
              </div>
            </a>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass-strong p-6 sm:p-8 space-y-4 shadow-elegant"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1.5 block w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Sent — check your mail app
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 block w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
      />
    </div>
  );
}
