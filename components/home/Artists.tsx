"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const artists = [
    {
        name: "Amaya Silva",
        role: "Creative Hair Director",
        image: "/images/artist-01.jpg",
    },
    {
        name: "Maya Perera",
        role: "Skin & Beauty Artist",
        image: "/images/artist-02.jpg",
    },
    {
        name: "Elena Jay",
        role: "Bridal & Editorial Artist",
        image: "/images/artist-03.jpg",
    },
];

export default function Artists() {
    return (
        <section className="bg-[#ebe4d8] py-24 md:py-36">
            <div className="container-main">

                {/* Header */}
                <div className="grid gap-10 border-b border-black/15 pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
                    <div>
                        <p className="eyebrow text-[#777166]">Our Artists</p>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="serif max-w-4xl text-[12vw] leading-[0.92] tracking-[-0.04em] sm:text-[9vw] lg:text-[5.7vw]"
                    >
                        Artistry with
                        <br />
                        <span className="italic text-[#8a8173]">
                            intention.
                        </span>
                    </motion.h2>
                </div>

                {/* Artist cards */}
                <div className="mt-16 grid gap-12 md:grid-cols-3">
                    {artists.map((artist, index) => (
                        <motion.article
                            key={artist.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group"
                        >

                            {/* Image */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#d8d0c3]">
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                                />

                                <div className="absolute inset-0 bg-black/[0.05] transition-colors duration-500 group-hover:bg-black/[0.12]" />

                                {/* Number */}
                                <span className="absolute left-5 top-5 text-[10px] tracking-[0.18em] text-white">
                                    0{index + 1}
                                </span>

                                {/* Hover arrow */}
                                <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-[#f4f0e8] text-[#181713] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ArrowUpRight size={16} strokeWidth={1.2} />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex items-start justify-between border-b border-black/15 py-6">
                                <div>
                                    <h3 className="serif text-3xl tracking-[-0.03em]">
                                        {artist.name}
                                    </h3>

                                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                        {artist.role}
                                    </p>
                                </div>

                                <span className="mt-1 text-[10px] text-[#777166]">
                                    ELN.
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 flex flex-col justify-between gap-10 border-t border-black/15 pt-10 md:flex-row md:items-end"
                >
                    <p className="max-w-lg text-[13px] leading-6 text-[#696359]">
                        Our artists bring together technique, intuition and a deep
                        understanding of contemporary beauty to create work that feels
                        uniquely personal.
                    </p>

                    <p className="serif max-w-xl text-4xl leading-[1.05] md:text-5xl">
                        No two faces.
                        <br />
                        <span className="italic text-[#8a8173]">
                            No two rituals.
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}