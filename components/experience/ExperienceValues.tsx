"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const values = [
    {
        number: "01",
        title: "Listen",
        text: "Every experience begins with understanding you, not simply choosing a service.",
    },
    {
        number: "02",
        title: "Consider",
        text: "We consider features, lifestyle, texture and personal preference before creating.",
    },
    {
        number: "03",
        title: "Create",
        text: "Technique and artistry come together in a result designed specifically for you.",
    },
    {
        number: "04",
        title: "Care",
        text: "Our relationship with beauty continues through thoughtful guidance and aftercare.",
    },
];

export default function ExperienceValues() {
    return (
        <section className="bg-[#ebe4d8] py-24 md:py-36">
            <div className="container-main">

                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.6fr]">
                    <div>
                        <p className="eyebrow text-[#777166]">
                            How We Work
                        </p>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="serif text-[12vw] leading-[0.92] tracking-[-0.045em] sm:text-[9vw] lg:text-[5.8vw]"
                        >
                            Beauty with
                            <br />
                            <span className="italic text-[#8a8173]">
                                intention.
                            </span>
                        </motion.h2>

                        <div className="mt-16">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.number}
                                    initial={{ opacity: 0, x: 25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.06,
                                    }}
                                    className="group grid gap-5 border-t border-black/15 py-8 md:grid-cols-[70px_0.7fr_1fr]"
                                >
                                    <span className="text-[10px] tracking-[0.2em] text-[#777166]">
                                        {value.number}
                                    </span>

                                    <h3 className="serif text-3xl transition-transform duration-300 group-hover:translate-x-2">
                                        {value.title}
                                    </h3>

                                    <p className="max-w-md text-[13px] leading-6 text-[#696359]">
                                        {value.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 border-t border-black/15 pt-10">
                            <p className="serif max-w-2xl text-4xl leading-[1.05] md:text-5xl">
                                Come as you are.
                                <br />
                                <span className="italic text-[#8a8173]">
                                    Leave feeling more like yourself.
                                </span>
                            </p>

                            <Link
                                href="/book"
                                className="group mt-10 inline-flex items-center gap-5"
                            >
                                <span className="text-[10px] uppercase tracking-[0.2em]">
                                    Experience Élanora
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#181713] group-hover:text-[#f4f0e8]">
                                    <ArrowUpRight size={15} strokeWidth={1.2} />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}