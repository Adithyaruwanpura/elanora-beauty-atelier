"use client";

import { motion } from "motion/react";

export default function GalleryHero() {
    return (
        <section className="overflow-hidden bg-[#f4f0e8] pt-24">
            <div className="container-main">

                <div className="grid min-h-[62vh] gap-12 border-b border-black/15 py-16 lg:grid-cols-[0.7fr_1.6fr] lg:items-center">

                    <div className="self-start pt-5">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="eyebrow text-[#777166]"
                        >
                            04 / Selected Work
                        </motion.p>
                    </div>

                    <div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif text-[18vw] leading-[0.78] tracking-[-0.055em] sm:text-[14vw] lg:text-[8.7vw]"
                            >
                                Selected
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden pb-5">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif ml-[11vw] italic text-[18vw] leading-[0.82] tracking-[-0.055em] text-[#8a8173] sm:text-[14vw] lg:ml-[12vw] lg:text-[8.7vw]"
                            >
                                beauty.
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="mt-10 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:justify-between"
                        >
                            <p className="max-w-md text-[13px] leading-6 text-[#696359]">
                                A study of individuality, texture and expression through the
                                eyes of the Élanora artists.
                            </p>

                            <p className="eyebrow text-[#777166]">
                                Archive / 2026
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}