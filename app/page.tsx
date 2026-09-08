import Artists from "@/components/home/Artists";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import ServicesPreview from "@/components/home/ServicesPreview";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <Philosophy />
      <Artists />
      <FinalCTA />
      <Footer />
    </main>
  );
}