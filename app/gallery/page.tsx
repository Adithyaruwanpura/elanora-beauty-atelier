import FinalCTA from "@/components/home/FinalCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Explore selected beauty, hair, skin and editorial work from Élanora.",
};

export default function GalleryPage() {
    return (
        <main>
            <Navbar />

            <GalleryHero />

            <GalleryGrid />

            <FinalCTA />

            <Footer />
        </main>
    );
}