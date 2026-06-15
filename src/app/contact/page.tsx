import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact – EZK Agency",
  description: "Contactez EZK Agency à Dakar pour votre projet digital. Demandez un devis personnalisé.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
