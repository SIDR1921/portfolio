"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KonarkWheel } from "./KonarkWheel";
import { SauraFrieze } from "./SauraFrieze";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const wheel = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // headline lines rise into place on load
      gsap.from(".hero__line", {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });

      // the quote fades up just after the name
      gsap.from(".hero__quote", {
        opacity: 0,
        y: 18,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
      });

      // Saura frieze draws itself in, frame first then figures
      gsap.set(".saura-stroke", { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.to(".saura-stroke", {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "power1.inOut",
        stagger: 0.04,
        delay: 0.5,
      });

      // the Konark wheel turns as the hero scrolls past
      if (wheel.current) {
        gsap.to(wheel.current, {
          rotation: 220,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={root}>
      <div className="hero__wheel" aria-hidden="true">
        <KonarkWheel ref={wheel} />
      </div>

      <div className="shell hero__inner">
        <h1 className="hero__title">
          <span className="hero__line-wrap">
            <span className="hero__line">Siddharth Ray.</span>
          </span>
        </h1>

        <p className="hero__quote">
          “Simplicity is the ultimate{" "}
          <em className="hero__quote-accent">sophistication</em>.”
        </p>

        <div className="hero__frieze" aria-hidden="true">
          <SauraFrieze />
        </div>
      </div>
    </header>
  );
}
