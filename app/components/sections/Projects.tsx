"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Pick Habju",
      category: "Crawling & LLM",
      description: "LLM 기반 의미론적 크롤링으로 합주실 예약 경험 최적화",
      tags: ["Python", "Django", "LLM"],
      featured: true, 
      link: "/projects/pick-habju"
    },
    {
      id: "02",
      title: "BIMO",
      category: "AI Service",
      description: "Gemini Vision으로 탑승권을 인식하는 AI 비행 컨시어지",
      tags: ["Spring Boot", "Gemini", "FastAPI"],
      featured: false,
      link: "/projects/bimo"
    },
    {
      id: "03",
      title: "DDIP",
      category: "Frontend",
      description: "Next.js와 React를 활용한 반응형 수강신청 프론트엔드 (Next 15, Tailwind v4)",
      tags: ["Next.js", "React", "Tailwind"],
      featured: false,
      link: "#"
    },
    {
      id: "04",
      title: "Time Table",
      category: "Web",
      description: "HTML/CSS/JS 기반의 시간표 생성 및 관리 웹 애플리케이션",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false,
      link: "#"
    },
    {
      id: "05",
      title: "TwoPlus",
      category: "Frontend",
      description: "초기 프론트엔드 실험과 인터랙션 연구를 담은 포트폴리오",
      tags: ["React", "Interaction"],
      featured: false,
      link: "/projects/twoplus" 
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 max-w-7xl mx-auto border-t border-[var(--color-grid-line)]">
      <div className="flex justify-between items-end mb-20">
         <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-serif font-bold text-[var(--color-deep-navy)]"
        >
          Selected <br /> Works
        </motion.h2>
        <span className="font-mono text-xs tracking-widest opacity-50 hidden md:block">
          (2024 — 2026)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {projects.map((project, index) => {
          // Asymmetric Layout Logic (Masonry-ish)
          let colSpan = "md:col-span-4"; // Default small
          let aspectRatio = "aspect-[3/4]"; // Default portrait
          let marginTop = "mt-0";

          if (index === 0) { // Pick Habju (Big Landscape)
             colSpan = "md:col-span-8";
             aspectRatio = "aspect-[16/9]";
          } else if (index === 1) { // BIMO (Portrait Sidebar)
             colSpan = "md:col-span-4";
             aspectRatio = "aspect-[3/5]"; // Tall
             marginTop = "md:mt-0"; // Aligned with top
          } else if (index === 2) { // DDIP (Medium Square)
             colSpan = "md:col-span-4"; // Changed to 4 to align
             aspectRatio = "aspect-square";
          } else if (index === 3) { // Time Table (Medium Landscape)
             colSpan = "md:col-span-8"; // Changed to 8 to align
             aspectRatio = "aspect-[16/9]";
             marginTop = "md:mt-0"; // No offset
          } else { // TwoPlus (Small)
             colSpan = "md:col-span-4 md:col-start-9";
             aspectRatio = "aspect-[4/3]";
          }

          return (
            <div 
              key={index}
              className={`
                ${colSpan} ${marginTop}
                relative group cursor-pointer
              `}
            >
            <Link href={project.link || "#"}>
              {/* Editorial Card Layout */}
              <div className={`relative overflow-hidden ${aspectRatio} bg-gray-100 mb-6 border border-[var(--color-grid-line)] transition-all duration-500 hover:shadow-lg`}>
                 {/* Placeholder for abstract visual/image */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-mono text-sm tracking-widest text-[var(--color-serene-blue)]">[VIEW CASE STUDY]</span>
                 </div>
                 {/* Diagonal line overlay on hover */}
                 <div className="absolute inset-0 border border-[var(--color-serene-blue)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95" />
              </div>

              <div className="flex justify-between items-baseline border-b border-[var(--color-deep-navy)]/10 pb-4">
                <div>
                  <span className="font-mono text-xs text-[var(--color-serene-blue)] mb-2 block">{project.id} — {project.category}</span>
                  <h3 className="text-3xl font-serif font-medium group-hover:italic transition-all">{project.title}</h3>
                </div>
                <div className="hidden md:flex gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono border border-[var(--color-deep-navy)]/20 px-2 py-1 rounded-full">{tag}</span>
                   ))}
                </div>
              </div>
              <p className="mt-4 text-gray-500 font-light text-sm max-w-md">{project.description}</p>
            </Link>
          </div>
          );
        })}
      </div>
    </section>
  );
}
