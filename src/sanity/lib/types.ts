import type { PortableTextBlock } from "@portabletext/react";

export type Project = {
  _id: string;
  title: string;
  slug?: { current: string };
  year?: string;
  role?: string;
  summary?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  coverUrl?: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  tags?: string[];
  coverUrl?: string;
};

export type Post = PostListItem & {
  body?: PortableTextBlock[];
};

export type Job = {
  _id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  summary?: string;
};

export type Profile = {
  name?: string;
  headline?: string;
  openToWork?: boolean;
  statusLine?: string;
  location?: string;
  bio?: PortableTextBlock[];
  links?: { label?: string; url?: string }[];
};
