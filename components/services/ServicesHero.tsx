"use client";

import { motion } from "motion/react";

export default function ServicesHero() {
    return (
        <section className="bg-[#f4f0e8] pt-24">
            <div className="container-main border-b border-black/15 py-20 md:py-28">

                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.6fr]">

                    <div className="pt-2">
                        <p className="eyebrow text-[#777166]">
                            02 / Services
                        </p>
                    </div>

                    <div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 90, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif text-[17vw] leading-[0.78] tracking-[-0.055em] sm:text-[13vw] lg:text-[8.5vw]"
                            >
                                Beauty
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden pb-4">
                            <motion.h1
                                initial={{ y: 90, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="serif ml-[11vw] italic text-[17vw] leading-[0.82] tracking-[-0.055em] text-[#8a8173] sm:text-[13vw] lg:ml-[12vw] lg:text-[8.5vw]"
                            >
                                rituals.
                            </motion.h1>
                        </div>

                        <div className="mt-10 flex flex-col gap-8 border-t border-black/15 pt-8 md:flex-row md:items-start md:justify-between">
                            <p className="max-w-md text-[13px] leading-6 text-[#696359]">
                                A considered collection of hair, skin, nail and bridal
                                services created to enhance what already feels uniquely yours.
                            </p>

                            <p className="eyebrow text-[#777166]">
                                Colombo / Sri Lanka
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}