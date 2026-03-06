"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, smoothSpring, smooth, staggerContainer, hoverLift, pageTransition, smoothBounce } from "../../../lib/animations";
import { cn } from "../../../lib/utils";
import BackLink from "../../../components/ui/BackLink";
import Button from "../../../components/ui/Button";
import { FlightData, sampleFlights, steps } from "./data";

export default function BimoDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFlight, setSelectedFlight] = useState<FlightData | null>(null);
  const [analyzedFields, setAnalyzedFields] = useState<string[]>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [scanPhase, setScanPhase] = useState(0); // 0: scan, 1: extract, 2: json, 3: complete
  const [ocrBoxes, setOcrBoxes] = useState<number[]>([]);
  const timeoutIdsRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const clearScheduledTasks = useCallback(() => {
    timeoutIdsRef.current.forEach((id) => clearTimeout(id));
    timeoutIdsRef.current = [];
  }, []);

  const scheduleTask = useCallback((callback: () => void, delay: number) => {
    const id = setTimeout(callback, delay);
    timeoutIdsRef.current.push(id);
  }, []);

  const startAnalysis = useCallback((flight: FlightData) => {
    clearScheduledTasks();
    setSelectedFlight(flight);
    setCurrentStep(1);
    setAnalyzedFields([]);
    setAnalysisComplete(false);
    setScanPhase(0);
    setOcrBoxes([]);

    // Phase 0: Scan animation (0-2s)
    scheduleTask(() => setOcrBoxes([1]), 400);
    scheduleTask(() => setOcrBoxes([1, 2]), 700);
    scheduleTask(() => setOcrBoxes([1, 2, 3]), 1000);
    scheduleTask(() => setOcrBoxes([1, 2, 3, 4]), 1300);
    scheduleTask(() => setOcrBoxes([1, 2, 3, 4, 5]), 1600);

    // Phase 1: Extraction (2s)
    scheduleTask(() => setScanPhase(1), 2000);

    // Phase 2: JSON structuring (3.5s)
    const fields = [
      `"airline": "${flight.airline}"`,
      `"flight_number": "${flight.flightNumber}"`,
      `"departure": { "code": "${flight.departureCode}", "city": "${flight.departureCity}" }`,
      `"arrival": { "code": "${flight.arrivalCode}", "city": "${flight.arrivalCity}" }`,
      `"date": "${flight.date}"`,
      `"departure_time": "${flight.departureTime}"`,
      `"duration": "${flight.duration}"`,
    ];

    scheduleTask(() => {
      setScanPhase(2);
      fields.forEach((field, index) => {
        scheduleTask(() => {
          setAnalyzedFields((prev) => [...prev, field]);
          if (index === fields.length - 1) {
            scheduleTask(() => {
              setScanPhase(3);
              setAnalysisComplete(true);
              scheduleTask(() => setCurrentStep(2), 1200);
            }, 600);
          }
        }, index * 350);
      });
    }, 3500);
  }, [clearScheduledTasks, scheduleTask]);

  useEffect(() => clearScheduledTasks, [clearScheduledTasks]);

  const handleFlightSelect = (flight: FlightData) => {
    startAnalysis(flight);
  };

  const resetDemo = () => {
    clearScheduledTasks();
    setCurrentStep(0);
    setSelectedFlight(null);
    setAnalyzedFields([]);
    setAnalysisComplete(false);
    setScanPhase(0);
    setOcrBoxes([]);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-cool-white text-deep-navy"
    >
      {/* Exit button */}
      <BackLink
        href="/projects/bimo"
        label="EXIT DEMO"
        className="fixed top-8 left-8 z-50 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20"
      />

      {/* Progress indicator */}
      <div className="pt-24 pb-12 px-8 max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: index <= currentStep ? "var(--color-deep-navy)" : "#E2E8F0",
                    scale: index === currentStep ? 1 : 0.8,
                  }}
                  transition={smooth}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-xs mb-3 shadow-md"
                >
                  {index + 1}
                </motion.div>
                <span className={cn(
                  "text-xs font-mono tracking-wider uppercase transition-colors duration-300",
                  index <= currentStep ? 'text-deep-navy font-semibold' : 'text-neutral-400'
                )}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[1px] bg-neutral-200 mx-4 relative top-[-14px]">
                  <motion.div
                    initial={false}
                    animate={{
                      width: index < currentStep ? '100%' : '0%',
                    }}
                    transition={smooth}
                    className="h-full bg-deep-navy"
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
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-serif font-bold text-deep-navy mb-4">
                  Select Boarding Pass
                </h2>
                <p className="text-serene-blue font-light">탑승권을 스캔하여 AI 분석을 시작하세요</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sampleFlights.map((flight, index) => (
                  <motion.button
                    key={index}
                    {...hoverLift}
                    onClick={() => handleFlightSelect(flight)}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-deep-navy/5 hover:border-deep-navy/30 transition-all duration-300 text-left relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-deep-navy opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-serene-blue mb-3 tracking-wider">
                        {flight.airline} {flight.flightNumber}
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold font-serif text-deep-navy">{flight.departureCode}</div>
                          <div className="text-xs text-neutral-400 mt-1">{flight.departureCity}</div>
                        </div>
                        <div className="text-xl text-deep-navy/20">✈</div>
                        <div className="text-right">
                          <div className="text-3xl font-bold font-serif text-deep-navy">{flight.arrivalCode}</div>
                          <div className="text-xs text-neutral-400 mt-1">{flight.arrivalCity}</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-deep-navy/60 font-mono pt-4 border-t border-deep-navy/5 group-hover:border-deep-navy/10 transition-colors">
                        <span>{flight.date}</span>
                        <span>{flight.departureTime}</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: AI Analysis - Enhanced */}
          {currentStep === 1 && selectedFlight && (
            <motion.div
              key="step2"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">
                  {scanPhase < 1 ? "Scanning Document" : scanPhase < 2 ? "Extracting Data" : "Structuring JSON"}
                </h2>
                <p className="text-serene-blue font-light">
                  {scanPhase < 1 ? "Gemini Vision이 탑승권 이미지를 스캔 중입니다" : scanPhase < 2 ? "멀티모달 AI가 핵심 정보를 추출 중입니다" : "추출된 데이터를 구조화된 JSON으로 변환 중입니다"}
                </p>
              </div>

              {/* Phase 0 & 1: Boarding pass scan visualization */}
              <AnimatePresence mode="wait">
                {scanPhase < 2 && (
                  <motion.div
                    key="scan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-2xl shadow-xl border border-deep-navy/5 p-8 relative overflow-hidden"
                  >
                    {/* Scan line animation */}
                    {scanPhase === 0 && (
                      <motion.div
                        animate={{ y: [0, 250, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-serene-blue to-transparent z-20"
                        style={{ top: 20 }}
                      />
                    )}

                    {/* Mini boarding pass mockup */}
                    <div className="relative p-6 bg-neutral-50 rounded-xl border border-deep-navy/5">
                      <div className="flex justify-between items-start mb-6">
                        <div className="relative">
                          <div className="text-xs font-mono text-serene-blue mb-1 tracking-wider">{selectedFlight.airline} {selectedFlight.flightNumber}</div>
                          {ocrBoxes.includes(1) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -inset-1 border-2 border-serene-blue/50 rounded-md bg-serene-blue/5"
                            />
                          )}
                        </div>
                        <div className="text-[10px] font-mono text-neutral-300 uppercase">BOARDING PASS</div>
                      </div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="relative">
                          <div className="text-3xl font-serif font-bold text-deep-navy">{selectedFlight.departureCode}</div>
                          <div className="text-xs text-neutral-400">{selectedFlight.departureCity}</div>
                          {ocrBoxes.includes(2) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -inset-1 border-2 border-serene-blue/50 rounded-md bg-serene-blue/5"
                            />
                          )}
                        </div>
                        <div className="text-deep-navy/20 text-lg">✈</div>
                        <div className="text-right relative">
                          <div className="text-3xl font-serif font-bold text-deep-navy">{selectedFlight.arrivalCode}</div>
                          <div className="text-xs text-neutral-400">{selectedFlight.arrivalCity}</div>
                          {ocrBoxes.includes(3) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -inset-1 border-2 border-serene-blue/50 rounded-md bg-serene-blue/5"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-t border-deep-navy/5">
                        <div className="relative">
                          <div className="text-xs font-mono text-neutral-400 uppercase">DATE</div>
                          <div className="text-sm font-semibold text-deep-navy">{selectedFlight.date}</div>
                          {ocrBoxes.includes(4) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -inset-1 border-2 border-serene-blue/50 rounded-md bg-serene-blue/5"
                            />
                          )}
                        </div>
                        <div className="relative">
                          <div className="text-xs font-mono text-neutral-400 uppercase">TIME</div>
                          <div className="text-sm font-semibold text-deep-navy">{selectedFlight.departureTime}</div>
                          {ocrBoxes.includes(5) && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -inset-1 border-2 border-serene-blue/50 rounded-md bg-serene-blue/5"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Phase indicator */}
                    <div className="mt-6 flex items-center gap-3 text-xs font-mono">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center text-[10px]", scanPhase >= 0 ? "bg-deep-navy text-white" : "bg-neutral-100 text-neutral-300")}>
                        {scanPhase >= 1 ? "✓" : "1"}
                      </div>
                      <span className={cn(scanPhase >= 0 ? "text-deep-navy" : "text-neutral-300")}>이미지 스캔</span>
                      <div className="flex-1 h-[1px] bg-neutral-200" />
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center text-[10px]", scanPhase >= 1 ? "bg-serene-blue text-white" : "bg-neutral-100 text-neutral-300")}>
                        {scanPhase >= 2 ? "✓" : "2"}
                      </div>
                      <span className={cn(scanPhase >= 1 ? "text-serene-blue" : "text-neutral-300")}>데이터 추출</span>
                      <div className="flex-1 h-[1px] bg-neutral-200" />
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center text-[10px]", scanPhase >= 2 ? "bg-deep-navy text-white" : "bg-neutral-100 text-neutral-300")}>
                        3
                      </div>
                      <span className={cn(scanPhase >= 2 ? "text-deep-navy" : "text-neutral-300")}>JSON 변환</span>
                    </div>

                    {/* Extraction labels */}
                    {scanPhase >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 flex flex-wrap gap-2"
                      >
                        {["airline", "flight_no", "departure", "arrival", "date", "time"].map((tag, i) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-2 py-1 bg-serene-blue/10 text-serene-blue text-[10px] font-mono rounded-md border border-serene-blue/20"
                          >
                            ✓ {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Phase 2 & 3: JSON structuring */}
                {scanPhase >= 2 && (
                  <motion.div
                    key="json"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-deep-navy text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden ring-1 ring-white/10"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-serene-blue/20 rounded-full blur-3xl opacity-30" />
                    <div className="relative z-10">
                      {/* API call badge */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Gemini Vision API Response</span>
                        <motion.span
                          animate={{ opacity: analysisComplete ? 1 : [0.3, 1, 0.3] }}
                          transition={analysisComplete ? {} : { repeat: Infinity, duration: 1.5 }}
                          className={cn("text-[10px] font-mono px-2 py-0.5 rounded-full", analysisComplete ? "bg-faded-blue/20 text-faded-blue" : "bg-white/10 text-white/50")}
                        >
                          {analysisComplete ? "200 OK" : "processing..."}
                        </motion.span>
                      </div>

                      {/* JSON output */}
                      <div className="font-mono text-sm leading-loose">
                        <span className="text-white/40">{'{'}</span>
                        {analyzedFields.map((field, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="pl-6 text-white/90"
                          >
                            <span className="text-faded-blue">{field.split(':')[0]}</span>
                            <span className="text-white/40">:</span>
                            <span className="text-white/80">{field.split(':').slice(1).join(':')}</span>
                            {index < 6 && <span className="text-white/30">,</span>}
                          </motion.div>
                        ))}
                        <span className="text-white/40">{'}'}</span>
                      </div>

                      {/* Completion badge */}
                      {analysisComplete && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-6 pt-4 border-t border-white/10 text-center"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={smoothBounce}
                            className="inline-block bg-faded-blue/20 text-faded-blue border border-faded-blue/50 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                          >
                            ✓ Extraction Complete • 7 fields
                          </motion.span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Step 3: Flight Card */}
          {currentStep === 2 && selectedFlight && (
            <motion.div
              key="step3"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">
                  Generated Flight Card
                </h2>
                <p className="text-serene-blue font-light">BIMO가 생성한 정형화된 비행 데이터입니다</p>
              </div>

              <motion.div
                initial={{ scale: 0.95, rotateY: -5 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={smoothSpring}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-deep-navy/5 relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-deep-navy via-serene-blue to-deep-navy" />

                <div className="p-10 relative z-10">
                  {/* Departure and Arrival */}
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <div className="text-5xl font-serif font-bold text-deep-navy mb-2">{selectedFlight.departureCode}</div>
                      <div className="text-neutral-500 font-mono text-sm">{selectedFlight.departureCity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-serif font-bold text-deep-navy mb-2">{selectedFlight.arrivalCode}</div>
                      <div className="text-neutral-500 font-mono text-sm">{selectedFlight.arrivalCity}</div>
                    </div>
                  </div>

                  {/* BIMO TIME */}
                  <div className="text-center mb-10">
                    <div className="text-xs font-mono text-serene-blue mb-2 tracking-[0.2em] uppercase">Estimated Duration</div>
                    <div className="text-4xl font-light text-deep-navy">{selectedFlight.duration}</div>
                  </div>

                  {/* Flight path visualization */}
                  <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-deep-navy mb-2" />
                      <div className="text-lg font-bold text-deep-navy font-mono">{selectedFlight.departureTime}</div>
                    </div>
                    <div className="flex-1 relative h-[1px] bg-deep-navy/20">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        <span className="text-xl text-deep-navy">✈</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-deep-navy mb-2" />
                      <div className="text-lg font-bold text-deep-navy font-mono">{selectedFlight.arrivalTime}</div>
                    </div>
                  </div>

                  {/* Flight info */}
                  <div className="flex justify-between text-sm text-neutral-500 pt-8 border-t border-deep-navy/5 font-mono">
                    <span className="uppercase tracking-wider">{selectedFlight.airline} {selectedFlight.flightNumber}</span>
                    <span>{selectedFlight.date}</span>
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <Button onClick={() => setCurrentStep(3)} className="bg-deep-navy text-white hover:bg-deep-navy/90 px-8">
                  VIEW GUIDE →
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Personalized Guide */}
          {currentStep === 3 && selectedFlight && (
            <motion.div
              key="step4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">
                  Personalized Guide
                </h2>
                <p className="text-serene-blue font-light">비행 정보를 바탕으로 최적화된 가이드를 제공합니다</p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Timezone card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-deep-navy/5 hover:border-deep-navy/20 transition-all shadow-sm"
                >
                  <div className="text-3xl mb-4 opacity-80">🕐</div>
                  <h3 className="font-serif font-bold text-deep-navy text-xl mb-3">Timezone</h3>
                  <p className="text-sm text-deep-navy/70 leading-relaxed font-light">
                    {selectedFlight.timezoneOffset === 0
                      ? "도착지와 시차가 없습니다. 편안한 비행 되세요!"
                      : `도착지와 ${Math.abs(selectedFlight.timezoneOffset)}시간 차이가 있습니다. 비행 전날 ${selectedFlight.timezoneOffset > 0 ? '1시간 늦게' : '1시간 일찍'} 취침하세요.`}
                  </p>
                </motion.div>

                {/* Meal card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-deep-navy/5 hover:border-deep-navy/20 transition-all shadow-sm"
                >
                  <div className="text-3xl mb-4 opacity-80">🍽</div>
                  <h3 className="font-serif font-bold text-deep-navy text-xl mb-3">In-flight Meal</h3>
                  <p className="text-sm text-deep-navy/70 leading-relaxed font-light">
                    출발 2시간 전 가벼운 식사를 권장합니다. {selectedFlight.airline}의 기내식은 이륙 1시간 후 제공됩니다.
                  </p>
                </motion.div>

                {/* Sleep card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-deep-navy/5 hover:border-deep-navy/20 transition-all shadow-sm"
                >
                  <div className="text-3xl mb-4 opacity-80">😴</div>
                  <h3 className="font-serif font-bold text-deep-navy text-xl mb-3">Sleep Pattern</h3>
                  <p className="text-sm text-deep-navy/70 leading-relaxed font-light">
                    비행시간 {selectedFlight.duration} 중 {parseInt(selectedFlight.duration) > 5 ? '4-5' : '1-2'}시간 수면을 권장합니다.
                  </p>
                </motion.div>

                {/* Entertainment card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-deep-navy/5 hover:border-deep-navy/20 transition-all shadow-sm"
                >
                  <div className="text-3xl mb-4 opacity-80">🎧</div>
                  <h3 className="font-serif font-bold text-deep-navy text-xl mb-3">Entertainment</h3>
                  <p className="text-sm text-deep-navy/70 leading-relaxed font-light">
                    이어폰과 목베개를 준비하세요. BIMO의 White Noise 기능을 활용해보세요.
                  </p>
                </motion.div>
              </motion.div>

              <div className="text-center pt-12">
                <Button variant="ghost" onClick={resetDemo} className="hover:bg-deep-navy/5">
                  RESTART DEMO
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
