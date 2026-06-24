import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="nf">
      <p className="eyebrow">404 · off the chariot path</p>
      <h1 className="nf__title">
        This page took a <em>turn</em> we can&apos;t follow.
      </h1>
      <p className="nf__body">
        The wheel keeps rolling, though. Head back and pick another room.
      </p>
      <Link href="/" className="nf__link">
        ← Back home
      </Link>
    </main>
  );
}
