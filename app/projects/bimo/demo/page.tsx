"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FlightData {
  airline: string;
  flightNumber: string;
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  timezoneOffset: number;
}

const sampleFlights: FlightData[] = [
  {
    airline: "대한항공",
    flightNumber: "KE713",
    departureCode: "ICN",
    departureCity: "인천",
    arrivalCode: "NRT",
    arrivalCity: "나리타",
    date: "2025.12.15",
    departureTime: "09:30",
    arrivalTime: "11:50",
    duration: "2h 20m",
    timezoneOffset: 0,
  },
  {
    airline: "아시아나",
    flightNumber: "OZ212",
    departureCode: "ICN",
    departureCity: "인천",
    arrivalCode: "SFO",
    arrivalCity: "샌프란시스코",
    date: "2025.12.20",
    departureTime: "13:00",
    arrivalTime: "08:45",
    duration: "11h 45m",
    timezoneOffset: -17,
  },
  {
    airline: "진에어",
    flightNumber: "LJ201",
    departureCode: "GMP",
    departureCity: "김포",
    arrivalCode: "CTS",
    arrivalCity: "삿포로",
    date: "2026.01.05",
    departureTime: "07:45",
    arrivalTime: "10:50",
    duration: "2h 5m",
    timezoneOffset: 0,
  },
];

const steps = ["탑승권 선택", "AI 분석", "비행 카드", "맞춤 가이드"];

