"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
                        ? "border-b border-black/10 bg-[#f4f0e8]/90 backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="container-main flex h-20 items-center justify-between md:h-24">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="serif relative z-[60] text-[21px] tracking-[0.18em] md:text-[23px]"
                    >
                        ÉLANORA
                    </Link>

                    <nav className="hidden items-center gap-10 md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-[10px] uppercase tracking-[0.18em] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#181713] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/book"
                        className="hidden border border-[#181713] px-6 py-3 text-[9px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#181713] hover:text-[#f4f0e8] md:block"
                    >
                        Book a Ritual
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={open}
                        className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
                    >
                        {open ? (
                            <X size={21} strokeWidth={1.2} />
                        ) : (
                            <Menu size={21} strokeWidth={1.2} />
                        )}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.55,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="fixed inset-0 z-40 bg-[#ebe4d8] md:hidden"
                    >
                        <div className="container-main flex min-h-screen flex-col justify-between pb-10 pt-32">
                            <nav className="flex flex-col">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.2 + index * 0.07,
                                        }}
                                        className="border-t border-black/15"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="serif flex items-center justify-between py-6 text-5xl tracking-[-0.04em]"
                                        >
                                            {link.label}

                                            <span className="text-[9px] tracking-[0.2em] text-[#777166]">
                                                0{index + 1}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.42 }}
                                    className="border-y border-black/15"
                                >
                                    <Link
                                        href="/book"
                                        onClick={() => setOpen(false)}
                                        className="serif flex items-center justify-between py-6 text-5xl italic tracking-[-0.04em]"
                                    >
                                        Book

                                        <span className="text-[9px] not-italic tracking-[0.2em] text-[#777166]">
                                            04
                                        </span>
                                    </Link>
                                </motion.div>
                            </nav>

                            <div className="flex justify-between border-t border-black/15 pt-5 text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                <span>Colombo / Sri Lanka</span>
                                <span>Beauty, refined.</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}