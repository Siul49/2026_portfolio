"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, lineExpand, smoothSlow } from "../../lib/animations";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute top-20 left-10 h-40 w-[1px] bg-deep-navy opacity-20" />
      <div className="absolute right-10 bottom-20 h-[1px] w-40 bg-deep-navy opacity-20" />
      <div className="diagonal-line top-[20%] right-[30%]" />

      <div className="z-10 grid w-full max-w-7xl grid-cols-12 items-center gap-4 px-8">
        <div className="col-span-1 hidden h-full flex-col justify-between py-10 opacity-40 md:flex">
          <span className="vertical-text font-mono text-xs tracking-widest">EST. 2026</span>
          <span className="vertical-text font-mono text-xs tracking-widest">PORTFOLIO</span>
        </div>

        <div className="relative col-span-12 text-center md:col-span-10 md:text-left">
          <motion.div
            variants={lineExpand}
            initial="hidden"
            animate="visible"
            className="mb-8 ml-1 h-[2px] bg-serene-blue"
          />

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothSlow, delay: 0.2 }}
            className="mb-6 font-mono text-[11px] tracking-[0.28em] text-neutral-500 uppercase"
          >
            Backend Developer / Data Pipelines / Automation
          </motion.p>

          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={smoothSlow}
            className="max-w-5xl text-5xl leading-[0.95] font-serif font-bold tracking-tighter text-deep-navy md:text-8xl"
          >
            코드 수정 없이 <span className="font-light italic text-serene-blue">92%</span>의
            <br />
            데이터 수집 성공률을 유지한
            <br />
            백엔드 개발자입니다.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothSlow, delay: 0.8 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed font-light text-neutral-600 md:text-xl"
          >
            DOM 변경에 흔들리지 않는 크롤링 파이프라인과 멀티모달 LLM 백엔드를
            설계하며, 반복 작업을 줄이는 자동화 도구를 만듭니다.
            <span className="mt-2 block font-mono text-sm text-serene-blue">
              {"// Backend, AI, and automation systems that ship"}
            </span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothSlow, delay: 1 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Button
              size="md"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              대표 프로젝트 보기
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              채용 / 협업 문의
            </Button>
            <Button href="https://github.com/Siul49" external variant="ghost" size="md">
              GitHub ↗
            </Button>
          </motion.div>
        </div>

        <div className="relative hidden h-60 w-full md:col-span-1 md:block">
          <div className="absolute top-0 right-0 h-full w-[1px] bg-deep-navy opacity-10" />
          <div className="absolute top-[50%] -left-10 h-[1px] w-20 bg-deep-navy opacity-10" />
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 border-none bg-transparent opacity-40 transition-opacity duration-300 hover:opacity-70"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-deep-navy"
        />
      </button>
    </section>
  );
}
