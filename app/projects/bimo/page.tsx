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
            <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
              탑승권 한 장만으로 시작되는 여행: <br />
              Gemini Vision (Multimodal LLM) 기반의 지능형 비행 컨시어지
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
          <h3 className="text-lg font-bold mb-4 font-serif">Bridging Physical & Digital</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light">
            여행객이 가장 먼저 접하는 &lsquo;종이 탑승권&rsquo;은 정보의 보고입니다. BIMO는 이 아날로그 데이터를 디지털 인텔리전스로 변환하여, 사용자가 별도의 입력 없이도 맞춤형 케어를 받을 수 있도록 설계되었습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="bg-neutral-50 p-8 rounded-lg border border-grid-line mb-12">
            <h4 className="font-mono text-xs text-serene-blue mb-6 uppercase tracking-widest">{"/// Multimodal Pipeline Architecture"}</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <StepIndicator step={1} variant="navy" className="mt-1" />
                <div>
                  <h5 className="font-bold">Noise Reduction & OCR</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">
                    모바일로 촬영된 탑승권 이미지는 조명 반사나 구겨짐이 있을 수 있습니다.
                    이미지 전처리(Preprocessing) 과정을 통해 텍스트 영역을 선명하게 보정하고,
                    불필요한 배경 노이즈를 제거하여 LLM의 인식률을 20% 이상 향상시켰습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <StepIndicator step={2} variant="blue" className="mt-1" />
                <div>
                  <h5 className="font-bold text-serene-blue">Structured Extraction (Gemini 1.5)</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">
                    Gemini Vision API에 <code className="bg-neutral-200 px-1 py-0.5 rounded text-xs">JSON Schema Enforcement</code>를 적용하여,
                    비정형 이미지 데이터에서 항공편명, 출발/도착 시간, 좌석 번호 등의 핵심 정보를
                    엄격한 타입(Type-safe) 구조로 추출합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <StepIndicator step={3} variant="muted" className="mt-1" />
                <div>
                  <h5 className="font-bold text-neutral-400">Contextual Reasoning</h5>
                  <p className="font-light text-sm mt-1 text-neutral-400">
                    단순 정보 제공을 넘어, &quot;14시간 비행 후 시차 적응이 필요한 상태&quot;임을 추론하고,
                    도착지의 날씨와 시간을 고려한 맞춤형 기내 행동 가이드(수면/식사 스케줄)를 생성합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold mb-6">Technical Deep Dive: Handling Latency</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            멀티모달 모델의 추론 시간은 텍스트 모델보다 깁니다(평균 3~5초). 사용자가 이 지연 시간을 &lsquo;대기&rsquo;가 아닌 &lsquo;처리 과정&rsquo;으로 인지하도록 UX를 설계했습니다.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-500 font-light mb-8">
            <li>
              <strong>Optimistic Updates:</strong> 이미지가 업로드되는 즉시 UI에 썸네일을 표시하고 분석 단계를 시각화(Skeleton UI & Progress)하여 체감 로딩 시간을 단축했습니다.
            </li>
            <li>
              <strong>Asynchronous Processing (FastAPI):</strong> 이미지 업로드와 분석 작업을 비동기 <code className="bg-neutral-100 text-xs px-1">async/await</code>로 처리하여 서버 리소스를 효율적으로 관리하고 동시 접속 처리를 최적화했습니다.
            </li>
          </ul>
        </div>
      </section>

      <ProjectNav currentSlug="bimo" />
    </article>
  );
}
