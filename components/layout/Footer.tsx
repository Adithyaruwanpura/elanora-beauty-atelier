import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#181713] text-[#f4f0e8]">
            <div className="container-main">

                <div className="grid gap-14 border-t border-white/15 py-16 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link
                            href="/"
                            className="serif text-2xl tracking-[0.18em]"
                        >
                            ÉLANORA
                        </Link>

                        <p className="mt-6 max-w-[260px] text-[12px] leading-6 text-white/40">
                            Contemporary Beauty services shaped around individuality,
                            artistry and quiet luxury.
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                            Explore
                        </p>

                        <div className="mt-6 flex flex-col gap-3 text-[12px] text-white/70">
                            <Link className="transition-opacity hover:opacity-50" href="/services">
                                Services
                            </Link>

                            <Link className="transition-opacity hover:opacity-50" href="/experience">
                                Experience
                            </Link>

                            <Link className="transition-opacity hover:opacity-50" href="/gallery">
                                Gallery
                            </Link>

                            <Link className="transition-opacity hover:opacity-50" href="/book">
                                Book Appointment
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                            Visit
                        </p>

                        <div className="mt-6 text-[12px] leading-6 text-white/60">
                            <p>Colombo</p>
                            <p>Sri Lanka</p>

                            <p className="mt-4">
                                Tue — Sun
                                <br />
                                09:00 — 19:00
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                            Social
                        </p>

                        <div className="mt-6 flex flex-col gap-3 text-[12px] text-white/70">
                            <span>Instagram</span>
                            <span>Pinterest</span>
                            <span>TikTok</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/15 py-7 text-[9px] uppercase tracking-[0.18em] text-white/30 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 Élanora Beauty Atelier</p>

                    <div className="flex gap-7">
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>

                    <p>Beauty, refined.</p>
                </div>

            </div>
        </footer>
    );
}