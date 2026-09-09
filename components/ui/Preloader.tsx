"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem("elanora-intro");

        if (alreadySeen) return;

        setShow(true);

        const interval = window.setInterval(() => {
            setProgress((current) => {
                const next = Math.min(
                    current + Math.floor(Math.random() * 12) + 4,
                    100
                );

                if (next === 100) {
                    window.clearInterval(interval);

                    window.setTimeout(() => {
                        sessionStorage.setItem("elanora-intro", "true");
                        setShow(false);
                    }, 500);
                }

                return next;
            });
        }, 100);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#181713] p-6 text-[#f4f0e8] md:p-10"
                >
                    <div className="flex justify-between">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                            Beauty Atelier
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                            Colombo / Sri Lanka
                        </span>
                    </div>

                    <div className="overflow-hidden text-center">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif text-[15vw] leading-none tracking-[0.05em] md:text-[9vw]"
                        >
                            ÉLANORA
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="mt-5 text-[9px] uppercase tracking-[0.35em] text-white/35"
                        >
                            Beauty, refined.
                        </motion.p>
                    </div>

                    <div>
                        <div className="flex items-end justify-between">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                                Entering the atelier
                            </span>

                            <span className="serif text-3xl">
                                {String(progress).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="mt-4 h-px w-full bg-white/15">
                            <motion.div
                                className="h-full bg-[#f4f0e8]"
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.15 }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}