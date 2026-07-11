import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Ethos } from "@/components/Ethos";
import { WheelDivider } from "@/components/WheelDivider";
import { Work } from "@/components/Work";
import { CraftIndex } from "@/components/CraftIndex";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveals } from "@/components/ScrollReveals";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Ethos />
      <WheelDivider />
      <Work />
      <CraftIndex />
      <Journey />
      <Contact />
      <SiteFooter />
      <ScrollReveals />
    </>
  );
}
