"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default function About({ 
  aboutData, 
  aboutImage,
  isHomeTeaser = false,
}: { 
  aboutData?: any; 
  aboutImage?: any;
  isHomeTeaser?: boolean;
}) {
  const imageUrl = aboutImage ? urlFor(aboutImage).url() : "/collaboration-creative.png";

  const stats = [
    { number: aboutData?.statsProjects || "100+", label: "PROJETS RÉALISÉS" },
    { number: aboutData?.statsClients || "25+", label: "CLIENTS ACCOMPAGNÉS" },
    { number: aboutData?.statsBrands || "10+", label: "MARQUES REPRÉSENTÉES" },
    { number: aboutData?.statsYears || "4+", label: "ANNÉES D’EXPÉRIENCE" },
  ];

  // VERSION TEASER ACCUEIL : Synthétique avec aperçu et bouton "En savoir plus sur nous"
  if (isHomeTeaser) {
    return (
      <section id="about" className="pt-4 pb-10 md:pt-6 md:pb-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Texte synthétique */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block bg-blue-50 text-[#0D4FB8] text-xs font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-3">
                  QUI SOMMES-NOUS ?
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-gray-900 leading-tight tracking-tight">
                  L’AGENCE QUI DONNE DU SENS À VOTRE <span className="text-[#0D4FB8]">PRÉSENCE DIGITALE</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-900 font-bold">EZK Agency</strong> est une agence de communication et de marketing digital basée à Dakar, qui accompagne les entreprises, marques et entrepreneurs dans la construction d’une présence forte, cohérente et durable.
                </p>
                <p>
                  Notre approche repose sur une conviction simple : une présence digitale efficace ne se résume pas à être visible. Elle doit avoir du sens, transmettre une image forte et contribuer concrètement au développement de votre activité.
                </p>
              </div>

              <div className="pt-2 flex flex-row items-center gap-3 sm:gap-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider px-4 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <span>En savoir plus sur nous</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-[11px] sm:text-xs uppercase tracking-wider px-4 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all whitespace-nowrap"
                >
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>

            {/* Visuel avec badge Dakar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative h-[320px] md:h-[420px] rounded-[30px] overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src={imageUrl}
                alt="Collaboration créative chez EZK Agency"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <span className="inline-block bg-[#5FD3E2] text-gray-900 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-2">
                    Basée à Dakar, Sénégal
                  </span>
                  <p className="text-white text-lg md:text-2xl font-bold font-poppins leading-snug">
                    Créativité & Stratégie Digitale
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
    );
  }

  // VERSION COMPLÈTE PAGE DÉDIÉE (/a-propos)
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs md:text-sm font-bold text-[#5FD3E2] tracking-widest uppercase mb-2">À PROPOS</p>
          <h1 className="text-2xl md:text-4xl font-extrabold font-poppins text-gray-900 tracking-tight">
            QUI SOMMES-NOUS ?
          </h1>
          <div className="w-16 h-1 bg-[#5FD3E2] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Who We Are & Visual (Desktop 2 colonnes / Mobile empilé) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-10">
          <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-sm md:text-base font-normal">
            <p>
              <strong className="text-gray-900 font-bold">EZK Agency</strong> est une agence de communication et de marketing digital basée à Dakar, qui accompagne les entreprises, les marques et les entrepreneurs dans la construction d’une présence digitale forte, cohérente et durable.
            </p>
            <p>
              Depuis plus de quatre ans, nous mettons notre créativité, notre expertise et notre compréhension des enjeux numériques au service de projets de différentes natures et de différents secteurs.
            </p>
            <p>
              De la création de contenus à la gestion des plateformes digitales, en passant par l’infographie, le web design, le consulting digital et les campagnes publicitaires, nous concevons des solutions adaptées à chaque identité, chaque objectif et chaque réalité.
            </p>
            <p>
              Notre approche repose sur une conviction simple : une présence digitale efficace ne se résume pas à être visible. Elle doit avoir du sens, transmettre une image forte et contribuer concrètement au développement de l’activité.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[300px] md:h-[380px] rounded-[28px] overflow-hidden shadow-xl"
          >
            <Image
              src={imageUrl}
              alt="Collaboration créative chez EZK Agency"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6 md:p-8">
              <div>
                <p className="text-[#5FD3E2] text-xs font-bold tracking-widest uppercase mb-1">Basée à Dakar, Sénégal</p>
                <p className="text-white text-base md:text-xl font-bold font-poppins leading-snug">Créativité & Stratégie Digitale</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-lg md:text-xl font-extrabold font-poppins text-[#5FD3E2] mb-3 uppercase tracking-wider">
              NOTRE VISION
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-xs md:text-sm">
              <p>
                Nous ambitionnons de faire d’EZK Agency une référence en communication et marketing digital, d’abord au niveau local, puis progressivement à l’échelle internationale.
              </p>
              <p>
                Notre vision est de construire une agence capable de répondre aux exigences d’un marché en constante évolution, tout en valorisant les entreprises, les marques et les talents d’ici sur la scène digitale mondiale.
              </p>
              <p>
                Nous souhaitons contribuer à une nouvelle manière de penser la communication en associant créativité, stratégie, innovation et compréhension des réalités propres à chaque marché.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-lg md:text-xl font-extrabold font-poppins text-[#5FD3E2] mb-3 uppercase tracking-wider">
              NOTRE MISSION
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-xs md:text-sm">
              <p>
                Notre mission est d’accompagner les entreprises, les marques et les entrepreneurs dans leur développement digital, en leur apportant les outils, les stratégies et les solutions nécessaires pour mieux se positionner, communiquer et atteindre leurs objectifs.
              </p>
              <p>
                Nous cherchons à transformer chaque besoin en une démarche concrète et structurée, depuis la réflexion stratégique jusqu’à la mise en œuvre et l’évaluation des actions engagées.
              </p>
              <p>
                Notre rôle est de permettre à nos clients de mieux exprimer leur valeur, de renforcer leur visibilité et de construire une présence digitale capable de soutenir durablement leur activité.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chiffres Clés */}
        <div className="bg-[#EBF6FA] rounded-[24px] p-8 my-12 shadow-sm text-center">
          <h4 className="text-sm font-extrabold text-[#0D4FB8] tracking-widest uppercase mb-6">
            EZK EN QUELQUES CHIFFRES
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0D4FB8] font-poppins">
                  {stat.number}
                </span>
                <span className="text-gray-700 font-semibold text-[11px] md:text-xs mt-2 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-wider"
          >
            <span>PRÊT À FAIRE GRANDIR VOTRE MARQUE ?</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
