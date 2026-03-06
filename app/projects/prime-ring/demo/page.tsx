"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, smoothSpring, smooth, staggerContainer, smoothBounce, pageTransition } from "../../../lib/animations";
import { cn } from "../../../lib/utils";
import BackLink from "../../../components/ui/BackLink";
import Button from "../../../components/ui/Button";
import { DiaryEntry, steps, sampleEvents, categories, presetTexts } from "./data";
import { analyzeSentiment, createDiaryEntry } from "./utils";

export default function PrimeRingDemo() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedDate, setSelectedDate] = useState("2025-12-20");
    const [diaryContent, setDiaryContent] = useState("");
    const [analysisResult, setAnalysisResult] = useState<DiaryEntry | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [analyzingPhase, setAnalyzingPhase] = useState(0);
    const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    const clearScheduledTasks = () => {
        timeoutIdsRef.current.forEach(clearTimeout);
        timeoutIdsRef.current = [];
    };

    const scheduleTask = (task: () => void, delay: number) => {
        const timeoutId = setTimeout(task, delay);
        timeoutIdsRef.current.push(timeoutId);
    };

    const handleAnalyze = () => {
        clearScheduledTasks();
        if (!diaryContent.trim()) return;
        setCurrentStep(2);
        setAnalyzingPhase(0);

        // 분석 페이즈 애니메이션
        scheduleTask(() => setAnalyzingPhase(1), 600);
        scheduleTask(() => setAnalyzingPhase(2), 1200);
        scheduleTask(() => setAnalyzingPhase(3), 1800);

        // 실제 분석 실행
        scheduleTask(() => {
            const result = analyzeSentiment(diaryContent);
            setAnalysisResult(createDiaryEntry("1", selectedDate, diaryContent, result));
            scheduleTask(() => setCurrentStep(3), 500);
        }, 2500);
    };

    const resetDemo = () => {
        clearScheduledTasks();
        setCurrentStep(0);
        setSelectedDate("2025-12-20");
        setDiaryContent("");
        setAnalysisResult(null);
        setAnalyzingPhase(0);
    };

    useEffect(() => {
        return () => {
            clearScheduledTasks();
        };
    }, []);

    const fillPreset = (text: string) => {
        setDiaryContent(text);
    };

    // emotionScore에 따른 그라데이션 색상
    const getScoreColor = (score: number) => {
        if (score >= 70) return "from-serene-blue to-faded-blue";
        if (score >= 40) return "from-deep-navy to-serene-blue";
        return "from-deep-navy/80 to-deep-navy";
    };

    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            className={cn(
                "min-h-screen relative overflow-hidden transition-colors duration-500",
                isDarkMode ? "bg-gray-950 text-white" : "bg-cool-white text-deep-navy"
            )}
        >
            {/* Exit button */}
            <BackLink
                href="/projects/prime-ring"
                label="데모 종료"
                className={cn(
                    "fixed top-8 left-8 z-50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border transition-all",
                    isDarkMode ? "bg-gray-800/50 border-gray-700 text-white" : "bg-white/50 border-white/20 text-deep-navy"
                )}
            />

            {/* Theme toggle */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={cn(
                    "fixed top-8 right-8 z-50 p-3 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ease-out border",
                    isDarkMode ? "bg-gray-800/50 border-gray-700 text-faded-blue" : "bg-white/50 border-white/20 text-deep-navy"
                )}
            >
                {isDarkMode ? "🌙" : "☀️"}
            </button>

            {/* Progress indicator */}
            <div className="pt-24 pb-12 px-8 max-w-4xl mx-auto relative z-10">
                <div className="flex items-center justify-between mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center flex-1">
                            <div className="flex flex-col items-center">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        backgroundColor: index <= currentStep
                                            ? (isDarkMode ? "#486581" : "var(--color-deep-navy)")
                                            : (isDarkMode ? "#374151" : "#E2E8F0"),
                                        scale: index === currentStep ? 1 : 0.8,
                                    }}
                                    transition={smooth}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-xs mb-3 shadow-md"
                                >
                                    {index + 1}
                                </motion.div>
                                <span className={cn(
                                    "text-xs font-mono tracking-wider uppercase transition-colors duration-300",
                                    index <= currentStep
                                        ? (isDarkMode ? 'text-serene-blue font-semibold' : 'text-deep-navy font-semibold')
                                        : 'text-neutral-400'
                                )}>
                                    {step}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="flex-1 h-[1px] bg-neutral-200/20 mx-4 relative top-[-14px]">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            width: index < currentStep ? '100%' : '0%',
                                        }}
                                        transition={smooth}
                                        className={cn("h-full", isDarkMode ? "bg-serene-blue" : "bg-deep-navy")}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Step content */}
                <AnimatePresence mode="wait">
                    {/* Step 1: Calendar */}
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
                                <h2 className={cn("text-4xl font-serif font-bold mb-4", isDarkMode ? "text-white" : "text-deep-navy")}>
                                    Smart Calendar
                                </h2>
                                <p className={cn("font-light", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                    AI가 분석하는 당신의 감정 흐름
                                </p>
                            </div>

                            {/* Calendar Grid */}
                            <div className={cn(
                                "rounded-3xl shadow-xl p-8 backdrop-blur-sm border transition-all",
                                isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/60 border-deep-navy/5"
                            )}>
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className={cn("text-2xl font-serif font-bold", isDarkMode ? "text-white" : "text-deep-navy")}>2025년 12월</h3>
                                    <div className="flex gap-2">
                                        <button className={cn("p-2 rounded-lg transition-colors border", isDarkMode ? "hover:bg-gray-800 border-gray-700 text-gray-400" : "hover:bg-white border-transparent text-deep-navy")}>←</button>
                                        <button className={cn("p-2 rounded-lg transition-colors border", isDarkMode ? "hover:bg-gray-800 border-gray-700 text-gray-400" : "hover:bg-white border-transparent text-deep-navy")}>→</button>
                                    </div>
                                </div>

                                {/* Weekday headers */}
                                <div className="grid grid-cols-7 gap-2 mb-4">
                                    {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                                        <div key={day} className={cn("text-center text-xs font-mono font-semibold opacity-60", isDarkMode ? "text-gray-300" : "text-deep-navy")}>
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar days */}
                                <div className="grid grid-cols-7 gap-2">
                                    {Array.from({ length: 35 }, (_, i) => {
                                        const dayNum = i - 6;
                                        const dateStr = dayNum > 0 && dayNum <= 31 ? `2025-12-${String(dayNum).padStart(2, '0')}` : null;
                                        const hasEvent = dateStr && sampleEvents.some(e => e.date === dateStr);
                                        const isSelected = dateStr === selectedDate;

                                        return (
                                            <motion.button
                                                key={i}
                                                onClick={() => dateStr && setSelectedDate(dateStr)}
                                                disabled={!dateStr}
                                                whileHover={{ y: -2, scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={cn(
                                                    "aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-300 ease-out relative group",
                                                    isSelected ? (isDarkMode ? "bg-serene-blue shadow-lg shadow-blue-500/20" : "bg-deep-navy text-white shadow-lg") : "",
                                                    hasEvent && !isSelected ? (isDarkMode ? "bg-gray-800" : "bg-white border border-deep-navy/5") : "",
                                                    !isSelected && !hasEvent && (isDarkMode ? "hover:bg-gray-800" : "hover:bg-white hover:shadow-sm"),
                                                    !dateStr && "invisible"
                                                )}
                                            >
                                                {dateStr && (
                                                    <>
                                                        <span className={cn(
                                                            "text-sm font-medium",
                                                            isSelected ? "text-white" : (isDarkMode ? "text-gray-300" : "text-deep-navy")
                                                        )}>
                                                            {dayNum}
                                                        </span>
                                                        {hasEvent && (
                                                            <div className="flex gap-1 mt-1">
                                                                {sampleEvents.filter(e => e.date === dateStr).map((event, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="w-1.5 h-1.5 rounded-full"
                                                                        style={{ backgroundColor: event.color }}
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Selected date events */}
                            <div className={cn(
                                "rounded-2xl shadow-lg p-6 backdrop-blur-sm border transition-all",
                                isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/60 border-deep-navy/5"
                            )}>
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className={cn("text-lg font-serif font-bold", isDarkMode ? "text-white" : "text-deep-navy")}>
                                        {selectedDate} 일정
                                    </h4>
                                    <span className={cn("text-xs font-mono", isDarkMode ? "text-gray-500" : "text-serene-blue")}>
                                        {sampleEvents.filter(e => e.date === selectedDate).length} 개의 일정
                                    </span>
                                </div>

                                {sampleEvents.filter(e => e.date === selectedDate).length > 0 ? (
                                    <div className="space-y-3">
                                        {sampleEvents.filter(e => e.date === selectedDate).map((event) => (
                                            <motion.div
                                                key={event.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={cn(
                                                    "flex items-center gap-4 p-4 rounded-xl border transition-all",
                                                    isDarkMode ? "bg-gray-900/50 border-gray-700" : "bg-white border-deep-navy/5"
                                                )}
                                            >
                                                <div className="w-3 h-3 rounded-full shadow-sm ring-2 ring-white/20" style={{ backgroundColor: event.color }} />
                                                <div>
                                                    <div className={cn("font-semibold font-serif", isDarkMode ? "text-white" : "text-deep-navy")}>{event.title}</div>
                                                    <div className={cn("text-xs font-mono mt-0.5", isDarkMode ? "text-gray-500" : "text-serene-blue")}>{event.category}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 opacity-50">
                                        <p className={cn("text-sm font-serif italic", isDarkMode ? "text-gray-400" : "text-deep-navy")}>일정이 없습니다</p>
                                    </div>
                                )}
                            </div>

                            <div className="text-center">
                                <Button
                                    onClick={() => setCurrentStep(1)}
                                    className={cn(isDarkMode ? "bg-serene-blue hover:bg-serene-blue/80 border-transparent text-white" : "")}
                                >
                                    다이어리 작성 →
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Diary Writing */}
                    {currentStep === 1 && (
                        <motion.div
                            key="step2"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h2 className={cn("text-4xl font-serif font-bold mb-4", isDarkMode ? "text-white" : "text-deep-navy")}>
                                    다이어리 작성
                                </h2>
                                <p className={cn("font-light", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                    오늘의 일상을 기록해보세요
                                </p>
                            </div>

                            {/* Preset Buttons */}
                            <div className={cn(
                                "rounded-2xl p-4 border backdrop-blur-sm",
                                isDarkMode ? "bg-gray-800/30 border-gray-700" : "bg-white/40 border-deep-navy/5"
                            )}>
                                <p className={cn("text-[11px] font-mono mb-3 uppercase tracking-wider", isDarkMode ? "text-gray-500" : "text-serene-blue/60")}>
                                    💡 빠른 입력 — 클릭하면 예시 텍스트가 자동으로 입력됩니다
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {presetTexts.map((preset) => (
                                        <button
                                            key={preset.label}
                                            onClick={() => fillPreset(preset.text)}
                                            className={cn(
                                                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border",
                                                isDarkMode
                                                    ? "bg-gray-800 text-gray-300 border-gray-700 hover:border-serene-blue hover:text-white"
                                                    : "bg-white text-deep-navy border-deep-navy/10 hover:border-deep-navy hover:shadow-sm"
                                            )}
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={cn(
                                "rounded-3xl shadow-xl p-8 backdrop-blur-sm border transition-all",
                                isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/60 border-deep-navy/5"
                            )}>
                                <div className="mb-8">
                                    <label className={cn("block text-xs font-mono font-bold mb-3 uppercase tracking-wider", isDarkMode ? "text-gray-400" : "text-deep-navy")}>
                                        날짜
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl focus:outline-none transition-all duration-300 ease-out border font-sans",
                                            isDarkMode
                                                ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:bg-gray-800"
                                                : "bg-white text-deep-navy border-deep-navy/10 focus:border-deep-navy focus:bg-white"
                                        )}
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className={cn("block text-xs font-mono font-bold mb-3 uppercase tracking-wider", isDarkMode ? "text-gray-400" : "text-deep-navy")}>
                                        카테고리
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat.name}
                                                className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 shadow-sm hover:shadow-md"
                                                style={{ backgroundColor: cat.color }}
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <label className={cn("block text-xs font-mono font-bold uppercase tracking-wider", isDarkMode ? "text-gray-400" : "text-deep-navy")}>
                                            내용
                                        </label>
                                        <span className={cn("text-[10px] font-mono", diaryContent.length > 0 ? (isDarkMode ? "text-serene-blue" : "text-serene-blue") : "text-neutral-300")}>
                                            {diaryContent.length}자
                                        </span>
                                    </div>
                                    <textarea
                                        value={diaryContent}
                                        onChange={(e) => setDiaryContent(e.target.value)}
                                        placeholder="오늘 하루는 어땠나요? 자유롭게 적어보세요... (위 프리셋 버튼을 눌러 예시를 입력할 수도 있어요!)"
                                        rows={8}
                                        className={cn(
                                            "w-full px-6 py-5 rounded-xl focus:outline-none transition-all duration-300 ease-out resize-none border leading-relaxed",
                                            isDarkMode
                                                ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500 placeholder-gray-600"
                                                : "bg-white text-deep-navy border-deep-navy/10 focus:border-deep-navy placeholder-neutral-300"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center pt-4">
                                <Button
                                    variant="ghost"
                                    onClick={() => setCurrentStep(0)}
                                    className={cn(isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-deep-navy hover:bg-deep-navy/5")}
                                >
                                    ← 뒤로
                                </Button>
                                {diaryContent.trim() ? (
                                    <Button
                                        onClick={handleAnalyze}
                                        className={cn(isDarkMode ? "bg-serene-blue hover:bg-serene-blue/80 text-white border-transparent" : "bg-deep-navy text-white hover:bg-deep-navy/90")}
                                    >
                                        감정 분석하기 →
                                    </Button>
                                ) : (
                                    <button
                                        disabled
                                        className={cn(
                                            "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 ease-out bg-neutral-200 text-neutral-400 cursor-not-allowed",
                                            isDarkMode && "bg-gray-800 text-gray-600"
                                        )}
                                    >
                                        감정 분석하기 →
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: AI Analysis */}
                    {currentStep === 2 && (
                        <motion.div
                            key="step3"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <h2 className={cn("text-4xl font-serif font-bold mb-4", isDarkMode ? "text-white" : "text-deep-navy")}>
                                    분석 중...
                                </h2>
                                <p className={cn("font-light", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                    로컬 WebLLM이 당신의 감정을 읽고 있습니다
                                </p>
                            </div>

                            <div className={cn(
                                "rounded-3xl shadow-2xl p-12 relative overflow-hidden text-white min-h-[400px] flex items-center justify-center border",
                                isDarkMode ? "bg-gray-900 border-gray-800" : "bg-deep-navy border-transparent"
                            )}>
                                {/* Animated Background */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_10s_linear_infinite]"
                                        style={{ background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)' }}
                                    />
                                </div>

                                <div className="relative z-10 space-y-6 w-full max-w-sm">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: analyzingPhase >= 1 ? 1 : 0.3, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-4 text-lg font-mono"
                                    >
                                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors", analyzingPhase >= 1 ? "bg-faded-blue" : "bg-white/10")}>
                                            {analyzingPhase >= 1 ? "✓" : "○"}
                                        </div>
                                        <span>텍스트 분석 중...</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: analyzingPhase >= 2 ? 1 : 0.3, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                        className="flex items-center gap-4 text-lg font-mono"
                                    >
                                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors", analyzingPhase >= 2 ? "bg-serene-blue" : "bg-white/10")}>
                                            {analyzingPhase >= 2 ? "✓" : "○"}
                                        </div>
                                        <span>키워드 추출 중...</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: analyzingPhase >= 3 ? 1 : 0.3, x: 0 }}
                                        transition={{ delay: 1.4 }}
                                        className="flex items-center gap-4 text-lg font-mono"
                                    >
                                        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors", analyzingPhase >= 3 ? "bg-faded-blue" : "bg-white/10")}>
                                            {analyzingPhase >= 3 ? "✓" : "○"}
                                        </div>
                                        <span>감정 점수 계산 중...</span>
                                    </motion.div>

                                    <div className="h-[1px] bg-white/10 w-full my-6" />

                                    <motion.div
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="text-center font-mono text-xs text-white/50 tracking-widest"
                                    >
                                        인사이트 생성 중...
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Analysis Complete */}
                    {currentStep === 3 && analysisResult && (
                        <motion.div
                            key="step4"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <h2 className={cn("text-4xl font-serif font-bold mb-4", isDarkMode ? "text-white" : "text-deep-navy")}>
                                    분석 완료
                                </h2>
                                <p className={cn("font-light", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                    당신의 하루를 AI가 읽었습니다
                                </p>
                            </div>

                            {/* Main Result Card */}
                            <motion.div
                                initial={{ scale: 0.95, rotateY: -10 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={smoothSpring}
                                className={cn(
                                    "rounded-3xl shadow-2xl p-10 relative overflow-hidden transition-all border",
                                    isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gradient-to-br from-[#1a2f45] to-[#0d1b2a] text-white border-transparent"
                                )}
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-deep-navy opacity-10 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-serene-blue opacity-10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    {/* Emotion Display */}
                                    <div className="text-center mb-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={smoothBounce}
                                            className="text-7xl mb-4 filter drop-shadow-xl inline-block"
                                        >
                                            {analysisResult.emotionEmoji}
                                        </motion.div>
                                        <div className="text-3xl font-bold font-serif text-white mb-1">{analysisResult.emotion}</div>
                                        <div className="text-white/60 font-mono text-sm uppercase tracking-widest">
                                            감정 점수: {analysisResult.emotionScore}/100
                                        </div>
                                    </div>

                                    {/* Emotion bar */}
                                    <div className="mb-8 px-4">
                                        <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${analysisResult.emotionScore}%` }}
                                                transition={{ duration: 1.5, ease: "circOut" }}
                                                className={cn("h-full rounded-full relative bg-gradient-to-r", getScoreColor(analysisResult.emotionScore))}
                                            >
                                                <div className="absolute top-0 right-0 h-full w-[2px] bg-white/50" />
                                            </motion.div>
                                        </div>
                                        <div className="flex justify-between text-[10px] items-center text-white/30 font-mono mt-2 px-1">
                                            <span>부정적</span>
                                            <span>중립</span>
                                            <span>긍정적</span>
                                        </div>
                                    </div>

                                    {/* Extracted Keywords */}
                                    {analysisResult.keywords.length > 0 && (
                                        <div className="mb-6">
                                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">추출된 키워드</div>
                                            <div className="flex flex-wrap gap-2">
                                                {analysisResult.keywords.map((keyword, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.15 }}
                                                        className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-xs font-mono text-white/80"
                                                    >
                                                        #{keyword}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Diary Content */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 relative mb-6">
                                        <div className="absolute -top-3 left-6 bg-white/10 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-white/80">일기</div>
                                        <p className="text-white/90 text-sm leading-loose font-serif italic opacity-90">
                                            &quot;{analysisResult.content.length > 150 ? analysisResult.content.substring(0, 150) + "..." : analysisResult.content}&quot;
                                        </p>
                                    </div>

                                    {/* AI Insight */}
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-serene-blue/20 relative">
                                        <div className="absolute -top-3 left-6 bg-serene-blue/20 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-serene-blue">✨ AI 인사이트</div>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {analysisResult.insight}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Action Cards */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-2 gap-4"
                            >
                                <motion.div
                                    variants={fadeInUp}
                                    className={cn(
                                        "p-6 rounded-2xl border backdrop-blur-sm transition-all text-center group",
                                        isDarkMode ? "bg-gray-800/80 border-gray-700 hover:bg-gray-800" : "bg-white/60 border-deep-navy/5 hover:border-deep-navy/20 hover:bg-white/80"
                                    )}
                                >
                                    <div className="text-3xl mb-3 opacity-80 group-hover:scale-110 transition-transform">📊</div>
                                    <h3 className={cn("font-bold text-sm mb-2 font-serif", isDarkMode ? "text-white" : "text-deep-navy")}>트렌드 분석</h3>
                                    <p className={cn("text-xs leading-relaxed", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                        지난 7일간의 감정 변화 확인
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    className={cn(
                                        "p-6 rounded-2xl border backdrop-blur-sm transition-all text-center group",
                                        isDarkMode ? "bg-gray-800/80 border-gray-700 hover:bg-gray-800" : "bg-white/60 border-deep-navy/5 hover:border-deep-navy/20 hover:bg-white/80"
                                    )}
                                >
                                    <div className="text-3xl mb-3 opacity-80 group-hover:scale-110 transition-transform">🏷️</div>
                                    <h3 className={cn("font-bold text-sm mb-2 font-serif", isDarkMode ? "text-white" : "text-deep-navy")}>태그 관리</h3>
                                    <p className={cn("text-xs leading-relaxed", isDarkMode ? "text-gray-400" : "text-serene-blue")}>
                                        스마트 카테고리로 일기 정리
                                    </p>
                                </motion.div>
                            </motion.div>

                            <div className="text-center pt-8">
                                <Button
                                    variant="outline"
                                    onClick={resetDemo}
                                    className={cn(isDarkMode ? "text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white" : "")}
                                >
                                    ← 다른 감정으로 다시 테스트
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div >
    );
}
