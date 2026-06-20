"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PipiliMotif } from "./PipiliMotif";
import "./Rooms.css";

gsap.registerPlugin(ScrollTrigger);

const ROOMS = [
  {
    motif: "conch" as const,
    title: "Work",
    href: "/work",
    blurb: "Projects I've built — case studies, the messy middle, and what shipped.",
  },
  {
    motif: "lotus" as const,
    title: "Writing",
    href: "/writing",
    blurb: "Essays and notes — read on a warm palm-leaf page, the way long-form should be.",
  },
  {
    motif: "parrot" as const,
    title: "About",
    href: "/about",
    blurb: "Who I am, what I'm working on now, and whether I'm open to work.",
  },
];

export function Rooms() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room", {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".rooms__grid", start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="rooms" ref={root} id="rooms">
      <div className="shell">
        <div className="rooms__grid">
          {ROOMS.map((room) => (
            <a className="room" href={room.href} key={room.title}>
              <PipiliMotif name={room.motif} className="room__motif" />
              <h3 className="room__title">{room.title}</h3>
              <p className="room__blurb">{room.blurb}</p>
              <span className="room__go" aria-hidden="true">
                Enter →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
