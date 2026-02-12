import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectNav from "../../components/ui/ProjectNav";

export default function PrimeRingDetail() {
    return (
        <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-12 border-b border-grid-line pb-10">
                <BackLink />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                    <div className="md:col-span-8">
                        <SectionHeading animated={false} className="mb-6">
                            PrimeRing
                        </SectionHeading>
                        <p className="text-xl text-neutral-500 font-light max-w-2xl">
                            AI 기반 감정 분석을 지원하는 스마트 캘린더 & 다이어리 데스크톱 애플리케이션
                        </p>
                    </div>
                </div>
            </header>

            {/* Overview Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">개요</h3>
                <p className="text-neutral-400 font-light leading-relaxed max-w-3xl">
                    PrimeRing은 사용자의 일정을 관리하고 일기를 작성할 때 AI가 자동으로 감정을 분석하여
                    더 나은 자기 이해를 돕는 데스크톱 애플리케이션입니다. Electron 기반으로 Windows, macOS, Linux
                    모든 플랫폼에서 실행 가능하며, Firebase를 통해 실시간 데이터 동기화를 지원합니다.
                </p>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">기술 스택</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Frontend</h4>
                        <p className="text-neutral-400">React 19, TypeScript, Vite, CSS Modules</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Desktop</h4>
                        <p className="text-neutral-400">Electron</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">State Management</h4>
                        <p className="text-neutral-400">Zustand</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">Database</h4>
                        <p className="text-neutral-400">Firebase Firestore</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">AI</h4>
                        <p className="text-neutral-400">Google Gemini API</p>
                    </div>
                    <div className="border border-grid-line p-6">
                        <h4 className="font-mono text-sm text-serene-blue mb-3">UI Libraries</h4>
                        <p className="text-neutral-400">Framer Motion, React Hot Toast</p>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-20">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">주요 기능</h3>
                <ul className="space-y-4 max-w-3xl">
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📅</span>
                        <div>
                            <strong className="text-deep-navy">스마트 캘린더</strong>
                            <p className="text-neutral-400 font-light mt-1">월간 뷰로 이벤트를 쉽게 관리하고 커스텀 카테고리 생성</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">📝</span>
                        <div>
                            <strong className="text-deep-navy">AI 다이어리</strong>
                            <p className="text-neutral-400 font-light mt-1">Gemini API를 활용한 자동 감정 분석</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🌓</span>
                        <div>
                            <strong className="text-deep-navy">테마 전환</strong>
                            <p className="text-neutral-400 font-light mt-1">라이트/다크 모드 지원</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">☁️</span>
                        <div>
                            <strong className="text-deep-navy">실시간 동기화</strong>
                            <p className="text-neutral-400 font-light mt-1">Firebase Firestore 기반 데이터 저장</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="font-mono text-serene-blue">🖥️</span>
                        <div>
                            <strong className="text-deep-navy">크로스 플랫폼</strong>
                            <p className="text-neutral-400 font-light mt-1">Electron 기반 Windows/macOS/Linux 지원</p>
                        </div>
                    </li>
                </ul>
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
