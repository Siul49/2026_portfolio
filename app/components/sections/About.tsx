"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "../../lib/animations";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import { withBasePath } from "../../lib/site";

const highlights = [
  {
    label: "92%",
    description: "데이터 수집 성공률 유지",
    note: "2024 프로토타입 기준",
  },
  {
    label: "20%+",
    description: "LLM 인식률 개선",
    note: "이미지 전처리 최적화",
  },
  {
    label: "Focus",
    description: "Backend · AI · Automation",
    note: "실서비스형 API와 파이프라인 중심",
  },
];

const stack = [
  "Python",
  "Django",
  "FastAPI",
  "GraphQL",
  "Playwright",
  "Firebase",
  "LLM",
];

const profileImageSrc = withBasePath("/images/profile/kim-gyeongsu-grad-profile.jpg");

export default function About() {
  return (
    <Container
      as="section"
      size="wide"
      id="about"
      className="border-t border-grid-line py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 md:grid-cols-12"
      >
        <motion.div
          variants={fadeInLeft}
          className="flex flex-col gap-8 md:col-span-4"
        >
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              {"// Profile"}
            </span>
            <div className="mt-3 h-[1px] w-full bg-deep-navy opacity-10" />
          </div>

          <figure className="overflow-hidden rounded-sm border border-grid-line bg-neutral-50">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={profileImageSrc}
                alt="Kim Gyeongsu portrait"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <figcaption className="border-t border-grid-line px-5 py-4">
              <p className="font-mono text-xs tracking-[0.22em] text-serene-blue uppercase">
                Kim Gyeongsu
              </p>
              <p className="mt-2 text-sm font-light text-neutral-600">
                Backend Developer
              </p>
            </figcaption>
          </figure>

          <div className="rounded-sm border border-grid-line bg-neutral-50/70 p-6">
            <h2 className="text-3xl leading-tight font-serif font-bold text-deep-navy md:text-4xl">
              유지보수 비용이 낮은
              <br />
              백엔드를 설계합니다
            </h2>
            <p className="mt-4 text-base leading-relaxed font-light text-neutral-600">
              데이터 수집 시스템, 멀티모달 입력 처리, 자동화 워크플로우를
              서비스 관점에서 연결하는 일을 좋아합니다.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="border-b border-grid-line pb-4">
                <p className="font-serif text-2xl text-deep-navy">{item.label}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                <p className="mt-1 font-mono text-[11px] tracking-widest text-neutral-500 uppercase">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 md:col-span-8">
          <motion.div variants={fadeInUp}>
            <span className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              Impact
            </span>
            <div className="mt-3 h-[1px] w-full bg-deep-navy opacity-10" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed font-light text-neutral-700"
          >
            DOM 변경이 잦은 환경에서도 코드 수정 없이 92%의 데이터 수집
            성공률을 유지했고, 이미지 전처리 개선으로 내부 테스트 기준 LLM
            인식률을 20% 이상 높였습니다. 수치가 남는 문제를 정의하고,
            유지보수 비용을 줄이는 방식으로 해결하는 일을 좋아합니다.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              Stack
            </span>
            <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            <p className="text-lg leading-relaxed font-light text-neutral-700">
              Python, Django, FastAPI 기반 백엔드와 GraphQL, Playwright,
              Firebase, Gemini를 조합해 데이터 수집부터 인증, 응답 설계까지
              다룹니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              Focus
            </span>
            <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed font-light text-neutral-700"
          >
            최근에는 시맨틱 크롤링, 멀티모달 입력 처리, 운영 가능한 API
            구조를 중심으로 작업하고 있습니다. 프롬프트 실험에만 머무르지
            않고, 비동기 처리, 인증, 오류 제어, 배포까지 연결되는 서비스를
            만드는 방향에 집중합니다.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 pt-2 opacity-30"
          >
            <div className="h-[1px] w-16 bg-deep-navy" />
            <span className="font-mono text-xs text-neutral-500">◆</span>
            <div className="h-[1px] w-4 bg-deep-navy" />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
