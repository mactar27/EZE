"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Affiche le splash screen à chaque nouvelle session de navigation
    const hasSeenSplash = sessionStorage.getItem("ezk_has_seen_splash");
    
    if (!hasSeenSplash) {
      setIsVisible(true);
      
      // Ferme automatiquement le splash après 2.2 secondes
      const timer = setTimeout(() => {
        sessionStorage.setItem("ezk_has_seen_splash", "true");
        setIsVisible(false);
      }, 2200);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center w-full h-full px-6"
          >
            {/* Lueur d'ambiance très subtile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.95, 1.08, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
            />

            {/* Logo pur et net */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center"
            >
              <Image 
                src="/logo-clean.png" 
                alt="EZK Agency Logo" 
                width={480} 
                height={250} 
                className="h-24 md:h-32 w-auto object-contain drop-shadow-sm"
                priority
              />

              {/* Ligne élégante de progression */}
              <div className="relative mt-10 w-44 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                />
              </div>

              {/* Tagline typographique premium */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-4 text-xs md:text-sm font-medium tracking-[0.25em] text-gray-400 uppercase text-center"
              >
                Communication & Marketing Digital
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
