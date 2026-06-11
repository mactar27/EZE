"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Qui sommes-nous ?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-poppins text-dark mb-6">
              Votre partenaire de croissance digitale à Dakar.
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong className="text-dark">EZK Agency</strong> est une agence de communication et de marketing basée à Dakar. Nous accompagnons les entreprises, les marques et les entrepreneurs dans la construction de leur image, le développement de leur visibilité et la création de contenus impactants.
              </p>
              <p>
                Notre mission est de transformer vos idées en stratégies efficaces et en résultats concrets.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-dark text-xl mb-2">Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Devenir une référence en communication et marketing digital en Afrique, reconnue pour son innovation, sa créativité et son impact.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-dark text-xl mb-2">Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Accompagner les entreprises, marques et entrepreneurs dans leur développement digital grâce à des stratégies de communication efficaces et des contenus à forte valeur ajoutée.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                En savoir plus
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* If we had the actual image we'd use next/image here. Using a styled placeholder instead */}
            <div className="absolute inset-0 bg-dark flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/20">
                  <span className="text-4xl">💡</span>
                </div>
                <h3 className="text-white text-2xl font-bold font-poppins mb-2">Créativité & Stratégie</h3>
                <p className="text-gray-300">Une équipe passionnée à votre service.</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
