"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates every [data-reveal] element into view (y + fade) as it scrolls up.
 * Rendered once per page; skipped entirely under prefers-reduced-motion so the
 * elements resolve to their natural visible state.
 */
export function ScrollReveals() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 42,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          });
        });
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return null;
}
