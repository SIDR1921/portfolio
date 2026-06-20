import type { SchemaTypeDefinition } from "sanity";
import { profile } from "./profile";
import { post } from "./post";
import { project } from "./project";
import { job } from "./job";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, post, project, job],
};
