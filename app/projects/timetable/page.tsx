import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BrowserFrame from "../../components/ui/BrowserFrame";
import ProjectNav from "../../components/ui/ProjectNav";

export default function TimeTableDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-20 border-b border-grid-line pb-10">
        <BackLink />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading animated={false} className="mb-6">
              Time Table
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl">
              프레임워크 없이 구현한 시간표 생성 로직: <br />
              Vanilla JS로 쌓아 올린 DOM 조작과 알고리즘의 기초
            </p>
            <div className="mt-6">
              <Button href="/projects/timetable/demo">
                TRY LIVE DEMO ↗
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Analysis Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 text-deep-navy">
        <div className="md:col-span-4">
          <h3 className="text-lg font-bold mb-4 font-serif">Back to Basics</h3>
          <p className="text-sm text-neutral-500 leading-relaxed font-light text-justify">
            React와 같은 라이브러리의 편리함 뒤에 숨겨진 원리를 이해하기 위해, 외부 라이브러리 없이 <strong>순수 HTML, CSS, JavaScript</strong>만으로 인터랙티브한 시간표 애플리케이션을 구현했습니다.
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-2xl font-serif font-bold mb-6">Core Mechanics: Constraint Solving</h3>
          <p className="text-neutral-500 mb-6 font-light leading-relaxed">
            시간표 생성은 단순한 배치가 아닌, &lsquo;시간&rsquo;과 &lsquo;공간&rsquo;의 제약을 해결하는 알고리즘 문제입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="border border-grid-line p-5 rounded-sm">
              <h4 className="font-mono text-xs text-serene-blue mb-2">01. Collision Detection</h4>
              <p className="text-xs text-neutral-400">
                2차원 배열을 활용해 시간 슬롯(Time Slots)의 점유 상태를 매핑하고, 새로운 수업 추가 시 O(1)에 가까운 속도로 충돌을 실시간 감지합니다.
              </p>
            </div>
            <div className="border border-grid-line p-5 rounded-sm">
              <h4 className="font-mono text-xs text-serene-blue mb-2">02. Direct DOM Manipulation</h4>
              <p className="text-xs text-neutral-400">
                Virtual DOM 없이 <code className="bg-neutral-100 px-1">document.createElement</code>와 <code className="bg-neutral-100 px-1">appendChild</code>를 직접 사용하며, 브라우저의 리플로우(Reflow)와 리페인트(Repaint) 비용에 대해 깊이 고민했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="mb-20 border-t border-grid-line pt-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-serif font-bold text-deep-navy">Live Experience</h3>
          <a href="/demo/timetable/test.html" target="_blank" className="text-sm font-mono text-serene-blue hover:underline">OPEN IN NEW TAB ↗</a>
        </div>

        <BrowserFrame title="demo/timetable" openInNewTabUrl="/demo/timetable/test.html">
          <iframe
            src="/demo/timetable/test.html"
            className="w-full h-[600px] bg-white"
            title="Time Table Demo"
          />
        </BrowserFrame>
        <p className="text-xs text-center mt-4 text-neutral-300 font-mono">
          * This is a live version of the original HTML/CSS/JS project running within the portfolio.
        </p>
      </section>

      <ProjectNav currentSlug="timetable" />
    </article>
  );
}
