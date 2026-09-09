"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Philosophy() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const line1Opacity = useTransform(
        scrollYProgress,
        [0.12, 0.28],
        [0.18, 1]
    );

    const line2Opacity = useTransform(
        scrollYProgress,
        [0.28, 0.44],
        [0.18, 1]
    );

    const line3Opacity = useTransform(
        scrollYProgress,
        [0.44, 0.60],
        [0.18, 1]
    );

    const line4Opacity = useTransform(
        scrollYProgress,
        [0.60, 0.76],
        [0.18, 1]
    );

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        [45, -45]
    );

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#ebe4d8]"
        >
            <div className="container-main grid gap-16 py-24 lg:min-h-[180vh] lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:py-0">
                {/* LEFT — sticky editorial meta */}
                <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                            03 / Philosophy
                        </p>

                        <p className="mt-6 max-w-[280px] text-[12px] leading-6 text-[#666057]">
                            Élanora is built around one idea:
                            beauty should reveal individuality,
                            not erase it.
                        </p>
                    </div>

                    <div className="mt-10 hidden lg:block">
                        <div className="h-[150px] w-px bg-black/15">
                            <motion.div
                                style={{
                                    scaleY: scrollYProgress,
                                    transformOrigin: "top",
                                }}
                                className="h-full w-full bg-[#181713]"
                            />
                        </div>

                        <p className="mt-5 text-[8px] uppercase tracking-[0.22em] text-[#777166]">
                            Scroll to read
                        </p>
                    </div>
                </div>

                {/* RIGHT — statement */}
                <div className="relative flex flex-col justify-center py-12 lg:min-h-[180vh] lg:py-[26vh]">
                    <div className="lg:sticky lg:top-[20vh]">
                        <p className="mb-10 text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                            A point of view
                        </p>

                        <div className="serif max-w-[980px] text-[15vw] leading-[0.78] tracking-[-0.06em] sm:text-[12vw] lg:text-[7.2vw]">
                            <motion.div
                                style={{ opacity: line1Opacity }}
                                className="transition-colors"
                            >
                                Beauty
                            </motion.div>

                            <motion.div
                                style={{ opacity: line2Opacity }}
                                className="ml-[8vw] italic lg:ml-[5vw]"
                            >
                                is not
                            </motion.div>

                            <motion.div
                                style={{ opacity: line3Opacity }}
                            >
                                a standard.
                            </motion.div>

                            <motion.div
                                style={{ opacity: line4Opacity }}
                                className="ml-[5vw] text-[#8f7353] lg:ml-[8vw]"
                            >
                                It is expression.
                            </motion.div>
                        </div>

                        <div className="mt-16 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
                            <p className="max-w-[360px] text-[12px] leading-6 text-[#666057]">
                                We work with proportion, texture,
                                personality and mood rather than
                                predefined ideals.
                            </p>

                            <p className="max-w-[360px] text-[12px] leading-6 text-[#666057]">
                                Every appointment begins by listening,
                                then becomes a collaboration between
                                person and artist.
                            </p>
                        </div>
                    </div>

                    {/* Floating editorial word */}
                    <motion.div
                        style={{ y: imageY }}
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-[10%] right-0 hidden lg:block"
                    >
                        <p className="serif text-[110px] italic leading-none text-black/[0.035]">
                            individual
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}