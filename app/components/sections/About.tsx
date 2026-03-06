"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "../../lib/animations";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import { withBasePath } from "../../lib/site";

const focusCards = [
  {
    title: "Lead",
    description: "픽합주에서 백엔드 팀 리드를 맡아 작업 공유, 이슈 정리, 업무 분배를 조율했습니다.",
  },
  {
    title: "Why PM",
    description: "구현보다 무엇을 왜 먼저 만들지 정하는 과정이 서비스 완성도에 더 크게 작용한다고 느꼈습니다.",
  },
  {
    title: "How I Work",
    description: "기준을 먼저 맞추고, 막히는 지점을 빠르게 공유해 팀이 흔들리지 않게 만드는 편입니다.",
  },
  {
    title: "MVP",
    description: "반복되는 불편을 작은 MVP로 검증하고, 사용자 반응으로 다음 우선순위를 정하는 방식에 관심이 있습니다.",
  },
];

const stack = ["Python", "FastAPI", "GraphQL", "Playwright", "Firebase", "React", "LLM"];

const profileImageSrc = withBasePath("/images/profile/kim-gyeongsu-grad-profile.jpg");

export default function About() {
  return (
    <Container
      as="section"
      size="wide"
      id="about"
      className="border-t border-grid-line py-24 md:py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <motion.div variants={fadeInLeft} className="flex flex-col gap-6 md:col-span-4">
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
                <p className="mt-2 text-sm font-light text-neutral-600">Product-minded Builder</p>
              </figcaption>
            </figure>

            <motion.div
              variants={fadeInUp}
              className="rounded-sm border border-grid-line bg-neutral-50/72 p-6"
            >
              <h2 className="text-[2.4rem] leading-[1.08] font-serif font-bold tracking-[-0.045em] text-deep-navy md:text-[2.9rem]">
                <span className="block">개발 경험을 바탕으로</span>
                <span className="mt-1.5 block text-[0.93em]">PM을 준비하고 있습니다</span>
              </h2>
              <p className="mt-4 text-[0.98rem] leading-[1.8] font-light text-neutral-600">
                구현보다 문제를 어떻게 정의하고 팀을 같은 방향으로 움직이게 만드는지가 더
                중요할 때가 많다는 점을 프로젝트를 통해 배웠습니다.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-6 md:col-span-8">
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                Brief Note
              </span>
              <div className="mt-3 h-[1px] w-full bg-deep-navy opacity-10" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl text-[1.02rem] leading-[1.8] font-light text-neutral-700 md:text-lg"
            >
              좋은 서비스는 구현량보다 문제 정의, 우선순위 설정, 팀 정렬에서 더 많이 결정된다는
              점을 배웠고, 지금은 그 경험을 PM의 언어로 확장하고 싶습니다.
            </motion.p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {focusCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className={`rounded-sm border p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-neutral-300/80 hover:bg-white/92 hover:shadow-[0_12px_32px_rgba(16,33,58,0.05)] ${
                    index % 2 === 0
                      ? "border-grid-line bg-white/70 shadow-[0_10px_28px_rgba(16,33,58,0.025)]"
                      : "border-grid-line bg-neutral-50/84 shadow-[0_10px_28px_rgba(16,33,58,0.02)]"
                  }`}
                >
                  <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.75] font-light text-neutral-600">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="rounded-sm border border-grid-line bg-white/72 p-6 md:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
                <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                  Developer Foundation
                </span>
                <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
              </div>

              <p className="mt-5 max-w-3xl text-[1rem] leading-[1.8] font-light text-neutral-700 md:text-[1.04rem]">
                백엔드와 프런트 프로젝트를 직접 해본 덕분에, 개발자와는 구현 범위와 리스크를
                현실적으로 이야기하고 디자이너와는 화면 흐름을 기준으로 대화할 수 있습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
