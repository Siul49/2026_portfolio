"use client";

import Link from "next/link";
import BrowserFrame from "../../components/ui/BrowserFrame";

export default function TimeTableDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 border-b border-[var(--color-grid-line)] pb-10">
        <Link href="/" className="text-xs font-mono text-[var(--color-serene-blue)] hover:underline mb-8 block">← BACK TO HOME</Link>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-deep-navy)] mb-6">
              Time Table
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              HTML/CSS/JS 기반의 시간표 생성 및 관리 웹 애플리케이션 (Live Demo)
            </p>
          </div>
        </div>
      </header>

      {/* Live Demo Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-2xl font-serif font-bold text-[var(--color-deep-navy)]">Live Experience</h3>
           <a href="/demo/timetable/test.html" target="_blank" className="text-sm font-mono text-[var(--color-serene-blue)] hover:underline">OPEN IN NEW TAB ↗</a>
        </div>

        <BrowserFrame title="demo/timetable" openInNewTabUrl="/demo/timetable/test.html">
          <iframe
            src="/demo/timetable/test.html"
            className="w-full h-[600px] bg-white"
            title="Time Table Demo"
          />
        </BrowserFrame>
        <p className="text-xs text-center mt-4 text-gray-400 font-mono">
           * This is a live version of the original HTML/CSS/JS project running within the portfolio.
        </p>
      </section>
    </article>
  );
}
