"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer, hoverLift } from "../../lib/animations";
import { projects } from "../../lib/projects";
import Badge from "../ui/Badge";
import Container from "../ui/Container";

export default function Projects() {
  return (
    <Container as="section" size="wide" id="projects" className="min-h-screen py-20 border-t border-grid-line">
      <div className="flex justify-between items-end mb-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-serif font-bold text-deep-navy"
        >
          Selected <br /> Works
        </motion.h2>
        <span className="font-mono text-xs tracking-widest opacity-50 hidden md:block">
          (2024 — 2026)
        </span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        {projects.map((project, index) => {
          // Tetris-like "Dense" Layout — minimizing whitespace
          let colSpan = "md:col-span-4";
          let aspectRatio = "aspect-[3/4]";
          let marginTop = "";

          // Row 1: Pick Habju (7) + BIMO (5)
          if (index === 0) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-7";
            aspectRatio = "aspect-[16/9]";
          } else if (index === 1) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-5";
            aspectRatio = "aspect-[4/3] lg:aspect-[4/3.5]"; // Slightly taller to match height
            marginTop = "lg:mt-12"; // Small offset for visual rhythm, but much tighter
          }
          // Row 2: PrimeRing (5) + DDIP (7)
          else if (index === 2) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-5";
            aspectRatio = "aspect-[4/5]";
          } else if (index === 3) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-7";
            aspectRatio = "aspect-[16/10]";
            marginTop = "lg:mt-8"; // Reduced margin
          }
          // Row 3: LMS (4) + TimeTable (4) + TwoPlus (4)
          else {
            colSpan = "md:col-span-6 lg:col-span-4";
            aspectRatio = "aspect-[3/4]";
            if (index === 5) marginTop = "lg:mt-12"; // Stagger the middle one slightly
          }

          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`
                ${colSpan} ${marginTop}
                relative group cursor-pointer
              `}
            >
              <Link href={project.link || "#"}>
                <motion.div {...hoverLift}>
                  {/* Editorial Card Layout */}
                  <div className={`relative overflow-hidden ${aspectRatio} bg-neutral-50 mb-6 border border-grid-line transition-all duration-300 ease-out hover:shadow-lg`}>
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-neutral-50 opacity-80" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-deep-navy/40">
                      <span className="font-mono text-sm tracking-widest text-white">[VIEW CASE STUDY]</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-grid-line pb-4">
                    <div>
                      <span className="font-mono text-xs text-serene-blue mb-2 block">{project.id} — {project.category}</span>
                      <h3 className="text-3xl font-serif font-medium transition-transform duration-500 ease-out group-hover:-skew-x-6">{project.title}</h3>
                    </div>
                    <div className="hidden md:flex gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-500 font-light text-sm max-w-md">{project.description}</p>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
