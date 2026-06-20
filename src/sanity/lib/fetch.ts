import { client } from "./client";

/**
 * Resilient fetch: revalidates every 30s (so dashboard edits appear within
 * ~half a minute), and never throws — if Sanity is unreachable or the dataset
 * is empty/private, pages fall back to a safe default instead of crashing.
 */
export async function sanityFetch<T>(
  query: string,
  fallback: T,
  params: Record<string, unknown> = {},
): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 30 },
    });
  } catch (err) {
    console.error("[sanity] fetch failed, using fallback:", err);
    return fallback;
  }
}
