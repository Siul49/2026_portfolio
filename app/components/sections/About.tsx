"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, staggerContainer } from "../../lib/animations";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import { withBasePath } from "../../lib/site";

const highlights = [
  {
    label: "Lead",
    description: "Pick Habju 백엔드 팀 리드 경험",
    note: "작업 공유 · 이슈 정리 · 업무 분배",
  },
  {
    label: "Why PM",
    description: "개발 경험을 PM의 언어로 확장 중",
    note: "문제 정의 · 우선순위 · 팀 정렬",
  },
  {
    label: "MVP",
    description: "실제 불편에서 서비스 아이디어 출발",
    note: "숭실대 체육관 예약 문제에 관심",
  },
];

const stack = [
  "Python",
  "FastAPI",
  "GraphQL",
  "Playwright",
  "Firebase",
  "React",
  "LLM",
];

const mindsetCards = [
  {
    title: "Why PM",
    description:
      "백엔드 개발자로 프로젝트를 진행하며, 좋은 서비스를 만드는 데에는 개발 역량뿐 아니라 무엇을 왜 먼저 만들지 정하고 팀이 같은 방향으로 움직이게 만드는 역할이 중요하다는 것을 느꼈습니다.",
  },
  {
    title: "How I Work",
    description:
      "협업에서는 팀원들이 흔들리지 않도록 기준을 분명히 세우는 것을 중요하게 생각합니다. 누가 무엇을 맡고 있고 어디서 막히는지 빠르게 공유해야 일정이 밀리지 않는다고 믿습니다.",
  },
  {
    title: "What I Learned",
    description:
      "깊게 몰입하는 데에는 노력만큼이나 페이스 조절과 회복 관리가 중요하다는 것을 배웠습니다. 지금도 목표를 끝까지 책임지고 완주하기 위해 제 상태와 일정을 함께 관리합니다.",
  },
  {
    title: "What I Want To Build",
    description:
      "숭실대학교 체육관 예약처럼 학생들이 반복적으로 겪는 불편을 MVP로 풀어보고 싶습니다. 빈 시간 확인, 예약 신청, 승인 여부를 한 흐름으로 묶는 서비스에 관심이 있습니다.",
  },
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
        className="space-y-12"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div
            variants={fadeInLeft}
            className="flex flex-col gap-6 md:col-span-4"
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
                  Product-minded Builder
                </p>
              </figcaption>
            </figure>

            <motion.div
              variants={fadeInUp}
              className="rounded-sm border border-grid-line bg-neutral-50/70 p-6"
            >
              <h2 className="text-3xl leading-tight font-serif font-bold text-deep-navy md:text-4xl">
                개발 경험을 바탕으로
                <br />
                PM을 준비하고 있습니다
              </h2>
              <p className="mt-4 text-base leading-relaxed font-light text-neutral-600">
                백엔드 개발자로 프로젝트를 해오며, 구현 자체보다 문제를 어떻게
                정의하고 팀이 같은 방향으로 움직이게 만드는지가 더 중요할 때가
                많다는 것을 배웠습니다.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-8 md:col-span-8">
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                Why PM
              </span>
              <div className="mt-3 h-[1px] w-full bg-deep-navy opacity-10" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-4xl text-lg leading-relaxed font-light text-neutral-700"
            >
              픽합주 프로젝트에서 백엔드 팀 리드를 맡아 작업 상황을 공유하고,
              이슈를 미리 정리하며 업무를 나눈 경험이 있습니다. 그 과정에서
              서비스를 잘 만드는 데에는 개발 역량만큼이나 무엇을 왜 먼저 만들지
              정하고, 팀이 같은 방향으로 움직이게 만드는 역할이 중요하다는 것을
              느꼈습니다. 그래서 지금은 개발 경험을 PM의 언어로 확장하고 싶습니다.
            </motion.p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {mindsetCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className={`rounded-sm border p-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-neutral-300/80 hover:bg-white/92 hover:shadow-[0_12px_32px_rgba(16,33,58,0.05)] ${
                    index % 2 === 0
                      ? "border-grid-line bg-white/68 shadow-[0_10px_28px_rgba(16,33,58,0.025)]"
                      : "border-grid-line bg-neutral-50/82 shadow-[0_10px_28px_rgba(16,33,58,0.02)]"
                  }`}
                >
                  <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed font-light text-neutral-600">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="rounded-sm border border-grid-line bg-white/70 p-6 md:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
                <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                  Developer Foundation
                </span>
                <div className="h-[1px] flex-1 bg-deep-navy opacity-10" />
              </div>

              <p className="mt-5 text-lg leading-relaxed font-light text-neutral-700">
                직접 백엔드와 프런트 프로젝트를 진행해본 경험 덕분에, 개발자와는
                구현 범위와 리스크를 현실적으로 이야기하고 디자이너와는 화면
                흐름과 상태를 기준으로 대화할 수 있습니다. 저는 이 기반 위에서
                팀과 서비스를 함께 움직이게 만드는 PM으로 성장하고 싶습니다.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="rounded-sm border border-grid-line bg-neutral-50/70 p-6"
            >
              <p className="font-serif text-2xl text-deep-navy">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-widest text-neutral-500 uppercase">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
