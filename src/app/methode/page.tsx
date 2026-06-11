import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MethodWhyUs from "@/components/sections/MethodWhyUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notre Méthode – EZK Agency",
  description: "Découvrez la méthode de travail d'EZK Agency et pourquoi nous choisir pour votre développement digital.",
};

export default function MethodePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <MethodWhyUs />
      </div>
      <Footer />
    </main>
  );
}
