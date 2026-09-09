"use client";

import { motion } from "motion/react";

export default function BeautyMarquee() {
    return (
        <section className="overflow-hidden border-y border-black/15 bg-[#f4f0e8] py-7 md:py-9">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex w-max whitespace-nowrap"
            >
                {[0, 1].map((group) => (
                    <div key={group} className="flex items-center">
                        {[
                            "Individuality",
                            "Artistry",
                            "Ritual",
                            "Expression",
                            "Beauty Culture",
                        ].map((word) => (
                            <div
                                key={`${group}-${word}`}
                                className="flex items-center"
                            >
                                <span className="serif px-7 text-4xl italic tracking-[-0.03em] md:px-12 md:text-6xl">
                                    {word}
                                </span>

                                <span className="text-xl text-[#a4875d]">

                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}