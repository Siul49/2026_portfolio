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
      "네이버 지도 검색 결과만으로는 예약 가능 지점, 가격, 방 목록이 한 번에 정리되지 않아 후보 수집과 상세 보강이 분리된 흐름이 필요했습니다.",
  },
  {
    title: "Team Role",
    description:
      "백엔드 팀 리드로 수집 기준과 예외 처리 원칙을 정하고, 어떤 데이터를 남기고 버릴지 합의하며 크롤러와 서비스 레이어 흐름을 정리했습니다.",
  },
  {
    title: "Learning",
    description:
      "현재 코드는 단순 파싱보다 후보를 넓게 모으고, 다시 좁히고, 누락 정보를 복구하는 운영 규칙이 더 중요하다는 점을 보여줬습니다.",
  },
];

const pipelineSteps = [
  {
    step: 1,
    variant: "navy" as const,
    title: "Priority-Area Discovery",
    description:
      "이수·상도·사당·흑석·홍대입구·합정역 쿼리를 순차적으로 돌리고, Playwright로 네이버 지도의 Apollo state를 읽어 bookingBusinessId가 있는 예약 지점만 추렸습니다.",
  },
  {
    step: 2,
    variant: "blue" as const,
    title: "Booking GraphQL Enrichment",
    description:
      "선별한 businessId마다 business, bizItems, nearSubway를 조회해 지점 설명, 방 목록, 가격, 이미지, 좌표, 역세권 정보를 채웠습니다.",
  },
  {
    step: 3,
    variant: "muted" as const,
    title: "Fallback Recovery",
    description:
      "business 응답이 비어도 bizItems가 있으면 fallback payload로 수집을 이어가고, 대표 키워드와 전화번호가 비면 정보 탭과 전화번호 보기 흐름으로 다시 복구했습니다.",
  },
  {
    step: 4,
    variant: "muted" as const,
    title: "Reservation-Aware Filtering",
    description:
      "레슨·레코딩 라벨은 제외하고, price·bookingTimeUnitCode·bookingPrecautionJson 같은 예약 메타데이터가 있는 방만 남겼습니다. 문의 필요 room은 별도 표식으로 유지했습니다.",
  },
];

const collectionLayers = [
  {
    label: "Discovery",
    title: "예약 가능한 지점만 남기는 1차 선별",
    description:
      "지도 검색 결과에서 bookingBusinessId가 없는 place-only 항목은 제외하고, 우선 지역 쿼리별 source_queries를 함께 들고 가며 후보를 중복 제거합니다.",
  },
  {
    label: "Recovery",
    title: "비어 있는 필드를 끝까지 메우는 보강",
    description:
      "대표 키워드는 정보 탭에서, 전화번호는 전화번호 보기와 /rest/phone 응답에서 복구합니다. business 응답이 비어도 rooms가 있으면 수집을 중단하지 않습니다.",
  },
];

const assetColumns = [
  {
    title: "System",
    items: [
      "NaverMapCrawler는 Playwright에서 window.__APOLLO_STATE__를 읽어 PlaceSummary, PlaceDetail, BookingBusiness를 한 번에 병합합니다.",
      "NaverRoomFetcher는 Booking GraphQL의 business, bizItems, nearSubway를 조회하고, business가 비어도 rooms가 있으면 fallback payload로 계속 진행합니다.",
      "RoomParserService는 룸 이름과 설명에 regex를 적용해 인원, 추가요금, 1시간 예약 가능 여부, 시간대별 가격 설정을 구조화합니다.",
    ],
  },
  {
    title: "Filtering",
    items: [
      "지점명 -> 대표 키워드 -> 소개글 -> 룸 이름 순의 waterfall 로직으로 합주실 도메인인지 판별합니다.",
      "room name에 레슨·레코딩이 들어가면 제외하고, 예약 메타데이터가 없는 방도 걸러냅니다.",
      "당일 문의 필요 여부는 structured text와 policy text를 다시 확인해 room을 버릴지 표식만 남길지 구분합니다.",
    ],
  },
  {
    title: "Operations",
    items: [
      "지도 검색과 GraphQL 상세조회 모두 rate-limit retry, backoff, jitter를 두어 burst를 줄였습니다.",
      "NAVER_COOKIE_HEADER와 storage state를 받아 인증 쿠키를 재사용할 수 있게 했습니다.",
      "대표 키워드와 전화번호가 비면 정보 탭, 전화번호 보기, /rest/phone 응답까지 따라가며 누락 필드를 채웁니다.",
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
              현재 Pick Habju는 우선 지역 쿼리 수집, Booking GraphQL 상세조회,
              정보 탭 보강, 예약 메타데이터 필터를 묶어 실제 예약 가능한
              합주실 정보를 채우는 프로젝트입니다.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.24em] text-serene-blue uppercase">
              Priority-area collection, GraphQL enrichment, and reservation-aware filtering
            </p>
            <div className="mt-6">
              <Button href="/projects/pick-habju/demo">OPEN COLLECTION FLOW DEMO</Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta
              items={[
                { label: "ROLE", value: "Back-end Lead" },
                { label: "FOCUS", value: "Crawler Orchestration, Filtering Rules, API Design" },
                { label: "BASELINE", value: "2026 Current Code" },
              ]}
            />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Current Collection
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            현재 코드는 단일 페이지에서 텍스트를 뽑아내는 수준이 아니라,
            후보를 넓게 모으고, 예약 가능한 business만 좁히고, 누락 정보를
            다시 보강하는 다단계 수집 흐름으로 발전했습니다. 이 설명은 현재
            dev 브랜치의 crawler와 service 코드를 기준으로 다시 정리했습니다.
          </p>

          <div className="mt-8 border-l border-serene-blue pl-5">
            <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
              Current Baseline
            </p>
            <p className="mt-3 text-4xl font-serif text-deep-navy">2026</p>
            <p className="mt-2 text-sm leading-relaxed font-light text-neutral-600">
              우선 지역 쿼리, Booking GraphQL, 정보 탭 보강, 예약 메타데이터
              필터를 기준으로 설명을 최신화했습니다.
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
            이 페이지와 데모 설명은 현재 dev 브랜치에서 실제로 동작하는
            candidate discovery, GraphQL enrichment, fallback recovery, room
            filtering 규칙을 기준으로 다시 맞췄습니다.
          </p>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-12 border-t border-grid-line pt-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 text-lg font-bold font-serif text-deep-navy">
            Current Collection Layers
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
            What The Current Code Does
          </h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            이 페이지는 과거 실험 요약이 아니라, 현재 수집 코드가 실제로 어떤
            단계와 규칙으로 움직이는지 보여주는 설명에 맞춰 다시 썼습니다.
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
            Pick Habju를 하며 저는 기술 스택보다 먼저 합의해야 하는 것이 어떤
            후보를 살리고 버릴지, 누락 정보를 어디까지 복구할지, 문의 필요 room을
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
