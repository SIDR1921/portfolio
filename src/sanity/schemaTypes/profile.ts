import { defineType, defineField } from "sanity";

/** Singleton — your identity + current career status. Edit anytime; site reads it live. */
export const profile = defineType({
  name: "profile",
  title: "Profile & status",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "headline",
      type: "string",
      description: "One-line tagline, e.g. “I build & write things.”",
    }),
    defineField({
      name: "openToWork",
      title: "Open to work?",
      type: "boolean",
      description: "Flip this on/off — the site shows a live status badge.",
      initialValue: false,
    }),
    defineField({
      name: "statusLine",
      title: "Current status line",
      type: "string",
      description: "What you're up to right now, e.g. “Building X at Y · open to freelance”.",
    }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "bio", title: "Short bio", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineField({
          name: "link",
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "statusLine" },
  },
});
