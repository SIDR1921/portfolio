import type { Metadata } from "next";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { PostListItem } from "@/sanity/lib/types";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = { title: "Writing" };
export const revalidate = 30;

export default async function WritingPage() {
  const posts = await sanityFetch<PostListItem[]>(postsQuery, []);

  return (
    <main className="page shell">
      <header className="page__head">
        <p className="eyebrow">Writing</p>
        <h1 className="page__title">Scrolls.</h1>
      </header>

      {posts.length === 0 ? (
        <div className="empty">
          No posts yet. Open <code>/studio</code> → <code>Blog posts</code> →
          publish one, and it&apos;ll appear here within ~30 seconds.
        </div>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <Link
              href={`/writing/${post.slug.current}`}
              className="post-row"
              key={post._id}
            >
              <time className="post-row__date">{formatDate(post.publishedAt)}</time>
              <div>
                <h2 className="post-row__title">{post.title}</h2>
                {post.excerpt && (
                  <p className="post-row__excerpt">{post.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
