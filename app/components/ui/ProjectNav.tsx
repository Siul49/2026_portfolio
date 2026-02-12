import Link from "next/link";
import { getAdjacentProjects } from "../../lib/projects";
import { cn } from "../../lib/utils";

interface ProjectNavProps {
  currentSlug: string;
  className?: string;
}

export default function ProjectNav({
  currentSlug,
  className,
}: ProjectNavProps) {
  const { prev, next } = getAdjacentProjects(currentSlug);

  return (
    <nav
      className={cn(
        "border-t border-grid-line pt-12 mt-20",
        "flex justify-between items-start",
        className
      )}
    >
      {/* Previous Project */}
      {prev ? (
        <Link href={prev.link} className="group flex flex-col">
          <span className="font-mono text-[10px] tracking-widest text-neutral-400 mb-2">
            ← PREV
          </span>
          <span className="text-lg font-serif text-deep-navy group-hover:text-serene-blue transition-colors duration-300">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {/* Next Project */}
      {next ? (
        <Link href={next.link} className="group flex flex-col text-right">
          <span className="font-mono text-[10px] tracking-widest text-neutral-400 mb-2">
            NEXT →
          </span>
          <span className="text-lg font-serif text-deep-navy group-hover:text-serene-blue transition-colors duration-300">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
