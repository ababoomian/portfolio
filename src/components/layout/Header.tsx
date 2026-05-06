import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { navLinks as links } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong shadow-elegant" : "bg-transparent",
        )}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground bg-white/5" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              activeOptions={{ exact: true }}
              className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:text-foreground hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full hover:bg-white/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto mt-2 max-w-6xl glass-strong rounded-2xl p-3 animate-fade-in">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-foreground bg-white/5" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: true }}
                className="px-4 py-3 rounded-xl text-sm font-medium hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
