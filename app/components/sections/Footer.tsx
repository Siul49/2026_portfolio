"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <Container
      as="footer"
      size="wide"
      id="contact"
      className="border-t border-grid-line py-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="max-w-2xl">
          <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
            {"// Contact"}
          </span>
          <h2 className="text-4xl leading-[1.05] font-serif font-bold tracking-tight text-deep-navy md:text-5xl">
            연락처
          </h2>
          <p className="mt-4 text-base leading-relaxed font-light text-neutral-600">
            이메일과 GitHub 링크를 남겨두었습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="mailto:kksu149@gmail.com" size="md">
              Email
            </Button>
            <Button href="https://github.com/Siul49" external variant="outline" size="md">
              GitHub
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-14 flex flex-col gap-8 sm:flex-row"
        >
          <a
            href="https://github.com/Siul49"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-sm text-serene-blue transition-colors duration-300 hover:text-deep-navy"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                fill="currentColor"
              />
            </svg>
            <span className="border-b border-current border-opacity-30 pb-px transition-all duration-300 group-hover:border-opacity-100">
              GitHub / Siul49
            </span>
          </a>

          <a
            href="mailto:kksu149@gmail.com"
            className="group inline-flex items-center gap-3 font-mono text-sm text-serene-blue transition-colors duration-300 hover:text-deep-navy"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
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
            <span className="border-b border-current border-opacity-30 pb-px transition-all duration-300 group-hover:border-opacity-100">
              Email / kksu149@gmail.com
            </span>
          </a>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="my-8 h-[1px] bg-deep-navy opacity-10" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-xs text-neutral-500">
              &copy; 2026 Kim Gyeongsu
            </span>
            <div className="flex flex-col gap-1 text-left sm:text-right">
              <span className="font-mono text-xs text-neutral-500">
                Portfolio built with Next.js
              </span>
              <span className="font-mono text-xs text-neutral-500">
                멋사를 위한 포트폴리오
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
