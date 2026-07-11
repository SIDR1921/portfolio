import "./Journey.css";

const ROWS = [
  {
    when: "Jun 2026 · now",
    title: "SDE & Consulting Intern",
    body: "Softway. Working across functions to turn requirements into shipped, maintainable software — building and consulting on real client solutions.",
  },
  {
    when: "2025 · Recognition",
    title: "Hackathon finalist",
    body: "2nd place at the Love X AI Hackathon (Softway) from 110 submissions, and a Top-15 finalist at the Google DeepMind Hackathon (Cerebral Valley) out of 2,000+ applicants.",
  },
  {
    when: "2025 · Experience",
    title: "AI intern — Ergo Conscious World",
    body: "Built prototype pipelines for document intelligence — resume parsing, credential extraction, and a compliance-alert dashboard architecture for healthcare onboarding (remote).",
  },
  {
    when: "2023 — 2027",
    title: "B.Tech, Computer Science",
    body: "Manipal Institute of Technology, Bengaluru. Minor in Artificial Intelligence & Machine Learning.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="shell">
        <p className="section-label">04 — Journey</p>
        <h2 className="journey__title">The road so far.</h2>
        <div className="journey__list">
          {ROWS.map((r) => (
            <div className="journey__row" data-reveal key={r.title}>
              <div className="journey__when">{r.when}</div>
              <div>
                <h3 className="journey__role">{r.title}</h3>
                <p className="journey__body">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
