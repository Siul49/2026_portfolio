"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DdipDemo() {
  const [mode, setMode] = useState<"home" | "category" | "product">("home");
  const [cart, setCart] = useState(0);

  const categories = [
    { id: "0", name: "식재료", emoji: "🥕" },
    { id: "1", name: "간편식", emoji: "🍱" },
    { id: "2", name: "생활용품", emoji: "🧼" },
    { id: "3", name: "대용량", emoji: "📦" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFCED] font-sans p-4 relative overflow-hidden">
      <Link href="/" className="absolute top-8 left-8 text-xs font-mono text-gray-500 hover:text-gray-800">← EXIT DEMO</Link>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-sm border-4 border-[#F3E5AB] relative z-10">
        <header className="flex justify-between items-center mb-8 border-b-2 border-dashed border-[#F3E5AB] pb-4">
          <h2 className="text-3xl font-black text-[#B8860B] tracking-tighter">DDIP</h2>
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {cart > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart}
              </span>
            )}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {mode === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="bg-orange-50 p-6 rounded-2xl mb-6 border-2 border-orange-100">
                <p className="text-[#D2691E] font-bold text-lg leading-snug">
                  오늘 이웃과<br />함께 "딥" 할까요?
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setMode("category")}
                    className="p-4 bg-white border-2 border-[#F3E5AB] rounded-2xl hover:bg-[#FFF9E5] transition-colors flex flex-col items-center gap-2 group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
                    <span className="text-sm font-bold text-gray-700">{cat.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {mode === "category" && (
            <motion.div
              key="category"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button onClick={() => setMode("home")} className="text-xs font-bold text-gray-400 mb-4 inline-block hover:text-gray-600 italic">
                ← 돌아가기
              </button>
              <h3 className="text-lg font-bold text-gray-800 mb-4">근처에서 모집 중인 나눔</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 border-2 border-gray-100 rounded-2xl flex justify-between items-center bg-gray-50/50">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-white rounded-xl border border-gray-200" />
                      <div>
                        <p className="text-sm font-bold text-gray-800">계란 30구 (10구씩)</p>
                        <p className="text-[10px] text-gray-400">잔여 2명 / 3,400원</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {setCart(prev => prev + 1); setMode("home");}}
                      className="bg-[#B8860B] text-white text-xs px-3 py-2 rounded-lg font-bold hover:bg-[#8B4513]"
                    >
                      딥하기
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-8 text-[10px] text-gray-400 font-mono tracking-widest text-center uppercase leading-loose">
        State-Driven Prototype<br />
        Next.js + Framer Motion
      </p>
    </div>
  );
}
