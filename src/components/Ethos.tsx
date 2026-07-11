import "./Ethos.css";

export function Ethos() {
  return (
    <section className="ethos">
      <div className="ethos__gradient" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ethos__feather" src="/feather-cut.png" alt="" aria-hidden="true" />

      <div className="shell ethos__inner">
        <p className="section-label ethos__label">01 — Ethos</p>
        <p className="ethos__statement" data-reveal>
          I strive to build things of real{" "}
          <em>importance</em> — and to keep learning how, from the people who do
          it best.
        </p>
        <p className="ethos__body" data-reveal>
          In the years ahead I want to have made an impact that reaches past the
          code itself — felt holistically, in the lives and the systems it
          touches, not only the tech.
        </p>
        <div className="ethos__focus">
          <span>Multi-agent AI</span>
          <span className="ethos__dot">·</span>
          <span>Edge &amp; offline-first</span>
          <span className="ethos__dot">·</span>
          <span>Applied machine learning</span>
        </div>
      </div>
    </section>
  );
}
