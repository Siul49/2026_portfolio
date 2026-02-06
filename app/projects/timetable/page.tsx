"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
          {/* Metadata omitted for brevity */}
        </div>
      </header>

      {/* Live Demo Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-2xl font-serif font-bold text-[var(--color-deep-navy)]">Live Experience</h3>
           <a href="/demo/timetable/test.html" target="_blank" className="text-sm font-mono text-[var(--color-serene-blue)] hover:underline">OPEN IN NEW TAB ↗</a>
        </div>
        
        <div className="w-full h-[600px] border border-[var(--color-grid-line)] rounded-lg overflow-hidden bg-white shadow-lg relative group">
           <div className="absolute top-0 left-0 w-full bg-gray-100 h-8 flex items-center px-4 border-b border-gray-200">
              <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="mx-auto text-xs text-gray-500 font-mono">demo/timetable</span>
           </div>
           <iframe 
             src="/demo/timetable/test.html" 
             className="w-full h-full pt-8 bg-white"
             title="Time Table Demo"
           />
        </div>
        <p className="text-xs text-center mt-4 text-gray-400 font-mono">
           * This is a live version of the original HTML/CSS/JS project running within the portfolio.
        </p>
      </section>
    </article>
  );
}
