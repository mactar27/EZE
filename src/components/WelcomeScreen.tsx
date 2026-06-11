"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, TrendingUp, ArrowRight, X } from "lucide-react";
import Image from "next/image";

const onboardingSlides = [
  {
    id: 1,
    title: "Bienvenue chez EZK",
    subtitle: "Illuminez votre présence en ligne",
    description: "Nous sommes l'agence de communication et marketing digital qui transforme vos idées en stratégies percutantes.",
    icon: <Sparkles className="w-12 h-12 text-blue-500 mb-6" />,
  },
  {
    id: 2,
    title: "Notre Expertise",
    subtitle: "Des stratégies sur-mesure",
    description: "Web design, gestion de réseaux sociaux, création de contenu et branding. Nous couvrons tous vos besoins digitaux.",
    icon: <Target className="w-12 h-12 text-blue-500 mb-6" />,
  },
  {
    id: 3,
    title: "Atteignez vos objectifs",
    subtitle: "Des résultats concrets",
    description: "Augmentez votre visibilité, engagez votre audience et propulsez vos ventes grâce à nos campagnes ciblées.",
    icon: <TrendingUp className="w-12 h-12 text-blue-500 mb-6" />,
  },
];

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"splash" | "onboarding" | "done">("done");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà vu l'onboarding
    const hasSeenWelcome = localStorage.getItem("ezk_has_seen_welcome");
    
    if (!hasSeenWelcome) {
      setIsVisible(true);
      setPhase("splash");
      
      // Passe au onboarding après 3 secondes
      const timer = setTimeout(() => {
        setPhase("onboarding");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const finishOnboarding = () => {
    localStorage.setItem("ezk_has_seen_welcome", "true");
    setPhase("done");
    setTimeout(() => setIsVisible(false), 500); // Laisse le temps à l'animation de fin
  };

  const nextSlide = () => {
    if (currentSlide === onboardingSlides.length - 1) {
      finishOnboarding();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  // Si on n'a rien à afficher, on ne rend rien dans le DOM principal
  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {phase !== "done" && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <AnimatePresence mode="wait">
            {phase === "splash" && (
              <motion.div
                key="splash"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    boxShadow: ["0px 0px 0px rgba(13, 79, 184, 0)", "0px 0px 40px rgba(13, 79, 184, 0.4)", "0px 0px 0px rgba(13, 79, 184, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-full bg-white p-4"
                >
                  <Image 
                    src="/icon.png" 
                    alt="EZK Agency Logo" 
                    width={120} 
                    height={120} 
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-8 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
                >
                  EZK <span className="text-blue-600">Agency</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="mt-2 text-sm text-gray-500 uppercase tracking-widest font-medium"
                >
                  Communication & Digital
                </motion.p>
              </motion.div>
            )}

            {phase === "onboarding" && (
              <motion.div
                key="onboarding"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 md:p-12"
              >
                <div className="absolute top-6 right-6">
                  <button 
                    onClick={finishOnboarding}
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                    aria-label="Passer l'introduction"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col h-full min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 flex flex-col items-center text-center justify-center"
                    >
                      {onboardingSlides[currentSlide].icon}
                      <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-2">
                        {onboardingSlides[currentSlide].subtitle}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {onboardingSlides[currentSlide].title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {onboardingSlides[currentSlide].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-12 flex flex-col items-center">
                    <div className="flex space-x-2 mb-8">
                      {onboardingSlides.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="w-full group flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                    >
                      <span>
                        {currentSlide === onboardingSlides.length - 1 ? "Découvrir le site" : "Continuer"}
                      </span>
                      {currentSlide < onboardingSlides.length - 1 && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                    
                    {currentSlide < onboardingSlides.length - 1 && (
                      <button
                        onClick={finishOnboarding}
                        className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        Passer l'introduction
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
