import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__gradient" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="contact__watermark"
        src="/konark-wheel-line.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="contact__inner">
        <p className="section-label contact__label">05 — Let&rsquo;s build</p>
        <h2 className="contact__title" data-reveal>
          Have something <em>worth</em> building?
        </h2>
        <p className="contact__sub" data-reveal>
          I&rsquo;m open to internships and collaborations in applied AI, machine
          learning, and thoughtful product engineering.
        </p>
        <div className="contact__actions">
          <a className="contact__cta" href="mailto:siddharthraycareer@gmail.com">
            Start a conversation →
          </a>
          <a
            className="contact__ghost"
            href="https://github.com/SIDR1921"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <div className="contact__email">
          <a href="mailto:siddharthraycareer@gmail.com">siddharthraycareer@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
