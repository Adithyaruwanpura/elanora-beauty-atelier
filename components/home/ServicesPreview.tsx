"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
    {
        number: "01",
        title: "Hair Rituals",
        text: "Precision cuts, dimensional colour and restorative treatments designed around you.",
        price: "From LKR 4,500",
    },
    {
        number: "02",
        title: "Skin Therapy",
        text: "Intentional facial rituals focused on clarity, hydration and long-term skin health.",
        price: "From LKR 6,000",
    },
    {
        number: "03",
        title: "Nail Atelier",
        text: "Refined nail care and minimal artistry with a modern editorial approach.",
        price: "From LKR 3,500",
    },
    {
        number: "04",
        title: "Bridal",
        text: "A considered beauty experience for ceremonies, portraits and unforgettable moments.",
        price: "By consultation",
    },
];

export default function ServicesPreview() {
    return (
        <section className="bg-[#181713] py-24 text-[#f4f0e8] md:py-32">
            <div className="container-main">

                <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
                    <div>
                        <p className="eyebrow text-white/50">
                            Our Services
                        </p>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="serif max-w-4xl text-[13vw] leading-[0.92] tracking-[-0.04em] sm:text-[10vw] lg:text-[6vw]"
                    >
                        Rituals designed
                        <br />
                        <span className="italic text-white/55">around you.</span>
                    </motion.h2>
                </div>

                <div>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.07,
                            }}
                            className="group grid gap-6 border-b border-white/15 py-9 transition-colors duration-300 hover:bg-white/[0.025] md:grid-cols-[70px_1fr_1fr_auto] md:items-center"
                        >
                            <span className="text-[10px] tracking-[0.2em] text-white/40">
                                {service.number}
                            </span>

                            <h3 className="serif text-4xl tracking-[-0.03em] md:text-5xl">
                                {service.title}
                            </h3>

                            <p className="max-w-md text-[13px] leading-6 text-white/50">
                                {service.text}
                            </p>

                            <div className="flex items-center justify-between gap-6 md:justify-end">
                                <span className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                                    {service.price}
                                </span>

                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#f4f0e8] group-hover:text-[#181713]">
                                    <ArrowUpRight size={16} strokeWidth={1.3} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-end">
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]"
                    >
                        View all services

                        <span className="h-[1px] w-12 bg-white/40 transition-all duration-300 group-hover:w-20" />
                    </Link>
                </div>

            </div>
        </section>
    );
}