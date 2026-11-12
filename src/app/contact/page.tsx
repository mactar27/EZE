import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Contact – EZK Agency",
  description: "Contactez EZK Agency à Dakar pour votre projet digital. Demandez un devis personnalisé.",
};

export default async function ContactPage() {
  const siteImages = await client.fetch(`*[_type == "siteImages"][0] {
    siteLogo,
    contactBanner,
    contactPhotoCircle
  }`);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar logoImage={siteImages?.siteLogo} />
      <div className="flex-1">
        <Contact 
          contactBanner={siteImages?.contactBanner}
          contactPhotoCircle={siteImages?.contactPhotoCircle}
        />
      </div>
      <Footer logoImage={siteImages?.siteLogo} />
    </main>
  );
}
