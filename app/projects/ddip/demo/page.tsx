"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideTransition, fadeInUp, staggerContainer, smoothBounce, scaleIn, pageTransition } from "../../../lib/animations";
import BackLink from "../../../components/ui/BackLink";
import Button from "../../../components/ui/Button";
import { cn } from "../../../lib/utils";
import { Product, categories, productsByCategory, shareItems } from "./data";

type ViewMode = "home" | "category" | "product";
type TabMode = "group" | "share";

export default function DdipDemo() {
  const [mode, setMode] = useState<ViewMode>("home");
  const [tab, setTab] = useState<TabMode>("group");
  const [cart, setCart] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setMode("category");
    setTab("group");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setMode("product");
  };

  const handleJoin = () => {
    setShowJoinModal(true);
    setJoinSuccess(false);
  };

  const handleConfirmJoin = () => {
    setJoinSuccess(true);
    setCart(prev => prev + 1);
    setTimeout(() => {
      setShowJoinModal(false);
      setTimeout(() => {
        setSelectedProduct(null);
        setMode("category");
      }, 300);
    }, 1500);
  };

  const currentProducts = selectedCategory ? productsByCategory[selectedCategory] || [] : [];
  const currentCategoryInfo = categories.find(c => c.id === selectedCategory);

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-center font-sans p-4 relative overflow-hidden bg-cool-white text-deep-navy"
    >
      <BackLink
        href="/"
        label="데모 종료"
        className="fixed top-8 left-8 z-50 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20"
      />

      {/* App Mockup Container */}
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl w-full max-w-sm border border-white/50 ring-1 ring-deep-navy/5 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 border-b border-deep-navy/10 pb-4">
          <h2 className="text-2xl font-serif font-black text-deep-navy tracking-tight italic">DDIP</h2>
          <div className="relative p-2 bg-deep-navy/5 rounded-full">
            <span className="text-xl">🛒</span>
            {cart > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={smoothBounce}
                className="absolute -top-1 -right-1 bg-deep-navy text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm"
              >
                {cart}
              </motion.span>
            )}
          </div>
        </header>

        <AnimatePresence mode="wait">
          {/* HOME */}
          {mode === "home" && (
            <motion.div
              key="home"
              variants={slideTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              {/* Banner */}
              <div className="bg-gradient-to-br from-neutral-50 to-faded-blue/20 p-6 rounded-2xl mb-6 border border-faded-blue/30 shadow-inner relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-deep-navy/[0.03] rounded-full blur-xl" />
                <p className="text-deep-navy font-serif font-bold text-xl leading-relaxed relative z-10">
                  오늘 이웃과<br />함께 <span className="text-serene-blue italic">&quot;DDIP&quot;</span> 할까요?
                </p>
                <p className="text-xs text-serene-blue/60 mt-2 font-mono relative z-10">
                  근처 {Object.values(productsByCategory).flat().length}개 공구 진행 중
                </p>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => {
                  const products = productsByCategory[cat.id] || [];
                  const activeCount = products.filter(p => p.spotsTaken < p.spotsTotal).length;
                  return (
                    <motion.button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      whileTap={{ scale: 0.98 }}
                      className="p-5 bg-white/50 border border-deep-navy/5 rounded-2xl flex flex-col items-center gap-2 transition-all shadow-sm hover:shadow-md relative group"
                    >
                      <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{cat.emoji}</span>
                      <span className="text-sm font-bold text-deep-navy/80">{cat.name}</span>
                      <span className="text-[10px] text-serene-blue font-mono">{activeCount}개 진행 중</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Quick Share Banner */}
              <motion.button
                onClick={() => { setSelectedCategory(""); setMode("category"); setTab("share"); }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full mt-4 p-4 bg-deep-navy/[0.03] border border-dashed border-deep-navy/15 rounded-2xl flex items-center justify-between group hover:border-deep-navy/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">💝</span>
                  <div className="text-left">
                    <p className="text-sm font-bold text-deep-navy">무료 나눔</p>
                    <p className="text-[10px] text-serene-blue font-mono">{shareItems.length}개 나눔 진행 중</p>
                  </div>
                </div>
                <span className="text-xs text-deep-navy/30 group-hover:text-deep-navy/60 transition-colors">→</span>
              </motion.button>
            </motion.div>
          )}

          {/* CATEGORY */}
          {mode === "category" && (
            <motion.div
              key="category"
              variants={slideTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => { setMode("home"); setTab("group"); }}
                className="text-xs font-mono font-bold text-serene-blue mb-4 inline-flex items-center gap-2 hover:text-deep-navy transition-colors"
              >
                <span>← 홈으로</span>
              </button>

              {/* Tabs */}
              <div className="flex bg-deep-navy/5 rounded-xl p-1 mb-5">
                <button
                  onClick={() => setTab("group")}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-300",
                    tab === "group"
                      ? "bg-white text-deep-navy shadow-sm"
                      : "text-deep-navy/40 hover:text-deep-navy/60"
                  )}
                >
                  🛍️ 공동구매
                </button>
                <button
                  onClick={() => setTab("share")}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-300",
                    tab === "share"
                      ? "bg-white text-deep-navy shadow-sm"
                      : "text-deep-navy/40 hover:text-deep-navy/60"
                  )}
                >
                  💝 나눔
                </button>
              </div>

              {/* Title */}
              {tab === "group" && currentCategoryInfo && (
                <div className="mb-4">
                  <h3 className="text-lg font-serif font-bold text-deep-navy flex items-center gap-2">
                    {currentCategoryInfo.emoji} {currentCategoryInfo.name}
                  </h3>
                  <p className="text-[11px] text-serene-blue/60 font-mono mt-1">{currentCategoryInfo.description}</p>
                </div>
              )}
              {tab === "share" && (
                <div className="mb-4">
                  <h3 className="text-lg font-serif font-bold text-deep-navy flex items-center gap-2">
                    💝 무료 나눔
                  </h3>
                  <p className="text-[11px] text-serene-blue/60 font-mono mt-1">이웃이 나누는 따뜻한 마음</p>
                </div>
              )}

              {/* Product List */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                {(tab === "group" ? currentProducts : shareItems).map((item) => {
                  const spotsLeft = item.spotsTotal - item.spotsTaken;
                  const progressPercent = (item.spotsTaken / item.spotsTotal) * 100;
                  return (
                    <motion.div
                      key={item.id}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => handleProductClick(item)}
                      className="p-4 border border-deep-navy/5 rounded-2xl bg-white/60 hover:bg-white/80 transition-all shadow-sm cursor-pointer group"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                          {item.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-deep-navy truncate">{item.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {item.isShare ? (
                              <span className="text-xs font-bold text-serene-blue">무료 나눔</span>
                            ) : (
                              <>
                                <span className="text-xs font-bold text-deep-navy">{item.price}</span>
                                <span className="text-[10px] text-neutral-300 line-through">{item.originalPrice}</span>
                                <span className="text-[10px] font-bold text-serene-blue bg-serene-blue/10 px-1.5 py-0.5 rounded-full">{item.discount}</span>
                              </>
                            )}
                          </div>
                          {/* Progress bar */}
                          {!item.isShare && (
                            <div className="mt-2.5">
                              <div className="h-1.5 bg-deep-navy/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${progressPercent}%` }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                  className={cn(
                                    "h-full rounded-full",
                                    spotsLeft <= 1 ? "bg-deep-navy" : "bg-serene-blue/60"
                                  )}
                                />
                              </div>
                              <div className="flex justify-between mt-1">
                                <span className="text-[10px] text-serene-blue font-mono">
                                  {spotsLeft <= 1 ? `🔥 ${spotsLeft}자리 남음!` : `${spotsLeft}자리 남음`}
                                </span>
                                <span className="text-[10px] text-neutral-300 font-mono">{item.distance}</span>
                              </div>
                            </div>
                          )}
                          {item.isShare && (
                            <div className="flex justify-between mt-2">
                              <span className="text-[10px] text-serene-blue font-mono">📍 {item.distance}</span>
                              <span className="text-[10px] text-neutral-300 font-mono">{item.timeLeft}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* PRODUCT DETAIL */}
          {mode === "product" && selectedProduct && (
            <motion.div
              key="product"
              variants={slideTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => { setMode("category"); setSelectedProduct(null); }}
                className="text-xs font-mono font-bold text-serene-blue mb-4 inline-flex items-center gap-2 hover:text-deep-navy transition-colors"
              >
                <span>← 목록으로</span>
              </button>

              {/* Product Image Area */}
              <div className="bg-gradient-to-br from-neutral-50 to-faded-blue/10 rounded-2xl p-8 text-center mb-5 border border-deep-navy/5 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-deep-navy/[0.03] rounded-full blur-2xl" />
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={smoothBounce}
                  className="text-6xl inline-block filter drop-shadow-lg"
                >
                  {selectedProduct.emoji}
                </motion.span>
              </div>

              {/* Product Info */}
              <div className="mb-5">
                <h3 className="text-lg font-serif font-bold text-deep-navy mb-2">{selectedProduct.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  {selectedProduct.isShare ? (
                    <span className="text-xl font-bold text-serene-blue">무료 나눔 💝</span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-deep-navy">{selectedProduct.price}</span>
                      <span className="text-sm text-neutral-300 line-through">{selectedProduct.originalPrice}</span>
                      <span className="text-xs font-bold text-white bg-deep-navy px-2 py-0.5 rounded-full">{selectedProduct.discount}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Seller Info */}
              <div className="bg-deep-navy/[0.03] rounded-xl p-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-deep-navy/10 rounded-full flex items-center justify-center text-sm">👤</div>
                  <div>
                    <p className="text-sm font-bold text-deep-navy">{selectedProduct.seller}</p>
                    <p className="text-[10px] text-serene-blue font-mono">📍 {selectedProduct.distance} • ⏰ {selectedProduct.timeLeft}</p>
                  </div>
                </div>
              </div>

              {/* Participation Status */}
              {!selectedProduct.isShare && (
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-deep-navy">참여 현황</span>
                    <span className="text-serene-blue font-mono">{selectedProduct.spotsTaken}/{selectedProduct.spotsTotal}명</span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: selectedProduct.spotsTotal }, (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                          "flex-1 h-8 rounded-lg flex items-center justify-center text-xs transition-colors",
                          i < selectedProduct.spotsTaken
                            ? "bg-deep-navy text-white"
                            : "bg-deep-navy/5 text-deep-navy/30 border border-dashed border-deep-navy/15"
                        )}
                      >
                        {i < selectedProduct.spotsTaken ? "👤" : "?"}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <Button
                onClick={handleJoin}
                className="w-full bg-deep-navy hover:bg-deep-navy/90 text-white"
              >
                {selectedProduct.isShare ? "나눔 받기 🙏" : "공구 참여하기 ✋"}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tech Label */}
      <p className="mt-6 text-xs text-deep-navy/40 font-mono tracking-widest text-center uppercase leading-loose relative z-10">
        State-Driven UI • Community Commerce<br />
        Next.js + Framer Motion
      </p>

      {/* Join Confirmation Modal */}
      <AnimatePresence>
        {showJoinModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-navy/40 backdrop-blur-sm flex items-center justify-center p-8 z-[100]"
            onClick={() => !joinSuccess && setShowJoinModal(false)}
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-white/20"
            >
              <AnimatePresence mode="wait">
                {!joinSuccess ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">
                      {selectedProduct.isShare ? "나눔 확인" : "참여 확인"}
                    </h3>
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex justify-between py-2.5 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">상품</span>
                        <span className="font-semibold text-deep-navy text-right max-w-[180px] truncate">{selectedProduct.name}</span>
                      </div>
                      <div className="flex justify-between py-2.5 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">판매자</span>
                        <span className="font-semibold text-deep-navy">{selectedProduct.seller}</span>
                      </div>
                      <div className="flex justify-between py-2.5 border-b border-dashed border-deep-navy/10">
                        <span className="text-serene-blue font-mono text-xs uppercase">거리</span>
                        <span className="font-semibold text-deep-navy">{selectedProduct.distance}</span>
                      </div>
                      {!selectedProduct.isShare && (
                        <div className="flex justify-between py-3 bg-deep-navy/5 px-4 rounded-lg mt-2">
                          <span className="text-deep-navy font-bold">내 부담금</span>
                          <span className="font-bold text-deep-navy text-lg">{selectedProduct.price}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setShowJoinModal(false)}
                        variant="ghost"
                        className="flex-1"
                      >
                        취소
                      </Button>
                      <Button
                        onClick={handleConfirmJoin}
                        className="flex-1 bg-deep-navy hover:bg-deep-navy/90 text-white"
                      >
                        {selectedProduct.isShare ? "받을게요!" : "참여 확정"}
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={smoothBounce}
                      className="w-16 h-16 mx-auto mb-5 bg-serene-blue rounded-full flex items-center justify-center text-white shadow-lg"
                    >
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-2">
                      {selectedProduct.isShare ? "나눔 신청 완료! 💝" : "참여 완료! 🎉"}
                    </h3>
                    <p className="text-serene-blue text-sm">
                      {selectedProduct.isShare
                        ? "판매자에게 연락이 갈 거예요"
                        : "이웃과 함께 절약해요"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
