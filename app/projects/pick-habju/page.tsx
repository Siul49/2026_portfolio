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
      "지도 검색 결과만으로는 예약 가능한 지점, 실제 방 정보, 가격 정보가 섞여 있어 그대로 보여주기 어려웠습니다.",
  },
  {
    title: "Team Role",
    description:
      "백엔드 팀 리드로 어떤 후보를 살리고 어떤 방을 버릴지, 누락 정보는 어디까지 다시 확인할지 기준을 정리했습니다.",
  },
  {
    title: "Learning",
    description:
      "데이터 수집은 많이 모으는 것보다, 끝까지 믿고 보여줄 수 있는 정보만 남기는 설계가 더 중요하다는 점을 배웠습니다.",
  },
];

const pipelineSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "후보를 넓게 모으기",
    description:
      "이수·상도·사당·흑석·홍대입구·합정역처럼 실제 수요가 높은 지역을 먼저 돌리고, 지도 검색 결과 중 예약 가능한 지점만 남겼습니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "상세 정보를 덧입히기",
    description:
      "남은 지점마다 방 목록, 가격, 이미지, 좌표, 역세권 정보를 다시 조회해 검색 결과에 바로 쓸 수 있는 형태로 채웠습니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "비어 있는 값 다시 확인하기",
    description:
      "대표 키워드나 전화번호가 비어 있으면 바로 버리지 않고, 정보 탭과 전화번호 보기 흐름까지 따라가며 한 번 더 복구했습니다.",
  },
  {
    step: 4,
    variant: "muted" as const,
    title: "예약 가능한 방만 남기기",
    description:
      "레슨·레코딩처럼 목적이 다른 방은 제외하고, 가격과 예약 시간 정보가 있는 방만 남겨 실제 검색 결과에 가까운 데이터로 정리했습니다.",
  },
];

const collectionLayers = [
  {
    label: "1차 선별",
    title: "예약 가능한 지점만 남기는 1차 선별",
    description:
      "지도 검색 결과를 그대로 쓰지 않고, 실제 예약으로 이어질 수 있는 지점만 남기며 중복 후보를 정리했습니다.",
  },
  {
    label: "누락 복구",
    title: "비어 있는 필드를 끝까지 메우는 보강",
    description:
      "대표 키워드나 연락처처럼 비어 있으면 아쉬운 정보는 한 번 더 확인해 빈칸을 줄였습니다.",
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
              Pick Habju는 합주실 정보를 넓게 모은 뒤, 실제 예약 가능한 지점만
              남기고, 비어 있는 정보는 다시 확인해 채우는 방식으로 데이터를
              구성한 프로젝트입니다.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              후보 수집, 누락 복구, 예약 기준 필터
            </p>
            <div className="mt-6">
              <Button href="/projects/pick-habju/demo">OPEN COLLECTION FLOW DEMO</Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Back-end Lead" },
                { label: "FOCUS", value: "후보 수집 설계, 필터링 규칙, API 구조" },
                { label: "BASELINE", value: "2026 운영 기준" },
              ]}
            />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            왜 이렇게 모았는가
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            한 번의 파싱으로 끝내면 빠를 수는 있지만, 실제로는 예약 불가능한
            지점이 섞이거나 필요한 정보가 비어 있는 경우가 많았습니다. 그래서
            후보를 넓게 모은 뒤 다시 좁히고, 비어 있으면 한 번 더 확인하는
            구조로 수집 단계를 설계했습니다.
          </p>

          <div className="mt-8 border-l border-serene-blue pl-5">
            <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              설계 포인트
            </p>
            <p className="mt-3 text-4xl font-serif text-deep-navy">4단계</p>
            <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">
              후보 수집, 상세 조회, 누락 복구, 예약 기준 필터를 나눠 한 단계에서
              놓친 정보를 다음 단계에서 다시 보완하도록 구성했습니다.
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
              {"/// 2026 Current Collection Flow"}
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
            한 단계에서 끝내지 않고, 후보 선별, 상세 조회, 누락 복구, 예약 기준
            필터를 거치며 실제로 보여줘도 되는 정보만 남기는 방향으로 수집
            흐름을 다듬었습니다.
          </p>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            핵심 설계
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-2">
          {collectionLayers.map((item) => (
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
            PM Takeaway
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="leading-relaxed font-light text-neutral-600">
            Pick Habju를 하며 저는 기술 스택보다 먼저 합의해야 하는 것이 어떤
            후보를 살리고 버릴지, 누락 정보를 어디까지 복구할지, 문의가 필요한 방을
            실패로 볼지 보류로 볼지 같은 운영 기준이라는 점을 배웠습니다. 현재
            수집 흐름을 정리한 경험은 문제 정의와 우선순위 설계에 더 가까운
            배움으로 남았습니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="pick-habju" />
    </article>
  );
}
