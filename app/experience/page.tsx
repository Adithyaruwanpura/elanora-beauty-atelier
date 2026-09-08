import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceValues from "@/components/experience/ExperienceValues";
import StorySection from "@/components/experience/StorySection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Discover the philosophy, artistry and considered beauty experience behind Élanora.",
};

export default function ExperiencePage() {
    return (
        <main>
            <Navbar />

            <ExperienceHero />

            <StorySection />

            <ExperienceValues />

            <Footer />
        </main>
    );
}