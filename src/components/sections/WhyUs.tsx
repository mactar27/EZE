"use client";

import { motion } from "framer-motion";
import { Lightbulb, Zap, UserCheck, PiggyBank, Target, TrendingUp } from "lucide-react";

const REASONS = [
  { title: "Créativité", icon: <Lightbulb className="w-6 h-6 text-primary" /> },
  { title: "Réactivité", icon: <Zap className="w-6 h-6 text-primary" /> },
  { title: "Accompagnement personnalisé", icon: <UserCheck className="w-6 h-6 text-primary" /> },
  { title: "Solutions adaptées à chaque budget", icon: <PiggyBank className="w-6 h-6 text-primary" /> },
  { title: "Vision stratégique", icon: <Target className="w-6 h-6 text-primary" /> },
  { title: "Résultats mesurables", icon: <TrendingUp className="w-6 h-6 text-primary" /> },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">
              Notre différence
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              POURQUOI NOUS CHOISIR ?
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Nous combinons créativité, expertise et vision stratégique pour donner à votre marque une présence digitale forte et cohérente. Plus qu’un simple prestataire, nous nous engageons comme un partenaire de confiance dans le développement de votre activité.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    {reason.icon}
                  </div>
                  <span className="text-white font-medium text-sm">
                    {reason.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-[40px] p-1 shadow-2xl"
          >
            <div className="bg-dark/80 backdrop-blur-xl w-full h-full rounded-[38px] p-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
              
              <div className="text-center sm:text-left">
                <div className="text-5xl font-bold text-white font-poppins mb-2 flex items-center justify-center sm:justify-start">
                  <span>50</span><span className="text-secondary">+</span>
                </div>
                <p className="text-gray-400 font-medium">Projets réalisés</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-5xl font-bold text-white font-poppins mb-2 flex items-center justify-center sm:justify-start">
                  <span>30</span><span className="text-secondary">+</span>
                </div>
                <p className="text-gray-400 font-medium">Clients accompagnés</p>
              </div>

              <div className="text-center sm:text-left sm:col-span-2 sm:border-t border-white/10 sm:pt-8">
                <div className="text-6xl font-bold text-white font-poppins mb-2 flex items-center justify-center sm:justify-start">
                  <span>95</span><span className="text-secondary">%</span>
                </div>
                <p className="text-gray-400 font-medium text-lg">Satisfaction client</p>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
