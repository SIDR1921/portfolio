import "./Work.css";

type Tag = { label: string; featured?: boolean };
type Project = {
  motif: string;
  year: string;
  category: string;
  title: string;
  body: string;
  tags: Tag[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    motif:
      "M34 10 C22 8 10 16 10 28 C10 38 18 44 26 42 C20 40 16 34 18 28 C20 22 26 18 32 20 C28 22 26 26 28 30 C32 28 36 22 34 10 Z",
    year: "2025",
    category: "Multi-agent AI",
    title: "EquiMigrant",
    body: "A multi-agent swarm on Gemini 3 that reads employment contracts in any language, scores legal risk, flags exploitative clauses, and coaches workers through negotiation — protecting migrants before they leave home.",
    tags: [
      { label: "★ Top 15 · DeepMind Hackathon", featured: true },
      { label: "Gemini 3" },
      { label: "FastAPI" },
      { label: "React" },
    ],
    href: "https://github.com/SIDR1921/equimigrant",
  },
  {
    motif:
      "M14 42 C10 30 14 20 24 18 C22 12 26 6 32 8 C30 12 32 14 34 16 C42 18 44 28 40 36 M24 18 C18 22 16 30 18 40 M30 22 C34 26 34 32 32 38",
    year: "2025",
    category: "Edge AI",
    title: "MedVaani",
    body: "An offline-first, multilingual voice assistant for rural health workers. Whisper and Llama 3.2 run fully on-device, turning spoken field notes into structured patient records — no internet, no data ever leaving the phone.",
    tags: [{ label: "Whisper" }, { label: "Llama 3.2" }, { label: "Ollama" }, { label: "SQLite" }],
    href: "https://github.com/SIDR1921/med-vaani",
  },
  {
    motif:
      "M24 40 C16 30 16 20 24 8 C32 20 32 30 24 40 Z M24 40 C12 36 6 28 6 16 C16 20 22 28 24 40 Z M24 40 C36 36 42 28 42 16 C32 20 26 28 24 40 Z",
    year: "2025",
    category: "Quant viz",
    title: "Asset Correlation Heatmap",
    body: "A rolling-correlation engine across equities indices, FX pairs, interest rates and commodities — visualising how cross-asset relationships shift over time.",
    tags: [{ label: "pandas" }, { label: "numpy" }, { label: "yfinance" }, { label: "Streamlit" }],
    href: "https://github.com/SIDR1921/asset-correlation-heatmap",
  },
  {
    motif:
      "M30 10 C20 10 14 18 14 26 C14 34 20 40 28 40 C36 40 40 32 38 24 C44 24 46 20 42 16 C40 20 36 18 36 16 C34 12 32 10 30 10 Z M20 22 C21 22 22 23 22 24",
    year: "2024",
    category: "Classic AI",
    title: "Cryptic Crossings",
    body: "A puzzle game that fuses two classic AI problems — cryptarithmetic constraint solving and the missionaries-and-cannibals river crossing search.",
    tags: [{ label: "Python" }, { label: "Search" }, { label: "Constraints" }],
    href: "https://github.com/SIDR1921/cryptic_crossings",
  },
];

export function Work() {
  return (
    <section id="work" className="work">
      <div className="shell">
        <div className="work__head">
          <div>
            <p className="section-label">02 — Selected work</p>
            <h2 className="work__title">The chariot&rsquo;s wheels.</h2>
          </div>
          <p className="work__sub">
            Applied-AI systems I&rsquo;ve designed and built end to end — pulled
            straight from GitHub.
          </p>
        </div>

        <div className="work__grid">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              className="work__card"
              data-reveal
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="work__motif"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                strokeWidth="1.8"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={p.motif} />
              </svg>
              <div className="work__meta">
                {p.year} · {p.category}
              </div>
              <h3 className="work__name">{p.title}</h3>
              <p className="work__body">{p.body}</p>
              <div className="work__tags">
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className={t.featured ? "tag tag--filled" : "tag"}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <span className="work__go">View on GitHub ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
