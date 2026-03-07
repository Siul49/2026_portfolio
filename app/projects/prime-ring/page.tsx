import BackLink from "../../components/ui/BackLink";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectNav from "../../components/ui/ProjectNav";
import ProjectMeta from "../../components/ui/ProjectMeta";
import StepIndicator from "../../components/ui/StepIndicator";

export default function PrimeRingDetail() {
    return (
        <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-20 border-b border-grid-line pb-10">
                <BackLink />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-8">
                        <SectionHeading animated={false} className="mb-6">
                            PrimeRing
                        </SectionHeading>
                        <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
                            단순한 일정 관리를 넘어, 사용자의 하루를 감정적 맥락(Emotional Context)으로 재해석하는 AI 기반 데스크톱 애플리케이션
                        </p>
                    </div>
                    <div className="md:col-span-4">
                        <ProjectMeta items={[
                            { label: "ROLE", value: "Solo Developer" },
                            { label: "STACK", value: "React 19, Electron, Zustand, WebLLM" },
                            { label: "YEAR", value: "2024" },
                        ]} />
                    </div>
                </div>
            </header>

            {/* Analysis & Architecture */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                <div className="md:col-span-4">
                    <h3 className="text-lg font-bold mb-4 font-serif text-deep-navy">Core Philosophy</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed text-justify">
                        &ldquo;기록은 단순히 사실의 나열이 아닙니다.&rdquo; PrimeRing은 사용자가 무심코 남긴 일정과 짧은 메모에서 <strong>숨겨진 감정의 패턴</strong>을 찾아냅니다. Electron 환경에 자연스럽게 녹아들어, 사용자의 워크플로우를 방해하지 않는 개인 회고 경험을 목표로 설계했습니다.
                    </p>
                </div>
                <div className="md:col-span-8">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-deep-navy">System Architecture</h3>
                    <p className="text-neutral-500 mb-8 font-light leading-relaxed">
                        웹 기술의 유연성과 데스크톱 앱의 강력함을 결합하기 위해 <strong>Electron + React</strong> 하이브리드 구조를 채택했습니다.
                        전역 상태는 <strong>Zustand</strong>로 관리하고, 실제 데이터는 Electron preload API를 통해 <strong>로컬 JSON 파일(events/diaries)</strong>에 저장해 오프라인 우선 경험을 구현했습니다.
                    </p>

                    <div className="bg-neutral-50 p-8 rounded-lg border border-grid-line">
                        <h4 className="font-mono text-xs text-serene-blue mb-6 uppercase tracking-widest">{"/// AI-Driven Emotional Analysis Flow"}</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <StepIndicator step={1} variant="navy" className="mt-1" />
                                <div>
                                    <h5 className="font-bold text-deep-navy">Context Extraction</h5>
                                    <p className="font-light text-sm mt-1 text-neutral-400">
                                        사용자의 일기 텍스트에서 주요 키워드, 시간적 맥락, 인물 관계를 추출합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <StepIndicator step={2} variant="blue" className="mt-1" />
                                <div>
                                    <h5 className="font-bold text-serene-blue">Sentiment Loop (WebLLM)</h5>
                                    <p className="font-light text-sm mt-1 text-neutral-400">
                                        로컬 LLM 프롬프트를 통해 단순 긍정/부정을 넘어서 복합적인 감정 상태(예: &quot;성취감 섞인 피로&quot;)를 분석하고, 구조화된 결과를 생성합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <StepIndicator step={3} variant="muted" className="mt-1" />
                                <div>
                                    <h5 className="font-bold text-neutral-400">Visual Feedback</h5>
                                    <p className="font-light text-sm mt-1 text-neutral-400">
                                        분석된 데이터를 캘린더 UI에 색상 코드(Heatmap)로 시각화하여, 한 달 동안의 감정 흐름을 직관적으로 보여줍니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Challenges */}
            <section className="mb-24 border-t border-grid-line pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6 text-deep-navy">Data Persistence & Offline-first</h3>
                        <p className="text-neutral-500 font-light leading-relaxed mb-6">
                            데스크톱 사용성의 핵심은 네트워크 상태와 무관한 안정성입니다.
                            PrimeRing은 <strong>로컬 파일 기반 저장소</strong>를 사용해 연결이 없어도 이벤트/다이어리 CRUD가 동작하며,
                            런타임에서 즉시 반영되는 상태 업데이트로 끊김 없는 편집 경험을 제공합니다.
                        </p>
                        <div className="mt-6">
                            <Button href="/projects/prime-ring/demo" size="md">
                                TRY LIVE DEMO
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6 text-deep-navy">UI/UX Detail</h3>
                        <p className="text-neutral-500 font-light leading-relaxed mb-6">
                            캘린더는 정보 밀도가 높은 UI입니다. <strong>CSS Grid</strong>를 활용해
                            다양한 화면 크기에서도 일정이 깨지지 않고 유동적으로 배치되도록 했으며,
                            <strong>Framer Motion</strong>을 사용해 달력 전환 시 부드러운 슬라이드 애니메이션을 적용하여 사용자의 인지적 부하를 줄였습니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Repository Link */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">저장소</h3>
                <a
                    href="https://github.com/Siul49/prime-ring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-serene-blue hover:underline font-mono text-sm"
                >
                    github.com/Siul49/prime-ring ↗
                </a>
            </section>

            <ProjectNav currentSlug="prime-ring" />
        </article>
    );
}
