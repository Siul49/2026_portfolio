import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectNav from "../../components/ui/ProjectNav";
import ProjectMeta from "../../components/ui/ProjectMeta";

export default function LMSDetail() {
    return (
        <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-20 border-b border-grid-line pb-10">
                <BackLink />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-8">
                        <SectionHeading animated={false} className="mb-6">
                            LMS Downloader
                        </SectionHeading>
                        <p className="text-xl text-neutral-500 font-light max-w-2xl leading-relaxed">
                            반복적인 학업 자료 관리를 자동화하다: <br />
                            Playwright와 병렬 처리를 활용한 고성능 크롤러
                        </p>
                    </div>
                    <div className="md:col-span-4">
                        <ProjectMeta items={[
                            { label: "ROLE", value: "Solo Developer" },
                            { label: "STACK", value: "Python, Playwright" },
                            { label: "YEAR", value: "2024" },
                        ]} />
                    </div>
                </div>
            </header>

            {/* Analysis & Technical Strategy */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                <div className="md:col-span-4">
                    <h3 className="text-lg font-bold mb-4 font-serif text-deep-navy">Efficiency First</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed text-justify">
                        학기 중 발생하는 수백 개의 강의 자료를 일일이 다운로드하는 것은 비효율적입니다. 이 스크립트는 &lsquo;로그인-강의탐색-다운로드&rsquo;의 전 과정을 사람의 개입 없이 원클릭으로 처리하여, 학생들의 생산성을 극대화합니다.
                    </p>
                </div>
                <div className="md:col-span-8">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-deep-navy">Engineering Robust Automation</h3>
                    <p className="text-neutral-500 mb-8 font-light leading-relaxed">
                        일반적인 `requests` 기반 크롤링은 동적 렌더링(JS)이 많은 최신 LMS 사이트에서 한계가 있습니다.
                        이를 극복하기 위해 실제 브라우저 엔진을 제어하는 <strong>Playwright</strong>를 도입했으며, 속도와 안정성을 동시에 잡기 위한 설계를 적용했습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-grid-line p-6 bg-neutral-50 rounded-sm">
                            <h4 className="font-mono text-sm text-serene-blue mb-3 font-bold">Concurrent Execution</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed font-light">
                                단순히 순차적으로 다운로드하는 것이 아니라, <code className="bg-white px-1 border border-neutral-200">ProcessPoolExecutor</code>를 활용해 여러 과목을 동시에 처리합니다. I/O 바운드 작업의 특성을 고려해 프로세스 수를 최적화하여 <strong>전체 소요 시간을 60% 이상 단축</strong>했습니다.
                            </p>
                        </div>
                        <div className="border border-grid-line p-6 bg-neutral-50 rounded-sm">
                            <h4 className="font-mono text-sm text-serene-blue mb-3 font-bold">Selector Resilience</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed font-light">
                                웹사이트의 UI 변경에 쉽게 깨지지 않도록, 절대 경로(XPath) 대신 의미론적 속성(`aria-label`, `role`)을 우선적으로 타겟팅하는 <strong>Robust Selector Strategy</strong>를 적용했습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-20 pt-10 border-t border-grid-line">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">주요 기능 Summary</h3>
                <ul className="space-y-4 max-w-3xl">
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🔐</span>
                        <div>
                            <strong className="text-deep-navy">Headless Auth</strong>
                            <p className="text-neutral-400 font-light mt-1">사용자 인터랙션 없이 백그라운드에서 보안 로그인 처리</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📁</span>
                        <div>
                            <strong className="text-deep-navy">Smart Organization</strong>
                            <p className="text-neutral-400 font-light mt-1">과목명/주차별/자료유형별로 디렉토리를 자동 구조화하여 저장</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🔍</span>
                        <div>
                            <strong className="text-deep-navy">Self-Healing</strong>
                            <p className="text-neutral-400 font-light mt-1">다운로드 실패 시 자동 재시도 및 실패 지점 스냅샷 저장 기능</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Repository Link */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">저장소</h3>
                <a
                    href="https://github.com/Siul49/LMS-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-serene-blue hover:underline font-mono text-sm"
                >
                    github.com/Siul49/LMS- ↗
                </a>
            </section>

            <ProjectNav currentSlug="lms" />
        </article>
    );
}
