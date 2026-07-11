import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives Lenis smooth scrolling and keeps GSAP's ScrollTrigger in sync with it.
 * Disabled when the user prefers reduced motion — native scroll takes over.
 * Also wires same-page #anchor links to Lenis and resets scroll on navigation.
 */
export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { lenis?: Lenis }).lenis = lenis;
    }

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // same-page anchor links → smooth-scroll with a small offset for the fixed nav
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || url.hash.length < 2) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target as HTMLElement, { offset: -40 });
      } else {
        (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // reset scroll to the top on client-side navigation (Lenis hijacks the
  // scroller, so Next's default restoration doesn't land at the top). Skip when
  // navigating to an in-page anchor.
  useEffect(() => {
    if (window.location.hash) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  }, [pathname]);
}
