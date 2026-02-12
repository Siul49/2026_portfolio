import BackLink from "../../components/ui/BackLink";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BrowserFrame from "../../components/ui/BrowserFrame";
import ProjectNav from "../../components/ui/ProjectNav";

export default function TimeTableDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 border-b border-grid-line pb-10">
        <BackLink />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <SectionHeading animated={false} className="mb-6">
              Time Table
            </SectionHeading>
            <p className="text-xl text-neutral-500 font-light max-w-2xl">
              HTML/CSS/JS 기반의 시간표 생성 및 관리 웹 애플리케이션 (Live Demo)
            </p>
            <div className="mt-6">
              <Button href="/projects/timetable/demo">
                TRY LIVE DEMO ↗
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Live Demo Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-4">
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
