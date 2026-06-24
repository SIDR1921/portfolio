import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/fetch";
import { profileQuery, jobsQuery } from "@/sanity/lib/queries";
import type { Profile, Job } from "@/sanity/lib/types";
import { PortableTextBody } from "@/components/PortableTextBody";
import { formatMonthYear } from "@/lib/date";

export const metadata: Metadata = { title: "About" };
export const revalidate = 30;

export default async function AboutPage() {
  const [profile, jobs] = await Promise.all([
    sanityFetch<Profile | null>(profileQuery, null),
    sanityFetch<Job[]>(jobsQuery, []),
  ]);

  const open = profile?.openToWork;

  return (
    <main className="page shell">
      <header className="page__head">
        <p className="eyebrow">About</p>
        <h1 className="page__title">{profile?.name || "Siddharth Ray"}</h1>
        {profile?.headline && <p className="page__lead">{profile.headline}</p>}
      </header>

      <div className="about">
        <div className="about__prose">
          <span className={`status${open ? " status--open" : ""}`}>
            <span className="status__dot" aria-hidden="true" />
            {profile?.statusLine ||
              (open ? "Open to work" : "Not currently looking")}
          </span>

          {profile?.bio && <PortableTextBody value={profile.bio} />}

          {profile?.links && profile.links.length > 0 && (
            <div className="work-card__links" style={{ marginTop: "1.5rem" }}>
              {profile.links.map(
                (l) =>
                  l.url && (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                      {l.label || l.url} ↗
                    </a>
                  ),
              )}
            </div>
          )}
        </div>

        <aside>
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Career
          </p>
          {jobs.length === 0 ? (
            <div className="empty">
              Add roles in <code>/studio</code> → <code>Jobs / roles</code>.
            </div>
          ) : (
            <div className="timeline">
              {jobs.map((job) => (
                <div className="timeline__item" key={job._id}>
                  <div className="timeline__when">
                    {formatMonthYear(job.startDate)} —{" "}
                    {job.current ? "Present" : formatMonthYear(job.endDate)}
                  </div>
                  <h2 className="timeline__role">{job.role}</h2>
                  <div className="timeline__co">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                    {job.location ? ` · ${job.location}` : ""}
                  </div>
                  {job.summary && (
                    <p className="timeline__summary">{job.summary}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
