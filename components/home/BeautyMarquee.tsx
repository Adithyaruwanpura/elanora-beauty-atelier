"use client";

import { motion } from "motion/react";

const words = [
    "Individuality",
    "Artistry",
    "Style",
    "Expression",
    "Beauty Culture",
];

export default function BeautyMarquee() {
    return (
        <section className="group overflow-hidden border-y border-black/15 bg-[#f4f0e8] py-7 md:py-9">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex w-max whitespace-nowrap"
            >
                {[0, 1].map((group) => (
                    <div key={group} className="flex items-center">
                        {words.map((word) => (
                            <div
                                key={`${group}-${word}`}
                                className="flex items-center"
                            >
                                <span className="serif px-7 text-4xl italic leading-none tracking-[-0.04em] text-[#181713] md:px-12 md:text-6xl lg:text-7xl">
                                    {word}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="mx-1 h-2.5 w-2.5 rotate-45 border border-[#a4875d] md:h-3 md:w-3"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}