import { Sparkles, Rocket, Layers, Heart, type LucideIcon } from "lucide-react";

export type Pillar = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const pillars: Pillar[] = [
  {
    icon: Rocket,
    title: "End-to-end delivery",
    text: "From IoT firmware to cloud dashboards — I ship the full stack, not just one slice.",
  },
  {
    icon: Layers,
    title: "Hardware ↔ software",
    text: "Comfortable bridging BLE devices, Raspberry Pi and Django/AWS backends into one product.",
  },
  {
    icon: Sparkles,
    title: "Clean, scalable UI",
    text: "React + Tailwind interfaces that stay fast and maintainable as features grow.",
  },
  {
    icon: Heart,
    title: "Real-world impact",
    text: "From a gym CRM cutting admin work 60% to weather stations across Armenia.",
  },
];

export const aboutParagraphs: string[] = [
  "I'm Arno — a software engineer based in Yerevan, Armenia, working across IoT, full-stack web, and cross-platform mobile. I've spent the last few years turning complex hardware–software integration into seamless, data-driven user experiences.",
  "At ClimateNet (Tumo Labs) I built an IoT platform on AWS IoT Core + Django that securely manages 30+ connected weather stations, plus a React Native app that configures Raspberry Pi devices over BLE. At Dream Body I shipped an end-to-end gym management platform — landing page, web app, and mobile dashboard — that reduced manual admin work by 60%.",
  "I love systems that quietly do the right thing in the background: real-time alerts, sync pipelines, and dashboards people actually use. If it touches a device, an API, or a screen — I'm interested.",
];
