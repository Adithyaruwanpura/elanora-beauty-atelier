"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";

export default function FinalCTA() {
    const x = useMotionValue(-500);
    const y = useMotionValue(-500);

    const smoothX = useSpring(x, {
        stiffness: 80,
        damping: 22,
    });

    const smoothY = useSpring(y, {
        stiffness: 80,
        damping: 22,
    });

    function handleMove(
        event: React.MouseEvent<HTMLElement>
    ) {
        const rect =
            event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <section
            onMouseMove={handleMove}
            className="relative min-h-screen overflow-hidden bg-[#181713] text-[#f4f0e8]"
        >
            {/* Mouse-follow glow */}
            <motion.div
                style={{
                    left: smoothX,
                    top: smoothY,
                }}
                className="pointer-events-none absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a4875d]/10 blur-[120px]"
            />

            {/* Decorative rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[52vw] w-[52vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36vw] w-[36vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

            {/* Giant background type */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[10%] overflow-hidden"
            >
                <p className="serif whitespace-nowrap text-center text-[21vw] leading-none tracking-[-0.07em] text-white/[0.025]">
                    RITUAL
                </p>
            </div>

            <div className="container-main relative z-10 flex min-h-screen flex-col justify-between py-10 md:py-14">
                {/* Top */}
                <div className="flex items-start justify-between border-b border-white/15 pb-6">
                    <div>
                        <p className="text-[8px] uppercase tracking-[0.24em] text-white/35">
                            05 / Your Visit
                        </p>

                        <p className="mt-2 text-[8px] uppercase tracking-[0.24em] text-white/20">
                            Colombo / Sri Lanka
                        </p>
                    </div>

                    <p className="hidden max-w-[220px] text-right text-[11px] leading-5 text-white/35 md:block">
                        A beauty appointment designed around
                        conversation, intention and individuality.
                    </p>
                </div>

                {/* Center statement */}
                <div className="py-20 md:py-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="text-[9px] uppercase tracking-[0.28em] text-[#b9a58b]"
                    >
                        Your appointment starts here
                    </motion.p>

                    <div className="mt-8 overflow-hidden">
                        <motion.h2
                            initial={{ y: "110%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif max-w-[1200px] text-[17vw] leading-[0.76] tracking-[-0.065em] sm:text-[14vw] lg:text-[8.3vw]"
                        >
                            Make space
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden pb-3">
                        <motion.h2
                            initial={{ y: "110%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif ml-[10vw] text-[17vw] italic leading-[0.78] tracking-[-0.065em] text-[#c7b49b] sm:text-[14vw] lg:ml-[16vw] lg:text-[8.3vw]"
                        >
                            for yourself.
                        </motion.h2>
                    </div>

                    <div className="mt-12 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                        <p className="max-w-[330px] text-[12px] leading-6 text-white/45">
                            Choose your service, preferred artist and
                            time. The rest begins with a conversation.
                        </p>

                        <div className="flex flex-col gap-4 md:flex-row md:justify-end">
                            {/* Primary CTA */}
                            <Link
                                href="/book"
                                className="group flex items-center justify-between gap-8 rounded-full bg-[#f4f0e8] px-6 py-4 transition-all duration-300 hover:bg-[#c7b49b] hover:scale-[1.02]"
                            >
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#181713]">
                                    Book an appointment
                                </span>

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.2}
                                    className="text-[#181713] transition-transform duration-300 group-hover:rotate-45"
                                />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href="/experience"
                                className="group flex items-center justify-between gap-8 rounded-full border border-white/25 px-6 py-4 transition-all duration-300 hover:bg-[#f4f0e8]"
                            >
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#f4f0e8] transition-colors duration-300 group-hover:text-[#181713]">
                                    Explore the atelier
                                </span>

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.2}
                                    className="text-[#f4f0e8] transition-all duration-300 group-hover:rotate-45 group-hover:text-[#181713]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-5 border-t border-white/15 pt-6 text-[8px] uppercase tracking-[0.2em] text-white/25 md:flex-row md:items-center md:justify-between">
                    <span>Hair / Skin / Nails / Bridal</span>
                    <span>Beauty, without rules.</span>
                    <span>Élanora / 2026</span>
                </div>
            </div>
        </section>
    );
}