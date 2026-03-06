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
      "합주실 예약 데이터가 외부 플랫폼 구조에 크게 의존해, 작은 UI 변경에도 쉽게 깨지는 상태였습니다.",
  },
  {
    title: "Team Role",
    description:
      "백엔드 팀 리드로 작업 상황을 공유하고, 이슈를 미리 정리하며, 팀원들이 안정적으로 움직일 수 있게 업무를 나눴습니다.",
  },
  {
    title: "Learning",
    description:
      "좋은 서비스는 더 복잡한 기술보다, 문제를 어떻게 정의하고 팀의 우선순위를 어떻게 맞추는지에서 더 크게 갈린다는 점을 배웠습니다.",
  },
];

const pipelineSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "Raw HTML Cleaning",
    description:
      "Trafilatura로 광고, 네비게이션, 장식성 마크업을 걷어내고 예약 상세를 읽는 데 필요한 본문 텍스트만 남겼습니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "Semantic Extraction",
    description:
      "가격, 인원, 옵션처럼 화면 위치가 아니라 의미 단위로 읽어야 하는 정보를 LLM이 JSON으로 추출하도록 프롬프트를 설계했습니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "Schema Validation",
    description:
      "Pydantic 검증과 재시도 로직으로 불완전한 응답을 걸러내고, 이후 API나 저장소에서 바로 사용할 수 있는 형태로 고정했습니다.",
  },
];

const yearlyScope = [
  {
    label: "2024",
    title: "Semantic Crawling Prototype",
    description:
      "예약 상세 HTML이 자주 바뀌는 환경에서도 DOM 의존도를 낮춘 수집 실험을 만들고, 코드 수정 없이 92% 수집 성공률을 확인했습니다.",
  },
  {
    label: "2026",
    title: "Service-Shaped Archive",
    description:
      "FastAPI 기반 가용 시간 조회 API, favorites API, Supabase 저장소, 지역 단위 수집 서비스, CI/CD와 테스트 자산으로 프로젝트 스코프를 확장했습니다.",
  },
];

const assetColumns = [
  {
    title: "System",
    items: [
      "실험을 끝내는 대신, 예약 가능 시간 조회와 favorites 같은 서비스형 API 자산으로 확장했습니다.",
      "Supabase 저장소를 붙이며 프로토타입을 데이터 구조와 운영 관점으로 다시 정리했습니다.",
      "전국 단위 수집과 병렬 LLM 파싱 구조를 서비스 레이어에 분리해 재사용 가능성을 높였습니다.",
    ],
  },
  {
    title: "Coordination",
    items: [
      "팀이 같은 목표를 보게 하려면 기술 설명보다 먼저 기준과 우선순위를 맞추는 일이 필요하다는 걸 체감했습니다.",
      "누가 어떤 작업을 맡고 있고 어디서 막히는지 공유하는 방식이 일정 안정성에 직접 연결된다는 걸 배웠습니다.",
      "구현보다 먼저 문제를 잘게 나누고, 지금 무엇을 풀어야 하는지 정리하는 역할의 중요성을 느꼈습니다.",
    ],
  },
  {
    title: "Operations",
    items: [
      "Rate limit, 예외 envelope, CORS, 테스트, CI/CD처럼 운영에 필요한 기본 자산을 함께 붙였습니다.",
      "프로토타입을 서비스로 확장할수록 기능보다 예외 처리와 회귀 확인이 더 중요하다는 점을 배웠습니다.",
      "2026 아카이브는 성과를 과장하기보다, 실험 이후 어떤 구조를 남겼는지 보여주는 근거로 정리했습니다.",
    ],
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
              합주실 예약 데이터를 덜 깨지게 읽는 실험에서 출발해, 백엔드 팀
              리드 경험과 2026 서비스 아카이브까지 연결된 프로젝트입니다.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              Problem framing, coordination, and semantic crawling
            </p>
            <div className="mt-6">
              <Button href="/projects/pick-habju/demo">OPEN PROTOTYPE DEMO</Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Back-end Lead" },
                { label: "FOCUS", value: "Problem Framing, Coordination, API Design" },
                { label: "SPAN", value: "2024 Prototype -> 2026 Archive" },
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
            이 프로젝트는 기술적 난이도보다, 팀이 어디에 집중해야 하는지를
            정하는 경험으로 더 오래 남았습니다. DOM 변화에 모두가 끌려가지
            않도록 "덜 깨지는 시스템"이라는 목표를 먼저 합의한 뒤 작업을
            나눴고, 그 기준이 프로젝트 전체의 방향을 잡아줬습니다.
          </p>

          <div className="mt-8 border-l border-serene-blue pl-5">
            <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              Key Result
            </p>
            <p className="mt-3 text-4xl font-serif text-deep-navy">92%</p>
            <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">
              2024 프로토타입 기준 코드 수정 없이 유지한 수집 성공률
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
              {"/// 2024 Semantic Pipeline"}
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
            포트폴리오 데모는 2024년에 검증한 semantic crawling 실험을 기준으로
            두었고, 아래 설명에는 2026 아카이브에서 실제로 남아 있는 서비스
            자산을 함께 반영했습니다.
          </p>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Scope By Year
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-2">
          {yearlyScope.map((item) => (
            <div
              key={item.label}
              className="rounded-sm border border-grid-line bg-neutral-50/70 p-6"
            >
              <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                {item.label}
              </p>
              <h4 className="mt-3 text-xl font-serif text-deep-navy">{item.title}</h4>
              <p className="mt-3 text-sm leading-relaxed font-light text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            What Grew In 2026
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            2024의 실험 성과만 남기는 대신, 2026년에 어떤 자산이 추가되며
            프로젝트가 서비스 형태로 확장됐는지를 함께 보여주고 싶었습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-3">
          {assetColumns.map((column) => (
            <div
              key={column.title}
              className="rounded-sm border border-grid-line bg-white/70 p-5"
            >
              <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed font-light text-neutral-600">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            PM Takeaway
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="leading-relaxed font-light text-neutral-600">
            Pick Habju를 하며 저는 개발이 잘 된다고 프로젝트가 자동으로 앞으로
            나아가지는 않는다는 것을 배웠습니다. 누가 어떤 문제를 먼저 풀지,
            진행 상황을 어떻게 공유할지, 막히는 지점을 언제 드러낼지를 정하는
            일이 중요했고, 이 경험이 PM 역할에 관심을 갖게 된 가장 큰 계기였습니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="pick-habju" />
    </article>
  );
}
