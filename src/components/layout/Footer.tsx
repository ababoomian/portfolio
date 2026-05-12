import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} — Crafted with care, shipped with TypeScript.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-full text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          {/* <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-full text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors">
            <Twitter className="h-4 w-4" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
