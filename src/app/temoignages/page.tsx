import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Témoignages – EZK Agency",
  description: "Ce que nos clients disent d'EZK Agency. Témoignages de clients satisfaits.",
};

export default function TemoignagesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
