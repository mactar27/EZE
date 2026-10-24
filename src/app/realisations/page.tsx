import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Nos Réalisations – EZK Agency",
  description: "Explorez les réalisations et projets d'EZK Agency en création de contenu, web design, infographie et stratégie de marque.",
};

export default async function RealisationsPage() {
  const projects = await client.fetch(`*[_type == "project"] {
    title,
    category,
    image
  }`);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-28 flex-1">
        <Portfolio projects={projects} />
      </div>
      <Footer />
    </main>
  );
}
