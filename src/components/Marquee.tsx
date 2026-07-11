import "./Marquee.css";

const QUALITIES = [
  "Curious to the core",
  "Obsessed with detail",
  "Builds what matters",
  "Multilingual AI, offline-first",
  "Ships fast, learns faster",
];

export function Marquee() {
  // duplicated once so the -50% loop is seamless
  const items = [...QUALITIES, ...QUALITIES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((q, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot">·</span> {q}
          </span>
        ))}
      </div>
    </div>
  );
}
