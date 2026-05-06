import { Reveal } from "@/components/ui/reveal";
import { terminalLines } from "@/content/terminal";

export function Terminal() {
  return (
    <Reveal className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-border glass-strong shadow-elegant">
        <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">
            ~/portfolio
          </span>
        </div>
        <div className="p-5 sm:p-6 font-mono text-sm space-y-2">
          {terminalLines.map((l, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-gold">{l.prompt}</span>
              <span className={l.prompt === "$" ? "text-foreground" : "text-muted-foreground"}>
                {l.text}
              </span>
            </div>
          ))}
          <div className="flex gap-3">
            <span className="text-gold">$</span>
            <span className="inline-block h-4 w-2 bg-gold animate-pulse" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
