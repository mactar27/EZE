"use client";

import React, { useRef, useEffect, useState } from "react";
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

const ALL_TESTIMONIALS = [
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
  {
    id: 4,
    quote: "Une équipe à l'écoute, proactive et force de proposition. Les visuels et vidéos réalisés pour notre lancement ont eu un impact immédiat.",
    author: "Marque Cosmétique & Beauté",
    role: "Directrice Artistique",
    rating: 5,
  },
  {
    id: 5,
    quote: "Le sérieux et la rigueur dans le reporting nous permettent de piloter précisément nos investissements marketing avec un ROI constant.",
    author: "Agence Immobilière Dakar",
    role: "Directeur Commercial",
    rating: 5,
  },
  {
    id: 6,
    quote: "Des professionnels passionnés qui comprennent les spécificités du marché sénégalais et international. Nous recommandons vivement !",
    author: "Groupe Hôtelier & Restauration",
    role: "Gérante",
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
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const displayLogos = clientLogos && clientLogos.length > 0
    ? clientLogos.map((item, idx) => ({
        id: idx,
        src: item.src ? (typeof item.src === "string" ? item.src : urlFor(item.src).url()) : (item.logo ? urlFor(item.logo).url() : urlFor(item).url()),
        alt: item.clientName || item.name || `Client ${idx + 1}`,
      }))
    : CLIENT_LOGOS;

  // Défilement automatique continu des témoignages
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % ALL_TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + ALL_TESTIMONIALS.length) % ALL_TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % ALL_TESTIMONIALS.length);
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

          {/* Carousel avec Flèches de défilement (gauche / droite bien visibles à l'intérieur et à l'extérieur) */}
          <div className="relative max-w-5xl mx-auto">
            {/* Flèche Gauche */}
            <button
              onClick={scrollLeft}
              aria-label="Faire défiler les logos vers la gauche"
              className="absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#0D4FB8] shadow-xl border border-blue-100 flex items-center justify-center hover:bg-[#0D4FB8] hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.6} />
            </button>

            {/* Conteneur défilant des logos */}
            <div className="relative bg-[#EBF6FA] rounded-[28px] sm:rounded-[36px] py-8 sm:py-10 px-8 sm:px-12 overflow-hidden shadow-sm border border-blue-100/60">
              {/* Dégradés d'estompage sur les côtés */}
              <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#EBF6FA] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#EBF6FA] to-transparent z-10 pointer-events-none" />

              <div
                ref={scrollContainerRef}
                className="flex items-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none scroll-smooth py-2 px-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Répétition pour un scroll large et fluide */}
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
              aria-label="Faire défiler les logos vers la droite"
              className="absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#0D4FB8] shadow-xl border border-blue-100 flex items-center justify-center hover:bg-[#0D4FB8] hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.6} />
            </button>
          </div>
        </div>

        {/* Témoignages qui défilent automatiquement (Carrousel fluide avec flèches + pagination) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          
          {/* Version Desktop : Grille de 3 avis visibles avec défilement de fenêtre glissante */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = ALL_TESTIMONIALS[(activeTestimonialIdx + offset) % ALL_TESTIMONIALS.length];
              return (
                <motion.div
                  key={`${item.id}-${activeTestimonialIdx}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#F8FAFC] rounded-[24px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
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
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium italic min-h-[72px]">
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
              );
            })}
          </div>

          {/* Version Mobile : Carte individuelle avec défilement automatique & contrôles flèches */}
          <div className="block md:hidden relative px-4">
            {(() => {
              const item = ALL_TESTIMONIALS[activeTestimonialIdx];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#F8FAFC] rounded-[24px] p-6 border border-gray-100 shadow-md flex flex-col justify-between"
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
                    <p className="text-gray-700 text-xs leading-relaxed mb-6 font-medium italic min-h-[64px]">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-900 font-poppins">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-medium">
                        {item.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        aria-label="Témoignage précédent"
                        className="w-8 h-8 rounded-full bg-white text-[#0D4FB8] border border-gray-200 flex items-center justify-center shadow-sm active:scale-95"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        aria-label="Témoignage suivant"
                        className="w-8 h-8 rounded-full bg-white text-[#0D4FB8] border border-gray-200 flex items-center justify-center shadow-sm active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>

          {/* Indicateurs de points (Dots pagination) */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {ALL_TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeTestimonialIdx === idx
                    ? "w-6 h-2 bg-[#0D4FB8]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Bouton vers page Témoignages dédiée */}
        <div className="mt-10 sm:mt-12 text-center">
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
