"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, Compass, PenTool, Rocket, LineChart, CheckCircle, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "ANALYSE",
    desc: "Comprendre l’activité, l’environnement, les besoins et les objectifs.",
    icon: <Search className="w-5 h-5 text-white" />,
  },
  {
    num: "02",
    title: "STRATÉGIE",
    desc: "Définir une approche claire, adaptée au positionnement, aux ressources et aux résultats recherchés.",
    icon: <Compass className="w-5 h-5 text-white" />,
  },
  {
    num: "03",
    title: "CRÉATION",
    desc: "Transformer la stratégie en contenus, supports et solutions créatives.",
    icon: <PenTool className="w-5 h-5 text-white" />,
  },
  {
    num: "04",
    title: "DÉPLOIEMENT",
    desc: "Mettre en œuvre les actions et assurer leur diffusion sur les plateformes et canaux adaptés.",
    icon: <Rocket className="w-5 h-5 text-white" />,
  },
  {
    num: "05",
    title: "OPTIMISATION",
    desc: "Mesurer les performances, tirer les enseignements et ajuster les actions pour progresser durablement.",
    icon: <LineChart className="w-5 h-5 text-white" />,
  },
];

const MONTH_STEPS = [
  {
    tag: "MOIS 1",
    title: "MISE EN PLACE STRATÉGIQUE",
    desc: "Analyse, diagnostic, définition des objectifs, positionnement, stratégie, outils et préparation des différentes actions.",
  },
  {
    tag: "MOIS 2",
    title: "MISE EN ŒUVRE OPÉRATIONNELLE",
    desc: "Production des contenus, déploiement des actions, gestion des plateformes, campagnes et mise en application de la stratégie.",
  },
  {
    tag: "MOIS 3",
    title: "ÉVALUATION & OPTIMISATION",
    desc: "Analyse des performances, bilan des actions, identification des axes d’amélioration et optimisation de la suite.",
  },
];

const WHY_US_PILLARS = [
  {
    title: "CRÉATIVITÉ",
    desc: "Des idées, des contenus et des solutions visuelles pensés pour chaque marque.",
  },
  {
    title: "RÉACTIVITÉ",
    desc: "Une communication fluide et un accompagnement adapté au rythme de chaque projet.",
  },
  {
    title: "SUIVI PERSONNALISÉ",
    desc: "Une approche construite selon la situation, les besoins et les objectifs de chaque client.",
  },
  {
    title: "SOLUTIONS ADAPTÉES À CHAQUE BUDGET",
    desc: "Des dispositifs réalistes, évolutifs et adaptés aux ressources disponibles.",
  },
  {
    title: "VISION STRATÉGIQUE",
    desc: "Nous ne créons pas simplement pour créer : chaque action doit répondre à un objectif.",
  },
  {
    title: "RÉSULTATS MESURABLES",
    desc: "Nous suivons les performances afin d’identifier ce qui fonctionne et d’améliorer continuellement les actions engagées.",
  },
];

export default function MethodWhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-4xl">
        
        {/* Titre Notre Méthode */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-4"
          >
            NOTRE MÉTHODE
          </motion.h1>
          <div className="space-y-3 text-gray-700 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            <p>
              Chez EZK Agency, nous considérons qu’une communication efficace commence avant la création et se poursuit bien après sa mise en ligne.
            </p>
            <p>
              Chaque projet débute par une compréhension approfondie de l’entreprise, de son environnement, de ses besoins et de ses objectifs. Nous construisons ensuite une approche stratégique adaptée avant de passer à la production et au déploiement des actions prévues. Enfin, nous analysons les résultats obtenus afin d’identifier les points d’amélioration et d’optimiser la suite.
            </p>
          </div>
        </div>

        {/* Accompagnement en 3 mois */}
        <div className="mb-16">
          <h2 className="text-center text-sm font-extrabold text-[#0D4FB8] tracking-widest uppercase mb-8">
            NOTRE MÉTHODE D’ACCOMPAGNEMENT S’ARTICULE AUTOUR DE TROIS GRANDES ÉTAPES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MONTH_STEPS.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-[22px] p-6 border border-gray-100 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="inline-block bg-[#5FD3E2] text-gray-900 font-extrabold text-[11px] px-3 py-1 rounded-full mb-3 uppercase">
                    {step.tag}
                  </span>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notre Processus en 5 étapes */}
        <div className="mb-16">
          <h2 className="text-center text-xl md:text-2xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-8">
            NOTRE PROCESSUS
          </h2>
          <div className="space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.num} className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#5FD3E2] flex items-center justify-center shrink-0 shadow-sm">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900">
                    {step.num} — {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-700/80 my-12" />

        {/* Pourquoi Nous Choisir ? */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-3">
              POURQUOI NOUS CHOISIR ?
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
              Choisir EZK Agency, c’est choisir une approche qui ne se limite pas à l’exécution d’une commande. Nous cherchons à comprendre votre activité, vos enjeux et vos ambitions afin de construire des solutions réellement adaptées à votre réalité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_US_PILLARS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[18px] p-5 border border-gray-100 shadow-sm">
                <h3 className="text-xs md:text-sm font-bold text-[#0D4FB8] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5FD3E2] shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
