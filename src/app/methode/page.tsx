import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MethodWhyUs from "@/components/sections/MethodWhyUs";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Notre Méthode – EZK Agency",
  description: "Découvrez la méthode de travail d'EZK Agency et pourquoi nous choisir pour votre développement digital.",
};

export default async function MethodePage() {
  const siteImages = await client.fetch(`*[_type == "siteImages"][0] {
    siteLogo
  }`);

  return (
    <main>
      <Navbar logoImage={siteImages?.siteLogo} />
      <div className="pt-24">
        <MethodWhyUs />
      </div>
      <Footer logoImage={siteImages?.siteLogo} />
    </main>
  );
}
