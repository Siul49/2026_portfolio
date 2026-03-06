"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";
import ProjectNav from "../../components/ui/ProjectNav";

export default function PickHabjuDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">
              Pick Habju
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              기존 크롤러의 &lsquo;부서짐(Brittleness)&rsquo;을 해결하다: <br />
              LLM 기반의 의미론적 데이터 추출(Semantic Extraction) 파이프라인
            </p>
            <div className="mt-6">
              <Button href="/projects/pick-habju/demo">
                TRY LIVE DEMO ↗
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta items={[
              { label: "ROLE", value: "Back-end Lead" },
              { label: "STACK", value: "Python, Django, GraphQL" },
              { label: "YEAR", value: "2024 — Present" },
            ]} />
          </div>
        </div>
      </header>

      {/* Content - Technical Deep Dive */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif text-deep-navy">Why LLM for Crawling?</h3>
          <p className="text-sm text-neutral-500 leading-relaxed text-justify">
            네이버 지도와 같은 대형 플랫폼은 수시로 DOM 구조를 변경합니다. `div.class_name`에 의존하는 기존 크롤러는 매번 수정이 필요했습니다. 우리는 HTML 구조가 아닌 <strong>콘텐츠의 의미</strong>를 읽는 시스템이 필요했습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="bg-neutral-50 p-8 rounded-lg border border-grid-line mb-12">
            <h4 className="font-mono text-xs text-serene-blue mb-6 uppercase tracking-widest">{"/// Robust Extraction Architecture"}</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <StepIndicator step={1} variant="navy" />
                <div>
                  <strong className="text-sm text-deep-navy">Raw HTML Cleaning</strong>
                  <p className="font-light text-xs text-neutral-400 mt-1">Trafilatura를 사용하여 광고, 내비게이션 등 불필요한 노이즈 태그를 제거하고 순수 본문 텍스트만 추출합니다.</p>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-neutral-200 ml-4 my-2"></div>
              <div className="flex items-center gap-4">
                <StepIndicator step={2} variant="blue" />
                <div>
                  <strong className="text-sm text-deep-navy">Semantic Parsing (Llama 3)</strong>
                  <p className="font-light text-xs text-neutral-400 mt-1">Local LLM에 적응형 프롬프트를 주입하여, 비정형 텍스트에서 &lsquo;가격&rsquo;, &lsquo;위치&rsquo;, &lsquo;옵션&rsquo; 정보를 JSON으로 변환합니다.</p>
                </div>
              </div>
              <div className="h-6 w-[1px] bg-neutral-200 ml-4 my-2"></div>
              <div className="flex items-center gap-4">
                <StepIndicator step={3} variant="muted" />
                <div>
                  <strong className="text-sm text-deep-navy">Schema Validation</strong>
                  <p className="font-light text-xs text-neutral-400 mt-1">Pydantic을 활용해 추출된 데이터의 타입을 엄격하게 검증하고, 오류 발생 시 재시도(Retry) 로직을 수행합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold mb-6 text-deep-navy">Impact: Zero Maintenance</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            시맨틱 추출 파이프라인 도입 이후, 타겟 사이트의 대규모 UI 개편이 두 차례 있었음에도 불구하고 <strong>코드 수정 없이 92%의 데이터 수집 성공률</strong>을 유지했습니다. 이는 유지보수 비용을 획기적으로 절감하고, 개발자가 비즈니스 로직에만 집중할 수 있게 만들었습니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="pick-habju" />
    </article>
  );
}
