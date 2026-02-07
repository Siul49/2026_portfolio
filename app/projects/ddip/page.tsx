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
              className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-deep-navy)] mb-6"
            >
              DDIP
            </motion.h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              이웃과 함께하는 식재료 공동구매 및 나눔 플랫폼
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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 text-[var(--color-deep-navy)]">
        <div className="md:col-span-4">
           <h3 className="text-lg font-bold mb-4 font-serif">Community Focused</h3>
           <p className="text-sm text-gray-600 leading-relaxed font-light text-justify">
             1인 가구의 증가와 물가 상승이라는 사회적 문제를 해결하기 위해, 근거리 이웃들과 소량의 식재료를 함께 사고 나누는 '딥(DDIP)' 서비스를 기획하고 개발했습니다.
           </p>
        </div>
        <div className="md:col-span-8">
           <h3 className="text-2xl font-serif font-bold mb-6">State-driven Navigation</h3>
           <p className="text-gray-600 mb-6 font-light leading-relaxed">
             복잡한 라우팅 대신 <strong>상태 기반 UI 전환 로직</strong>을 사용하여 싱글 페이지 내에서도 끊김 없는 사용자 경험을 제공합니다. <code>home</code>, <code>category</code>, <code>product</code>로 이어지는 흐름을 유기적으로 연결했습니다.
           </p>
           <div className="p-6 bg-[#FFFCED] border border-[#F3E5AB] rounded-lg">
              <p className="text-sm text-[#B8860B] font-medium italic">
                "따뜻하고 친근한 종이 질감의 디자인 테마를 통해 커뮤니티의 온기를 시각적으로 표현했습니다."
              </p>
           </div>
        </div>
      </section>
    </article>
  );
}
