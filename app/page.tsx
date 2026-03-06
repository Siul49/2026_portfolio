import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import SectionNav from "./components/SectionNav";
import { createPageMetadata } from "./lib/metadata";

export const metadata = createPageMetadata({
  title: "Backend Developer Portfolio",
  description:
    "Main portfolio page for Kim Gyeongsu featuring backend, data pipeline, AI, automation, and product case studies.",
  keywords: ["portfolio home", "backend portfolio", "developer portfolio"],
});

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SectionNav />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
