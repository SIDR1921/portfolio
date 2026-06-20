import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <div className="foot__cols">
          <a
            className="foot__link"
            href="https://github.com/SIDR1921"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="foot__link"
            href="https://www.linkedin.com/in/siddharthray1921"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="foot__credit">
          The visual language here draws on the living art traditions of Odisha —
          Saura <span className="foot__term">idital</span> linework, the Konark
          Sun Temple chariot wheel, Pattachitra borders, and Pipili appliqué
          motifs. Built with respect for the artisans who keep them alive.
        </p>
      </div>
    </footer>
  );
}
