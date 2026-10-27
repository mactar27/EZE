"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default function Hero({ heroImage }: { heroImage?: any }) {
  const imageUrl = heroImage ? urlFor(heroImage).url() : "/services-banner.png";

  return (
    <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden bg-white">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5FD3E2]/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* VERSION MOBILE : Carte unifiée (comme maquette mobile Canva) */}
      <div className="block md:hidden container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-[28px] overflow-hidden shadow-xl mb-6"
        >
          <div className="relative h-[360px] w-full">
            <Image
              src={imageUrl}
              alt="EZK Agency - Illuminez votre présence en ligne"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between max-w-xl">
              <div>
                <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase mb-3 shadow-sm">
                  EZK AGENCY
                </span>
                <h1 className="text-2xl font-extrabold font-poppins text-white leading-tight tracking-tight">
                  ILLUMINEZ <br />
                  VOTRE PRÉSENCE <br />
                  <span className="text-[#5FD3E2]">EN LIGNE</span>
                </h1>
                <p className="text-white/90 text-xs mt-2.5 leading-relaxed font-light">
                  Nous accompagnons les entreprises, entrepreneurs et marques dans leur développement digital grâce à la communication, au marketing et à la création de contenu.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-3">
                <Link
                  href="/services"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Nos services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VERSION DESKTOP & TABLETTE (Largeur fluide, grille 2 colonnes élégante et aérée) */}
      <div className="hidden md:block container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Colonne Gauche : Textes & Boutons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="inline-block bg-[#0D4FB8] text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase mb-4 shadow-sm">
                EZK AGENCY • DAKAR
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-poppins text-gray-900 leading-[1.1] tracking-tight">
                ILLUMINEZ <br />
                VOTRE PRÉSENCE <br />
                <span className="text-[#0D4FB8]">EN LIGNE</span>
              </h1>
            </div>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-normal max-w-xl">
              Nous accompagnons les entreprises, entrepreneurs et marques dans leur développement digital grâce à la communication, au marketing et à la création de contenu.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/services"
                className="bg-[#0D4FB8] hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-7 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>

          {/* Colonne Droite : Belle bannière visuelle haute résolution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="relative h-[420px] lg:h-[480px] w-full rounded-[32px] overflow-hidden shadow-2xl group border border-gray-100">
              <Image
                src={imageUrl}
                alt="EZK Agency - Illuminez votre présence en ligne"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block bg-[#5FD3E2] text-gray-900 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-2">
                    Expertise & Stratégie
                  </span>
                  <p className="text-white font-bold text-xl drop-shadow-sm font-poppins">
                    Votre partenaire de croissance digitale à Dakar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Indicateurs de confiance (sous le hero, bande unique unifiée style coordonnées contact) */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-6xl mt-8 md:mt-12">
        <div className="bg-[#EBF6FA] rounded-[24px] p-6 md:p-8 flex flex-wrap items-center justify-around gap-6 text-center text-xs md:text-sm text-gray-700 shadow-sm border border-blue-100/50">
          <div className="flex-1 min-w-[140px]">
            <span className="block text-[#0D4FB8] font-bold text-sm md:text-base">Stratégies</span>
            <span className="text-gray-600 text-xs md:text-sm mt-0.5 block">Sur mesure</span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-blue-200/60" />
          <div className="flex-1 min-w-[140px]">
            <span className="block text-[#0D4FB8] font-bold text-sm md:text-base">Résultats</span>
            <span className="text-gray-600 text-xs md:text-sm mt-0.5 block">Mesurables</span>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-blue-200/60" />
          <div className="flex-1 min-w-[140px]">
            <span className="block text-[#0D4FB8] font-bold text-sm md:text-base">Accompagnement</span>
            <span className="text-gray-600 text-xs md:text-sm mt-0.5 block">Dédié</span>
          </div>
        </div>
      </div>
    </section>
  );
}
