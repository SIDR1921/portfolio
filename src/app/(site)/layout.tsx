import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteNav } from "@/components/SiteNav";
import "./site.css";

/** Wraps the public site in Lenis smooth scrolling + the primary nav. The
 *  /studio route lives outside this group, so the CMS keeps native scroll. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <SiteNav />
      {children}
    </SmoothScroll>
  );
}
