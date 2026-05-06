import fitnessCrmImg from "@/assets/projects/fitness-crm.jpg";
import aiHealthcareImg from "@/assets/projects/ai-healthcare.jpg";
import cafeManagementImg from "@/assets/projects/cafe-management.jpg";
import bleWeatherImg from "@/assets/projects/ble-weather.jpg";
import weddingSaasImg from "@/assets/projects/wedding-saas.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  stack: string[];
  github?: string;
  live?: string;
  accent: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "ai-healthcare",
    title: "Healthcare Intelligence",
    category: "AI · Data Platform",
    problem:
      "Hospital networks had siloed clinical data with no unified intelligence layer for decision-making.",
    solution:
      "Designed an AI pipeline on Databricks that ingests EHR data and surfaces patient risk insights.",
    impact: "Powering decisions across 10k+ patient records with sub-second queries.",
    features: ["Databricks pipelines", "LLM-driven insights", "HIPAA-aware design", "Custom dashboards"],
    stack: ["Databricks", "Python", "React", "FastAPI", "OpenAI"],
    accent: "from-cyan-400/20 to-sky-500/10",
    image: aiHealthcareImg,
    imageAlt: "Neural network visualisation for healthcare intelligence platform",
  },
  {
    slug: "climatenet-iot",
    title: "ClimateNet IoT Platform",
    category: "IoT · Cloud",
    problem:
      "ClimateNet needed a way to securely manage and monitor a growing fleet of outdoor weather stations across Armenia.",
    solution:
      "Built an IoT platform on AWS IoT Core + Django that ingests sensor telemetry, manages device state, and pushes real-time alerts.",
    impact: "Securely managing 30+ connected weather stations with automated data pipelines and faster incident response.",
    features: [
      "AWS IoT Core device management",
      "Real-time alerting",
      "Django admin & APIs",
      "Automated data pipelines",
    ],
    stack: ["AWS IoT Core", "Django", "Python", "React", "Docker"],
    accent: "from-cyan-400/20 to-sky-500/10",
    image: bleWeatherImg,
    imageAlt: "IoT dashboard monitoring connected weather stations",
  },
  {
    slug: "ble-device-configurator",
    title: "BLE Device Configurator",
    category: "Mobile · IoT",
    problem:
      "Field technicians needed an easy way to configure Raspberry Pi-based weather devices without a laptop.",
    solution:
      "Built a React Native app that pairs with devices over Bluetooth Low Energy to push Wi-Fi credentials, sensor configs, and live diagnostics.",
    impact: "Cut device provisioning time in the field from minutes to seconds.",
    features: ["BLE pairing", "Wi-Fi onboarding", "Live diagnostics", "Offline-friendly UX"],
    stack: ["React Native", "Expo", "react-native-ble-plx", "TypeScript"],
    accent: "from-emerald-400/20 to-cyan-500/10",
    image: bleWeatherImg,
    imageAlt: "React Native app pairing with a Raspberry Pi device over BLE",
  },
  {
    slug: "dream-body-platform",
    title: "Dream Body — Gym Management",
    category: "SaaS · Web & Mobile",
    problem:
      "A growing gym was running registrations, subscriptions, and reminders manually across spreadsheets and chats.",
    solution:
      "Designed and shipped a full gym management platform: online sign-up, subscription tracking, automated reminders, plus a mobile dashboard for trainers and clients.",
    impact: "Reduced manual administrative work by 60% and improved client sign-up conversion.",
    features: [
      "Online registration",
      "Subscription tracking",
      "Automated reminders",
      "Trainer & client mobile dashboard",
    ],
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "Tailwind"],
    accent: "from-emerald-400/20 to-teal-500/10",
    image: fitnessCrmImg,
    imageAlt: "Dream Body gym management dashboard",
  },
  {
    slug: "dream-body-landing",
    title: "Dream Body — Landing Page",
    category: "Web · Marketing",
    problem:
      "The gym needed a public face that converted visitors into members and ranked well in local search.",
    solution:
      "Built a fast, responsive landing page with strong on-page SEO and a clear sign-up funnel.",
    impact: "Increased client sign-ups and improved SEO performance.",
    features: ["Responsive design", "On-page SEO", "Conversion-focused funnel", "Fast load times"],
    stack: ["React", "Tailwind", "Vite"],
    accent: "from-purple-400/20 to-fuchsia-500/10",
    image: weddingSaasImg,
    imageAlt: "Responsive landing page for a fitness brand",
  },
  {
    slug: "kelevate-medtech",
    title: "Kelevate Medical Tech Site",
    category: "Web · WordPress",
    problem:
      "A US-based medical technology company needed a secure, high-performance marketing site with booking and CMS features.",
    solution:
      "Developed and maintained a WordPress site with CAPTCHA, booking flows, optimized assets and SEO improvements.",
    impact: "Improved load times and search visibility while shipping milestones in an agile team.",
    features: ["Secure forms with CAPTCHA", "Booking integration", "CMS workflows", "SEO & speed optimization"],
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
    accent: "from-cyan-400/20 to-blue-500/10",
    image: cafeManagementImg,
    imageAlt: "Medical technology company marketing website",
  },
];
