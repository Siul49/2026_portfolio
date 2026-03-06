"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, hoverLift, smoothBounce, scaleIn, pageTransition, smooth } from "../../../lib/animations";
import BackLink from "../../../components/ui/BackLink";
import Button from "../../../components/ui/Button";
import { cn } from "../../../lib/utils";
import { ROOMS, TIME_SLOTS, Room } from "./data";

const pipelineSteps = [
  {
    label: "Raw HTML",
    icon: "🌐",
    desc: "네이버 지도에서 합주실 페이지 크롤링",
    detail: "<div class=\"place_bluelink\">비쥬합주실 1호점</div>\n<span class=\"LDgIH\">22,000원</span>\n<div class=\"o...",
    color: "bg-neutral-200 text-deep-navy/60",
  },
  {
    label: "Trafilatura",
    icon: "🧹",
    desc: "불필요한 태그, 광고, 스크립트 제거",
    detail: "비쥬합주실 1호점\n가격: 22,000원/시간\n수용인원: 최대 15명, 권장 11명\n위치: 이수역 도보 7분",
    color: "bg-faded-blue/30 text-deep-navy",
  },
  {
    label: "Ollama (Llama 3)",
    icon: "🤖",
    desc: "LLM이 텍스트를 의미론적으로 이해하고 JSON 추출",
    detail: '{\n  "name": "블랙룸",\n  "branch": "비쥬합주실 1호점",\n  "price_per_hour": 22000,\n  "max_capacity": 15\n}',
    color: "bg-serene-blue/20 text-serene-blue",
  },
  {
    label: "Schema Validation",
    icon: "✅",
    desc: "Pydantic 스키마 검증 후 DB 저장 (성공률 92%)",
    detail: "Room(name=\"블랙룸\", branch=\"비쥬합주실 1호점\", price_per_hour=22000, max_capacity=15) ✓ VALIDATED",
    color: "bg-deep-navy text-white",
  },
];

type ViewState = "search" | "results" | "timeslots";
type SortOption = "price" | "capacity";

