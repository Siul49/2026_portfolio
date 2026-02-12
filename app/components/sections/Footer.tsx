"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <Container
      as="footer"
      size="wide"
      id="contact"
      className="py-20 border-t border-grid-line"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ─── Top: Editorial Heading ──────────────────── */}
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6 block">
            // Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-navy leading-[1.05] tracking-tight">
            Let&rsquo;s Build Something{" "}
            <span className="italic font-light text-serene-blue">
              Together
            </span>
          </h2>
          <p className="text-lg text-neutral-500 font-light mt-4 leading-relaxed max-w-xl">
            새로운 프로젝트나 협업에 관심이 있으시다면, 언제든 연락해 주세요.
          </p>
        </motion.div>

        {/* ─── Middle: Contact Links ────────────────────── */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-8 mt-14"
        >
          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-sm text-serene-blue hover:text-deep-navy transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                fill="currentColor"
              />
            </svg>
            <span className="border-b border-current border-opacity-30 pb-px group-hover:border-opacity-100 transition-all duration-300">
              GitHub
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-3 font-mono text-sm text-serene-blue hover:text-deep-navy transition-colors duration-300"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                fill="currentColor"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                fill="currentColor"
              />
            </svg>
            <span className="border-b border-current border-opacity-30 pb-px group-hover:border-opacity-100 transition-all duration-300">
              hello@example.com
            </span>
          </a>
        </motion.div>

        {/* ─── Bottom: Separator + Copyright ───────────── */}
        <motion.div variants={fadeInUp}>
          <div className="h-[1px] bg-deep-navy opacity-10 my-8" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="font-mono text-xs text-neutral-400">
              &copy; 2026 Kim Gyeongsu
            </span>
            <span className="font-mono text-xs text-neutral-400">
              Designed &amp; Built with Next.js
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
