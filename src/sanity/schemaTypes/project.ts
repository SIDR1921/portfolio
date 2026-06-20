import { defineType, defineField } from "sanity";

/** A project for the /work room. Add/reorder anytime from the dashboard. */
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "year", type: "string", description: "e.g. “2025” or “2024–25”." }),
    defineField({ name: "role", type: "string", description: "Your role, e.g. “Solo build”, “Lead dev”." }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "repoUrl", title: "Repo URL", type: "url" }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Featured projects show first.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Lower numbers show first (within featured / non-featured).",
    }),
    defineField({
      name: "body",
      title: "Case study (optional)",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  orderings: [
    { title: "Manual order", name: "manual", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "year", media: "coverImage" },
  },
});
