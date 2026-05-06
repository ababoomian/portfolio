export type TerminalLine = { prompt: "$" | ">"; text: string };

export const terminalLines: TerminalLine[] = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "builder · problem-solver · type-safety enthusiast" },
  { prompt: "$", text: "cat ./mindset.txt" },
  { prompt: ">", text: "ship small. iterate fast. measure impact." },
  { prompt: "$", text: "ls ./currently-building" },
  { prompt: ">", text: "ai-tools/  mobile-iot/  saas-ideas/" },
];
