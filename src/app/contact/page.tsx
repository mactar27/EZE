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
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-28 flex-1">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
