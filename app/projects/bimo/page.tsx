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
    title: "Decision",
    description:
      "정확도만큼 사용자 대기 시간과 흐름 설계가 중요하다고 보고, 멀티모달 처리와 응답 경험을 함께 다뤘습니다.",
  },
  {
    title: "Learning",
    description:
      "기술 성능이 좋아도 사용자가 느끼는 흐름이 불편하면 서비스 완성도가 떨어진다는 점을 배웠습니다.",
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
              탑승권 한 장으로 리뷰와 비행 팁을 만드는 경험을 설계하며,
              정확도뿐 아니라 사용자의 대기 시간과 흐름 설계가 중요하다는 점을
              배운 프로젝트입니다.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              User flow, latency, and multimodal backend design
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
            What I Learned
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="mb-6 leading-relaxed font-light text-neutral-600">
            BIMO에서는 모델 성능을 높이는 것만으로는 충분하지 않았습니다.
            사용자가 지금 무엇을 기다리고 있는지 이해할 수 있어야 했고,
            핵심 시나리오를 먼저 선명하게 정리하는 일이 중요했습니다.
          </p>
          <ul className="list-disc space-y-2 pl-5 font-light text-neutral-600">
            <li>
              사용자는 모델 정확도보다도 "지금 어떤 단계가 진행 중인지"를 먼저
              체감한다는 점을 배웠습니다.
            </li>
            <li>
              한 번에 많은 기능을 올리기보다, 핵심 입력과 응답 흐름을 먼저
              선명하게 만드는 것이 서비스 완성도에 더 중요했습니다.
            </li>
            <li>
              기술 선택도 결국 사용자 경험과 일정 사이의 균형을 잡는 의사결정이라는
              점에서 PM 관점과 맞닿아 있다는 것을 느꼈습니다.
            </li>
          </ul>
        </div>
      </section>

      <ProjectNav currentSlug="bimo" />
    </article>
  );
}
