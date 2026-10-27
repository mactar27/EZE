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
        src: urlFor(item).url(),
        alt: item.clientName || `Client ${idx + 1}`,
      }))
    : CLIENT_LOGOS;

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-4xl">
        
        {/* Carte Chiffres Clés avec Bannière & Boîte Verre Dépoli Bleue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden shadow-xl mb-12"
        >
          {/* Photo de fond */}
          <div className="relative h-[280px] md:h-[320px] w-full">
            <Image
              src={bannerUrl}
              alt="Statistiques EZK Agency"
              fill
              className="object-cover"
            />
            {/* Voile doux */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />

            {/* Boîte style Canva avec bordure bleue et fond translucide */}
            <div className="absolute inset-4 md:inset-8 rounded-[22px] border-2 border-[#0D4FB8]/80 bg-white/70 backdrop-blur-md p-6 flex items-center justify-center shadow-sm">
              <div className="grid grid-cols-2 gap-6 md:gap-12 w-full text-center">
                {STATS_DATA.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] drop-shadow-sm font-poppins">
                      {item.value}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-gray-700 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-12" />

        {/* Section Ils nous ont fait confiance */}
        <div className="text-center my-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-8"
          >
            ils nous ont fais confiance
          </motion.h2>

          {/* Carrousel de logos clients style Canva avec fond bleu ciel doux et flèches rouges */}
          <div className="relative bg-[#EBF6FA] rounded-[24px] py-6 px-4 md:px-12 flex items-center justify-between shadow-sm">
            {/* Flèche gauche rouge */}
            <button
              aria-label="Précédent"
              className="w-8 h-8 flex items-center justify-center text-[#FF5A5F] hover:scale-110 transition-transform shrink-0"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Logos ronds */}
            <div className="flex items-center justify-center gap-4 md:gap-10 overflow-hidden py-2">
              {displayLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md bg-white hover:scale-105 transition-transform shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>

            {/* Flèche droite rouge */}
            <button
              aria-label="Suivant"
              className="w-8 h-8 flex items-center justify-center text-[#FF5A5F] hover:scale-110 transition-transform shrink-0"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
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
