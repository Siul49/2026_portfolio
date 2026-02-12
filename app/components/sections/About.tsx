"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
} from "../../lib/animations";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";

export default function About() {
  return (
    <Container
      as="section"
      size="wide"
      id="about"
      className="py-32 border-t border-grid-line"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        {/* ── Left Column ──────────────────────────────────────── */}
        <motion.div
          variants={fadeInLeft}
          className="md:col-span-4 flex flex-col gap-8"
        >
          {/* Section label */}
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              // ABOUT THE ARCHITECT
            </span>
            <div className="mt-3 h-[1px] bg-deep-navy opacity-10 w-full" />
          </div>

          {/* Pull quote */}
          <div className="relative pl-5">
            {/* Vertical accent line */}
            <div className="absolute left-0 top-0 w-[1px] h-full bg-deep-navy opacity-20" />
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug text-deep-navy">
              "코드는 논리의 언어이자,
              <br />
              꿈의 설계도이다."
            </blockquote>
          </div>

          {/* Decorative column ornament */}
          <div className="hidden md:flex flex-col items-start gap-2 mt-auto opacity-20">
            <div className="w-8 h-[1px] bg-deep-navy" />
            <div className="w-4 h-[1px] bg-deep-navy" />
            <div className="w-12 h-[1px] bg-deep-navy" />
          </div>
        </motion.div>

        {/* ── Right Column ─────────────────────────────────────── */}
        <div className="md:col-span-8 flex flex-col gap-8">
          {/* Chapter label */}
          <motion.div variants={fadeInUp}>
            <span className="font-mono text-xs tracking-widest uppercase text-serene-blue">
              Vol. I — Origin
            </span>
            <div className="mt-3 h-[1px] bg-deep-navy opacity-10 w-full" />
          </motion.div>

          {/* Paragraph 1 — Origin */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-neutral-600 font-light leading-relaxed"
          >
            처음 코드를 접한 건 단순한 호기심에서였습니다. 화면 위의 텍스트
            몇 줄이 살아 움직이는 순간, 논리와 창의성이 만나는 그 교차점에
            매료되었습니다.
          </motion.p>

          {/* Chapter divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <div className="h-[1px] bg-deep-navy opacity-10 flex-1" />
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              Vol. II — Philosophy
            </span>
            <div className="h-[1px] bg-deep-navy opacity-10 flex-1" />
          </motion.div>

          {/* Paragraph 2 — Philosophy with inline badges */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-neutral-600 font-light leading-relaxed"
          >
            저는 '보이지 않는 곳의 견고함'을 믿습니다. 아름다운 인터페이스
            이면에는 반드시 탄탄한 아키텍처가 있어야 합니다.{" "}
            <Badge className="mx-1 align-middle">Python</Badge>과{" "}
            <Badge className="mx-1 align-middle">Django</Badge>로 백엔드의
            뼈대를 세우고,{" "}
            <Badge className="mx-1 align-middle">FastAPI</Badge>의 비동기
            경계를 탐색하며,{" "}
            <Badge className="mx-1 align-middle">LLM</Badge>을 활용하여
            데이터에 맥락을 부여하는 것 — 그것이 제가 추구하는 개발입니다.
          </motion.p>

          {/* Chapter divider */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <div className="h-[1px] bg-deep-navy opacity-10 flex-1" />
            <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              Vol. III — Current
            </span>
            <div className="h-[1px] bg-deep-navy opacity-10 flex-1" />
          </motion.div>

          {/* Paragraph 3 — Current interests */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-neutral-600 font-light leading-relaxed"
          >
            최근에는 시맨틱 크롤링과 멀티모달 AI 파이프라인에 깊이 빠져
            있습니다. 단순히 작동하는 코드가 아닌, 맥락을 이해하고 적응하는
            시스템을 설계하는 데 집중하고 있습니다.
          </motion.p>

          {/* Closing ornament */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 pt-2 opacity-30"
          >
            <div className="w-16 h-[1px] bg-deep-navy" />
            <span className="font-mono text-xs text-neutral-400">◆</span>
            <div className="w-4 h-[1px] bg-deep-navy" />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
