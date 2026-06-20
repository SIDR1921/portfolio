import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";
import type { Project } from "@/sanity/lib/types";

export const metadata: Metadata = { title: "Work — Siddharth Ray" };
export const revalidate = 30;

export default async function WorkPage() {
  const projects = await sanityFetch<Project[]>(projectsQuery, []);

  return (
    <main className="page shell">
      <header className="page__head">
        <p className="eyebrow">Work</p>
        <h1 className="page__title">Things I&apos;ve built.</h1>
        <p className="page__lead">
          Projects, case studies, and the occasional experiment. Add or reorder
          these anytime from the dashboard — no code required.
        </p>
      </header>

      {projects.length === 0 ? (
        <div className="empty">
          No projects yet. Open <code>/studio</code> → <code>Projects</code> →
          create one, and it&apos;ll appear here within ~30 seconds.
        </div>
      ) : (
        <div className="work-grid">
          {projects.map((p) => (
            <article className="work-card" key={p._id}>
              <div className="work-card__meta">
                {p.year && <span>{p.year}</span>}
                {p.role && <span>{p.role}</span>}
              </div>
              <h2 className="work-card__title">{p.title}</h2>
              {p.summary && <p className="work-card__summary">{p.summary}</p>}
              {p.tags && p.tags.length > 0 && (
                <div className="work-card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {(p.liveUrl || p.repoUrl) && (
                <div className="work-card__links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
