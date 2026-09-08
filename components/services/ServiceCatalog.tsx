"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const categories = [
    {
        number: "01",
        title: "Hair Rituals",
        intro:
            "Precision, movement and healthy hair through thoughtful technique.",
        services: [
            ["Signature Cut", "LKR 4,500"],
            ["Cut & Finish", "LKR 5,500"],
            ["Dimensional Colour", "LKR 9,500"],
            ["Gloss & Tone", "LKR 6,500"],
            ["Restorative Treatment", "LKR 5,000"],
        ],
    },
    {
        number: "02",
        title: "Skin Therapy",
        intro:
            "Personalised treatments designed around balance, texture and glow.",
        services: [
            ["Essential Facial", "LKR 6,000"],
            ["Hydration Ritual", "LKR 7,500"],
            ["Clarifying Therapy", "LKR 8,000"],
            ["Radiance Treatment", "LKR 9,000"],
            ["Skin Consultation", "LKR 3,000"],
        ],
    },
    {
        number: "03",
        title: "Nail Atelier",
        intro:
            "Refined nail care with a minimalist, contemporary approach.",
        services: [
            ["Essential Manicure", "LKR 3,500"],
            ["Essential Pedicure", "LKR 4,000"],
            ["Gel Finish", "LKR 4,500"],
            ["Minimal Nail Art", "LKR 5,000"],
            ["Hand & Nail Ritual", "LKR 5,500"],
        ],
    },
    {
        number: "04",
        title: "Bridal & Editorial",
        intro:
            "Beauty direction for ceremonies, portraits and meaningful occasions.",
        services: [
            ["Bridal Consultation", "LKR 5,000"],
            ["Bridal Makeup", "From LKR 25,000"],
            ["Bridal Hair", "From LKR 18,000"],
            ["Editorial Makeup", "From LKR 15,000"],
            ["Full Bridal Ritual", "By consultation"],
        ],
    },
];

export default function ServiceCatalog() {
    return (
        <section className="bg-[#181713] text-[#f4f0e8]">
            <div className="container-main py-24 md:py-32">

                <div className="border-b border-white/15 pb-12">
                    <p className="eyebrow text-white/40">
                        The Collection
                    </p>
                </div>

                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.8,
                            delay: categoryIndex * 0.05,
                        }}
                        className="grid gap-10 border-b border-white/15 py-16 lg:grid-cols-[0.65fr_1.5fr]"
                    >

                        <div>
                            <span className="text-[10px] tracking-[0.2em] text-white/35">
                                {category.number}
                            </span>

                            <h2 className="serif mt-5 text-5xl tracking-[-0.04em] md:text-6xl">
                                {category.title}
                            </h2>

                            <p className="mt-6 max-w-sm text-[13px] leading-6 text-white/45">
                                {category.intro}
                            </p>
                        </div>

                        <div>
                            {category.services.map(([name, price], index) => (
                                <div
                                    key={name}
                                    className="group flex items-center justify-between gap-6 border-t border-white/10 py-6 first:border-t-0"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-[9px] text-white/25">
                                            0{index + 1}
                                        </span>

                                        <h3 className="serif text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                                            {name}
                                        </h3>
                                    </div>

                                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/45">
                                        {price}
                                    </p>
                                </div>
                            ))}

                            <div className="mt-8 flex justify-end">
                                <Link
                                    href="/book"
                                    className="group inline-flex items-center gap-4"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.2em]">
                                        Book this ritual
                                    </span>

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:bg-[#f4f0e8] group-hover:text-[#181713]">
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.2}
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}