"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const STATS_DATA = [
  { value: "100 +", label: "projets realisés" },
  { value: "25 +", label: "Clients satisfais" },
  { value: "10 +", label: "Marques représenté" },
  { value: "4 ans +", label: "D'expérience" },
];

const CLIENT_LOGOS = [
  { id: 1, src: "/client-logo-1.png", alt: "Client Médical" },
  { id: 2, src: "/client-logo-2.png", alt: "Logo Branding" },
  { id: 3, src: "/client-logo-3.png", alt: "Client Oiseau" },
  { id: 4, src: "/client-logo-1.png", alt: "Partenaire Santé" },
  { id: 5, src: "/client-logo-2.png", alt: "Tech & Innovation" },
  { id: 6, src: "/client-logo-3.png", alt: "Commerce & Distribution" },
  { id: 7, src: "/client-logo-1.png", alt: "Groupe Corporate" },
  { id: 8, src: "/client-logo-2.png", alt: "Créateurs & Marque" },
];

export default function Testimonials({
  statsBanner,
  clientLogos,
}: {
  statsBanner?: any;
  clientLogos?: any[];
}) {
  const bannerUrl = statsBanner ? urlFor(statsBanner).url() : "/services-banner.png";
  
  const displayLogos = clientLogos && clientLogos.length > 0
    ? clientLogos.map((item, idx) => ({
        id: idx,
        src: item.src ? (typeof item.src === "string" ? item.src : urlFor(item.src).url()) : (item.logo ? urlFor(item.logo).url() : urlFor(item).url()),
        alt: item.clientName || item.name || `Client ${idx + 1}`,
      }))
    : CLIENT_LOGOS;

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-6xl">
        
        {/* Carte Chiffres Clés avec Bannière & Boîte Verre Dépoli Bleue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl mb-16 border border-gray-100"
        >
          {/* Photo de fond */}
          <div className="relative h-[280px] md:h-[340px] w-full">
            <Image
              src={bannerUrl}
              alt="Statistiques EZK Agency"
              fill
              className="object-cover"
            />
            {/* Voile doux */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

            {/* Boîte style Canva avec bordure bleue et fond translucide */}
            <div className="absolute inset-4 md:inset-8 rounded-[24px] border-2 border-[#0D4FB8]/80 bg-white/75 backdrop-blur-md p-6 md:p-10 flex items-center justify-center shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full text-center">
                {STATS_DATA.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-5xl font-extrabold text-[#5FD3E2] drop-shadow-sm font-poppins">
                      {item.value}
                    </span>
                    <span className="text-xs md:text-sm font-bold text-gray-800 mt-2 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-16" />

        {/* Section Ils nous ont fait confiance */}
        <div className="text-center my-10 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-8"
          >
            ils nous ont fait confiance
          </motion.h2>

          {/* Bandeau défilant infini (Marquee) de tous les logos clients */}
          <div className="relative bg-[#EBF6FA] rounded-[32px] py-10 px-6 overflow-hidden shadow-md border border-blue-100/60">
            {/* Dégradés d'estompage sur les côtés */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#EBF6FA] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#EBF6FA] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max items-center gap-8 md:gap-12 animate-marquee">
              {/* Double liste pour un défilement infini sans coupure */}
              {[...displayLogos, ...displayLogos].map((logo, idx) => (
                <div
                  key={`${logo.id}-${idx}`}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md bg-white hover:scale-110 transition-transform shrink-0 border border-gray-100 flex items-center justify-center p-3"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bouton vers page Témoignages dédiée */}
        <div className="mt-12 text-center">
          <Link
            href="/temoignages"
            className="inline-flex items-center gap-2 bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-[10px] shadow-sm hover:shadow transition-all"
          >
            <span>Voir tous les avis clients</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
