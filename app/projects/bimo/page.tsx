"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";
import ProjectNav from "../../components/ui/ProjectNav";

const summaryCards = [
  {
    title: "Service",
    description:
      "탑승권 이미지와 항공편 문맥을 결합해 리뷰와 비행 팁을 생성하는 개인 비행 컨시어지 서비스입니다.",
  },
  {
    title: "Backend Scope",
    description:
      "FastAPI API, Firebase 기반 사용자 관리, 멀티모달 입력 처리, Gemini 응답 설계를 함께 맡았습니다.",
  },
  {
    title: "Result",
    description:
      "이미지 전처리 개선으로 내부 테스트 기준 LLM 인식률을 20% 이상 높였습니다.",
  },
];

const pipelineSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "Image Preprocessing",
    description:
      "조명 반사와 구겨짐이 있는 탑승권 이미지를 보정해 텍스트 영역을 선명하게 만들고, 멀티모달 모델 입력 품질을 올렸습니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "Structured Extraction & Prompt Builder",
    description:
      "Gemini가 항공편명, 시간, 좌석 정보, 여행 문맥을 구조화된 형태로 읽도록 입력 포맷과 프롬프트 빌더를 분리했습니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "Auth, API, and Response Delivery",
    description:
      "소셜 로그인, 서비스 전용 JWT, 사용자 상태 저장을 연결해 리뷰와 팁 생성이 한 번의 API 흐름 안에서 이어지도록 구성했습니다.",
  },
];

export default function BimoDetail() {
  return (
    <article className="mx-auto min-h-screen max-w-5xl px-8 pt-32 pb-20 font-sans text-deep-navy">
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">BIMO</SectionHeading>
            <p className="max-w-3xl text-xl leading-relaxed font-light text-neutral-600">
              이미지 전처리 최적화로 내부 테스트 기준 LLM 인식률을 20% 이상
              개선한 멀티모달 비행 컨시어지 백엔드.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              Auth, multimodal parsing, and response generation
            </p>
            <div className="mt-6">
              <Button href="/projects/bimo/demo">OPEN LIVE DEMO ↗</Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Back-end Lead" },
                { label: "STACK", value: "FastAPI, Firebase, Gemini 1.5" },
                { label: "SCOPE", value: "Auth, JWT, Multimodal API" },
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
            사용자는 탑승권 한 장만 올리면 되었고, 서비스는 항공편 정보를 읽은
            뒤 리뷰와 행동 가이드를 생성해야 했습니다. BIMO에서는 정확도와
            지연 시간, 두 가지 사용자 경험을 동시에 다뤄야 했습니다.
          </p>

          <div className="mt-8 border-l border-serene-blue pl-5">
            <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              Key Result
            </p>
            <p className="mt-3 text-4xl font-serif text-deep-navy">20%+</p>
            <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">
              내부 테스트 기준 LLM 인식률 개선
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
              {"/// Multimodal Backend Pipeline"}
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
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Handling Latency
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6 leading-relaxed font-light text-neutral-600">
            멀티모달 모델의 추론 시간은 평균 3~5초 수준이었기 때문에, 사용자가
            이 시간을 단순 대기로 느끼지 않게 만드는 것이 중요했습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5 font-light text-neutral-600">
            <li>
              업로드 직후 썸네일과 진행 상태를 먼저 보여줘 체감 로딩 시간을
              줄였습니다.
            </li>
            <li>
              FastAPI 비동기 처리로 이미지 분석과 응답 생성을 분리해 동시 요청
              처리 효율을 높였습니다.
            </li>
            <li>
              인증, 상태 저장, Gemini 응답을 한 흐름으로 연결해 서비스형 백엔드
              경험을 만들었습니다.
            </li>
          </ul>
        </div>
      </section>

      <ProjectNav currentSlug="bimo" />
    </article>
  );
}
