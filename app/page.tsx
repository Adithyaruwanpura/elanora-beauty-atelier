import Artists from "@/components/home/Artists";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import ServicesPreview from "@/components/home/ServicesPreview";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/ui/Preloader";
import BeautyMarquee from "@/components/home/BeautyMarquee";

export default function Home() {
  return (
    <main>
      <Preloader />

      <Navbar />
      <Hero />
      <ServicesPreview />
      <Philosophy />
      <BeautyMarquee />
      <Artists />
      <FinalCTA />
      <Footer />
    </main>
  );
}