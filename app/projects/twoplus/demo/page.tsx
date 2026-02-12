"use client";

import { motion } from "framer-motion";
import { pageTransition } from "../../../lib/animations";
import BackLink from "../../../components/ui/BackLink";

export default function TwoPlusDemo() {
    return (
        <motion.div
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-black relative flex flex-col"
        >
            <BackLink
                href="/projects/twoplus"
                label="EXIT DEMO"
                className="fixed top-8 left-8 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/20 text-white"
            />

            <div className="flex-1 w-full h-screen pt-0">
                <iframe
                    src="/demo/twoplus/index.html"
                    className="w-full h-full border-none"
                    title="TwoPlus Demo"
                />
            </div>
        </motion.div>
    );
}
