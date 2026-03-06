import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import SectionNav from "./components/SectionNav";
import { createPageMetadata } from "./lib/metadata";

export const metadata = createPageMetadata({
  title: "Product-minded PM Portfolio",
  description:
    "Main portfolio page for Kim Gyeongsu featuring product thinking, collaboration, and lessons shaped by backend, AI, automation, and service projects.",
  keywords: [
    "portfolio home",
    "PM portfolio",
    "product thinking",
    "collaboration",
  ],
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
