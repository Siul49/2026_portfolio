import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import SectionNav from "./components/SectionNav";

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
