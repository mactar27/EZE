"use client";

import { motion } from "framer-motion";
import { Search, Compass, PenTool, Rocket, LineChart } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Analyse",
    description: "Comprendre vos besoins et objectifs.",
    icon: <Search className="w-6 h-6 text-primary" />,
  },
  {
    id: "02",
    title: "Stratégie",
    description: "Construire une approche adaptée.",
    icon: <Compass className="w-6 h-6 text-white" />,
    isDark: true,
  },
  {
    id: "03",
    title: "Création",
    description: "Produire des contenus de qualité.",
    icon: <PenTool className="w-6 h-6 text-primary" />,
  },
  {
    id: "04",
    title: "Déploiement",
    description: "Lancer les actions prévues.",
    icon: <Rocket className="w-6 h-6 text-white" />,
    isDark: true,
  },
  {
    id: "05",
    title: "Optimisation",
    description: "Mesurer et améliorer les résultats.",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Processus
            </h2>
            <h3 className="text-4xl font-bold font-poppins text-dark mb-6">
              NOTRE MÉTHODE
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Chez EZK Agency, chaque projet commence par une compréhension approfondie de vos besoins et de vos objectifs. Nous élaborons ensuite une stratégie adaptée, produisons des contenus de qualité et assurons un suivi continu afin d’optimiser durablement vos résultats.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Desktop Connecting Line Fill Animation */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out -z-10"></div>
                )}
                
                {/* Circle Icon */}
                <div 
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 group-hover:scale-110 relative z-10 ${
                    step.isDark ? "bg-dark" : "bg-white border-4 border-gray-50"
                  }`}
                >
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <span className="text-secondary font-bold text-lg mb-2">
                  {step.id}
                </span>
                
                {/* Content */}
                <h4 className="text-xl font-bold font-poppins text-dark mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
