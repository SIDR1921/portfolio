type MotifName = "lotus" | "peacock" | "parrot" | "conch";

type Props = {
  name: MotifName;
  className?: string;
  color?: string;
};

/**
 * Pipili appliqué motifs — a traditional flora/fauna vocabulary (lotus/Padma,
 * peacock/Mayur, parrot/Sua, conch/Sankha). Rendered as bold flat-shape
 * silhouettes the way appliqué cut-outs read, used here as section markers.
 */
const PATHS: Record<MotifName, string> = {
  // lotus — stacked petals
  lotus:
    "M24 40 C16 30 16 20 24 8 C32 20 32 30 24 40 Z M24 40 C12 36 6 28 6 16 C16 20 22 28 24 40 Z M24 40 C36 36 42 28 42 16 C32 20 26 28 24 40 Z",
  // peacock — body, neck, crested head, fanned tail hint
  peacock:
    "M14 42 C10 30 14 20 24 18 C22 12 26 6 32 8 C30 12 32 14 34 16 C42 18 44 28 40 36 M24 18 C18 22 16 30 18 40 M30 22 C34 26 34 32 32 38",
  // parrot — hooked beak, round body, curved tail
  parrot:
    "M30 10 C20 10 14 18 14 26 C14 34 20 40 28 40 C36 40 40 32 38 24 C44 24 46 20 42 16 C40 20 36 18 36 16 C34 12 32 10 30 10 Z M20 22 C21 22 22 23 22 24",
  // conch — spiral shell
  conch:
    "M34 10 C22 8 10 16 10 28 C10 38 18 44 26 42 C20 40 16 34 18 28 C20 22 26 18 32 20 C28 22 26 26 28 30 C32 28 36 22 34 10 Z",
};

export function PipiliMotif({ name, className, color = "var(--accent-warm)" }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={`${name} motif`}>
      <path d={PATHS[name]} fill="none" stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}