export default function BimoDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFlight, setSelectedFlight] = useState<FlightData | null>(null);
  const [analyzedFields, setAnalyzedFields] = useState<string[]>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  useEffect(() => {
    if (currentStep === 1 && selectedFlight) {
      // Reset analysis state
      setAnalyzedFields([]);
      setAnalysisComplete(false);

      // Simulate AI analysis with typing effect
      const fields = [
        `항공사: ${selectedFlight.airline}`,
        `편명: ${selectedFlight.flightNumber}`,
        `출발: ${selectedFlight.departureCode} (${selectedFlight.departureCity})`,
        `도착: ${selectedFlight.arrivalCode} (${selectedFlight.arrivalCity})`,
        `날짜: ${selectedFlight.date}`,
        `출발시간: ${selectedFlight.departureTime}`,
        `비행시간: ${selectedFlight.duration}`,
      ];

      fields.forEach((field, index) => {
        setTimeout(() => {
          setAnalyzedFields((prev) => [...prev, field]);
          if (index === fields.length - 1) {
            setTimeout(() => {
              setAnalysisComplete(true);
              setTimeout(() => setCurrentStep(2), 1000);
            }, 500);
          }
        }, index * 500);
      });
    }
  }, [currentStep, selectedFlight]);

  const handleFlightSelect = (flight: FlightData) => {
    setSelectedFlight(flight);
    setCurrentStep(1);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setSelectedFlight(null);
    setAnalyzedFields([]);
    setAnalysisComplete(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-cool-white)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-deep-navy) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Exit button */}
      <Link
        href="/projects/bimo"
        className="absolute top-8 left-8 z-50 text-sm font-mono text-[var(--color-serene-blue)] hover:text-[var(--color-deep-navy)] transition-colors flex items-center gap-2"
      >
        ← EXIT DEMO
      </Link>

      {/* Progress indicator */}
      <div className="pt-24 pb-12 px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: index <= currentStep ? "var(--color-deep-navy)" : "#CBD5E0",
                    scale: index === currentStep ? 1.2 : 1,
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-mono text-sm mb-2"
                >
                  {index + 1}
                </motion.div>
                <span className={`text-xs font-mono ${index <= currentStep ? 'text-[var(--color-deep-navy)]' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-300 mx-4 relative top-[-12px]">
                  <motion.div
                    initial={false}
                    animate={{
                      width: index < currentStep ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-[var(--color-deep-navy)]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          {/* Step 1: Boarding Pass Selection */}
          {currentStep === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-serif font-bold text-center text-[var(--color-deep-navy)] mb-12">
                탑승권을 스캔하세요
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sampleFlights.map((flight, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleFlightSelect(flight)}
                    className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[var(--color-deep-navy)] transition-all text-left relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-deep-navy)] opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity" />
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-[var(--color-serene-blue)] mb-3">
                        {flight.airline} {flight.flightNumber}
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-[var(--color-deep-navy)]">{flight.departureCode}</div>
                          <div className="text-xs text-gray-500 mt-1">{flight.departureCity}</div>
                        </div>
                        <div className="text-2xl text-gray-400">→</div>
                        <div>
                          <div className="text-3xl font-bold text-[var(--color-deep-navy)]">{flight.arrivalCode}</div>
                          <div className="text-xs text-gray-500 mt-1">{flight.arrivalCity}</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 font-mono pt-4 border-t border-gray-200">
                        <span>{flight.date}</span>
                        <span>{flight.departureTime}</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: AI Analysis */}
          {currentStep === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-serif font-bold text-center text-[var(--color-deep-navy)] mb-12">
                Gemini Vision이 분석 중입니다...
              </h2>
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1923] p-10 rounded-3xl shadow-2xl">
                <div className="space-y-4 font-mono text-sm">
                  {analyzedFields.map((field, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-gray-300 flex items-start gap-3"
                    >
                      <span className="text-green-400 shrink-0">✓</span>
                      <span>{field}</span>
                    </motion.div>
                  ))}
                  {!analysisComplete && analyzedFields.length > 0 && (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-gray-500 flex items-start gap-3"
                    >
                      <span className="shrink-0">●</span>
                      <span>Processing...</span>
                    </motion.div>
                  )}
                  {analysisComplete && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 pt-6 border-t border-gray-700 text-center"
                    >
                      <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold">
                        분석 완료
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Flight Card */}
          {currentStep === 2 && selectedFlight && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-serif font-bold text-center text-[var(--color-deep-navy)] mb-12">
                BIMO가 생성한 비행 카드
              </h2>
              <motion.div
                initial={{ scale: 0.95, rotateY: -10 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="bg-gradient-to-br from-[#1a2f45] to-[#0d1b2a] p-12 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Departure and Arrival */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-5xl font-bold text-white mb-2">{selectedFlight.departureCode}</div>
                      <div className="text-gray-400 text-sm">{selectedFlight.departureCity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-white mb-2">{selectedFlight.arrivalCode}</div>
                      <div className="text-gray-400 text-sm">{selectedFlight.arrivalCity}</div>
                    </div>
                  </div>

                  {/* BIMO TIME */}
                  <div className="text-center mb-6">
                    <div className="text-xs font-mono text-blue-300 mb-2 tracking-widest">BIMO TIME</div>
                    <div className="text-4xl font-bold text-white">{selectedFlight.duration}</div>
                  </div>

                  {/* Flight path visualization */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-green-400 mb-1" />
                      <div className="text-xl font-bold text-white">{selectedFlight.departureTime}</div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="border-t-2 border-dashed border-gray-600 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d1b2a] px-2">
                          <span className="text-2xl">✈</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mb-1" />
                      <div className="text-xl font-bold text-white">{selectedFlight.arrivalTime}</div>
                    </div>
                  </div>

                  {/* Flight info */}
                  <div className="flex justify-between text-sm text-gray-400 pt-6 border-t border-gray-700">
                    <span>{selectedFlight.airline} {selectedFlight.flightNumber}</span>
                    <span>{selectedFlight.date}</span>
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-[var(--color-deep-navy)] text-white px-12 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg"
                >
                  다음 →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Personalized Guide */}
          {currentStep === 3 && selectedFlight && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-serif font-bold text-center text-[var(--color-deep-navy)] mb-12">
                맞춤 비행 가이드
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Timezone card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200"
                >
                  <div className="text-4xl mb-4">🕐</div>
                  <h3 className="font-bold text-[var(--color-deep-navy)] mb-2">시차 적응</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedFlight.timezoneOffset === 0
                      ? "도착지와 시차가 없습니다. 편안한 비행 되세요!"
                      : `도착지와 ${Math.abs(selectedFlight.timezoneOffset)}시간 차이가 있습니다. 비행 전날 ${selectedFlight.timezoneOffset > 0 ? '1시간 늦게' : '1시간 일찍'} 취침하세요.`}
                  </p>
                </motion.div>

                {/* Meal card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200"
                >
                  <div className="text-4xl mb-4">🍽</div>
                  <h3 className="font-bold text-[var(--color-deep-navy)] mb-2">기내식</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    출발 2시간 전 가벼운 식사를 권장합니다. {selectedFlight.airline}의 기내식은 이륙 1시간 후 제공됩니다.
                  </p>
                </motion.div>

                {/* Sleep card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200"
                >
                  <div className="text-4xl mb-4">😴</div>
                  <h3 className="font-bold text-[var(--color-deep-navy)] mb-2">수면 패턴</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    비행시간 {selectedFlight.duration} 중 {parseInt(selectedFlight.duration) > 5 ? '4-5' : '1-2'}시간 수면을 권장합니다.
                  </p>
                </motion.div>

                {/* Entertainment card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200"
                >
                  <div className="text-4xl mb-4">🎧</div>
                  <h3 className="font-bold text-[var(--color-deep-navy)] mb-2">기내 엔터테인먼트</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    이어폰과 목베개를 준비하세요. BIMO의 White Noise 기능을 활용해보세요.
                  </p>
                </motion.div>
              </div>

              <div className="text-center pt-8">
                <button
                  onClick={resetDemo}
                  className="bg-white border-2 border-[var(--color-deep-navy)] text-[var(--color-deep-navy)] px-12 py-4 rounded-full font-bold hover:bg-[var(--color-deep-navy)] hover:text-white transition-all shadow-lg"
                >
                  ← 처음으로
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
