"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Quote, Star } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

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

const TESTIMONIALS_SAMPLE = [
  {
    id: 1,
    quote: "EZK Agency a totalement transformé notre présence digitale. La réactivité, la créativité et la qualité des contenus produits ont dépassé nos attentes.",
    author: "Cabinet Médical & Santé",
    role: "Direction Générale",
    rating: 5,
  },
  {
    id: 2,
    quote: "Un accompagnement sur mesure remarquable. Notre identité de marque et nos réseaux sociaux ont gagné en clarté, professionnalisme et engagement.",
    author: "Groupe Distribution & Retail",
    role: "Responsable Marketing",
    rating: 5,
  },
  {
    id: 3,
    quote: "Grâce aux campagnes publicitaires et au nouveau web design conçus par EZK, nos demandes de devis ont nettement progressé dès le premier trimestre.",
    author: "Entreprise Tech & Services",
    role: "Fondateur & CEO",
    rating: 5,
  },
];

export default function Testimonials({
  clientLogos,
}: {
  statsBanner?: any;
  clientLogos?: any[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const displayLogos = clientLogos && clientLogos.length > 0
    ? clientLogos.map((item, idx) => ({
        id: idx,
        src: item.src ? (typeof item.src === "string" ? item.src : urlFor(item.src).url()) : (item.logo ? urlFor(item.logo).url() : urlFor(item).url()),
        alt: item.clientName || item.name || `Client ${idx + 1}`,
      }))
    : CLIENT_LOGOS;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Section Ils nous ont fait confiance */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-8"
          >
            ils nous ont fait confiance
          </motion.h2>

          {/* Carousel avec Flèches de défilement (gauche / droite) */}
          <div className="relative group">
            {/* Flèche Gauche */}
            <button
              onClick={scrollLeft}
              aria-label="Faire défiler vers la gauche"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0D4FB8] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0D4FB8] hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>

            {/* Conteneur défilant des logos */}
            <div className="relative bg-[#EBF6FA] rounded-[28px] sm:rounded-[36px] py-8 sm:py-10 px-6 sm:px-10 overflow-hidden shadow-sm border border-blue-100/60">
              {/* Dégradés d'estompage sur les côtés */}
              <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#EBF6FA] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#EBF6FA] to-transparent z-10 pointer-events-none" />

              <div
                ref={scrollContainerRef}
                className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none scroll-smooth py-2 px-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Répétition pour une rangée longue et scrollable */}
                {[...displayLogos, ...displayLogos].map((logo, idx) => (
                  <div
                    key={`${logo.id}-${idx}`}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md bg-white hover:scale-105 transition-transform shrink-0 border border-gray-100 flex items-center justify-center p-3"
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

            {/* Flèche Droite */}
            <button
              onClick={scrollRight}
              aria-label="Faire défiler vers la droite"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0D4FB8] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0D4FB8] hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* 3 Témoignages sur la même ligne juste en dessous */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS_SAMPLE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F8FAFC] rounded-[24px] p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="text-[#5FD3E2] w-8 h-8 rotate-180 opacity-90" />
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60">
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 font-poppins">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bouton vers page Témoignages dédiée */}
        <div className="mt-12 text-center">
          <Link
            href="/temoignages"
            className="inline-flex items-center gap-2 bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Voir tous les avis clients</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
