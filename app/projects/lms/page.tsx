import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectNav from "../../components/ui/ProjectNav";

export default function LMSDetail() {
    return (
        <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-12 border-b border-grid-line pb-10">
                <BackLink />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-8">
                        <SectionHeading animated={false} className="mb-6">
                            LMS Downloader
                        </SectionHeading>
                        <p className="text-xl text-neutral-500 font-light max-w-2xl">
                            숭실대학교 Canvas LMS에서 강의 자료를 자동으로 다운로드하는 Python 스크립트
                        </p>
                    </div>
                </div>
            </header>

            {/* Overview Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">개요</h3>
                <p className="text-neutral-400 font-light leading-relaxed max-w-3xl">
                    LMS Downloader는 숭실대학교 Canvas LMS에서 강의 자료를 자동으로 다운로드하여
                    로컬에 저장하는 Python 스크립트입니다. 매번 강의 자료를 일일이 다운로드하는 번거로움을
                    해결하고, 모든 자료를 체계적으로 정리하여 관리할 수 있습니다.
                </p>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">기술 스택</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Language</h4>
                        <p className="text-neutral-400">Python</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Browser Automation</h4>
                        <p className="text-neutral-400">Playwright</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Environment</h4>
                        <p className="text-neutral-400">python-dotenv</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Concurrency</h4>
                        <p className="text-neutral-400">concurrent.futures (ProcessPoolExecutor)</p>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">주요 기능</h3>
                <ul className="space-y-4 max-w-3xl">
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🔐</span>
                        <div>
                            <strong className="text-deep-navy">자동 로그인</strong>
                            <p className="text-neutral-400 font-light mt-1">숭실대학교 통합 로그인 시스템 자동화</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📚</span>
                        <div>
                            <strong className="text-deep-navy">강의 목록 자동 탐색</strong>
                            <p className="text-neutral-400 font-light mt-1">현재 학기의 모든 강의 자동으로 검색 및 필터링</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📥</span>
                        <div>
                            <strong className="text-deep-navy">자동 다운로드</strong>
                            <p className="text-neutral-400 font-light mt-1">주차별 강의 자료(PDF, PPTX, HWP, ZIP 등) 자동 다운로드</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📁</span>
                        <div>
                            <strong className="text-deep-navy">자동 정리</strong>
                            <p className="text-neutral-400 font-light mt-1">강의명/주차별로 자동 폴더 생성 및 파일 저장</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">⚡</span>
                        <div>
                            <strong className="text-deep-navy">병렬 처리</strong>
                            <p className="text-neutral-400 font-light mt-1">ProcessPoolExecutor를 활용한 다중 강의 동시 처리</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🔍</span>
                        <div>
                            <strong className="text-deep-navy">디버깅 지원</strong>
                            <p className="text-neutral-400 font-light mt-1">다운로드 실패 시 스크린샷 자동 저장</p>
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
