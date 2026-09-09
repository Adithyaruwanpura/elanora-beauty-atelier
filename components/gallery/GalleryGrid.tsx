"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const works = [
    {
        number: "01",
        title: "Soft Structure",
        category: "Hair / Editorial",
        image: "/images/gallery-01.jpg",
        className: "md:col-span-7",
        aspect: "aspect-[4/5]",
    },
    {
        number: "02",
        title: "Quiet Glow",
        category: "Skin / Beauty",
        image: "/images/gallery-02.jpg",
        className: "md:col-span-4 md:col-start-9 md:mt-32",
        aspect: "aspect-[3/4]",
    },
    {
        number: "03",
        title: "Form & Detail",
        category: "Nails / Detail",
        image: "/images/gallery-03.jpg",
        className: "md:col-span-5 md:mt-8",
        aspect: "aspect-square",
    },
    {
        number: "04",
        title: "Modern Muse",
        category: "Bridal / Editorial",
        image: "/images/gallery-04.jpg",
        className: "md:col-span-6 md:col-start-7 md:mt-28",
        aspect: "aspect-[4/5]",
    },
    {
        number: "05",
        title: "The Atelier",
        category: "Space / Culture",
        image: "/images/gallery-05.jpg",
        className: "md:col-span-8 md:mt-10",
        aspect: "aspect-[16/10]",
    },
    {
        number: "06",
        title: "Individual",
        category: "Beauty / Portrait",
        image: "/images/gallery-06.jpg",
        className: "md:col-span-3 md:col-start-10 md:mt-40",
        aspect: "aspect-[3/4]",
    },
];

export default function GalleryGrid() {
    return (
        <section className="bg-[#f4f0e8] py-20 md:py-32">
            <div className="container-main">

                <div className="mb-16 flex items-center justify-between border-b border-black/15 pb-6">
                    <p className="eyebrow text-[#777166]">
                        Selected Works
                    </p>

                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#777166]">
                        01 — 06
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-20 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
                    {works.map((work, index) => (
                        <motion.article
                            key={work.number}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.85,
                                delay: (index % 2) * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`group ${work.className}`}
                        >
                            <div
                                className={`relative overflow-hidden bg-[#ded7cb] ${work.aspect}`}
                            >
                                <Image
                                    src={work.image}
                                    alt={`${work.title} — ${work.category}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 65vw"
                                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.045]"
                                />

                                <div className="absolute inset-0 bg-black/[0.03] transition-colors duration-500 group-hover:bg-black/[0.14]" />

                                <span className="absolute left-5 top-5 text-[9px] tracking-[0.2em] text-white">
                                    {work.number}
                                </span>

                                <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-[#f4f0e8] text-[#181713] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.2}
                                    />
                                </div>
                            </div>

                            <div className="mt-5 flex items-start justify-between gap-5 border-b border-black/15 pb-5">
                                <h2 className="serif text-3xl tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2">
                                    {work.title}
                                </h2>

                                <p className="pt-2 text-[9px] uppercase tracking-[0.17em] text-[#777166] transition-opacity duration-300 group-hover:opacity-50">
                                    {work.category}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Gallery ending */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 border-t border-black/15 pt-12 md:mt-44"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.6fr]">
                        <p className="eyebrow text-[#777166]">
                            Our Perspective
                        </p>

                        <p className="serif max-w-4xl text-[10vw] leading-[0.98] tracking-[-0.045em] sm:text-[7vw] lg:text-[4.6vw]">
                            Not perfection.
                            <br />
                            <span className="italic text-[#8a8173]">
                                Personality.
                            </span>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}