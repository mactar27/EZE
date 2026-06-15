"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, PenTool, Rocket, BarChart2, Lightbulb, Zap, UserCheck, PiggyBank, Target, TrendingUp } from "lucide-react";

export default function MethodWhyUs() {
  const STEPS = [
    { id: "01", title: "Analyse", desc: "Comprendre vos besoins et objectifs.", icon: <Search size={20} className="text-white" /> },
    { id: "02", title: "Stratégie", desc: "Construire une approche adaptée.", icon: <ClipboardList size={20} className="text-white" /> },
    { id: "03", title: "Création", desc: "Produire des contenus de qualité.", icon: <PenTool size={20} className="text-white" /> },
    { id: "04", title: "Déploiement", desc: "Lancer les actions prévues.", icon: <Rocket size={20} className="text-white" /> },
    { id: "05", title: "Optimisation", desc: "Mesurer et améliorer les résultats.", icon: <BarChart2 size={20} className="text-white" /> },
  ];

  const REASONS = [
    { title: "Créativité", icon: <Lightbulb size={18} className="text-primary" /> },
    { title: "Réactivité", icon: <Zap size={18} className="text-primary" /> },
    { title: "Accompagnement personnalisé", icon: <UserCheck size={18} className="text-primary" /> },
    { title: "Solutions adaptées à chaque budget", icon: <PiggyBank size={18} className="text-primary" /> },
    { title: "Vision stratégique", icon: <Target size={18} className="text-primary" /> },
    { title: "Résultats mesurables", icon: <TrendingUp size={18} className="text-primary" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: NOTRE MÉTHODE */}
          <div className="xl:w-[55%]">
            <h2 className="text-[1.5rem] font-bold font-poppins text-dark mb-4 tracking-tight">
              NOTRE MÉTHODE
            </h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mb-16"></div>

            <div className="relative flex justify-between items-start mt-8">
              {/* Horizontal Line */}
              <div className="absolute top-7 left-8 right-8 h-[2px] bg-blue-100 -z-10"></div>
              
              {STEPS.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/5 relative group">
                  {/* Circle */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    index === 1 || index === 3 || index === 4 ? "bg-[#5FD3E2]" : "bg-primary"
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Number */}
                  <span className="text-primary font-bold text-sm mb-1">{step.id}</span>
                  
                  {/* Text */}
                  <h4 className="text-[0.95rem] font-bold text-dark font-poppins mb-1">{step.title}</h4>
                  <p className="text-[0.75rem] text-gray-500 leading-tight px-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: POURQUOI NOUS CHOISIR ? */}
          <div className="xl:w-[45%]">
            <h2 className="text-[1.5rem] font-bold font-poppins text-dark mb-4 tracking-tight">
              POURQUOI NOUS CHOISIR ?
            </h2>
            <div className="w-12 h-0.5 bg-primary rounded-full mb-10"></div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-10">
              {REASONS.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="shrink-0">{reason.icon}</div>
                  <span className="text-[0.8rem] font-medium text-gray-700 leading-tight">{reason.title}</span>
                </div>
              ))}
            </div>

            {/* Blue Stats Card */}
            <div className="bg-gradient-to-r from-primary to-[#2b71df] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold font-poppins mb-1">50<span className="text-white">+</span></div>
                  <p className="text-sm font-light text-blue-100">Projets réalisés</p>
                </div>
                <div>
                  <div className="text-3xl font-bold font-poppins mb-1">30<span className="text-white">+</span></div>
                  <p className="text-sm font-light text-blue-100">Clients accompagnés</p>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-4xl font-bold font-poppins mb-1">95<span className="text-white">%</span></div>
                  <p className="text-sm font-light text-blue-100">Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
