"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WheelDivider.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * The Konark chariot wheel rolls across the band as it scrolls through the
 * viewport — translation and rotation linked for real rolling physics.
 */
export function WheelDivider() {
  const root = useRef<HTMLDivElement>(null);
  const roller = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        tl.fromTo(roller.current, { xPercent: -140 }, { xPercent: 560, ease: "none" }, 0);
        tl.fromTo(
          roller.current,
          { rotation: 0 },
          { rotation: 900, ease: "none", transformOrigin: "center" },
          0,
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="wheel-divider" ref={root} aria-hidden="true">
      <div className="wheel-divider__track">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="wheel-divider__roller"
          ref={roller}
          src="/konark-wheel-line.svg"
          alt=""
        />
      </div>
      <div className="wheel-divider__ground" />
      <span className="wheel-divider__label">Konark · the sun&rsquo;s chariot</span>
    </div>
  );
}
