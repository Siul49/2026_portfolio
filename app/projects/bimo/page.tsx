"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BimoDetail() {
  return (
    <article className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto font-sans">
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
              BIMO
            </motion.h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl">
              Gemini Vision을 활용한 탑승권 인식 기반 AI 비행 컨시어지 서비스
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 font-mono text-sm text-gray-500">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>ROLE</span>
              <span className="text-[var(--color-deep-navy)]">Back-end Lead</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>STACK</span>
              <span className="text-[var(--color-deep-navy)]">FastAPI, Gemini, Firebase</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>YEAR</span>
              <span className="text-[var(--color-deep-navy)]">2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content - Service Logic */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 text-[var(--color-deep-navy)]">
           <h3 className="text-lg font-bold mb-4 font-serif">The Concept</h3>
           <p className="text-sm text-gray-600 leading-relaxed">
             비행 경험은 탑승권에서 시작됩니다. BIMO는 사용자가 탑승권을 찍기만 하면, OCR과 LLM이 결합된 파이프라인을 통해 항공편 정보를 추출하고, 해당 비행에 최적화된 기내 가이드를 제공합니다.
           </p>
        </div>
        <div className="md:col-span-8">
           <div className="bg-gray-50 p-8 rounded-lg border border-[var(--color-grid-line)] mb-8">
              <h4 className="font-mono text-xs text-[var(--color-serene-blue)] mb-4 uppercase">/// AI Pipeline Flow</h4>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-deep-navy)] text-white flex items-center justify-center font-mono text-xs mt-1 shrink-0">1</div>
                    <div>
                        <h5 className="font-bold text-[var(--color-deep-navy)]">Image Ingestion</h5>
                        <p className="font-light text-sm mt-1 text-gray-600">사용자가 업로드한 탑승권 이미지를 전처리하여 노이즈를 제거합니다.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-serene-blue)] text-white flex items-center justify-center font-mono text-xs mt-1 shrink-0">2</div>
                    <div>
                        <h5 className="font-bold text-[var(--color-deep-navy)]">Multimodal Analysis (Gemini)</h5>
                        <p className="font-light text-sm mt-1 text-gray-600">Gemini Vision API에 이미지를 주입하여 Flight Number, Date, Seat Class 등 핵심 메타데이터를 구조화된 JSON으로 추출합니다.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center font-mono text-xs mt-1 shrink-0">3</div>
                    <div>
                        <h5 className="font-bold text-[var(--color-deep-navy)]">Contextual Guide</h5>
                        <p className="font-light text-sm mt-1 text-gray-600">추출된 데이터를 기반으로 기내식 정보, 좌석 꿀팁, 시차 적응 가이드를 생성하여 제공합니다.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <h3 className="text-2xl font-serif font-bold mb-6 mt-12 text-[var(--color-deep-navy)]">Technical Implementation</h3>
           <p className="text-gray-600 mb-6 font-light leading-relaxed">
             <strong>FastAPI</strong>의 비동기 처리를 통해 이미지 업로드와 LLM 추론 간의 지연 시간을 최소화했으며, <strong>Firebase</strong>를 활용해 사용자별 비행 기록을 안전하게 관리합니다. 특히 LLM의 환각(Hallucination)을 방지하기 위해 엄격한 <strong>Output Parsing Logic</strong>을 미들웨어에 구현했습니다.
           </p>
        </div>
      </section>
    </article>\n  );\n}\n