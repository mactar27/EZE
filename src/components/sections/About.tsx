"use client";

import { motion } from "framer-motion";

const STATS = [
  { number: "100+", label: "Projets réalisés" },
  { number: "25+", label: "Clients accompagnés" },
  { number: "10+", label: "Marques représentées" },
  { number: "4+", label: "Années d'expérience" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">À PROPOS</p>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-dark">
            QUI SOMMES-NOUS ?
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
              <p>
                <strong className="text-dark">EZK Agency</strong> est une agence de communication et de marketing digital basée à Dakar, qui accompagne les entreprises, les marques et les entrepreneurs dans la construction d'une présence digitale forte, cohérente et durable.
              </p>
              <p>
                Depuis plus de quatre ans, nous mettons notre créativité, notre expertise et notre compréhension des enjeux numériques au service de projets de différentes natures et de différents secteurs.
              </p>
              <p>
                De la création de contenus à la gestion des plateformes digitales, en passant par l'infographie, le web design, le consulting digital et les campagnes publicitaires, nous concevons des solutions adaptées à chaque identité, chaque objectif et chaque réalité.
              </p>
              <p>
                Notre approche repose sur une conviction simple : une présence digitale efficace ne se résume pas à être visible. Elle doit avoir du sens, transmettre une image forte et contribuer concrètement au développement de l'activité.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-secondary text-xs font-bold tracking-widest uppercase mb-1">Basée à Dakar, Sénégal</p>
              <p className="text-white text-xl font-bold font-poppins leading-snug">Créativité & Stratégie Digitale</p>
            </div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-secondary/60 rounded-tr-xl" />
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-secondary/60 rounded-bl-xl" />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold font-poppins text-dark mb-4 uppercase tracking-widest">Notre Vision</h3>
            <div className="w-8 h-0.5 bg-primary rounded-full mb-6" />
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Nous ambitionnons de faire d'EZK Agency une référence en communication et marketing digital, d'abord au niveau local, puis progressivement à l'échelle internationale.
              </p>
              <p>
                Notre vision est de construire une agence capable de répondre aux exigences d'un marché en constante évolution, tout en valorisant les entreprises, les marques et les talents d'ici sur la scène digitale mondiale.
              </p>
              <p>
                Nous souhaitons contribuer à une nouvelle manière de penser la communication en associant créativité, stratégie, innovation et compréhension des réalités propres à chaque marché.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-dark rounded-3xl p-10 border border-white/5 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4 uppercase tracking-widest">Notre Mission</h3>
              <div className="w-8 h-0.5 bg-secondary rounded-full mb-6" />
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                  Notre mission est d'accompagner les entreprises, les marques et les entrepreneurs dans leur développement digital, en leur apportant les outils, les stratégies et les solutions nécessaires pour mieux se positionner, communiquer et atteindre leurs objectifs.
                </p>
                <p>
                  Nous cherchons à transformer chaque besoin en une démarche concrète et structurée, depuis la réflexion stratégique jusqu'à la mise en œuvre et l'évaluation des actions engagées.
                </p>
                <p>
                  Notre rôle est de permettre à nos clients de mieux exprimer leur valeur, de renforcer leur visibilité et de construire une présence digitale capable de soutenir durablement leur activité.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="text-5xl lg:text-6xl font-bold text-white font-poppins mb-2 group-hover:text-secondary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
