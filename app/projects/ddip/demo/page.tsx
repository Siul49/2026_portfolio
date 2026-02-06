"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DdipDemo() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "fail">("idle");
  const [count, setCount] = useState(30); // 남은 인원

  const handleApply = async () => {
    if (status === "loading" || count === 0) return;
    
    setStatus("loading");
    
    // Simulate Network Latency
    setTimeout(() => {
      // 80% Success Rate Simulation
      if (Math.random() > 0.2) {
        setStatus("success");
        setCount(prev => prev - 1);
      } else {
        setStatus("fail");
      }
    }, 1500);
  };

  const reset = () => {
    setStatus("idle");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans p-4">
      <Link href="/" className="absolute top-8 left-8 text-xs font-mono text-gray-400 hover:text-gray-800">← EXIT DEMO</Link>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">수강신청 시뮬레이션</h2>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-mono">DDIP Engine</span>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
             <div className="flex justify-between mb-2">
                <span className="text-gray-600 font-medium">CS101: 자료구조</span>
                <span className={`text-sm font-bold ${count < 5 ? "text-red-500" : "text-green-500"}`}>
                   {count} / 30
                </span>
             </div>
             <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-blue-500 h-2 rounded-full" 
                  initial={{ width: "100%" }}
                  animate={{ width: `${(count / 30) * 100}%` }}
                />
             </div>
          </div>

          <button
            onClick={handleApply}
            disabled={status === "loading" || status === "success" || count === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95
              ${status === "idle" ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30" : ""}
              ${status === "loading" ? "bg-gray-400 text-white cursor-wait" : ""}
              ${status === "success" ? "bg-green-500 text-white cursor-default" : ""}
              ${status === "fail" ? "bg-red-500 text-white" : ""}
            `}
          >
            {status === "idle" && "수강신청 하기"}
            {status === "loading" && "처리 중..."}
            {status === "success" && "신청 성공!"}
            {status === "fail" && "신청 실패 (재시도)"}
          </button>

          {status === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 text-green-700 rounded-lg text-center text-sm"
            >
              🎉 축하합니다! 수강신청에 성공했습니다.
              <button onClick={reset} className="block mx-auto mt-2 text-xs underline">다시 하기</button>
            </motion.div>
          )}

          {status === "fail" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 text-red-700 rounded-lg text-center text-sm"
            >
              ⚠️ 트래픽 초과로 실패했습니다. 다시 시도해주세요.
              <button onClick={reset} className="block mx-auto mt-2 text-xs underline">다시 시도</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
