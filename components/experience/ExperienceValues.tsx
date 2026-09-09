"use client";

import { motion } from "motion/react";

const values = [
    {
        number: "01",
        title: "Listen",
        text:
            "We begin with the person rather than a predefined beauty direction.",
    },
    {
        number: "02",
        title: "Consider",
        text:
            "Lifestyle, proportion, texture and personality shape every decision.",
    },
    {
        number: "03",
        title: "Create",
        text:
            "Technique becomes useful when it supports individuality rather than trend.",
    },
    {
        number: "04",
        title: "Care",
        text:
            "The experience should feel calm, respectful and considered from start to finish.",
    },
];

export default function ExperienceValues() {
    return (
        <section className="bg-[#ebe4d8] py-24 md:py-32 lg:py-40">
            <div className="container-main">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                            03 / What Matters
                        </p>
                    </div>

                    <h2 className="serif max-w-[860px] text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[90px]">
                        Four ideas shape
                        <span className="block italic text-[#967653]">
                            every experience.
                        </span>
                    </h2>
                </div>

                <div className="mt-20 border-t border-black/15">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05,
                            }}
                            className="group grid gap-6 border-b border-black/15 py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-center md:py-11"
                        >
                            <span className="text-[8px] tracking-[0.2em] text-[#967653]">
                                {value.number}
                            </span>

                            <h3 className="serif text-4xl tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">
                                {value.title}
                            </h3>

                            <p className="max-w-[470px] text-[12px] leading-6 text-[#696258] md:justify-self-end">
                                {value.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-end">
                    <p className="serif max-w-[720px] text-right text-4xl leading-[0.95] tracking-[-0.035em] md:text-6xl">
                        Less prescription.
                        <span className="italic text-[#967653]"> More perception.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}