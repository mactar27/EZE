"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Target, Lightbulb, Monitor, BarChart2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const STATS_DATA = [
  { value: "100 +", label: "projets realisés" },
  { value: "25 +", label: "Clients satisfais" },
  { value: "10 +", label: "Marques représenté" },
  { value: "4 ans +", label: "D'expérience" },
];

const METHOD_STEPS = [
  {
    num: "01",
    title: "ANALYSE",
    description:
      "Nous étudions votre activité, votre marché, vos concurrents et votre présence digitale afin d’identifier vos besoins, vos forces et vos opportunités de développement.",
    icon: <Search className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    num: "02",
    title: "STRATÉGIE",
    description:
      "Nous élaborons une stratégie digitale sur mesure, alignée sur vos objectifs, votre cible et votre positionnement, pour définir les actions les plus pertinentes à mettre en œuvre.",
    icon: <Target className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    num: "03",
    title: "CRÉATION",
    description:
      "Nous concevons des contenus et des supports de communication cohérents avec votre identité : visuels, vidéos, textes et autres ressources nécessaires pour valoriser votre marque.",
    icon: <Lightbulb className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    num: "04",
    title: "DÉPLOIEMENT",
    description:
      "Nous mettons en œuvre la stratégie à travers la diffusion des contenus, la gestion de vos plateformes et le lancement des actions de communication prévues.",
    icon: <Monitor className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    num: "05",
    title: "OPTIMISATION",
    description:
      "Nous analysons les résultats, mesurons les performances et ajustons les actions engagées afin d’améliorer continuellement votre visibilité et l’efficacité de votre communication digitale.",
    icon: <BarChart2 className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
];

export default function Method({ 
  methodBanner,
  statsBanner,
}: { 
  methodBanner?: any;
  statsBanner?: any;
}) {
  const bannerUrl = methodBanner ? urlFor(methodBanner).url() : "/services-banner.png";
  const statsBannerUrl = statsBanner ? urlFor(statsBanner).url() : "/services-banner.png";

  return (
    <section id="method" className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Titre Cyan Canva */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-4"
          >
            NOTRE METHODE
          </motion.h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie adaptée, produisons des contenus de qualité et assurons un suivi continu afin d'optimiser durablement vos résultats.
          </p>
        </div>

        {/* 5 Étapes - Format grille aérée (5 colonnes sur desktop, liste sur mobile) */}
        <div className="my-12">
          {/* Version Desktop (Grille 5 colonnes spacieuse) */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {METHOD_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50/90 rounded-[24px] p-6 border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#5FD3E2] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-4">
                  {step.icon}
                </div>
                <span className="text-[11px] font-extrabold text-[#0D4FB8] tracking-widest uppercase mb-1">
                  {step.num}
                </span>
                <h3 className="text-base font-extrabold text-gray-900 tracking-wider uppercase mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Version Mobile & Tablette */}
          <div className="lg:hidden space-y-4">
            {METHOD_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/70 border border-gray-100"
              >
                <div className="flex flex-col items-center shrink-0 w-16">
                  <div className="w-12 h-12 rounded-full bg-[#5FD3E2] flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-[#0D4FB8] mt-1.5">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wide mb-1 font-poppins">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-10 md:my-12" />

        {/* Section CÔTE À CÔTE : POURQUOI NOUS CHOISIR & CHIFFRES CLÉS EZK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Colonne Gauche : Carte POURQUOI NOUS CHOISIR ? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[28px] md:rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between"
          >
            {/* Image de fond de la bannière */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={bannerUrl}
                alt="Pourquoi nous choisir EZK"
                fill
                className="object-cover"
              />
              {/* Voile blanc / translucide pour lisibilité parfaite */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
            </div>

            {/* Contenu textuel et boutons */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full text-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0D4FB8] tracking-wider uppercase mb-3 drop-shadow-sm font-poppins">
                  POURQUOI NOUS CHOISIR ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal mx-auto max-w-md">
                  Nous combinons créativité, expertise et vision stratégique pour donner à votre marque une présence digitale forte et cohérente. Plus qu'un simple prestataire, nous nous engageons comme un partenaire de confiance dans le développement de votre activité.
                </p>
              </div>

              {/* Deux boutons en bas */}
              <div className="flex justify-center gap-3 sm:gap-4 mt-6">
                <Link
                  href="/a-propos"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs tracking-wider uppercase px-6 py-2.5 sm:py-3 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Analyse
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase px-6 py-2.5 sm:py-3 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite : Carte CHIFFRES DE EZK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[28px] md:rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col justify-between"
          >
            {/* Image de fond de la bannière stats */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={statsBannerUrl}
                alt="Statistiques EZK Agency"
                fill
                className="object-cover"
              />
              {/* Voile doux */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
            </div>

            {/* Boîte style Canva avec bordure bleue et fond translucide */}
            <div className="relative z-10 m-3 sm:m-4 md:m-6 rounded-[22px] md:rounded-[24px] border-2 border-[#0D4FB8]/80 bg-white/80 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] md:h-[calc(100%-3rem)]">
              <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase mb-6 shadow-sm">
                LES CHIFFRES DE EZK
              </span>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full text-center">
                {STATS_DATA.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D4FB8] drop-shadow-sm font-poppins">
                      {item.value}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-800 mt-2 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
