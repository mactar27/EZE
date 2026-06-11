"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-52 pb-12 overflow-hidden bg-white">
      {/* Background dotted grid */}
      <div className="absolute top-40 right-1/3 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0D4FB8 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute bottom-40 left-1/4 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0D4FB8 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5FD3E2]/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl z-10"
          >

            <h1 className="text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold font-poppins leading-[1.05] text-[#2D2D2D] mb-6 tracking-tight">
              ILLUMINEZ<br />
              VOTRE PRÉSENCE<br />
              <span className="text-primary">EN LIGNE</span>
            </h1>
            
            <p className="text-[1.05rem] text-gray-600 mb-10 leading-relaxed font-light">
              Nous accompagnons les entreprises, entrepreneurs et marques dans leur développement digital grâce à la communication, au marketing et à la création de contenu.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#services"
                className="bg-primary text-white px-8 py-3.5 rounded-[8px] font-medium hover:bg-primary/90 transition-all shadow-[0_8px_20px_rgba(13,79,184,0.3)] flex items-center gap-2 group text-sm"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="bg-white text-primary border-2 border-blue-100 px-8 py-3.5 rounded-[8px] font-medium hover:bg-blue-50 transition-all text-sm shadow-sm"
              >
                Demander un devis
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-xs font-medium text-gray-500 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <span>Stratégies sur mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <span>Résultats mesurables</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span>Accompagnement dédié</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* The main laptop mockup from the image */}
            <div className="relative w-[120%] max-w-[2000px] z-10 translate-x-12">
              <Image 
                src="/hero.png" 
                alt="EZK Agency Dashboard Mockup" 
                width={2000} 
                height={1500} 
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
