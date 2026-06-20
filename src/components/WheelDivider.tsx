"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KonarkWheel } from "./KonarkWheel";
import "./WheelDivider.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * The Konark chariot wheel rolls across the page as this band scrolls through
 * the viewport — translation and rotation are linked so it reads as a wheel
 * actually rolling along the ground line. A recurring transition between
 * sections; the temple has 24 of these wheels.
 */
export function WheelDivider({ label }: { label?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const roller = useRef<HTMLDivElement>(null);
  const spin = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      // roll left → right across the band
      tl.fromTo(
        roller.current,
        { xPercent: -120 },
        { xPercent: 520, ease: "none" },
        0,
      );
      // rotate clockwise in proportion to the travel (rolling physics)
      tl.fromTo(spin.current, { rotation: 0 }, { rotation: 900, ease: "none" }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div className="wheel-divider" ref={root} aria-hidden="true">
      <div className="wheel-divider__track">
        <div className="wheel-divider__roller" ref={roller}>
          <KonarkWheel ref={spin} />
        </div>
      </div>
      <div className="wheel-divider__ground" />
      {label && <span className="wheel-divider__label">{label}</span>}
    </div>
  );
}
