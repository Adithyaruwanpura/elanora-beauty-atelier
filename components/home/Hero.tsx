"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const reveal = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f4f0e8] pt-24">
            <div className="container-main relative min-h-[calc(100vh-6rem)]">

                {/* Small top label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute left-0 top-12 hidden items-center gap-3 lg:flex"
                >
                    <span className="h-[1px] w-8 bg-[#181713]" />
                    <span className="eyebrow">01 / Beauty Atelier</span>
                </motion.div>

                {/* Main copy */}
                <div className="relative z-20 pt-20 md:pt-24 lg:pt-[11vh]">

                    <div className="overflow-hidden">
                        <motion.h1
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif text-[19vw] leading-[0.76] tracking-[-0.055em] sm:text-[17vw] lg:text-[10.7vw]"
                        >
                            Beauty,
                        </motion.h1>
                    </div>

                    <div className="relative overflow-hidden pb-4">
                        <motion.h1
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.9,
                                delay: 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif ml-[12vw] italic text-[19vw] leading-[0.82] tracking-[-0.055em] sm:text-[17vw] lg:ml-[21vw] lg:text-[10.7vw]"
                        >
                            refined.
                        </motion.h1>
                    </div>

                </div>

                {/* Editorial image */}
                <motion.div
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    transition={{
                        duration: 1.25,
                        delay: 0.35,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="relative z-10 mx-auto mt-10 h-[520px] w-full max-w-[390px] md:h-[620px] md:max-w-[460px] lg:absolute lg:right-[7%] lg:top-[23%] lg:h-[58vh] lg:w-[25vw] lg:max-w-none"
                >
                    <Image
                        src="/images/hero-beauty.jpg"
                        alt="Élanora beauty editorial"
                        fill
                        priority
                        sizes="(max-width: 768px) 90vw, 25vw"
                        className="object-cover grayscale-[12%]"
                    />

                    <div className="absolute inset-0 bg-black/[0.04]" />

                    <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center bg-[#181713] text-[#f4f0e8]">
                        <ArrowDownRight size={19} strokeWidth={1.2} />
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative z-20 mt-14 max-w-[300px] pb-28 lg:absolute lg:bottom-[8%] lg:left-0 lg:mt-0 lg:pb-0"
                >
                    <p className="text-[13px] leading-6 text-[#5f5a52]">
                        Contemporary beauty rituals shaped around your individuality,
                        crafted with intention and quiet luxury.
                    </p>

                    <Link
                        href="/services"
                        className="group mt-7 inline-flex items-center gap-5"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em]">
                            Explore Services
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/30 transition-all duration-300 group-hover:bg-[#181713] group-hover:text-[#f4f0e8]">
                            <ArrowRight
                                size={13}
                                strokeWidth={1.3}
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </span>
                    </Link>
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-[8%] right-0 hidden lg:block"
                >
                    <p className="eyebrow text-[#777166]">
                        Colombo — Sri Lanka
                    </p>
                </motion.div>

            </div>
        </section>
    );
}