"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    ChevronDown,
    Clock3,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const categories = [
    "All",
    "Hair",
    "Skin",
    "Nails",
    "Bridal",
];

const treatments = [
    {
        id: "01",
        category: "Hair",
        title: "Signature Cut",
        price: "LKR 4,500",
        duration: "60 min",
        description:
            "A personalised cut shaped around texture, movement, proportion and everyday styling.",
        includes: [
            "Consultation",
            "Wash & scalp preparation",
            "Tailored cut",
            "Finish & styling",
        ],
    },
    {
        id: "02",
        category: "Hair",
        title: "Dimensional Colour",
        price: "From LKR 9,500",
        duration: "120–180 min",
        description:
            "Considered colour placement designed to create depth, softness and movement without overpowering natural character.",
        includes: [
            "Colour consultation",
            "Custom colour planning",
            "Application",
            "Gloss & finish",
        ],
    },
    {
        id: "03",
        category: "Hair",
        title: "Restorative Treatment",
        price: "LKR 5,000",
        duration: "75 min",
        description:
            "A restorative hair treatment for softness, strength and improved manageability.",
        includes: [
            "Hair assessment",
            "Treatment selection",
            "Repair treatment",
            "Finish",
        ],
    },
    {
        id: "04",
        category: "Skin",
        title: "Essential Facial",
        price: "LKR 6,000",
        duration: "60 min",
        description:
            "A calm, personalised skin treatment focused on hydration, balance and radiance.",
        includes: [
            "Skin consultation",
            "Cleanse",
            "Targeted treatment",
            "Hydration & finish",
        ],
    },
    {
        id: "05",
        category: "Skin",
        title: "Renewal Therapy",
        price: "LKR 8,000",
        duration: "75 min",
        description:
            "A deeper facial treatment designed to support texture, clarity and renewed luminosity.",
        includes: [
            "Skin analysis",
            "Exfoliation",
            "Targeted therapy",
            "Barrier care",
        ],
    },
    {
        id: "06",
        category: "Nails",
        title: "Essential Manicure",
        price: "LKR 3,500",
        duration: "50 min",
        description:
            "Clean shaping, detailed cuticle care and a refined finish.",
        includes: [
            "Nail shaping",
            "Cuticle care",
            "Hand treatment",
            "Polish",
        ],
    },
    {
        id: "07",
        category: "Nails",
        title: "Editorial Nail Art",
        price: "From LKR 5,500",
        duration: "90 min",
        description:
            "Custom nail direction created around colour, shape, mood and visual references.",
        includes: [
            "Concept consultation",
            "Nail preparation",
            "Custom art",
            "Protective finish",
        ],
    },
    {
        id: "08",
        category: "Bridal",
        title: "Bridal Beauty",
        price: "From LKR 25,000",
        duration: "120 min",
        description:
            "A tailored bridal beauty direction developed around the individual, wardrobe and ceremony.",
        includes: [
            "Consultation",
            "Skin preparation",
            "Makeup design",
            "Final styling",
        ],
    },
    {
        id: "09",
        category: "Bridal",
        title: "Editorial Beauty",
        price: "From LKR 15,000",
        duration: "By project",
        description:
            "Beauty direction for campaigns, shoots, events and visual storytelling.",
        includes: [
            "Creative direction",
            "Look development",
            "Hair / makeup",
            "On-set refinement",
        ],
    },
];

