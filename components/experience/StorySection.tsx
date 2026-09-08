"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function StorySection() {
    return (
        <section className="bg-[#181713] py-24 text-[#f4f0e8] md:py-36">
            <div className="container-main">

                <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

                    <div>
                        <p className="eyebrow text-white/40">
                            Our Point of View
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <h2 className="serif text-[11vw] leading-[0.97] tracking-[-0.045em] sm:text-[8vw] lg:text-[5.4vw]">
                            We believe beauty
                            <br />
                            should feel
                            <span className="italic text-white/45"> personal,</span>
                            <br />
                            never prescribed.
                        </h2>

                        <div className="mt-14 grid gap-8 border-t border-white/15 pt-9 md:grid-cols-2">
                            <p className="text-[13px] leading-6 text-white/45">
                                Trends come and go. Individuality remains. Our approach begins
                                by understanding the person before deciding on the service,
                                technique or final look.
                            </p>

                            <p className="text-[13px] leading-6 text-white/45">
                                We create space for consultation, conversation and careful
                                detail — resulting in beauty that feels effortless rather than
                                overdone.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Editorial composition */}
                <div className="mt-24 grid items-end gap-8 md:grid-cols-[1.25fr_0.75fr]">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="relative aspect-[16/10] overflow-hidden"
                    >
                        <Image
                            src="/images/experience-main.jpg"
                            alt="Élanora salon atmosphere"
                            fill
                            sizes="(max-width: 768px) 100vw, 65vw"
                            className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                        />
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.1 }}
                            className="relative aspect-[3/4] overflow-hidden"
                        >
                            <Image
                                src="/images/experience-detail.jpg"
                                alt="Beauty ritual detail"
                                fill
                                sizes="(max-width: 768px) 100vw, 35vw"
                                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                            />
                        </motion.div>

                        <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-white/35">
                            Quiet spaces / thoughtful details
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}