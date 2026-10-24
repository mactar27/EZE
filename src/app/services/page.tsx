import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/sections/Services";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Nos Services – EZK Agency",
  description: "Découvrez tous les services d'EZK Agency : communication digitale, création de contenu, marketing digital, web design, branding et événementiel.",
};

export default async function ServicesPage() {
  const services = await client.fetch(`*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }`);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-28 flex-1">
        <Services services={services} />
      </div>
      <Footer />
    </main>
  );
}
