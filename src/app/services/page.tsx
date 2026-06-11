import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nos Services – EZK Agency",
  description: "Découvrez tous les services d'EZK Agency : communication digitale, création de contenu, marketing digital, web design, branding et événementiel.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
