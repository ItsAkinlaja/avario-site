import {
  HomeCasePreview,
  HomeCTA,
  HomeHero,
  HomeHowWeWork,
  HomeProblem,
  HomeResult,
  HomeSystem,
  HomeSystemsGrid,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeSystem />
      <HomeResult />
      <HomeSystemsGrid />
      <HomeCasePreview />
      <HomeHowWeWork />
      <HomeCTA />
    </>
  );
}
