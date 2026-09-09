"use client";

import { motion } from "motion/react";

const process = [
    {
        number: "01",
        title: "Consult",
        text: "We begin with conversation, reference and the reality of how you live.",
    },
    {
        number: "02",
        title: "Create",
        text: "Technique, proportion and detail are shaped around the individual.",
    },
    {
        number: "03",
        title: "Refine",
        text: "The final result is adjusted until it feels considered, effortless and yours.",
    },
];

export default function ServiceExperience() {
    return (
        <section className="bg-[#ebe4d8] py-24 md:py-32 lg:py-40">
            <div className="container-main">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                    03 / The Experience
                </p>

                <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <h2 className="serif max-w-[700px] text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
                        Three moments.
                        <span className="block italic text-[#967653]">
                            One considered result.
                        </span>
                    </h2>

                    <div className="border-t border-black/15">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.06,
                                }}
                                className="group grid gap-5 border-b border-black/15 py-8 md:grid-cols-[70px_0.7fr_1.3fr] md:items-center"
                            >
                                <span className="text-[8px] tracking-[0.2em] text-[#967653]">
                                    {item.number}
                                </span>

                                <h3 className="serif text-3xl tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                                    {item.title}
                                </h3>

                                <p className="max-w-[440px] text-[12px] leading-6 text-[#666057] md:justify-self-end">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}