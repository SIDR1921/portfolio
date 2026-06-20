"use client";

import { forwardRef } from "react";

type Props = {
  /** stroke colour of the wheel; defaults to the turmeric accent */
  color?: string;
  className?: string;
};

const CENTER = 100;
const RIM_OUTER = 93;
const RIM_INNER = 80;
const SPOKE_OUTER = 78;
const HUB = 17;

const MAJOR = [0, 45, 90, 135, 180, 225, 270, 315];
const MINOR = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

/** point on a circle of radius r at angle a (degrees, 0 = up) around centre */
function pt(a: number, r: number) {
  const rad = ((a - 90) * Math.PI) / 180;
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)] as const;
}

/**
 * The Konark Sun Temple chariot wheel: 24 wheels adorn the temple, each with
 * 8 major and 8 minor spokes. We render one wheel; the surrounding scene
 * rotates the inner <g> on scroll. Surya is enshrined within the chariot —
 * the wheel is decorative geometry, not a working sundial.
 */
export const KonarkWheel = forwardRef<SVGGElement, Props>(function KonarkWheel(
  { color = "var(--accent)", className },
  ref,
) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Konark Sun Temple chariot wheel"
      style={{ overflow: "visible" }}
    >
      <g ref={ref} style={{ transformOrigin: "center", transformBox: "fill-box" }}>
        {/* tyre band */}
        <circle cx={CENTER} cy={CENTER} r={RIM_OUTER} fill="none" stroke={color} strokeWidth={2.4} />
        <circle cx={CENTER} cy={CENTER} r={RIM_INNER} fill="none" stroke={color} strokeWidth={1.2} />

        {/* beadwork ornaments riding the inner rim, between the major spokes */}
        {MINOR.map((a) => {
          const [x, y] = pt(a, (RIM_OUTER + RIM_INNER) / 2);
          return <circle key={`bead-${a}`} cx={x} cy={y} r={2.6} fill={color} />;
        })}

        {/* 8 major (thick) spokes, each tipped with a small lozenge */}
        {MAJOR.map((a) => {
          const [ox, oy] = pt(a, SPOKE_OUTER);
          const [ix, iy] = pt(a, HUB);
          const [tx, ty] = pt(a, SPOKE_OUTER - 9);
          return (
            <g key={`maj-${a}`}>
              <line x1={ix} y1={iy} x2={ox} y2={oy} stroke={color} strokeWidth={3.1} />
              <circle cx={tx} cy={ty} r={3} fill="none" stroke={color} strokeWidth={1.4} />
            </g>
          );
        })}

        {/* 8 minor (thin) spokes */}
        {MINOR.map((a) => {
          const [ox, oy] = pt(a, SPOKE_OUTER);
          const [ix, iy] = pt(a, HUB);
          return (
            <line
              key={`min-${a}`}
              x1={ix}
              y1={iy}
              x2={ox}
              y2={oy}
              stroke={color}
              strokeWidth={1}
            />
          );
        })}

        {/* axle hub */}
        <circle cx={CENTER} cy={CENTER} r={HUB} fill="none" stroke={color} strokeWidth={2.6} />
        <circle cx={CENTER} cy={CENTER} r={8} fill="none" stroke={color} strokeWidth={1.2} />
        <circle cx={CENTER} cy={CENTER} r={2.4} fill={color} />
      </g>
    </svg>
  );
});
