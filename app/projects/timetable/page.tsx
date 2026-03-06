import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BrowserFrame from "../../components/ui/BrowserFrame";
import ProjectNav from "../../components/ui/ProjectNav";
import { withBasePath } from "../../lib/site";

const highlightCards = [
  {
    title: "Logic First",
    description:
      "시간표는 단순 배치가 아니라 시간 충돌과 입력 흐름을 함께 다뤄야 하는 문제라는 점을 배운 작업입니다.",
  },
  {
    title: "Vanilla Foundations",
    description:
      "순수 HTML, CSS, JavaScript만으로 DOM 조작과 상태 변화를 직접 다루며 웹의 기본기를 익혔습니다.",
  },
  {
    title: "Responsive Refresh",
    description:
      "기존 absolute 중심 화면을 모바일과 태블릿에서도 읽히도록 그리드와 스택 구조로 다시 설계했습니다.",
  },
];

export default function TimeTableDetail() {
  const demoUrl = withBasePath("/demo/timetable/test.html");

  return (
    <article className="mx-auto min-h-screen max-w-6xl px-4 pt-24 pb-16 sm:px-6 md:px-8 md:pt-32 md:pb-20">
      <header className="mb-16 border-b border-grid-line pb-10 md:mb-20">
        <BackLink />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeading animated={false} className="mb-6">
              Time Table
            </SectionHeading>
            <p className="max-w-3xl text-xl font-light text-neutral-600">
              순수 HTML, CSS, JavaScript만으로 시간표 입력 흐름과 충돌 처리를
              설계한 초기 웹 프로젝트입니다. 이번 아카이브에서는 데모까지
              반응형으로 다시 정리해 어떤 화면에서도 읽히도록 다듬었습니다.
            </p>
            <p className="mt-4 font-mono text-xs tracking-[0.22em] text-neutral-500 uppercase">
              Archive / Early Web Project / Responsive Refresh
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects/timetable/demo" size="md">
                TRY LIVE DEMO ↗
              </Button>
              <Button href={demoUrl} external variant="outline" size="md">
                OPEN STATIC PAGE ↗
              </Button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-sm border border-grid-line bg-neutral-50/70 p-5">
              <p className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                What changed
              </p>
              <p className="mt-3 text-sm leading-relaxed font-light text-neutral-600">
                데모 화면의 고정 폭 패널과 겹치는 버튼을 정리하고, 모바일에서는
                세로 스택으로 재배치되도록 구조를 다시 잡았습니다.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-20 grid grid-cols-1 gap-12 border-b border-grid-line pb-16 text-deep-navy md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="mb-4 font-serif text-lg font-bold">Back to Basics</h3>
          <p className="text-sm leading-relaxed font-light text-neutral-600">
            프레임워크 없이 화면 구조를 직접 짜고 상태를 다루면서, 웹 인터페이스가
            어떻게 쌓이는지 감각적으로 익힌 프로젝트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-3">
          {highlightCards.map((card) => (
            <div
              key={card.title}
              className="rounded-sm border border-grid-line bg-neutral-50/70 p-5"
            >
              <h4 className="font-mono text-xs tracking-widest text-serene-blue uppercase">
                {card.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed font-light text-neutral-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 border-t border-grid-line pt-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-serif font-bold text-deep-navy">
              Live Experience
            </h3>
            <p className="mt-2 text-sm font-light text-neutral-500">
              포트폴리오 안에서 바로 확인할 수 있는 반응형 데모입니다.
            </p>
          </div>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-serene-blue transition-colors duration-300 hover:text-deep-navy hover:underline"
          >
            OPEN IN NEW TAB ↗
          </a>
        </div>

        <BrowserFrame title="demo/timetable" openInNewTabUrl={demoUrl}>
          <iframe
            src={demoUrl}
            className="h-[68vh] min-h-[420px] w-full max-h-[760px] bg-white"
            title="Time Table Demo"
          />
        </BrowserFrame>
        <p className="mt-4 text-center font-mono text-xs text-neutral-400">
          * The original static HTML/CSS/JS demo has been re-laid out to adapt
          across mobile, tablet, and desktop widths.
        </p>
      </section>

      <ProjectNav currentSlug="timetable" />
    </article>
  );
}
