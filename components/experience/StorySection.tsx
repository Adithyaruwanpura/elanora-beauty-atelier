"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const chapters = [
    {
        number: "01",
        title: "Listen first.",
        text:
            "Every appointment begins with conversation. We understand how you live, what you notice, what you want to keep and what you want to change.",
    },
    {
        number: "02",
        title: "Read the individual.",
        text:
            "Texture, proportion, skin, movement and personality shape the direction. The goal is not to copy a reference, but to interpret it around you.",
    },
    {
        number: "03",
        title: "Create with restraint.",
        text:
            "Technique matters, but so does knowing when to stop. We refine the details without taking away character.",
    },
    {
        number: "04",
        title: "Leave as yourself.",
        text:
            "The finished result should feel considered, elevated and natural to the person wearing it.",
    },
];

export default function StorySection() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#181713] text-[#f4f0e8]"
        >
            <div className="container-main grid gap-16 py-24 lg:min-h-[240vh] lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-0">
                {/* Sticky visual side */}
                <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
                    <div className="w-full">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                                02 / Our Approach
                            </p>

                            <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                                Élanora / Colombo
                            </p>
                        </div>

                        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                            <motion.div
                                style={{
                                    scale: imageScale,
                                    y: imageY,
                                }}
                                className="absolute inset-[-4%]"
                            >
                                <Image
                                    src="/images/experience-main.jpg"
                                    alt="Élanora beauty atelier experience"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 48vw"
                                    className="object-cover"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-[8px] uppercase tracking-[0.22em] text-white/45">
                                    Beauty as collaboration
                                </p>

                                <p className="serif mt-3 max-w-[460px] text-3xl leading-[1] tracking-[-0.03em] md:text-4xl">
                                    The person comes before
                                    <span className="italic text-[#c7b49b]"> the formula.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scrolling story */}
                <div className="lg:py-[18vh]">
                    <div className="mb-24 lg:mb-36">
                        <p className="text-[9px] uppercase tracking-[0.24em] text-[#b9a58b]">
                            A considered process
                        </p>

                        <h2 className="serif mt-6 max-w-[760px] text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[84px]">
                            Beauty should feel
                            <span className="block italic text-[#c7b49b]">
                                personal, never prescribed.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-[520px] text-[12px] leading-6 text-white/45">
                            Our process is deliberately simple: listen, observe, interpret
                            and refine. Each step protects what makes the individual
                            recognisable.
                        </p>
                    </div>

                    <div className="border-t border-white/15">
                        {chapters.map((chapter, index) => (
                            <motion.article
                                key={chapter.number}
                                initial={{ opacity: 0.25 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{
                                    amount: 0.55,
                                    margin: "-15% 0px -15% 0px",
                                }}
                                transition={{ duration: 0.45 }}
                                className="grid min-h-[45vh] gap-8 border-b border-white/15 py-14 md:grid-cols-[100px_1fr] md:py-20"
                            >
                                <div>
                                    <span className="text-[9px] tracking-[0.22em] text-[#b9a58b]">
                                        {chapter.number}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="serif text-4xl tracking-[-0.035em] md:text-6xl">
                                        {chapter.title}
                                    </h3>

                                    <p className="mt-6 max-w-[520px] text-[12px] leading-6 text-white/45">
                                        {chapter.text}
                                    </p>

                                    <div className="mt-10 flex items-center gap-4">
                                        <span className="h-px w-8 bg-[#b9a58b]" />
                                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                                            Chapter {chapter.number}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Closing quote */}
                    <div className="py-24 lg:py-36">
                        <p className="serif max-w-[720px] text-4xl leading-[0.95] tracking-[-0.035em] md:text-6xl">
                            “Refinement should reveal
                            <span className="italic text-[#c7b49b]"> character,</span>
                            not replace it.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}