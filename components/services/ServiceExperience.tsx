"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Consult",
        text: "We begin by understanding your preferences, lifestyle and desired result.",
    },
    {
        number: "02",
        title: "Create",
        text: "Your artist shapes a personalised approach using considered techniques and products.",
    },
    {
        number: "03",
        title: "Refine",
        text: "Every detail is adjusted to create a polished result that feels naturally yours.",
    },
];

export default function ServiceExperience() {
    return (
        <section className="bg-[#ebe4d8] py-24 md:py-36">
            <div className="container-main">

                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.6fr]">
                    <div>
                        <p className="eyebrow text-[#777166]">
                            The Experience
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <h2 className="serif text-[11vw] leading-[0.95] tracking-[-0.045em] sm:text-[8vw] lg:text-[5.5vw]">
                            Thoughtful from
                            <br />
                            <span className="italic text-[#8a8173]">
                                beginning to finish.
                            </span>
                        </h2>

                        <div className="mt-16">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="grid gap-5 border-t border-black/15 py-8 md:grid-cols-[70px_0.7fr_1fr]"
                                >
                                    <span className="text-[10px] tracking-[0.2em] text-[#777166]">
                                        {step.number}
                                    </span>

                                    <h3 className="serif text-3xl">
                                        {step.title}
                                    </h3>

                                    <p className="max-w-md text-[13px] leading-6 text-[#696359]">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 border-t border-black/15 pt-9">
                            <Link
                                href="/book"
                                className="group inline-flex items-center gap-5"
                            >
                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    Begin your ritual
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/25 transition-all duration-300 group-hover:bg-[#181713] group-hover:text-[#f4f0e8]">
                                    <ArrowRight
                                        size={14}
                                        strokeWidth={1.2}
                                    />
                                </span>
                            </Link>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}