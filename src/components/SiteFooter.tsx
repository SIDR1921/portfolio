import "./SiteFooter.css";

const LINKS = [
  { label: "GitHub ↗", href: "https://github.com/SIDR1921" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/siddharthray1921" },
  { label: "LeetCode ↗", href: "https://leetcode.com/u/sidr1921" },
  { label: "Email ↗", href: "mailto:siddharthraycareer@gmail.com" },
];

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <div className="foot__cols">
          {LINKS.map((l) => (
            <a
              key={l.label}
              className="foot__link"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="foot__credit">
          The visual language here draws on the living art traditions of Odisha —
          Saura <em className="foot__term">idital</em> linework, the Konark Sun
          Temple chariot wheel, Pattachitra borders, and Pipili appliqué motifs.
          Built with respect for the artisans who keep them alive.
        </p>

        <div className="foot__legal">
          <span>© 2026 Siddharth Ray</span>
          <span>Bhubaneswar · Odisha · India</span>
        </div>
      </div>
    </footer>
  );
}
