import {
  HomeCTA,
  HomeTrustedBy,
  HomeSubscribe,
  HomeValues,
} from "@/components/sections/home";
import { HeroNext } from "@/components/sections/HeroNext";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <HeroNext />
      <WhoWeAre />
      <HomeTrustedBy />
      <HomeValues />
      <Services />
      <HomeCTA />
      <HomeSubscribe />
    </>
  );
}