export default function PickHabjuDemo() {
  const [viewState, setViewState] = useState<ViewState>("search");
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [personCount, setPersonCount] = useState(10);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("price");
  const [filterStation, setFilterStation] = useState<string>("전체");
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showPipeline, setShowPipeline] = useState(false);
  const [pipelinePhase, setPipelinePhase] = useState(0);

  // Generate random booked slots (consistent per room)
  const getBookedSlots = (roomId: string) => {
    const seed = parseInt(roomId);
    const bookedCount = Math.floor(TIME_SLOTS.length * 0.3);
    const booked = new Set<string>();
    for (let i = 0; i < bookedCount; i++) {
      const index = (seed * (i + 1) * 7) % TIME_SLOTS.length;
      booked.add(TIME_SLOTS[index]);
    }
    return booked;
  };

  const filteredAndSortedRooms = useMemo(() => {
    let filtered = ROOMS.filter(room => room.recommendCapacity >= personCount);

    if (filterStation !== "전체") {
      filtered = filtered.filter(room => room.subway.station === filterStation);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price") {
        return a.pricePerHour - b.pricePerHour;
      } else {
        return b.maxCapacity - a.maxCapacity;
      }
    });

    return sorted;
  }, [personCount, filterStation, sortBy]);

  const handleSearch = () => {
    if (!date) {
      alert("날짜를 선택해주세요");
      return;
    }
    setViewState("results");
  };

  const handleTogglePipeline = () => {
    if (!showPipeline) {
      setShowPipeline(true);
      setPipelinePhase(0);
      // 순차적으로 파이프라인 단계 표시
      setTimeout(() => setPipelinePhase(1), 400);
      setTimeout(() => setPipelinePhase(2), 900);
      setTimeout(() => setPipelinePhase(3), 1400);
      setTimeout(() => setPipelinePhase(4), 1900);
    } else {
      setShowPipeline(false);
      setPipelinePhase(0);
    }
  };

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
    setViewState("timeslots");
  };

  const handleTimeSlotClick = (time: string) => {
    setSelectedTime(time);
    setShowModal(true);
    setBookingSuccess(false);
  };

  const handleBookingConfirm = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setShowModal(false);
      setTimeout(() => {
        setViewState("results");
        setSelectedRoom(null);
      }, 300);
    }, 1500);
  };

  const stations = ["전체", "이수역", "상도역", "사당역", "흑석역"];

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-cool-white text-deep-navy"
    >
      {/* Exit Button */}
      <BackLink
        href="/"
        label="데모 종료"
        className="fixed top-8 left-8 z-50 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20"
      />

      <AnimatePresence mode="wait">
        {/* STATE 1: SEARCH */}
        {viewState === "search" && (
          <motion.div
            key="search"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex items-center justify-center min-h-screen p-8"
          >
            <div className="max-w-md w-full">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/60 backdrop-blur-xl rounded-t-3xl rounded-b-xl shadow-2xl p-12 border border-white/40 ring-1 ring-deep-navy/5"
              >
                <div className="text-center mb-10">
                  <span className="font-mono text-xs tracking-widest text-serene-blue uppercase mb-2 block">{"// RESERVATION"}</span>
                  <h1 className="text-5xl font-serif font-bold text-deep-navy mb-2">Pick Habju</h1>
                  <p className="text-neutral-500 font-light">합주실 예약의 새로운 기준</p>
                </div>

                <div className="space-y-6">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-deep-navy mb-2 uppercase">
                      날짜 선택
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-neutral-200 rounded-lg focus:border-deep-navy focus:ring-1 focus:ring-deep-navy focus:outline-none transition-all duration-300 font-sans text-deep-navy"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Person Count */}
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-deep-navy mb-2 uppercase">
                      인원
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                        className="w-12 h-12 rounded-lg bg-white border border-neutral-200 hover:border-deep-navy text-deep-navy transition-all duration-300 flex items-center justify-center text-xl font-light"
                      >
                        −
                      </button>
                      <div className="flex-1 text-center py-3 border-b border-deep-navy/20 font-serif text-2xl text-deep-navy">
                        {personCount} <span className="text-sm font-sans text-neutral-400">명</span>
                      </div>
                      <button
                        onClick={() => setPersonCount(Math.min(30, personCount + 1))}
                        className="w-12 h-12 rounded-lg bg-white border border-neutral-200 hover:border-deep-navy text-deep-navy transition-all duration-300 flex items-center justify-center text-xl font-light"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Search Button */}
                  <Button
                    onClick={handleSearch}
                    className="w-full mt-4"
                  >
                    예약 가능 확인
                  </Button>
                </div>
              </motion.div>

              {/* LLM Pipeline Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 w-full"
              >
                <button
                  onClick={handleTogglePipeline}
                  className="w-full text-center py-3 text-xs font-mono text-serene-blue/60 hover:text-serene-blue transition-colors tracking-widest uppercase group"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-serene-blue/20 group-hover:bg-serene-blue/40 transition-colors" />
                    이 데이터는 어떻게 수집되나?
                    <motion.span
                      animate={{ rotate: showPipeline ? 180 : 0 }}
                      transition={smooth}
                    >
                      ↓
                    </motion.span>
                    <span className="w-4 h-[1px] bg-serene-blue/20 group-hover:bg-serene-blue/40 transition-colors" />
                  </span>
                </button>

                <AnimatePresence>
                  {showPipeline && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={smooth}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-deep-navy/5 p-6 shadow-lg">
                        <div className="text-center mb-6">
                          <span className="text-[10px] font-mono text-serene-blue/60 tracking-widest uppercase">{"/// Semantic Extraction Pipeline"}</span>
                          <h4 className="text-lg font-serif font-bold text-deep-navy mt-1">LLM 기반 적응형 크롤링</h4>
                          <p className="text-[11px] text-neutral-400 mt-1">CSS 선택자가 아닌 의미론적 이해로 데이터를 추출합니다</p>
                        </div>

                        <div className="space-y-3">
                          {pipelineSteps.map((step, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: pipelinePhase > i ? 1 : 0.15,
                                x: pipelinePhase > i ? 0 : -20,
                              }}
                              transition={{ duration: 0.5 }}
                              className="relative"
                            >
                              <div className="flex items-start gap-3">
                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-all", step.color)}>
                                  {step.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-deep-navy">{step.label}</span>
                                    <span className="text-[10px] text-neutral-300">→</span>
                                    <span className="text-[10px] text-serene-blue/60 font-mono">{step.desc}</span>
                                  </div>
                                  {pipelinePhase > i && (
                                    <motion.pre
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      className="mt-2 text-[10px] font-mono bg-deep-navy/5 text-deep-navy/70 p-3 rounded-lg overflow-hidden leading-relaxed whitespace-pre-wrap break-all"
                                    >
                                      {step.detail}
                                    </motion.pre>
                                  )}
                                </div>
                              </div>
                              {i < pipelineSteps.length - 1 && (
                                <div className="ml-4 h-3 border-l border-dashed border-deep-navy/10" />
                              )}
                            </motion.div>
                          ))}
                        </div>

                        {pipelinePhase >= 4 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 pt-4 border-t border-deep-navy/5 text-center"
                          >
                            <span className="text-[10px] font-mono text-deep-navy/40">
                              데이터 정규화 성공률 <strong className="text-deep-navy">92%</strong> • Rule-based 대비 유지보수 비용 <strong className="text-deep-navy">↓78%</strong>
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* STATE 2: RESULTS */}
        {viewState === "results" && (
          <motion.div
            key="results"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pt-32 pb-20 px-8 max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-deep-navy/10 pb-8">
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewState("search")}
                  className="mb-4 pl-0 hover:bg-transparent hover:text-serene-blue"
                >
                  ← 조건 변경
                </Button>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-2">예약 가능한 합주실</h2>
                <div className="flex items-center gap-3 font-mono text-sm text-serene-blue">
                  <span>{date}</span>
                  <span className="opacity-30">|</span>
                  <span>{personCount} 명</span>
                  <span className="opacity-30">|</span>
                  <span>{filteredAndSortedRooms.length} 개 검색됨</span>
                </div>
                {/* LLM Badge */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-deep-navy/5 border border-deep-navy/10 rounded-full text-[10px] font-mono text-deep-navy/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-serene-blue animate-pulse" />
                    LLM Semantic Extraction 으로 수집된 데이터
                  </span>
                </div>
              </div>

              {/* Filter Bar */}
              <div className="flex flex-wrap gap-3 items-center">
                {/* Sort */}
                <div className="flex bg-white/50 backdrop-blur-sm rounded-full p-1 border border-deep-navy/10">
                  <button
                    onClick={() => setSortBy("price")}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300",
                      sortBy === "price"
                        ? "bg-deep-navy text-white shadow-sm"
                        : "text-neutral-500 hover:text-deep-navy"
                    )}
                  >
                    가격순
                  </button>
                  <button
                    onClick={() => setSortBy("capacity")}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300",
                      sortBy === "capacity"
                        ? "bg-deep-navy text-white shadow-sm"
                        : "text-neutral-500 hover:text-deep-navy"
                    )}
                  >
                    인원순
                  </button>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-6 bg-deep-navy/10 mx-2 hidden md:block" />

                {/* Stations */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 max-w-[300px] md:max-w-none no-scrollbar">
                  {stations.map(station => (
                    <button
                      key={station}
                      onClick={() => setFilterStation(station)}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-xs font-mono tracking-wider border transition-all duration-300",
                        filterStation === station
                          ? "bg-serene-blue border-serene-blue text-white"
                          : "bg-transparent border-deep-navy/20 text-neutral-500 hover:border-deep-navy hover:text-deep-navy"
                      )}
                    >
                      {station === "전체" ? "전체" : station}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Cards Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {filteredAndSortedRooms.map((room) => (
                <motion.div
                  key={room.id}
                  variants={fadeInUp}
                  {...hoverLift}
                  onClick={() => handleRoomClick(room)}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-deep-navy/5 hover:border-deep-navy/30 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-deep-navy mb-1 group-hover:text-serene-blue transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-sm font-mono text-serene-blue">{room.branch}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-deep-navy">
                        ₩{room.pricePerHour.toLocaleString()}
                      </div>
                      <div className="text-xs font-mono text-neutral-400">시간당</div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-deep-navy/5 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-serene-blue">👥</span>
                      <span className="text-deep-navy">
                        권장 <strong>{room.recommendCapacity}</strong> / 최대 <strong>{room.maxCapacity}</strong>명
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-serene-blue">🚇</span>
                      <span className="text-deep-navy">
                        {room.subway.station} <span className="text-neutral-400 text-xs">({room.subway.timeToWalk})</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredAndSortedRooms.length === 0 && (
              <div className="text-center py-20 border border-dashed border-deep-navy/20 rounded-3xl">
                <p className="text-deep-navy/50 text-lg font-serif italic">조건에 맞는 합주실이 없습니다.</p>
                <Button
                  onClick={() => setViewState("search")}
                  variant="outline"
                  className="mt-4"
                >
                  검색 변경
                </Button>
              </div>
            )}
          </motion.div>
        )}

        {/* STATE 3: TIME SLOTS */}
        {viewState === "timeslots" && selectedRoom && (
          <motion.div
            key="timeslots"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="pt-32 pb-20 px-8 max-w-4xl mx-auto"
          >
            {/* Room Info Header */}
            <div className="mb-12">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewState("results")}
                className="mb-4 pl-0 hover:bg-transparent hover:text-serene-blue"
              >
                ← 목록으로
              </Button>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-deep-navy/5 p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-serif font-bold text-deep-navy mb-2">{selectedRoom.name}</h2>
                  <p className="text-serene-blue font-mono mb-6">{selectedRoom.branch}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm border-t border-deep-navy/10 pt-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 text-xs uppercase">날짜</span>
                      <span className="font-semibold text-deep-navy">{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 text-xs uppercase">수용 인원</span>
                      <span className="font-semibold text-deep-navy">
                        {selectedRoom.recommendCapacity} - {selectedRoom.maxCapacity} 명
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 text-xs uppercase">가격</span>
                      <span className="font-bold text-deep-navy">
                        ₩{selectedRoom.pricePerHour.toLocaleString()}/시간
                      </span>
                    </div>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-deep-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>

            {/* Time Slots Grid */}
            <div>
              <h3 className="text-xl font-serif font-bold text-deep-navy mb-6 flex items-center gap-4">
                시간 선택 <div className="h-[1px] flex-1 bg-deep-navy/10" />
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {TIME_SLOTS.map((time) => {
                  const bookedSlots = getBookedSlots(selectedRoom.id);
                  const isBooked = bookedSlots.has(time);

                  return (
                    <motion.button
                      key={time}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => !isBooked && handleTimeSlotClick(time)}
                      disabled={isBooked}
                      className={cn(
                        "py-4 px-6 rounded-xl font-mono text-lg transition-all border",
                        isBooked
                          ? "bg-neutral-100 text-neutral-300 border-transparent cursor-not-allowed decoration-slice"
                          : "bg-white text-deep-navy border-deep-navy/10 hover:border-serene-blue hover:text-deep-navy hover:shadow-md"
                      )}
                    >
                      {time}
                      {isBooked && (
                        <div className="text-[10px] mt-1 text-neutral-300 font-sans tracking-tight">마감</div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-navy/40 backdrop-blur-sm flex items-center justify-center p-8 z-[100]"
            onClick={() => !bookingSuccess && setShowModal(false)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-white/20"
            >
              <AnimatePresence mode="wait">
                {!bookingSuccess ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-3xl font-serif font-bold text-deep-navy mb-6">예약 확인</h3>
                    <div className="space-y-4 mb-8 text-sm">
                      <div className="flex justify-between py-3 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">합주실</span>
                        <span className="font-semibold text-deep-navy">{selectedRoom.name}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">지점</span>
                        <span className="font-semibold text-deep-navy">{selectedRoom.branch}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">날짜</span>
                        <span className="font-semibold text-deep-navy">{date}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">시간</span>
                        <span className="font-semibold text-deep-navy">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between py-3 bg-deep-navy/5 px-4 rounded-lg mt-2">
                        <span className="text-deep-navy font-bold">총 합계</span>
                        <span className="font-bold text-deep-navy text-lg">
                          ₩{selectedRoom.pricePerHour.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => setShowModal(false)}
                        variant="ghost"
                        className="flex-1"
                      >
                        취소
                      </Button>
                      <Button
                        onClick={handleBookingConfirm}
                        className="flex-1 bg-deep-navy hover:bg-deep-navy/90 text-white"
                      >
                        예약 확정
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={smoothBounce}
                      className="w-20 h-20 mx-auto mb-6 bg-serene-blue rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-serif font-bold text-deep-navy mb-2">예약 완료!</h3>
                    <p className="text-serene-blue">예약이 성공적으로 완료되었습니다.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div >
        )}
      </AnimatePresence >
    </motion.div >
  );
}
