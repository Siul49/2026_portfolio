"use client";

import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";
import ProjectNav from "../../components/ui/ProjectNav";

export default function BimoDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto font-sans text-deep-navy">
      {/* Header */}
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading className="mb-6">
              BIMO
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl">
              Gemini Vision을 활용한 탑승권 인식 기반 AI 비행 컨시어지 서비스
            </p>
            <div className="mt-6">
              <Button href="/projects/bimo/demo">
                TRY LIVE DEMO ↗
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <ProjectMeta items={[
              { label: "ROLE", value: "Back-end Lead" },
              { label: "STACK", value: "FastAPI, Gemini, Firebase" },
              { label: "YEAR", value: "2025" },
            ]} />
          </div>
        </div>
      </header>

      {/* Content - Service Logic */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif">The Concept</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light">
            비행 경험은 탑승권에서 시작됩니다. BIMO는 사용자가 탑승권을 찍기만 하면, OCR과 LLM이 결합된 파이프라인을 통해 항공편 정보를 추출하고, 해당 비행에 최적화된 기내 가이드를 제공합니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="bg-neutral-50 p-8 rounded-lg border border-grid-line mb-8">
            <h4 className="font-mono text-xs text-serene-blue mb-4 uppercase tracking-widest">/// AI Pipeline Flow</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <StepIndicator step={1} variant="navy" className="mt-1" />
                <div>
                  <h5 className="font-bold">Image Ingestion</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">사용자가 업로드한 탑승권 이미지를 전처리하여 노이즈를 제거합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <StepIndicator step={2} variant="blue" className="mt-1" />
                <div>
                  <h5 className="font-bold text-serene-blue">Multimodal Analysis (Gemini)</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">Gemini Vision API를 통해 핵심 메타데이터를 구조화된 JSON으로 추출합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <StepIndicator step={3} variant="muted" className="mt-1" />
                <div>
                  <h5 className="font-bold text-neutral-300">Contextual Guide</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">추출된 데이터를 기반으로 시차 적응 및 기내 맞춤 가이드를 생성합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold mb-6 mt-12">Technical Implementation</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            FastAPI의 비동기 처리를 통해 이미지 업로드와 LLM 추론 간의 지연 시간을 최소화했으며, Firebase를 활용해 사용자별 비행 기록을 안전하게 관리합니다.
          </p>
        </div>
      </section>

      <ProjectNav currentSlug="bimo" />
    </article>
  );
}