export default function ServiceCatalog() {
    const [category, setCategory] = useState("All");
    const [openId, setOpenId] = useState<string | null>("01");

    const filtered = useMemo(() => {
        if (category === "All") return treatments;

        return treatments.filter(
            (item) => item.category === category
        );
    }, [category]);

    return (
        <section className="bg-[#181713] text-[#f4f0e8]">
            <div className="container-main py-24 md:py-32 lg:py-40">
                {/* heading */}
                <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                            02 / Treatment Menu
                        </p>

                        <h2 className="serif mt-5 max-w-[900px] text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[92px]">
                            Choose a service,
                            <span className="block italic text-[#c5b096]">
                                not a template.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[300px] text-[12px] leading-6 text-white/40 lg:justify-self-end">
                        Every service begins with consultation and
                        can be adapted to the individual.
                    </p>
                </div>

                {/* filters */}
                <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {categories.map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => {
                                setCategory(item);
                                setOpenId(null);
                            }}
                            className={`shrink-0 rounded-full border px-5 py-3 text-[9px] uppercase tracking-[0.18em] transition-all duration-300 ${category === item
                                ? "border-[#f4f0e8] bg-[#f4f0e8] text-[#181713]"
                                : "border-white/20 text-white/45 hover:border-white/50 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* treatment rows */}
                <div className="mt-14 border-t border-white/15">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item) => {
                            const open = openId === item.id;

                            return (
                                <motion.article
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="border-b border-white/15"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenId(open ? null : item.id)
                                        }
                                        className="group grid w-full gap-5 py-7 text-left md:grid-cols-[70px_1fr_auto_auto] md:items-center md:py-9"
                                    >
                                        <span
                                            className={`text-[8px] tracking-[0.2em] ${open
                                                ? "text-[#c5b096]"
                                                : "text-white/20"
                                                }`}
                                        >
                                            {item.id}
                                        </span>

                                        <div>
                                            <h3
                                                className={`serif text-3xl tracking-[-0.035em] transition-transform duration-300 md:text-5xl ${open ? "translate-x-2" : ""
                                                    }`}
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-[8px] uppercase tracking-[0.18em] text-white/25">
                                                {item.category}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/35">
                                            <Clock3
                                                size={12}
                                                strokeWidth={1.2}
                                            />
                                            {item.duration}
                                        </div>

                                        <div className="flex items-center justify-between gap-6 md:justify-end">
                                            <span className="text-[9px] uppercase tracking-[0.16em] text-[#c5b096]">
                                                {item.price}
                                            </span>

                                            <motion.span
                                                animate={{
                                                    rotate: open ? 180 : 0,
                                                }}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
                                            >
                                                <ChevronDown
                                                    size={13}
                                                    strokeWidth={1.2}
                                                />
                                            </motion.span>
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid gap-10 pb-10 pl-0 md:grid-cols-[70px_1fr_1fr_auto] md:pb-12">
                                                    <div />

                                                    <p className="max-w-[470px] text-[12px] leading-6 text-white/45">
                                                        {item.description}
                                                    </p>

                                                    <div>
                                                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                                                            Includes
                                                        </p>

                                                        <div className="mt-4 space-y-3">
                                                            {item.includes.map(
                                                                (detail) => (
                                                                    <div
                                                                        key={detail}
                                                                        className="flex items-center gap-3 text-[11px] text-white/50"
                                                                    >
                                                                        <span className="h-px w-4 bg-[#c5b096]" />
                                                                        {detail}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="md:self-end">
                                                        <Link
                                                            href="/book"
                                                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#f4f0e8] text-[#181713] transition-transform duration-300 hover:scale-110"
                                                            aria-label={`Book ${item.title}`}
                                                        >
                                                            <ArrowUpRight
                                                                size={15}
                                                                strokeWidth={1.2}
                                                                className="transition-transform duration-300 group-hover:rotate-45"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* bottom booking band */}
                <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                    <h3 className="serif max-w-[760px] text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                        Not sure what to choose?
                        <span className="italic text-[#c5b096]">
                            {" "}Begin with conversation.
                        </span>
                    </h3>

                    <div className="md:justify-self-end">
                        <p className="max-w-[280px] text-[11px] leading-5 text-white/35">
                            Choose the closest service and your artist
                            can refine the direction during consultation.
                        </p>

                        <Link
                            href="/book"
                            className="group mt-7 inline-flex items-center gap-4 rounded-full border border-white/25 px-6 py-4 transition-colors hover:bg-white hover:text-[#181713]"
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em]">
                                Start a booking
                            </span>

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:rotate-45"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}