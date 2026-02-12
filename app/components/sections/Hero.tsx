"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, lineExpand, smoothSlow } from "../../lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Decorative Lines */}
      <div className="absolute top-20 left-10 w-[1px] h-40 bg-deep-navy opacity-20" />
      <div className="absolute bottom-20 right-10 w-40 h-[1px] bg-deep-navy opacity-20" />
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
            variants={lineExpand}
            initial="hidden"
            animate="visible"
            className="h-[2px] bg-serene-blue mb-8 ml-1"
          />

          <motion.h1
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={smoothSlow}
            className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-deep-navy leading-[0.9]"
          >
            The <br />
            <span className="italic font-light text-serene-blue">Architect</span> <br />
            of Dreams
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothSlow, delay: 0.8 }}
            className="mt-8 text-lg md:text-xl font-light text-neutral-500 max-w-md leading-relaxed"
          >
            감각적인 사용자 경험 이면의 견고한 로직을 설계합니다.
            <br />
            <span className="text-sm text-serene-blue mt-2 block font-mono">
              // Back-end Developer & Tech Enthusiast
            </span>
          </motion.p>
        </div>

        {/* Right Side: Abstract Visual */}
        <div className="col-span-12 md:col-span-1 relative h-60 w-full hidden md:block">
           <div className="absolute top-0 right-0 w-[1px] h-full bg-deep-navy opacity-10" />
           <div className="absolute top-[50%] -left-10 w-20 h-[1px] bg-deep-navy opacity-10" />
        </div>
      </div>

      {/* Scroll CTA */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-pointer bg-transparent border-none"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-deep-navy"
        />
      </button>
    </section>
  );
}
