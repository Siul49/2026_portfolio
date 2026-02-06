import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Projects />
    </div>
  );
}
