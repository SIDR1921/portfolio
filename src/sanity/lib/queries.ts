import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(featured desc, order asc, _createdAt desc) {
    _id, title, slug, year, role, summary, tags, liveUrl, repoUrl, featured,
    "coverUrl": coverImage.asset->url
  }
`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt, tags,
    "coverUrl": coverImage.asset->url
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, excerpt, tags, body,
    "coverUrl": coverImage.asset->url
  }
`;

export const profileQuery = groq`
  *[_type == "profile"][0] {
    name, headline, openToWork, statusLine, location, bio, links
  }
`;

export const jobsQuery = groq`
  *[_type == "job"] | order(startDate desc) {
    _id, role, company, companyUrl, location, startDate, endDate, current, summary
  }
`;
