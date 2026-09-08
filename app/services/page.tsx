import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCatalog from "@/components/services/ServiceCatalog";
import ServiceExperience from "@/components/services/ServiceExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Élanora hair, skin, nail and bridal beauty rituals.",
};
export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <ServicesHero />
            <ServiceCatalog />
            <ServiceExperience />
            <Footer />
        </main>
    );
}