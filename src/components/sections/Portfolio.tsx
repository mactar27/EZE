"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Tout", "Photos", "Vidéos", "Campagnes Marketing", "Événements", "Sites Web", "Branding"];

const PROJECTS = [
  { id: 1, title: "Lancement Marque X", category: "Campagnes Marketing", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Refonte Site E-commerce", category: "Sites Web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Shooting Mode Été", category: "Photos", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Identité Visuelle Startup", category: "Branding", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Gala Annuel Entreprise", category: "Événements", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Spot Publicitaire TV", category: "Vidéos", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tout");

  const filteredProjects = activeCategory === "Tout" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Portfolio
            </h2>
            <h3 className="text-4xl font-bold font-poppins text-dark mb-6">
              NOS RÉALISATIONS
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-dark text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-dark border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-secondary text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h4 className="text-white text-2xl font-bold font-poppins mb-4">
                    {project.title}
                  </h4>
                  <button className="bg-white/20 hover:bg-primary backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium transition-colors w-fit opacity-0 group-hover:opacity-100 duration-300 delay-200 border border-white/30">
                    Voir le projet
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#contact" 
            className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Voir toutes nos réalisations
          </motion.a>
        </div>
      </div>
    </section>
  );
}
