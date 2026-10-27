"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-white">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5FD3E2]/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-6xl">
        
        {/* CARTE HERO STYLE CANVA (Sur mobile et desktop : le texte et l'image ne font qu'un !) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-[28px] overflow-hidden shadow-xl mb-10"
        >
          {/* Hauteur équilibrée pour afficher l'image et le texte ensemble sur mobile sans scroller */}
          <div className="relative h-[340px] sm:h-[400px] md:h-[460px] w-full">
            <Image
              src="/services-banner.png"
              alt="EZK Agency - Illuminez votre présence en ligne"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Dégradé sombre doux pour rendre le texte parfaitement lisible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

            {/* Contenu superposé directement sur l'image */}
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between max-w-xl">
              <div>
                {/* Petit badge EZK Agency */}
                <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase mb-4 shadow-sm">
                  EZK AGENCY
                </span>

                {/* Titre phare */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-white leading-tight tracking-tight">
                  ILLUMINEZ <br />
                  VOTRE PRÉSENCE <br />
                  <span className="text-[#5FD3E2]">EN LIGNE</span>
                </h1>

                {/* Slogan */}
                <p className="text-white/90 text-xs sm:text-sm md:text-base mt-3 leading-relaxed max-w-md font-light">
                  Nous accompagnons les entreprises, entrepreneurs et marques dans leur développement digital grâce à la communication, au marketing et à la création de contenu.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  href="/services"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Nos services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Indicateurs de confiance (sous la carte) */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 text-center pt-2">
          <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 shadow-sm">
            <span className="block text-primary font-bold text-xs md:text-sm">Stratégies</span>
            <span className="text-gray-500 text-[10px] md:text-xs">Sur mesure</span>
          </div>
          <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 shadow-sm">
            <span className="block text-primary font-bold text-xs md:text-sm">Résultats</span>
            <span className="text-gray-500 text-[10px] md:text-xs">Mesurables</span>
          </div>
          <div className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 shadow-sm">
            <span className="block text-primary font-bold text-xs md:text-sm">Accompagnement</span>
            <span className="text-gray-500 text-[10px] md:text-xs">Dédié</span>
          </div>
        </div>

      </div>
    </section>
  );
}
