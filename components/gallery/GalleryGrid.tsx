"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const works = [
    {
        title: "Soft Structure",
        category: "Hair / Editorial",
        image: "/images/gallery-01.jpg",
        year: "2026",
        note: "Shape, movement and soft structure.",
    },
    {
        title: "Quiet Glow",
        category: "Skin / Beauty",
        image: "/images/gallery-02.jpg",
        year: "2026",
        note: "Radiance without overstatement.",
    },
    {
        title: "Form & Detail",
        category: "Nails / Detail",
        image: "/images/gallery-03.jpg",
        year: "2026",
        note: "Precision carried through restraint.",
    },
    {
        title: "Modern Muse",
        category: "Bridal / Editorial",
        image: "/images/gallery-04.jpg",
        year: "2026",
        note: "A bridal direction built around identity.",
    },
    {
        title: "The Atelier",
        category: "Space / Culture",
        image: "/images/gallery-05.jpg",
        year: "2026",
        note: "The calm between preparation and service.",
    },
    {
        title: "Individual Beauty",
        category: "Portrait",
        image: "/images/gallery-06.jpg",
        year: "2026",
        note: "Character first. Beauty second.",
    },
];

export default function GalleryGrid() {
    const [active, setActive] = useState(0);

    const previous = () =>
        setActive((current) =>
            current === 0 ? works.length - 1 : current - 1
        );

    const next = () =>
        setActive((current) =>
            current === works.length - 1 ? 0 : current + 1
        );

    return (
        <section className="overflow-hidden bg-[#181713] text-[#f4f0e8]">
            <div className="container-main py-24 md:py-32">
                <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                            02 / Selected Work
                        </p>

                        <h2 className="serif mt-5 max-w-[880px] text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[92px]">
                            A study in
                            <span className="ml-[0.15em] italic text-[#c5b096]">
                                individuality.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[300px] text-[12px] leading-6 text-white/40 lg:justify-self-end">
                        A rotating edit of texture, proportion, finish and expression from
                        the Élanora visual language.
                    </p>
                </div>

                <div className="mt-14 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-14">
                    {/* Main visual */}
                    <div>
                        <div className="relative aspect-[4/5] overflow-hidden bg-white/5 md:aspect-[16/10]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={works[active].image}
                                    initial={{
                                        opacity: 0,
                                        scale: 1.05,
                                        clipPath: "inset(0 0 100% 0)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        clipPath: "inset(0 0 0% 0)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={works[active].image}
                                        alt={works[active].title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 72vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/25 bg-black/15 px-4 py-2 backdrop-blur-md">
                                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70">
                                    {String(active + 1).padStart(2, "0")} /{" "}
                                    {String(works.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="absolute bottom-5 right-5 z-20 flex gap-2">
                                <button
                                    type="button"
                                    onClick={previous}
                                    aria-label="Previous gallery item"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 backdrop-blur-md transition-colors hover:bg-white hover:text-[#181713]"
                                >
                                    <ArrowLeft size={15} strokeWidth={1.2} />
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next gallery item"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 backdrop-blur-md transition-colors hover:bg-white hover:text-[#181713]"
                                >
                                    <ArrowRight size={15} strokeWidth={1.2} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Editorial index */}
                    <div className="lg:flex lg:flex-col lg:justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={works[active].title}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                <p className="text-[8px] uppercase tracking-[0.22em] text-[#b8a38a]">
                                    Current study
                                </p>

                                <h3 className="serif mt-4 text-5xl leading-[0.95] tracking-[-0.045em]">
                                    {works[active].title}
                                </h3>

                                <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-white/35">
                                    {works[active].category} / {works[active].year}
                                </p>

                                <p className="mt-8 max-w-[320px] text-[12px] leading-6 text-white/45">
                                    {works[active].note}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-12 border-t border-white/15 lg:mt-20">
                            {works.map((work, index) => {
                                const isActive = index === active;

                                return (
                                    <button
                                        key={work.title}
                                        type="button"
                                        onClick={() => setActive(index)}
                                        onMouseEnter={() => setActive(index)}
                                        className="group flex w-full items-center justify-between border-b border-white/15 py-5 text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`text-[8px] tracking-[0.18em] transition-colors ${isActive ? "text-[#b8a38a]" : "text-white/20"
                                                    }`}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span
                                                className={`serif text-xl transition-all duration-300 ${isActive
                                                    ? "translate-x-1 text-white"
                                                    : "text-white/35 group-hover:text-white/70"
                                                    }`}
                                            >
                                                {work.title}
                                            </span>
                                        </div>

                                        <ArrowUpRight
                                            size={13}
                                            strokeWidth={1.2}
                                            className={`transition-all duration-300 ${isActive
                                                ? "rotate-45 text-white"
                                                : "text-white/20 group-hover:text-white/60"
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Thumbnail reel */}
                <div className="mt-16 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex min-w-max gap-3">
                        {works.map((work, index) => (
                            <button
                                key={work.image}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`relative h-28 w-20 overflow-hidden border transition-all duration-300 md:h-36 md:w-28 ${active === index
                                    ? "border-[#c5b096] opacity-100"
                                    : "border-white/10 opacity-40 hover:opacity-75"
                                    }`}
                            >
                                <Image
                                    src={work.image}
                                    alt=""
                                    fill
                                    sizes="112px"
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-20 flex flex-col gap-8 border-t border-white/15 pt-10 md:flex-row md:items-end md:justify-between">
                    <p className="serif max-w-[760px] text-4xl leading-[0.95] tracking-[-0.035em] md:text-6xl">
                        Not perfection.
                        <span className="italic text-[#c5b096]"> Personality.</span>
                    </p>

                    <p className="max-w-[260px] text-[11px] leading-5 text-white/35">
                        Beauty becomes more interesting when the person remains visible.
                    </p>
                </div>
            </div>
        </section>
    );
}