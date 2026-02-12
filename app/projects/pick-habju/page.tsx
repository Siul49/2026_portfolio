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
            <p className="text-xl text-neutral-500 font-light max-w-2xl">
              LLM 기반 의미론적 추출(Semantic Extraction)을 도입하여, 기존 크롤러의 '취약성(Brittleness)'을 해결하다.
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
          <h3 className="text-lg font-bold mb-4 font-serif text-deep-navy">The Challenge</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            네이버 지도의 잦은 UI 변경으로 인해, 기존의 규칙 기반(Rule-based) 크롤러는 지속적으로 파손되었습니다. 단순히 구조(Structure)가 아닌 콘텐츠의 맥락(Context)을 이해하는 견고한 시스템이 필요했습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="bg-neutral-50 p-8 rounded-lg border border-grid-line mb-8">
            <h4 className="font-mono text-xs text-serene-blue mb-4">/// SOLUTION ARCHITECTURE</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <StepIndicator step={1} variant="navy" />
                <p className="font-light"><strong>Trafilatura</strong>로 원본 HTML에서 불필요한 노이즈 제거.</p>
              </div>
              <div className="h-8 w-[1px] bg-neutral-200 ml-4"></div>
              <div className="flex items-center gap-4">
                <StepIndicator step={2} variant="blue" />
                <p className="font-light"><strong>Ollama (Llama 3)</strong>에 주입하여 적응형 프롬프트로 정보 추출.</p>
              </div>
              <div className="h-8 w-[1px] bg-neutral-200 ml-4"></div>
              <div className="flex items-center gap-4">
                <StepIndicator step={3} variant="muted" />
                <p className="font-light"><strong>BIMO</strong> 로직을 통해 스키마 검증 후 DB 저장.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold mb-6 mt-12 text-deep-navy">Key Engineering Decisions</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            깨지기 쉬운 CSS 선택자에 의존하는 대신, <strong>시맨틱 추출 파이프라인(Semantic Extraction Pipeline)</strong>을 구축했습니다. HTML을 비정형 텍스트로 취급하고 LLM의 독해 능력을 활용함으로써, 원본 사이트의 레이아웃이 대폭 변경되어도 <strong>92%의 데이터 정규화 성공률</strong>을 달성했습니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="pick-habju" />
    </article>
  );
}
