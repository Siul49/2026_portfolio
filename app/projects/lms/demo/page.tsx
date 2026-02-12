"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, smoothSpring, smooth, staggerContainer, hoverLift, pageTransition } from "../../../lib/animations";
import { cn } from "../../../lib/utils";
import BackLink from "../../../components/ui/BackLink";
import Button from "../../../components/ui/Button";

interface Course {
    id: string;
    name: string;
    code: string;
    weeks: number;
    materials: number;
}

interface DownloadItem {
    name: string;
    type: string;
    size: string;
    status: "pending" | "downloading" | "completed" | "failed";
}

const steps = ["로그인", "강의 목록", "다운로드 중", "완료"];

const sampleCourses: Course[] = [
    { id: "1", name: "섬김의리더십", code: "2150533701", weeks: 15, materials: 45 },
    { id: "2", name: "오픈소스기반기초설계", code: "2150061301", weeks: 15, materials: 30 },
    { id: "3", name: "행복한가족을만드는관계기술", code: "2150153601", weeks: 15, materials: 35 },
];

const sampleDownloads: DownloadItem[] = [
    { name: "섬김의리더십_OT(25-2).pdf", type: "PDF", size: "2.4 MB", status: "completed" },
    { name: "섬김의리더십_1주차.pdf", type: "PDF", size: "3.1 MB", status: "completed" },
    { name: "섬김의리더십_2주차.pdf", type: "PDF", size: "2.8 MB", status: "completed" },
    { name: "섬김의리더십_3주차.pdf", type: "PDF", size: "3.5 MB", status: "downloading" },
    { name: "섬김의리더십_4주차.pdf", type: "PDF", size: "2.9 MB", status: "pending" },
    { name: "섬김의리더십_5주차.pdf", type: "PDF", size: "3.2 MB", status: "pending" },
];

