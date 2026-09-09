"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowUpRight,
} from "lucide-react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

export default function Hero() {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const sx = useSpring(mx, {
        stiffness: 80,
        damping: 20,
    });

    const sy = useSpring(my, {
        stiffness: 80,
        damping: 20,
    });

    const imageX = useTransform(sx, [-1, 1], [-14, 14]);
    const imageY = useTransform(sy, [-1, 1], [-10, 10]);

    function handleMove(
        e: React.MouseEvent<HTMLElement>
    ) {
        const rect =
            e.currentTarget.getBoundingClientRect();

        mx.set(
            ((e.clientX - rect.left) / rect.width - 0.5) * 2
        );

        my.set(
            ((e.clientY - rect.top) / rect.height - 0.5) * 2
        );
    }

    function reset() {
        mx.set(0);
        my.set(0);
    }

    return (
        <section
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="relative min-h-screen overflow-hidden bg-[#181713] text-[#f4f0e8]"
        >
            {/* Background image */}
            <motion.div
                style={{
                    x: imageX,
                    y: imageY,
                    scale: 1.05,
                }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/hero-beauty.jpg"
                    alt="Élanora beauty editorial"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </motion.div>

            {/* Dark cinematic overlays */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/30" />

            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#181713] via-[#181713]/20 to-transparent" />

            {/* Giant background word */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.3,
                    delay: 0.45,
                }}
                className="pointer-events-none absolute inset-x-0 top-[28%] z-10 flex justify-center overflow-hidden"
            >
                <p className="serif whitespace-nowrap text-[23vw] leading-none tracking-[-0.07em] text-white/[0.13]">
                    ÉLANORA
                </p>
            </motion.div>

            {/* Main layout */}
            <div className="container-main relative z-20 flex min-h-screen flex-col justify-between pb-8 pt-28 md:pb-10">

                {/* Top editorial details */}
                <div className="flex items-start justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.7,
                        }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                            Beauty Atelier
                        </p>

                        <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                            Colombo / Sri Lanka
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.8,
                        }}
                        className="hidden max-w-[190px] text-right text-[11px] leading-5 text-white/55 md:block"
                    >
                        Individual beauty shaped through
                        artistry, restraint and style.
                    </motion.p>
                </div>

                {/* Main statement */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif max-w-[1200px] text-[18vw] leading-[0.72] tracking-[-0.065em] sm:text-[15vw] lg:text-[9.3vw]"
                        >
                            Beauty
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden pb-3">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.38,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="serif ml-[15vw] text-[18vw] italic leading-[0.76] tracking-[-0.065em] text-[#e8dcc9] sm:text-[15vw] lg:ml-[20vw] lg:text-[9.3vw]"
                        >
                            without rules.
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom controls */}
                <div className="flex flex-col gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end md:justify-between">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.95,
                        }}
                        className="max-w-[340px]"
                    >
                        <p className="text-[12px] leading-6 text-white/60">
                            Contemporary hair, skin and Beauty services created around the individual —
                            never around a template.
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-5">
                        <Link
                            href="/book"
                            className="group flex items-center gap-4 rounded-full bg-[#000000] px-6 py-4 text-[#181713]"
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em]">
                                Book an Appointment
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:rotate-45"
                            />
                        </Link>

                        <a
                            href="#services"
                            aria-label="Scroll to services"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-[#181713]"
                        >
                            <ArrowDown
                                size={15}
                                strokeWidth={1.2}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Vertical side label */}
            <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rotate-90 lg:block">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                    Editorial Beauty / 2026
                </p>
            </div>
        </section>
    );
}