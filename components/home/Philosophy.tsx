"use client";

import { motion } from "motion/react";

export default function Philosophy() {
    return (
        <section className="bg-[#f4f0e8] py-24 md:py-36">
            <div className="container-main">

                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.6fr]">

                    <div className="lg:pt-3">
                        <p className="eyebrow text-[#777166]">
                            Our Philosophy
                        </p>
                    </div>

                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif max-w-5xl text-[9vw] leading-[0.98] tracking-[-0.045em] sm:text-[7vw] lg:text-[4.8vw]"
                        >
                            Beauty is not a
                            <span className="italic text-[#8a8173]"> standard.</span>
                            <br />
                            It is an expression
                            <br />
                            of who you are.
                        </motion.p>

                        <div className="mt-14 grid gap-10 border-t border-black/15 pt-10 md:grid-cols-2">

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="max-w-md text-[13px] leading-6 text-[#696359]"
                            >
                                At Élanora, every appointment is approached as a personal
                                ritual. We combine modern beauty culture with thoughtful
                                technique to create results that feel refined, effortless
                                and individual.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-md text-[13px] leading-6 text-[#696359]"
                            >
                                From the first consultation to the final detail, our focus
                                is not transformation for the sake of trends — but creating
                                a look that feels naturally yours.
                            </motion.p>

                        </div>
                    </div>

                </div>

                <div className="mt-24 border-y border-black/15 py-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-wrap justify-between gap-8"
                    >
                        <div>
                            <p className="serif text-4xl">01</p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                Personal
                            </p>
                        </div>

                        <div>
                            <p className="serif text-4xl">02</p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                Intentional
                            </p>
                        </div>

                        <div>
                            <p className="serif text-4xl">03</p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                Refined
                            </p>
                        </div>

                        <div>
                            <p className="serif text-4xl">04</p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                Expressive
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}