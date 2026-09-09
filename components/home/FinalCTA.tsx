"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Magnetic from "@/components/ui/Magnetic";

export default function FinalCTA() {
    return (
        <section className="bg-[#181713] text-[#f4f0e8]">
            <div className="container-main py-24 md:py-36">

                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.6fr]">
                    <div>
                        <p className="eyebrow text-white/40">
                            Your Next Ritual
                        </p>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif text-[13vw] leading-[0.88] tracking-[-0.05em] sm:text-[10vw] lg:text-[6.4vw]"
                        >
                            Make space
                            <br />
                            <span className="italic text-white/50">
                                for yourself.
                            </span>
                        </motion.h2>

                        <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-9 md:flex-row md:items-center md:justify-between">
                            <p className="max-w-md text-[13px] leading-6 text-white/45">
                                Step into a considered beauty experience designed around
                                your features, preferences and individuality.
                            </p>

                            <Magnetic>
                                <Link
                                    href="/book"
                                    className="group flex w-fit items-center gap-5"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.2em]">
                                        Book an appointment
                                    </span>

                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-[#f4f0e8] group-hover:text-[#181713]">
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.2}
                                            className="transition-transform duration-300 group-hover:rotate-45"
                                        />
                                    </span>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}