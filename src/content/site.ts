// Central SEO config. Update SITE.url to your production domain before deploy.
// Used by index.html (statically) and the <Seo> component (per-route).
export const SITE = {
  // TODO(prod): replace with your custom domain, e.g. "https://arnobaboomian.com"
  url: "https://arnobaboomian.me",
  name: "Arno Baboomian",
  defaultTitle: "Arno Baboomian — Full-Stack Developer in Armenia",
  description:
    "Arno Baboomian is a full-stack software engineer in Yerevan, Armenia. I build React, React Native, Django, IoT and AI products for startups worldwide. Available for hire.",
  locale: "en_US",
  ogImage: "/og-image.png",
  // twitterCard: "summary_large_image" as const,
  keywords: [
    "Arno Baboomian",
    "developer in Armenia",
    "software engineer in Armenia",
    "full-stack developer Yerevan",
    "React developer Armenia",
    "React Native developer Armenia",
    "freelance developer Armenia",
    "IoT developer Armenia",
    "BLE developer",
    "Django developer Yerevan",
    "AI developer Yerevan",
    "hire developer Armenia",
  ],
  // Update with your real profile URLs — these power JSON-LD sameAs (very important for name SEO).
  socials: {
    github: "https://github.com/baboomian",
    linkedin: "https://www.linkedin.com/in/arno-baboomian",
    // twitter: "",
  },
  gaMeasurementId: "G-SN8FQ870HZ",
} as const;
