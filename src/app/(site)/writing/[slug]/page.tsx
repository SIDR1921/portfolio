import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  postBySlugQuery,
  postSlugsQuery,
} from "@/sanity/lib/queries";
import type { Post } from "@/sanity/lib/types";
import { PortableTextBody } from "@/components/PortableTextBody";
import { formatDate } from "@/lib/date";
import "./post.css";

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await sanityFetch<string[]>(postSlugsQuery, []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, null, { slug });
  if (!post) return { title: "Writing" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, null, { slug });
  if (!post) notFound();

  return (
    <div className="leaf reader-bg">
      <article className="reader shell">
        <Link href="/writing" className="back-link">
          ← Writing
        </Link>

        <header className="reader__head">
          <time className="reader__date">{formatDate(post.publishedAt)}</time>
          <h1 className="reader__title">{post.title}</h1>
          <div className="reader__rule" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <div className="reader__body">
          {post.body ? (
            <PortableTextBody value={post.body} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </article>
    </div>
  );
}
