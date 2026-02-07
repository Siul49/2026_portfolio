"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DdipDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto font-sans text-[var(--color-deep-navy)]">
      {/* Header */}
      <header className="mb-20 border-b border-[var(--color-grid-line)] pb-10">
        <Link href="/" className="text-xs font-mono text-[var(--color-serene-blue)] hover:underline mb-8 block">← BACK TO HOME</Link>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              DDIP
            </motion.h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Next.js와 React를 활용한 반응형 수강신청 프론트엔드
            </p>
            <div className="mt-8">
               <Link href="/projects/ddip/demo" className="inline-block bg-[var(--color-deep-navy)] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
                 TRY LIVE DEMO ↗
               </Link>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 font-mono text-sm text-gray-500">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>ROLE</span>
              <span className="text-[var(--color-deep-navy)]">Frontend Developer</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>STACK</span>
              <span className="text-[var(--color-deep-navy)]">Next.js, React, Tailwind</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>YEAR</span>
              <span className="text-[var(--color-deep-navy)]">2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
           <h3 className="text-lg font-bold mb-4 font-serif">Key Features</h3>
           <p className="text-sm text-gray-600 leading-relaxed font-light text-justify">
             대규모 트래픽이 몰리는 수강신청 상황을 고려하여, 사용자에게 즉각적인 피드백을 제공하고 서버 부하를 시각적으로 인지할 수 있는 UX를 설계했습니다.
           </p>
        </div>
        <div className="md:col-span-8">
           <h3 className="text-2xl font-serif font-bold mb-6">Tech Stack Upgrade</h3>
           <p className="text-gray-600 mb-6 font-light leading-relaxed">
             최신 Next.js 15의 App Router와 React 19를 적극적으로 도입하여 성능을 최적화했습니다. 또한 Tailwind CSS v4를 활용하여 빌드 속도를 단축하고 생산성을 높였습니다.
           </p>
           <div className="p-6 bg-blue-50 border-l-4 border-[var(--color-serene-blue)] rounded-r-lg">
              <p className="text-sm text-[var(--color-serene-blue)] font-medium italic">
                "고성능 인터랙션을 위한 상태 최적화와 서버 사이드 렌더링의 조화를 탐구한 프로젝트입니다."
              </p>
           </div>
        </div>
      </section>
    </article>
  );
}
