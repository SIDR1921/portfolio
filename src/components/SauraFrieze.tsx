type Props = {
  className?: string;
  color?: string;
};

/**
 * A frieze of Saura (idital) figures — fluid, uniform-weight monoline
 * stick-figures, traditionally white on a red-ochre ground. Saura artists
 * build a piece border-first and fill inward, so the surrounding frame is the
 * first stroke we draw. Every stroke is normalised to pathLength=1 so a single
 * GSAP tween can "draw" the whole scene from frame to centre.
 *
 * Strokes carry the class `saura-stroke`; the parent animates them on scroll.
 */
export function SauraFrieze({ className, color = "var(--conch)" }: Props) {
  return (
    <svg
      viewBox="0 0 480 220"
      className={className}
      role="img"
      aria-label="A frieze of Saura tribal figures dancing in a row"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ── the border, drawn first (Saura "fishnet" construction) ── */}
      <rect
        className="saura-stroke saura-frame"
        x={6}
        y={6}
        width={468}
        height={208}
        pathLength={1}
      />

      {/* ── dancers, arms linked, mid-step ── */}
      {[60, 160, 260, 360].map((x, i) => {
        const flip = i % 2 === 0 ? 1 : -1;
        return (
          <g key={x}>
            {/* head */}
            <circle className="saura-stroke" cx={x} cy={70} r={11} pathLength={1} />
            {/* triangular torso */}
            <path
              className="saura-stroke"
              d={`M${x} 81 L${x - 17} 132 L${x + 17} 132 Z`}
              pathLength={1}
            />
            {/* linked arms reaching to neighbours */}
            <path
              className="saura-stroke"
              d={`M${x - 11} 98 L${x - 48} ${78 + flip * 6} M${x + 11} 98 L${x + 48} ${78 - flip * 6}`}
              pathLength={1}
            />
            {/* legs mid-stride */}
            <path
              className="saura-stroke"
              d={`M${x - 7} 132 L${x - 20} 176 M${x + 7} 132 L${x + 22} 174`}
              pathLength={1}
            />
          </g>
        );
      })}

      {/* ── the ground line + a small tree, filling toward the centre last ── */}
      <path className="saura-stroke" d="M24 188 H456" pathLength={1} />
      <path
        className="saura-stroke"
        d="M240 188 V150 M240 162 L226 150 M240 162 L254 150 M240 172 L230 164 M240 172 L250 164"
        pathLength={1}
      />
    </svg>
  );
}
