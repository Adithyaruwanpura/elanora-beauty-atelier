"use client";

import { motion } from "motion/react";

export default function BookingHero() {
    return (
        <section className="bg-[#f4f0e8] pt-24">
            <div className="container-main">
                <div className="grid gap-12 border-b border-black/15 py-16 md:py-24 lg:grid-cols-[0.7fr_1.6fr]">

                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="eyebrow text-[#777166]"
                        >
                            05 / Reservations
                        </motion.p>
                    </div>

                    <div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif text-[17vw] leading-[0.8] tracking-[-0.055em] sm:text-[13vw] lg:text-[8.3vw]"
                            >
                                Your ritual,
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
                                className="serif ml-[9vw] italic text-[17vw] leading-[0.85] tracking-[-0.055em] text-[#8a8173] sm:text-[13vw] lg:ml-[11vw] lg:text-[8.3vw]"
                            >
                                your time.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 max-w-md border-t border-black/15 pt-7 text-[13px] leading-6 text-[#696359]"
                        >
                            Choose your service, preferred artist and time. We&apos;ll take
                            care of everything else.
                        </motion.p>
                    </div>

                </div>
            </div>
        </section>
    );
}