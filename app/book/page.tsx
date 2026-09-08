import BookingFlow from "@/components/booking/BookingFlow";
import BookingHero from "@/components/booking/BookingHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book",
    description:
        "Request your personalised beauty appointment at Élanora Beauty Atelier.",
};

export default function BookPage() {
    return (
        <main>
            <Navbar />

            <BookingHero />

            <BookingFlow />

            <Footer />
        </main>
    );
}