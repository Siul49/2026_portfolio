"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, hoverLift, staggerContainer } from "../../lib/animations";
import { projects } from "../../lib/projects";
import Badge from "../ui/Badge";
import Container from "../ui/Container";

export default function Projects() {
  return (
    <Container
      as="section"
      size="wide"
      id="projects"
      className="min-h-screen border-t border-grid-line py-24 md:py-28"
    >
      <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.28em] text-neutral-500 uppercase"
          >
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 text-5xl font-serif font-bold text-deep-navy md:text-6xl"
          >
            Selected
            <br />
            Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-base leading-relaxed font-light text-neutral-600"
          >
            문제를 어떻게 정의했고, 어떤 우선순위와 협업 방식으로 풀어냈는지 보여주는
            프로젝트를 먼저 배치했습니다.
          </motion.p>
        </div>
        <span className="hidden font-mono text-xs tracking-widest text-neutral-500 md:block">
          (2024 - 2026)
        </span>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 items-start gap-8 md:grid-cols-12"
      >
        {projects.map((project, index) => {
          let colSpan = "md:col-span-4";
          let marginTop = "";

          if (index === 0) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-7";
          } else if (index === 1) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-5";
            marginTop = "lg:mt-12";
          } else if (index === 2) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-5";
          } else if (index === 3) {
            colSpan = "md:col-span-12 md:col-start-1 lg:col-span-7";
            marginTop = "lg:mt-8";
          } else {
            colSpan = "md:col-span-6 lg:col-span-4";
            if (index === 5) {
              marginTop = "lg:mt-12";
            }
          }

          return (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              className={`${colSpan} ${marginTop} relative group cursor-pointer`}
            >
              <Link href={project.link || "#"}>
                <motion.div {...hoverLift}>
                  <div
                    className="relative mb-6 overflow-hidden border border-grid-line bg-neutral-50 transition-all duration-300 ease-out hover:shadow-lg"
                    style={{ aspectRatio: project.previewAspectRatio }}
                  >
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
                    <div className="absolute inset-0 flex items-center justify-center bg-deep-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-mono text-sm tracking-widest text-white">
                        [VIEW CASE STUDY]
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-grid-line pb-4">
                    <div>
                      <span className="mb-2 block font-mono text-xs text-serene-blue">
                        {project.id} / {project.category}
                      </span>
                      <h3 className="text-3xl font-serif font-medium transition-transform duration-500 ease-out group-hover:-skew-x-6">
                        {project.title}
                      </h3>
                    </div>
                    <div className="hidden gap-2 md:flex">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 md:hidden">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-4 max-w-md text-sm leading-relaxed font-light text-neutral-600">
                    {project.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
