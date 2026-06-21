import Link from "next/link";
import "./SiteNav.css";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="shell nav__inner">
        <Link href="/" className="nav__brand">
          SR
        </Link>
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav__link">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
