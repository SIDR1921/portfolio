import type { StructureResolver } from "sanity/structure";

/** Profile is a singleton; everything else is a normal list. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Profile & status")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      S.documentTypeListItem("post").title("Blog posts"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("job").title("Jobs / roles"),
    ]);
