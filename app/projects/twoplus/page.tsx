"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrowserFrame from "../../components/ui/BrowserFrame";

export default function TwoPlusDetail() {
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
              TwoPlus
            </motion.h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              초기 프론트엔드 실험과 인터랙션 연구를 담은 포트폴리오
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 font-mono text-sm text-gray-500">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>ROLE</span>
              <span className="text-[var(--color-deep-navy)]">Frontend Developer</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>STACK</span>
              <span className="text-[var(--color-deep-navy)]">React, Interaction</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>YEAR</span>
              <span className="text-[var(--color-deep-navy)]">2024</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/demo/twoplus/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[var(--color-serene-blue)] text-white rounded-lg font-medium hover:bg-[var(--color-deep-navy)] transition-colors"
          >
            TRY LIVE DEMO
          </a>
        </div>
      </header>

      {/* Content - Design Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
           <h3 className="text-lg font-bold mb-4 font-serif">The Beginning</h3>
           <p className="text-sm text-gray-600 leading-relaxed font-light">
             TwoPlus는 개발자로서의 여정을 시작하며, 사용자와 상호작용하는 웹의 본질을 탐구했던 초기 프로젝트입니다. 단순한 정보 전달을 넘어, 움직임과 반응을 통해 살아있는 경험을 제공하고자 했습니다.
           </p>
        </div>
        <div className="md:col-span-8">
           <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-[var(--color-grid-line)] p-4 text-center">
                 <span className="font-mono text-[10px] text-gray-400 mb-2 uppercase">Interaction Study 01</span>
                 <p className="text-[11px] text-gray-500 font-light leading-snug">마우스 궤적에 따른 동적 컴포넌트 변화 실험</p>
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-[var(--color-grid-line)] p-4 text-center">
                 <span className="font-mono text-[10px] text-gray-400 mb-2 uppercase">Layout Experiment</span>
                 <p className="text-[11px] text-gray-500 font-light leading-snug">비정형 그리드 시스템의 시각적 안정성 연구</p>
              </div>
           </div>
           
           <h3 className="text-2xl font-serif font-bold mb-6 mt-12">Frontend Exploration</h3>
           <p className="text-gray-600 mb-6 font-light leading-relaxed font-light">
             React의 생명주기와 상태 관리를 깊이 있게 이해하는 계기가 되었습니다. 특히 컴포넌트 재사용성을 높이기 위한 Atomic Design Pattern을 적용해 보며, 유지보수 가능한 코드 구조에 대해 고민했습니다.
           </p>
        </div>
      </section>

      {/* Live Experience Section */}
      <section className="mt-32 pt-12 border-t border-[var(--color-grid-line)]">
        <h2 className="text-3xl font-serif font-bold mb-8">Live Experience</h2>
        <p className="text-gray-600 mb-8 font-light leading-relaxed">
          Twosea Technology 웹사이트의 인터랙티브 데모를 직접 경험해보세요. 반응형 디자인과 매끄러운 네비게이션, 동적 컴포넌트들을 실시간으로 확인할 수 있습니다.
        </p>

        <BrowserFrame title="demo/twoplus" openInNewTabUrl="/demo/twoplus/index.html">
          <iframe
            src="/demo/twoplus/index.html"
            className="w-full h-[600px] bg-white"
            title="TwoPlus Demo"
          />
        </BrowserFrame>
      </section>
    </article>
  );
}
