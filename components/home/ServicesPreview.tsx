"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const services = [
    {
        id: "01",
        title: "Hair Styling",
        subtitle: "Cut / Colour / Texture",
        description:
            "Sculpted cuts, dimensional colour and restorative treatments designed around movement, texture and individuality.",
        price: "From LKR 4,500",
        image: "/images/gallery-01.jpg",
    },
    {
        id: "02",
        title: "Skin Therapy",
        subtitle: "Glow / Repair / Renewal",
        description:
            "Considered skin treatments focused on balance, radiance and long-term skin health rather than temporary perfection.",
        price: "From LKR 6,000",
        image: "/images/gallery-02.jpg",
    },
    {
        id: "03",
        title: "Nail Atelier",
        subtitle: "Form / Detail / Finish",
        description:
            "Refined nail artistry with a focus on clean structure, understated colour and beautifully considered details.",
        price: "From LKR 3,500",
        image: "/images/gallery-04.jpg",
    },
    {
        id: "04",
        title: "Bridal & Editorial",
        subtitle: "Identity / Occasion / Image",
        description:
            "Bespoke beauty direction for weddings, campaigns and editorial moments, tailored to the person and the story.",
        price: "From LKR 15,000",
        image: "/images/gallery-03.jpg",
    },
];

export default function ServicesPreview() {
    const [active, setActive] = useState(0);

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#181713] text-[#f4f0e8]"
        >
            <div className="container-main py-24 md:py-32 lg:py-40">
                <div className="mb-14 flex flex-col gap-7 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                            02 / Our Services
                        </p>

                        <h2 className="serif mt-5 max-w-[760px] text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[88px]">
                            Beauty services,
                            <span className="block italic text-[#c8b79f]">
                                shaped differently.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[290px] text-[12px] leading-6 text-white/45">
                        Select a service to explore the thinking, craft and experience behind
                        each service.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    <div className="order-2 lg:order-1">
                        <div className="border-t border-white/15">
                            {services.map((service, index) => {
                                const isActive = active === index;

                                return (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onMouseEnter={() => setActive(index)}
                                        onFocus={() => setActive(index)}
                                        onClick={() => setActive(index)}
                                        className="group relative flex w-full items-center justify-between border-b border-white/15 py-7 text-left md:py-9"
                                    >
                                        <div className="flex items-start gap-5 md:gap-8">
                                            <span
                                                className={`pt-2 text-[9px] tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-[#c8b79f]" : "text-white/25"
                                                    }`}
                                            >
                                                {service.id}
                                            </span>

                                            <div>
                                                <motion.h3
                                                    animate={{
                                                        x: isActive ? 10 : 0,
                                                        opacity: isActive ? 1 : 0.48,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                    className="serif text-3xl tracking-[-0.03em] md:text-5xl"
                                                >
                                                    {service.title}
                                                </motion.h3>

                                                <p
                                                    className={`mt-2 text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-white/55" : "text-white/25"
                                                        }`}
                                                >
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <motion.span
                                            animate={{
                                                rotate: isActive ? 45 : 0,
                                                backgroundColor: isActive
                                                    ? "#f4f0e8"
                                                    : "rgba(255,255,255,0)",
                                                color: isActive ? "#181713" : "#f4f0e8",
                                            }}
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25"
                                        >
                                            <ArrowUpRight size={14} strokeWidth={1.2} />
                                        </motion.span>
                                    </button>
                                );
                            })}
                        </div>

                        <Link
                            href="/services"
                            className="group mt-10 inline-flex items-center gap-4"
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em]">
                                View all services
                            </span>

                            <span className="h-px w-12 bg-white/30 transition-all duration-300 group-hover:w-20" />
                        </Link>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="lg:sticky lg:top-28">
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#2a2925]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={services[active].image}
                                        initial={{
                                            opacity: 0,
                                            scale: 1.06,
                                            clipPath: "inset(0 0 100% 0)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            clipPath: "inset(0 0 0% 0)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 1.03,
                                        }}
                                        transition={{
                                            duration: 0.65,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={services[active].image}
                                            alt={services[active].title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                        />

                                        <div className="absolute inset-0 bg-black/10" />
                                    </motion.div>
                                </AnimatePresence>

                                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-32 md:p-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={services[active].title}
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >
                                            <div className="flex items-end justify-between gap-6">
                                                <div>
                                                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                                                        Selected Service
                                                    </p>

                                                    <h3 className="serif mt-3 text-4xl tracking-[-0.03em] md:text-5xl">
                                                        {services[active].title}
                                                    </h3>
                                                </div>

                                                <p className="hidden text-[9px] uppercase tracking-[0.16em] text-white/55 sm:block">
                                                    {services[active].price}
                                                </p>
                                            </div>

                                            <p className="mt-5 max-w-[520px] text-[12px] leading-6 text-white/60">
                                                {services[active].description}
                                            </p>

                                            <p className="mt-5 text-[9px] uppercase tracking-[0.17em] text-[#d7c6ae] sm:hidden">
                                                {services[active].price}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="absolute right-5 top-5 z-20 rounded-full border border-white/25 bg-black/15 px-4 py-2 backdrop-blur-md">
                                    <span className="text-[8px] uppercase tracking-[0.22em] text-white/70">
                                        {services[active].id} / 04
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}