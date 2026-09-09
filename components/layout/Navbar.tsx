"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

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

    // Close mobile menu automatically if route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            {/* =========================
          DESKTOP / MOBILE NAVBAR
      ========================== */}
            <header
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled || open
                    ? "border-b border-black/10 bg-[#f4f0e8]/90 backdrop-blur-xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="container-main flex h-20 items-center justify-between md:h-24">

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        aria-label="Élanora home"
                        className="serif relative z-[60] text-[21px] tracking-[0.18em] md:text-[23px]"
                    >
                        ÉLANORA
                    </Link>

                    {/* =========================
              DESKTOP LINKS
          ========================== */}
                    <nav className="hidden items-center gap-10 md:flex">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`group relative text-[10px] uppercase tracking-[0.18em] transition-opacity duration-300 ${active
                                        ? "opacity-100"
                                        : "opacity-55 hover:opacity-100"
                                        }`}
                                >
                                    {link.label}

                                    {/* Active / hover underline */}
                                    <span
                                        className={`absolute -bottom-2 left-0 h-px bg-[#181713] transition-all duration-500 ${active
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Book CTA */}
                    <Link
                        href="/book"
                        className={`hidden border border-[#181713] px-6 py-3 text-[9px] uppercase tracking-[0.18em] transition-all duration-300 md:block ${pathname === "/book"
                            ? "bg-[#181713] text-[#f4f0e8]"
                            : "hover:bg-[#313028] hover:text-[#f4f0e8]"
                            }`}
                    >
                        Book a Ritual
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        aria-label={
                            open
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={open}
                        className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {open ? (
                                <motion.span
                                    key="close"
                                    initial={{
                                        opacity: 0,
                                        rotate: -90,
                                        scale: 0.7,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: 90,
                                        scale: 0.7,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={21} strokeWidth={1.2} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{
                                        opacity: 0,
                                        rotate: 90,
                                        scale: 0.7,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: -90,
                                        scale: 0.7,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={21} strokeWidth={1.2} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* =========================
          MOBILE FULLSCREEN MENU
      ========================== */}
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
                                {links.map((link, index) => {
                                    const active = pathname === link.href;

                                    return (
                                        <motion.div
                                            key={link.label}
                                            initial={{
                                                opacity: 0,
                                                y: 25,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.16 + index * 0.07,
                                            }}
                                            className="border-t border-black/15"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className="group flex items-center justify-between py-5"
                                            >
                                                <div className="flex items-center gap-4">

                                                    {/* Active dot */}
                                                    <motion.span
                                                        animate={{
                                                            width: active ? 7 : 0,
                                                            opacity: active ? 1 : 0,
                                                        }}
                                                        className="h-[7px] rounded-full bg-[#a4875d]"
                                                    />

                                                    <span
                                                        className={`serif text-[clamp(2.5rem,12vw,3.4rem)] tracking-[-0.04em] transition-colors ${active
                                                            ? "italic text-[#8a8173]"
                                                            : "text-[#181713]"
                                                            }`}
                                                    >
                                                        {link.label}
                                                    </span>
                                                </div>

                                                <span
                                                    className={`text-[9px] tracking-[0.2em] ${active
                                                        ? "text-[#181713]"
                                                        : "text-[#777166]"
                                                        }`}
                                                >
                                                    0{index + 1}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* BOOK */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.16 + links.length * 0.07,
                                    }}
                                    className="border-y border-black/15"
                                >
                                    <Link
                                        href="/book"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-between py-5"
                                    >
                                        <div className="flex items-center gap-4">

                                            {pathname === "/book" && (
                                                <span className="h-[7px] w-[7px] rounded-full bg-[#a4875d]" />
                                            )}

                                            <span
                                                className={`serif text-[clamp(2.5rem,12vw,3.4rem)] italic tracking-[-0.04em] ${pathname === "/book"
                                                    ? "text-[#8a8173]"
                                                    : "text-[#181713]"
                                                    }`}
                                            >
                                                Book
                                            </span>
                                        </div>

                                        <span className="text-[9px] not-italic tracking-[0.2em] text-[#777166]">
                                            05
                                        </span>
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* Mobile footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-end justify-between gap-5 border-t border-black/15 pt-5 text-[8px] uppercase tracking-[0.15em] text-[#777166]"
                            >
                                <span>
                                    Colombo
                                    <br />
                                    Sri Lanka
                                </span>

                                <span className="text-right">
                                    Beauty,
                                    <br />
                                    refined.
                                </span>
                            </motion.div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}