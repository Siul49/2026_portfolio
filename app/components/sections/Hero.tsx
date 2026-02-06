"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Decorative Lines */}
      <div className="absolute top-20 left-10 w-[1px] h-40 bg-[var(--color-deep-navy)] opacity-20" />
      <div className="absolute bottom-20 right-10 w-40 h-[1px] bg-[var(--color-deep-navy)] opacity-20" />
      <div className="diagonal-line top-[20%] right-[30%]" />

      <div className="z-10 grid grid-cols-12 gap-4 w-full max-w-7xl px-8 items-center">
        {/* Left Side: Vertical Text */}
        <div className="col-span-1 hidden md:flex flex-col h-full justify-between py-10 opacity-40">
          <span className="vertical-text text-xs tracking-widest font-mono">EST. 2026</span>
          <span className="vertical-text text-xs tracking-widest font-mono">PORTFOLIO</span>
        </div>

        {/* Center: Main Title */}
        <div className="col-span-12 md:col-span-10 text-center md:text-left relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-[var(--color-serene-blue)] mb-8 ml-1"
          />
          
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-[var(--color-deep-navy)] leading-[0.9]"
          >
            The <br />
            <span className="italic font-light text-[var(--color-serene-blue)]">Architect</span> <br />
            of Dreams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl font-light text-gray-600 max-w-md leading-relaxed"
          >
            감각적인 사용자 경험 이면의 견고한 로직을 설계합니다.
            <br />
            <span className="text-sm text-[var(--color-serene-blue)] mt-2 block font-mono">
              // Back-end Developer & Tech Enthusiast
            </span>
          </motion.p>
        </div>
        
        {/* Right Side: Abstract Visual */}
        <div className="col-span-12 md:col-span-1 relative h-60 w-full hidden md:block">
           <div className="absolute top-0 right-0 w-[1px] h-full bg-[var(--color-deep-navy)] opacity-10" />
           <div className="absolute top-[50%] -left-10 w-20 h-[1px] bg-[var(--color-deep-navy)] opacity-10" />
        </div>
      </div>
    </section>
  );
}
