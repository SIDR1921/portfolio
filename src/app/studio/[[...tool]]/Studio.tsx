"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/** Client boundary: keeps the Sanity config + Studio bundle entirely in the
 *  client graph, away from the React Server Components build condition (which
 *  doesn't export hooks like useEffectEvent that the Studio relies on). */
export function Studio() {
  return <NextStudio config={config} />;
}
