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
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-4xl">
        
        {/* Titre Cyan Canva */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-5"
          >
            NOTRE METHODE
          </motion.h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie adaptée, produisons des contenus de qualité et assurons un suivi continu afin d'optimiser durablement vos résultats.
          </p>
        </div>

        {/* 5 Étapes alignées style Canva */}
        <div className="my-12 space-y-6 md:space-y-8">
          {METHOD_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-5 md:gap-8 group"
            >
              {/* Colonne Icône Ronde Cyan + Label sous l'icône */}
              <div className="flex flex-col items-center shrink-0 w-20 md:w-24">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#5FD3E2] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-900 mt-2 text-center capitalize">
                  {step.title}
                </span>
              </div>

              {/* Colonne Description */}
              <div className="flex-1 pt-1">
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-12" />

        {/* Carte POURQUOI NOUS CHOISIR ? avec Bannière Photo superposée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[28px] overflow-hidden shadow-xl"
        >
          {/* Image de fond de la bannière */}
          <div className="relative h-[340px] md:h-[300px] w-full">
            <Image
              src={bannerUrl}
              alt="Pourquoi nous choisir EZK"
              fill
              className="object-cover"
            />
            {/* Voile blanc / translucide pour lisibilité parfaite */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

            {/* Contenu textuel et boutons */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-3 drop-shadow-sm">
                  POURQUOI NOUS CHOISIR ?
                </h3>
                <p className="text-xs md:text-sm text-gray-800 leading-relaxed font-medium max-w-xl mx-auto">
                  Nous combinons créativité, expertise et vision stratégique pour donner à votre marque une présence digitale forte et cohérente. Plus qu'un simple prestataire, nous nous engageons comme un partenaire de confiance dans le développement de votre activité.
                </p>
              </div>

              {/* Deux boutons Cyan Canva en bas */}
              <div className="flex justify-center gap-3 md:gap-4 mt-4">
                <Link
                  href="/a-propos"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs tracking-wider uppercase px-6 md:px-8 py-2.5 rounded-[10px] shadow-sm hover:shadow transition-all"
                >
                  Analyse
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#5FD3E2] hover:bg-[#4bc2d1] text-gray-900 font-bold text-xs tracking-wider uppercase px-6 md:px-8 py-2.5 rounded-[10px] shadow-sm hover:shadow transition-all"
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
