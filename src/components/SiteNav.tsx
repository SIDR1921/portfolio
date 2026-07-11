import "./SiteNav.css";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#craft", label: "Craft" },
  { href: "/#journey", label: "Journey" },
];

export function SiteNav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="shell nav__inner">
        <a href="/#top" className="nav__brand" aria-label="Siddharth Ray — home">
          SR
        </a>
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/#contact" className="nav__link nav__link--cta">
              Contact →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
