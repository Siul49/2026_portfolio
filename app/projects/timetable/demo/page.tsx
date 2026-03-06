"use client";

import { motion } from "framer-motion";
import { pageTransition } from "../../../lib/animations";
import BackLink from "../../../components/ui/BackLink";
import { withBasePath } from "../../../lib/site";

export default function TimetableDemo() {
  const demoUrl = withBasePath("/demo/timetable/test.html");

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-neutral-50"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-neutral-200 bg-white/85 px-4 py-4 backdrop-blur-md sm:px-6">
        <BackLink
          href="/projects/timetable"
          label="EXIT DEMO"
          className="mb-0 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
        />
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-serene-blue transition-colors duration-300 hover:text-deep-navy hover:underline"
        >
          OPEN STATIC PAGE ↗
        </a>
      </div>

      <div className="w-full sm:px-4 sm:pb-4">
        <iframe
          src={demoUrl}
          className="h-[calc(100svh-73px)] w-full border-none bg-white sm:h-[calc(100svh-105px)] sm:rounded-b-2xl sm:border sm:border-neutral-200"
          title="Timetable Demo"
        />
      </div>
    </motion.div>
  );
}
