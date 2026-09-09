"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const artists = [
    {
        name: "Amaya Silva",
        role: "Creative Hair Director",
        image: "/images/artist-01.jpg",
        number: "01",
        offset: "lg:translate-y-0",
        width: "lg:w-[31%]",
    },
    {
        name: "Maya Perera",
        role: "Skin & Beauty Artist",
        image: "/images/artist-02.jpg",
        number: "02",
        offset: "lg:translate-y-28",
        width: "lg:w-[34%]",
    },
    {
        name: "Elena Jay",
        role: "Bridal & Editorial Artist",
        image: "/images/artist-03.jpg",
        number: "03",
        offset: "lg:-translate-y-10",
        width: "lg:w-[29%]",
    },
];

export default function Artists() {
    return (
        <section className="relative overflow-hidden bg-[#f4f0e8] py-24 md:py-32 lg:py-40">
            <div className="container-main">
                {/* Giant editorial label */}
                <div className="overflow-hidden border-b border-black/15 pb-7">
                    <motion.p
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="serif text-[20vw] leading-[0.72] tracking-[-0.07em] text-black/[0.055] lg:text-[11vw]"
                    >
                        ARTISTS
                    </motion.p>
                </div>

                {/* Intro */}
                <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                            04 / The People
                        </p>

                        <h2 className="serif mt-5 max-w-[840px] text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[88px]">
                            Crafted by
                            <span className="ml-[0.18em] italic text-[#9a7c58]">
                                perspective.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[300px] text-[12px] leading-6 text-[#666057] lg:justify-self-end">
                        A small collective of artists with distinct approaches, united by
                        restraint, detail and a respect for individuality.
                    </p>
                </div>

                {/* Editorial artist composition */}
                <div className="mt-20 flex flex-col gap-14 lg:mt-28 lg:min-h-[920px] lg:flex-row lg:items-start lg:justify-between lg:gap-7">
                    {artists.map((artist, index) => (
                        <motion.article
                            key={artist.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.85,
                                delay: index * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`group relative w-full ${artist.width} ${artist.offset}`}
                        >
                            {/* Image */}
                            <div
                                className={`relative overflow-hidden ${index === 1
                                        ? "aspect-[4/5]"
                                        : index === 2
                                            ? "aspect-[3/4]"
                                            : "aspect-[4/5]"
                                    }`}
                            >
                                <Image
                                    src={artist.image}
                                    alt={`${artist.name}, ${artist.role}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 34vw"
                                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

                                {/* Number */}
                                <div className="absolute left-5 top-5 z-20">
                                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/65">
                                        Artist {artist.number}
                                    </span>
                                </div>

                                {/* Hover text */}
                                <motion.div
                                    initial={false}
                                    className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-7"
                                >
                                    <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                                            Élanora / Colombo
                                        </p>

                                        <h3 className="serif mt-2 text-4xl tracking-[-0.035em] text-white">
                                            {artist.name}
                                        </h3>

                                        <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/60">
                                            {artist.role}
                                        </p>

                                        <p className="mt-5 max-w-[280px] translate-y-3 text-[11px] leading-5 text-white/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white/60">
                                            Beauty interpreted through individual character, not a
                                            fixed formula.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Corner icon */}
                                <div className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#181713]">
                                    <ArrowUpRight size={14} strokeWidth={1.2} />
                                </div>
                            </div>

                            {/* Caption outside image */}
                            <div className="flex items-start justify-between border-b border-black/15 py-5">
                                <div>
                                    <p className="serif text-2xl tracking-[-0.025em]">
                                        {artist.name}
                                    </p>
                                    <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#777166]">
                                        {artist.role}
                                    </p>
                                </div>

                                <span className="text-[8px] tracking-[0.18em] text-[#9a7c58]">
                                    {artist.number}
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom statement */}
                <div className="mt-20 grid gap-10 border-t border-black/15 pt-10 md:grid-cols-2 lg:mt-10">
                    <p className="serif max-w-[620px] text-4xl leading-[0.95] tracking-[-0.035em] md:text-5xl">
                        The result should still feel
                        <span className="italic text-[#9a7c58]"> like you.</span>
                    </p>

                    <div className="md:justify-self-end">
                        <p className="max-w-[290px] text-[12px] leading-6 text-[#666057]">
                            Every appointment begins with conversation and evolves through
                            considered technique.
                        </p>

                        <Link
                            href="/experience"
                            className="group mt-7 inline-flex items-center gap-4"
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em]">
                                Meet the atelier
                            </span>

                            <span className="h-px w-10 bg-[#181713]/30 transition-all duration-300 group-hover:w-16" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative oversized word */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[4vw] bottom-[2%] hidden lg:block"
            >
                <p className="serif text-[12vw] italic leading-none text-black/[0.025]">
                    craft
                </p>
            </div>
        </section>
    );
}