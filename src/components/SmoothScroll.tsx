"use client";

import { useSmoothScroll } from "@/lib/useSmoothScroll";

/** Client wrapper that boots Lenis smooth scrolling for the whole app. */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}
