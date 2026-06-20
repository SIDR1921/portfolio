import { defineType, defineField } from "sanity";

/** A role on your career timeline, shown on /about. */
export const job = defineType({
  name: "job",
  title: "Job / role",
  type: "document",
  fields: [
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "companyUrl", title: "Company URL", type: "url" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "current",
      title: "Current role?",
      type: "boolean",
      description: "If on, this shows as “— Present”.",
      initialValue: false,
    }),
    defineField({ name: "endDate", title: "End date", type: "date" }),
    defineField({ name: "summary", type: "text", rows: 3 }),
  ],
  orderings: [
    { title: "Most recent first", name: "recent", by: [{ field: "startDate", direction: "desc" }] },
  ],
  preview: {
    select: { title: "role", subtitle: "company" },
  },
});
