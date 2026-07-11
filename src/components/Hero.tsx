"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // headline lines mask-reveal upward
        gsap.set(".hero__line", { yPercent: 118 });
        gsap.to(".hero__line", {
          yPercent: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        });
        // eyebrow + quote fade up
        gsap.from(".hero__eyebrow", {
          opacity: 0,
          y: 14,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.35,
        });
        gsap.from(".hero__quote", {
          opacity: 0,
          y: 18,
          duration: 1,
          ease: "power2.out",
          delay: 0.7,
        });
        gsap.from(".hero__frieze", {
          opacity: 0,
          y: 20,
          duration: 1.1,
          ease: "power2.out",
          delay: 0.9,
        });

        // wheel photo + line halo rotate on scroll
        if (photo.current) {
          gsap.to(photo.current, {
            rotation: 60,
            ease: "none",
            transformOrigin: "center",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
        if (halo.current) {
          gsap.to(halo.current, {
            rotation: -80,
            ease: "none",
            transformOrigin: "center",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <header id="top" className="hero" ref={root}>
      <div className="hero__ember" aria-hidden="true" />

      <div className="hero__wheel" ref={photo} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/konark-wheel.jpg" alt="" className="hero__wheel-img" />
        <div className="hero__wheel-glow" />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/konark-wheel-line.svg"
        alt=""
        aria-hidden="true"
        className="hero__halo"
        ref={halo}
      />

      <div className="hero__fade" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-rule" />
          AI &amp; machine learning engineer
        </p>

        <h1 className="hero__title">
          <span className="hero__line-wrap">
            <span className="hero__line">Siddharth</span>
          </span>
          <span className="hero__line-wrap">
            <span className="hero__line">
              Ray<span className="hero__dot">.</span>
            </span>
          </span>
        </h1>

        <p className="hero__quote">
          Simplicity is the ultimate{" "}
          <em className="hero__quote-accent">sophistication</em>.
        </p>

        <div className="hero__frieze" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/warli-frieze.png"
            alt="Warli-style dancing figures over a triangular border"
          />
        </div>
      </div>

      <div className="hero__cue" aria-hidden="true">
        Scroll
        <span className="hero__cue-line" />
      </div>
    </header>
  );
}
