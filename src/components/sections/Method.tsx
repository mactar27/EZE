"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Target, Lightbulb, Monitor, BarChart2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const METHOD_STEPS = [
  {
    title: "Analyse",
    description:
      "Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie",
    icon: <Search className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    title: "strategie",
    description:
      "Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie",
    icon: <Target className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    title: "création",
    description:
      "Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie",
    icon: <Lightbulb className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    title: "Deploiment",
    description:
      "Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie",
    icon: <Monitor className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
  {
    title: "Optimisation",
    description:
      "Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie",
    icon: <BarChart2 className="w-6 h-6 text-white" strokeWidth={2.2} />,
  },
];

export default function Method({ methodBanner }: { methodBanner?: any }) {
  const bannerUrl = methodBanner ? urlFor(methodBanner).url() : "/services-banner.png";

  return (
    <section id="method" className="py-16 md:py-24 bg-white relative">
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
                <h3 className="text-base font-extrabold text-gray-900 capitalize mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Version Mobile & Tablette */}
          <div className="lg:hidden space-y-6">
            {METHOD_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-5 p-4 rounded-2xl bg-gray-50/70 border border-gray-100"
              >
                <div className="flex flex-col items-center shrink-0 w-16">
                  <div className="w-12 h-12 rounded-full bg-[#5FD3E2] flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-900 mt-2 text-center capitalize">
                    {step.title}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-16" />

        {/* Carte POURQUOI NOUS CHOISIR ? avec Bannière Photo superposée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl max-w-5xl mx-auto border border-gray-100"
        >
          {/* Image de fond de la bannière */}
          <div className="relative h-[360px] md:h-[340px] w-full">
            <Image
              src={bannerUrl}
              alt="Pourquoi nous choisir EZK"
              fill
              className="object-cover"
            />
            {/* Voile blanc / translucide pour lisibilité parfaite */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

            {/* Contenu textuel et boutons */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-center max-w-3xl mx-auto">
              <div>
                <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase mb-3 shadow-sm">
                  NOTRE DIFFÉRENCE
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-4 drop-shadow-sm font-poppins">
                  POURQUOI NOUS CHOISIR ?
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-medium mx-auto">
                  Nous combinons créativité, expertise et vision stratégique pour donner à votre marque une présence digitale forte et cohérente. Plus qu'un simple prestataire, nous nous engageons comme un partenaire de confiance dans le développement de votre activité.
                </p>
              </div>

              {/* Deux boutons Cyan Canva en bas */}
              <div className="flex justify-center gap-4 mt-6">
                <Link
                  href="/a-propos"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Analyse
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
