"use client";

import { motion } from "framer-motion";
import { pageTransition } from "../../../lib/animations";
import BackLink from "../../../components/ui/BackLink";

export default function TimetableDemo() {
    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-neutral-50 relative flex flex-col"
        >
            <BackLink
                href="/projects/timetable"
                label="EXIT DEMO"
                className="fixed top-8 left-8 z-50 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-neutral-200"
            />

            <div className="flex-1 w-full h-screen pt-0">
                <iframe
                    src="/demo/timetable/test.html"
                    className="w-full h-full border-none"
                    title="Timetable Demo"
                />
            </div>
        </motion.div>
    );
}
