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
            PM Applicant / Product Thinking / Collaboration
          </motion.p>

          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={smoothSlow}
            className="max-w-[1120px] font-serif font-bold tracking-[-0.045em] text-deep-navy"
          >
            <span className="block text-[clamp(2.7rem,5vw,4.8rem)] leading-[1.16] font-light text-deep-navy/58">
              개발 경험을 바탕으로
            </span>
            <span className="mt-5 block text-[clamp(3.45rem,7.5vw,6rem)] leading-[1.08]">
              무엇을 왜 먼저 만들지
            </span>
            <span className="mt-5 block text-[clamp(3.2rem,6.9vw,5.5rem)] leading-[1.12]">
              고민하는 <span className="font-light italic text-serene-blue/85">PM</span> 지원자입니다.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothSlow, delay: 0.8 }}
            className="mt-10 max-w-3xl text-[1.02rem] leading-[1.85] font-light text-neutral-600 md:text-[1.16rem]"
          >
            픽합주에서 백엔드 팀 리드를 맡으며, 좋은 서비스를 만드는 데에는 구현만큼 문제
            정의와 우선순위 설정, 팀이 같은 방향으로 움직이게 만드는 역할이 중요하다는 것을
            배웠습니다. 이제 그 경험을 PM의 언어로 확장하고 싶습니다.
            <span className="mt-3 block font-mono text-sm text-serene-blue">
              {"// Learning to turn development experience into product thinking"}
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
              프로젝트로 보기
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              왜 PM인가
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