export default function LmsDemo() {
    const [currentStep, setCurrentStep] = useState(0);
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [downloads, setDownloads] = useState<DownloadItem[]>([]);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = () => {
        if (!userId || !userPw) return;
        setIsLoggingIn(true);
        setTimeout(() => {
            setIsLoggingIn(false);
            setCurrentStep(1);
        }, 1500);
    };

    const handleCourseToggle = (courseId: string) => {
        setSelectedCourses(prev =>
            prev.includes(courseId)
                ? prev.filter(id => id !== courseId)
                : [...prev, courseId]
        );
    };

    const handleStartDownload = () => {
        if (selectedCourses.length === 0) return;
        setCurrentStep(2);
        setDownloads(sampleDownloads.map(d => ({ ...d, status: "pending" })));

        // Simulate download progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            setDownloadProgress(progress);

            // Update download statuses
            setDownloads(prev => {
                const updated = [...prev];
                const completedCount = Math.floor((progress / 100) * updated.length);
                for (let i = 0; i < updated.length; i++) {
                    if (i < completedCount) {
                        updated[i].status = "completed";
                    } else if (i === completedCount) {
                        updated[i].status = "downloading";
                    } else {
                        updated[i].status = "pending";
                    }
                }
                return updated;
            });

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => setCurrentStep(3), 500);
            }
        }, 200);
    };

    const resetDemo = () => {
        setCurrentStep(0);
        setUserId("");
        setUserPw("");
        setSelectedCourses([]);
        setDownloads([]);
        setDownloadProgress(0);
    };

    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            className="min-h-screen relative overflow-hidden bg-[#F0F4F8] text-deep-navy"
        >
            {/* Exit button */}
            <BackLink
                href="/projects/lms"
                label="데모 종료"
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
                                        backgroundColor: index <= currentStep ? "var(--color-search-bg)" : "#E2E8F0", // deep-navy vs slate-200
                                        scale: index === currentStep ? 1 : 0.8,
                                    }}
                                    transition={smooth}
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-xs mb-3 shadow-md"
                                >
                                    {index + 1}
                                </motion.div>
                                <span className={cn(
                                    "text-xs font-mono tracking-wider uppercase transition-colors duration-300",
                                    index <= currentStep ? "text-deep-navy font-bold" : "text-neutral-400"
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
                    {/* Step 1: Login */}
                    {currentStep === 0 && (
                        <motion.div
                            key="step1"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-md mx-auto"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">LMS 다운로더</h2>
                                <p className="text-serene-blue/80 font-light">숭실대학교 LMS에서 강의 자료를 자동으로 다운로드하세요</p>
                            </div>

                            <div className="bg-slate-900 shadow-2xl rounded-2xl p-8 border border-slate-800 relative z-20">
                                {/* Terminal Header */}
                                <div className="flex gap-2 mb-8 items-center border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs font-mono text-slate-500">lms-client — login</div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-400 mb-2 uppercase tracking-wider">
                                            학번
                                        </label>
                                        <input
                                            type="text"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                            placeholder="202XXXXXXX"
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-serene-blue transition-all font-mono"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono font-bold text-slate-400 mb-2 uppercase tracking-wider">
                                            비밀번호
                                        </label>
                                        <input
                                            type="password"
                                            value={userPw}
                                            onChange={(e) => setUserPw(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                                        />
                                    </div>

                                    {userId && userPw && !isLoggingIn ? (
                                        <Button
                                            onClick={handleLogin}
                                            className="w-full bg-deep-navy hover:bg-deep-navy/90 text-white border-transparent font-mono"
                                        >
                                            $ 로그인 시작
                                        </Button>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold font-mono transition-all duration-300 ease-out bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700"
                                        >
                                            {isLoggingIn ? "> 인증 중..." : "$ 입력 대기 중"}
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-deep-navy/40 font-mono tracking-widest uppercase">
                                    Playwright Automation • Canvas LMS
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Course List */}
                    {currentStep === 1 && (
                        <motion.div
                            key="step2"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">
                                    강의 선택
                                </h2>
                                <p className="text-serene-blue/80 font-light">
                                    2025학년도 2학기 • {sampleCourses.length} 개의 강의
                                </p>
                            </div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="bg-slate-900 shadow-2xl rounded-2xl p-8 border border-slate-800 relative z-20 space-y-4"
                            >
                                {/* Terminal Header */}
                                <div className="flex gap-2 mb-6 items-center border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs font-mono text-slate-500">lms-client — select-courses</div>
                                </div>

                                {sampleCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        variants={fadeInUp}
                                        onClick={() => handleCourseToggle(course.id)}
                                        className={cn(
                                            "flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all font-mono text-sm group",
                                            selectedCourses.includes(course.id)
                                                ? "bg-serene-blue/10 border-serene-blue/50"
                                                : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "w-5 h-5 border flex items-center justify-center text-[10px] transition-colors",
                                                selectedCourses.includes(course.id) ? "bg-serene-blue border-serene-blue text-white" : "border-slate-600 text-transparent"
                                            )}>
                                                ✓
                                            </div>
                                            <div>
                                                <div className="text-slate-200 font-bold mb-1">{course.name}</div>
                                                <div className="text-slate-500 text-xs flex gap-3">
                                                    <span>{course.code}</span>
                                                    <span>•</span>
                                                    <span>{course.materials} 개 파일</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-slate-600 text-xs">
                                            [선택됨]
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="flex gap-4 justify-center">
                                <Button
                                    variant="ghost"
                                    onClick={() => setCurrentStep(0)}
                                    className="text-deep-navy hover:bg-deep-navy/5"
                                >
                                    ← 뒤로
                                </Button>
                                {selectedCourses.length > 0 ? (
                                    <Button
                                        onClick={handleStartDownload}
                                        className="bg-deep-navy text-white hover:bg-deep-navy/90"
                                    >
                                        다운로드 시작 ({selectedCourses.length}) →
                                    </Button>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 ease-out bg-slate-200 text-slate-400 cursor-not-allowed"
                                    >
                                        강의를 선택하세요
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Downloading */}
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
                                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4 animate-pulse">
                                    다운로드 중...
                                </h2>
                                <p className="text-serene-blue/80 font-light">
                                    {selectedCourses.length}개 강의 처리 중
                                </p>
                            </div>

                            <div className="bg-slate-900 shadow-2xl rounded-2xl p-8 border border-slate-800 relative z-20">
                                {/* Terminal Header */}
                                <div className="flex gap-2 mb-8 items-center border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs font-mono text-slate-500">lms-client — downloading</div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-8">
                                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                                        <span>총 진행률</span>
                                        <span className="text-faded-blue">{downloadProgress}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${downloadProgress}%` }}
                                            transition={{ duration: 0.1 }}
                                            className="h-full bg-serene-blue"
                                        />
                                    </div>
                                </div>

                                {/* Log Output */}
                                <div className="font-mono text-xs space-y-2 h-[200px] overflow-hidden relative">
                                    {downloads.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className={cn(
                                                "w-2 h-2 rounded-full",
                                                item.status === "completed" ? "bg-faded-blue" :
                                                    item.status === "downloading" ? "bg-serene-blue animate-pulse" : "bg-slate-600"
                                            )} />
                                            <span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span>
                                            <span className={cn(
                                                item.status === "completed" ? "text-slate-300" :
                                                    item.status === "downloading" ? "text-faded-blue" : "text-slate-600"
                                            )}>
                                                {item.status === "downloading" ? "> 다운로드 중: " : item.status === "completed" ? "> 저장됨: " : "> 대기 중: "}
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-xs text-deep-navy/40 font-mono tracking-widest uppercase">
                                    동시 다운로드 • 자동 폴더 정리
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Complete */}
                    {currentStep === 3 && (
                        <motion.div
                            key="step4"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <div className="w-20 h-20 bg-deep-navy text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl">
                                    ✓
                                </div>
                                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">
                                    다운로드 완료
                                </h2>
                                <p className="text-serene-blue/80 font-light">
                                    {selectedCourses.length}개 강의 자료가 모두 저장되었습니다
                                </p>
                            </div>

                            {/* File Tree Visualization */}
                            <motion.div
                                initial={{ scale: 0.95, rotateY: -10 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={smoothSpring}
                                className="bg-slate-900 shadow-2xl rounded-2xl p-8 border border-slate-800 relative z-20"
                            >
                                <div className="flex gap-2 mb-6 items-center border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs font-mono text-slate-500">explorer — ./downloads</div>
                                </div>

                                <div className="font-mono text-sm space-y-1 pl-2 border-l border-slate-700 ml-2">
                                    <div className="text-faded-blue font-bold pb-2">📂 downloads/</div>
                                    {selectedCourses.map(courseId => {
                                        const course = sampleCourses.find(c => c.id === courseId);
                                        return course ? (
                                            <div key={courseId} className="pl-4 border-l border-slate-800 ml-1">
                                                <div className="text-slate-300 py-1 flex items-center gap-2">
                                                    <span className="text-slate-600">├─</span> 📂 {course.name}/
                                                </div>
                                                <div className="pl-6 text-slate-500 text-xs space-y-1">
                                                    <div className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-default">
                                                        <span className="text-slate-700">├─</span> 📄 syllabus.pdf
                                                    </div>
                                                    <div className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-default">
                                                        <span className="text-slate-700">├─</span> 📂 week_01/
                                                    </div>
                                                    <div className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-default">
                                                        <span className="text-slate-700">└─</span> 📂 week_02/
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl border border-deep-navy/5 shadow-sm text-center">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <h4 className="font-bold text-deep-navy text-sm mb-1">빠른 속도</h4>
                                    <p className="text-xs text-serene-blue">멀티스레드 다운로드</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-deep-navy/5 shadow-sm text-center">
                                    <div className="text-2xl mb-2">📂</div>
                                    <h4 className="font-bold text-deep-navy text-sm mb-1">자동 정리</h4>
                                    <p className="text-xs text-serene-blue">주차별 자동 분류</p>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <Button variant="outline" onClick={resetDemo} className="border-deep-navy/10 text-deep-navy hover:bg-deep-navy/5">
                                    ← 처음으로
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
