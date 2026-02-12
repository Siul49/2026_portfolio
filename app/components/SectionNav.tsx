"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "TOP" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col gap-6 items-end">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center cursor-pointer bg-transparent border-none p-0"
            aria-label={`Scroll to ${label}`}
          >
            <span
              className={`font-mono text-[10px] tracking-widest text-deep-navy mr-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
            >
              {label}
            </span>
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? "bg-deep-navy opacity-100 scale-125"
                  : "bg-neutral-300 opacity-50"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
