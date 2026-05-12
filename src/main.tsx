import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import { SITE } from "@/content/site";
import "./styles.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const router = getRouter();

router.subscribe("onResolved", ({ toLocation }) => {
  if (typeof window.gtag !== "function") return;
  const path = toLocation.pathname + toLocation.searchStr;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: SITE.gaMeasurementId,
  });
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
