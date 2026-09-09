"use client";

import { ArrowDownRight } from "lucide-react";
import { motion } from "motion/react";

export default function BookingHero() {
    return (
        <section className="relative overflow-hidden bg-[#f4f0e8] pt-24">
            {/* subtle oversized background word */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[18%] overflow-hidden"
            >
                <p className="serif whitespace-nowrap text-center text-[24vw] leading-none tracking-[-0.07em] text-black/[0.025] lg:text-[15vw]">
                    RESERVE
                </p>
            </div>

            <div className="container-main relative z-10">
                <div className="grid min-h-[62vh] gap-12 border-b border-black/15 py-14 md:py-20 lg:grid-cols-[0.7fr_1.6fr] lg:items-center">
                    {/* left meta */}
                    <div className="flex flex-col justify-between gap-10 lg:min-h-[360px]">
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <p className="eyebrow text-[#777166]">
                                05 / Reservations
                            </p>

                            <p className="mt-5 max-w-[220px] text-[11px] leading-5 text-[#777166]">
                                A considered appointment,
                                built around you.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="hidden items-center gap-4 lg:flex"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20">
                                <ArrowDownRight
                                    size={14}
                                    strokeWidth={1.2}
                                />
                            </span>

                            <span className="text-[8px] uppercase tracking-[0.22em] text-[#777166]">
                                Plan your appointment below
                            </span>
                        </motion.div>
                    </div>

                    {/* main headline */}
                    <div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.95,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif text-[17vw] leading-[0.76] tracking-[-0.06em] sm:text-[13vw] lg:text-[8vw]"
                            >
                                Reserve
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden pb-4">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.95,
                                    delay: 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif ml-[10vw] italic text-[17vw] leading-[0.8] tracking-[-0.06em] text-[#8f7353] sm:text-[13vw] lg:ml-[10vw] lg:text-[8vw]"
                            >
                                your slot.
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.55,
                            }}
                            className="mt-8 grid gap-6 border-t border-black/15 pt-7 md:grid-cols-[1fr_auto]"
                        >
                            <p className="max-w-[470px] text-[12px] leading-6 text-[#696359]">
                                Choose your services, preferred artist and
                                time. Every appointment begins with
                                conversation and evolves around you.
                            </p>

                            <div className="flex gap-8 text-[8px] uppercase tracking-[0.18em] text-[#777166] md:text-right">
                                <div>
                                    <p>01</p>
                                    <p className="mt-1 text-[#181713]">
                                        Select
                                    </p>
                                </div>

                                <div>
                                    <p>02</p>
                                    <p className="mt-1 text-[#181713]">
                                        Personalise
                                    </p>
                                </div>

                                <div>
                                    <p>03</p>
                                    <p className="mt-1 text-[#181713]">
                                        Request
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}