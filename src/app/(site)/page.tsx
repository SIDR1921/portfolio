import { Hero } from "@/components/Hero";
import { WheelDivider } from "@/components/WheelDivider";
import { Rooms } from "@/components/Rooms";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <WheelDivider label="Konark · the sun's chariot" />
      <Rooms />
      <SiteFooter />
    </>
  );
}
