"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ExperienceHero() {
    return (
        <section className="overflow-hidden bg-[#f4f0e8] pt-24">
            <div className="container-main">

                <div className="grid min-h-[75vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">

                    {/* Typography */}
                    <div className="relative z-10">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="eyebrow mb-10 text-[#777166]"
                        >
                            03 / The Experience
                        </motion.p>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif text-[18vw] leading-[0.78] tracking-[-0.055em] sm:text-[14vw] lg:text-[8vw]"
                            >
                                More than
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden pb-4">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif ml-[9vw] italic text-[18vw] leading-[0.85] tracking-[-0.055em] text-[#8a8173] sm:text-[14vw] lg:ml-[7vw] lg:text-[8vw]"
                            >
                                beauty.
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.7 }}
                            className="mt-10 max-w-sm border-t border-black/15 pt-7"
                        >
                            <p className="text-[13px] leading-6 text-[#696359]">
                                Élanora is a space for considered beauty — where artistry,
                                individuality and a slower approach come together.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        animate={{ clipPath: "inset(0% 0 0 0)" }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="relative aspect-[4/5] overflow-hidden lg:h-[67vh] lg:aspect-auto"
                    >
                        <Image
                            src="/images/experience-main.jpg"
                            alt="Élanora beauty atelier interior"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover transition-transform duration-[1500ms] hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-black/[0.05]" />

                        <div className="absolute bottom-5 left-5">
                            <p className="text-[9px] uppercase tracking-[0.2em] text-white">
                                Élanora / Colombo
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}