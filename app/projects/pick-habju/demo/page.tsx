"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ROOMS, TIME_SLOTS, Room } from "./data";

type ViewState = "search" | "results" | "timeslots";
type SortOption = "price" | "capacity";

export default function PickHabjuDemo() {
  const [viewState, setViewState] = useState<ViewState>("search");
  const [date, setDate] = useState("");
  const [personCount, setPersonCount] = useState(10);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("price");
  const [filterStation, setFilterStation] = useState<string>("전체");
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Exit Button */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 text-sm font-mono text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
      >
        ← EXIT DEMO
      </Link>

      <AnimatePresence mode="wait">
        {/* STATE 1: SEARCH */}
        {viewState === "search" && (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center min-h-screen p-8"
          >
            <div className="max-w-md w-full">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-3xl shadow-2xl p-12"
              >
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-bold text-emerald-700 mb-2">Pick Habju</h1>
                  <p className="text-gray-500 text-sm">합주실 검색</p>
                </div>

                <div className="space-y-6">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      날짜 선택
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Person Count */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      인원 수
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                        className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xl transition-colors"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={personCount}
                        onChange={(e) => setPersonCount(Math.max(1, Math.min(30, parseInt(e.target.value) || 1)))}
                        className="flex-1 text-center px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors font-semibold text-lg"
                        min="1"
                        max="30"
                      />
                      <button
                        onClick={() => setPersonCount(Math.min(30, personCount + 1))}
                        className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xl transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    검색하기
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* STATE 2: RESULTS */}
        {viewState === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-8 max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="mb-12">
              <button
                onClick={() => setViewState("search")}
                className="text-sm text-emerald-600 hover:text-emerald-800 mb-4 flex items-center gap-2"
              >
                ← 검색 조건 수정
              </button>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">검색 결과</h2>
              <p className="text-gray-600">
                {date} · {personCount}명 · {filteredAndSortedRooms.length}개의 합주실
              </p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 flex flex-wrap gap-4 items-center">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">정렬:</span>
                <button
                  onClick={() => setSortBy("price")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === "price"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  가격순
                </button>
                <button
                  onClick={() => setSortBy("capacity")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === "capacity"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  수용인원순
                </button>
              </div>

              {/* Station Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-gray-700">역:</span>
                {stations.map(station => (
                  <button
                    key={station}
                    onClick={() => setFilterStation(station)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filterStation === station
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {station}
                  </button>
                ))}
              </div>
            </div>

            {/* Room Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAndSortedRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleRoomClick(room)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden group transform hover:scale-[1.02]"
                >
                  <div className="flex">
                    {/* Colored Accent Bar */}
                    <div
                      className="w-3"
                      style={{
                        background: `hsl(${(parseInt(room.id) * 40) % 360}, 70%, 60%)`
                      }}
                    />

                    {/* Card Content */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                            {room.name}
                          </h3>
                          <p className="text-sm text-gray-500">{room.branch}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-emerald-600">
                            ₩{room.pricePerHour.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">/시간</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">👥</span>
                          <span className="text-gray-700">
                            추천 <strong>{room.recommendCapacity}명</strong> / 최대 <strong>{room.maxCapacity}명</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">🚇</span>
                          <span className="text-gray-700">
                            {room.subway.station} {room.subway.timeToWalk}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredAndSortedRooms.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">검색 조건에 맞는 합주실이 없습니다.</p>
                <button
                  onClick={() => setViewState("search")}
                  className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  검색 조건 수정하기
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* STATE 3: TIME SLOTS */}
        {viewState === "timeslots" && selectedRoom && (
          <motion.div
            key="timeslots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-8 max-w-4xl mx-auto"
          >
            {/* Room Info Header */}
            <div className="mb-12">
              <button
                onClick={() => setViewState("results")}
                className="text-sm text-emerald-600 hover:text-emerald-800 mb-4 flex items-center gap-2"
              >
                ← 목록으로 돌아가기
              </button>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRoom.name}</h2>
                <p className="text-gray-600 mb-4">{selectedRoom.branch}</p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">📅</span>
                    <span className="text-gray-700">{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">👥</span>
                    <span className="text-gray-700">
                      추천 {selectedRoom.recommendCapacity}명 / 최대 {selectedRoom.maxCapacity}명
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">💰</span>
                    <span className="text-emerald-600 font-semibold">
                      ₩{selectedRoom.pricePerHour.toLocaleString()}/시간
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots Grid */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">시간 선택</h3>
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
                      className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                        isBooked
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-900 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white shadow-md hover:shadow-xl transform hover:scale-105"
                      }`}
                    >
                      {time}
                      {isBooked && (
                        <div className="text-xs mt-1">예약됨</div>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-8 z-50"
            onClick={() => !bookingSuccess && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full"
            >
              <AnimatePresence mode="wait">
                {!bookingSuccess ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">예약 확인</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600">합주실</span>
                        <span className="font-semibold text-gray-900">{selectedRoom.name}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600">지점</span>
                        <span className="font-semibold text-gray-900">{selectedRoom.branch}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600">날짜</span>
                        <span className="font-semibold text-gray-900">{date}</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-gray-200">
                        <span className="text-gray-600">시간</span>
                        <span className="font-semibold text-gray-900">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between py-3">
                        <span className="text-gray-600">금액</span>
                        <span className="font-bold text-emerald-600 text-xl">
                          ₩{selectedRoom.pricePerHour.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowModal(false)}
                        className="flex-1 py-3 px-6 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                      >
                        돌아가기
                      </button>
                      <button
                        onClick={handleBookingConfirm}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg"
                      >
                        예약 확정
                      </button>
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
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">예약 완료!</h3>
                    <p className="text-gray-600">예약이 성공적으로 완료되었습니다.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
