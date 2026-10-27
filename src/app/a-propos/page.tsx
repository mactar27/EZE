import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "À Propos – EZK Agency",
  description: "Découvrez EZK Agency, agence de communication et de marketing digital basée à Dakar.",
};

export default async function AboutPage() {
  const about = await client.fetch(`*[_type == "about"][0] {
    aboutText,
    visionText,
    missionText,
    statsProjects,
    statsClients,
    statsBrands,
    statsYears
  }`);

  const siteImages = await client.fetch(`*[_type == "siteImages"][0] {
    aboutImage
  }`);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="pt-28 flex-1">
        <About aboutData={about} aboutImage={siteImages?.aboutImage} />
      </div>
      <Footer />
    </main>
  );
}
