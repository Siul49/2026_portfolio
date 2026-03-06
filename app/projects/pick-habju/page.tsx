"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";
import ProjectNav from "../../components/ui/ProjectNav";

const summaryCards = [
  {
    title: "Problem",
    description:
      "예약 플랫폼의 DOM 구조가 바뀔 때마다 CSS 선택자 기반 크롤러가 쉽게 깨졌습니다.",
  },
  {
    title: "Action",
    description:
      "HTML 정제, 의미 기반 추출, 스키마 검증을 연결한 시맨틱 크롤링 파이프라인을 설계했습니다.",
  },
  {
    title: "Result",
    description:
      "2024 프로토타입 기준 코드 수정 없이 92%의 데이터 수집 성공률을 유지했습니다.",
  },
];

const pipelineSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "Raw HTML Cleaning",
    description:
      "Trafilatura로 광고와 내비게이션 노이즈를 제거하고, 의미 추출에 필요한 본문 텍스트만 남겼습니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "Semantic Extraction",
    description:
      "LLM이 가격, 위치, 옵션처럼 사람이 읽는 의미 단위로 비정형 텍스트를 구조화하도록 프롬프트를 설계했습니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "Schema Validation",
    description:
      "Pydantic 검증과 재시도 로직으로 불완전한 응답을 걸러내고, 후속 처리에서 사용할 수 있는 형태로 고정했습니다.",
  },
];

export default function PickHabjuDetail() {
  return (
    <article className="mx-auto min-h-screen max-w-5xl px-8 pt-32 pb-20">
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">Pick Habju</SectionHeading>
            <p className="max-w-3xl text-xl leading-relaxed font-light text-neutral-600">
              2024 프로토타입 기준, 코드 수정 없이 92%의 데이터 수집 성공률을
              유지한 합주실 예약 시맨틱 크롤링 파이프라인.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              Prototype snapshot of a semantic crawling experiment
            </p>
            <div className="mt-6">
              <Button href="/projects/pick-habju/demo">OPEN PROTOTYPE DEMO ↗</Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Back-end Lead" },
                { label: "STACK", value: "Python, Django, GraphQL, LLM" },
                { label: "VERSION", value: "2024 Prototype" },
              ]}
            />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Impact First
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            합주실 예약 데이터는 외부 플랫폼 구조에 종속되기 쉬웠고, 작은 UI
            변경만으로도 수집 파이프라인이 흔들렸습니다. 이 프로젝트의 목표는
            “더 잘 읽는 크롤러”가 아니라 “덜 깨지는 수집 시스템”을 만드는
            것이었습니다.
          </p>

          <div className="mt-8 border-l border-serene-blue pl-5">
            <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              Key Result
            </p>
            <p className="mt-3 text-4xl font-serif text-deep-navy">92%</p>
            <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">
              코드 수정 없이 데이터 수집 성공률 유지
            </p>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {summaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-sm border border-grid-line bg-neutral-50/70 p-5"
              >
                <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                  {card.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed font-light text-neutral-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-grid-line bg-neutral-50 p-8">
            <h4 className="mb-6 font-mono text-xs tracking-widest text-serene-blue uppercase">
              {"/// Solution Pipeline"}
            </h4>
            <div className="space-y-6">
              {pipelineSteps.map((step, index) => (
                <div key={step.step}>
                  <div className="flex items-start gap-4">
                    <StepIndicator step={step.step} variant={step.variant} className="mt-1" />
                    <div>
                      <strong className="text-sm text-deep-navy">{step.title}</strong>
                      <p className="mt-1 text-sm leading-relaxed font-light text-neutral-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="my-4 ml-4 h-6 w-[1px] bg-neutral-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed font-light text-neutral-600">
            이 케이스 스터디는 최신 메인 브랜치 전체가 아니라, 2024년
            프로토타입에서 검증한 시맨틱 크롤링 실험을 기준으로 정리했습니다.
            저장소 버전과 포트폴리오 설명의 맥락이 어긋나지 않도록 버전 범위를
            명시했습니다.
          </p>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Why It Mattered
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="leading-relaxed font-light text-neutral-600">
            CSS 선택자 재수정에 쓰이던 시간을 줄이면서, 개발자가 수집 안정성과
            비즈니스 로직 개선에 더 집중할 수 있게 만들었습니다. 이 경험은 이후
            데이터 파이프라인을 설계할 때 “정확도”뿐 아니라 “운영 시
            유지보수 비용”을 함께 보게 만든 기준점이 되었습니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="pick-habju" />
    </article>
  );
}
