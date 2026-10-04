"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

const BASE_SECTIONS = [
  {
    id: "contenu",
    title: "Création de Contenu",
    description:
      "Des contenus pensés pour raconter, valoriser et faire vivre les marques. À travers la photographie et la vidéo, nous créons des contenus adaptés aux réseaux sociaux, à la communication corporate, aux campagnes promotionnelles et aux besoins spécifiques de chaque projet.",
    subsections: [
      {
        label: "PHOTOS",
        categoryMatch: "Photos",
        items: [],
      },
      {
        label: "VIDÉOS",
        categoryMatch: "Videos",
        items: [],
      },
    ],
  },
  {
    id: "infographie",
    title: "Infographie",
    description:
      "Chaque visuel est une occasion de renforcer l'image d'une marque. De l'identité visuelle aux supports de communication digitaux et imprimés, nous concevons des créations graphiques cohérentes, modernes et pensées pour transmettre efficacement chaque message.",
    subsections: [
      {
        label: "",
        categoryMatch: "Infographie",
        items: [],
      },
    ],
  },
  {
    id: "webdesign",
    title: "Web Design",
    description:
      "Nous concevons des expériences digitales qui associent esthétique, fonctionnalité et expérience utilisateur. Sites vitrines, plateformes, e-commerce ou interfaces digitales : chaque projet est pensé pour valoriser la marque et répondre à ses objectifs.",
    subsections: [
      {
        label: "",
        categoryMatch: "Webdesign",
        items: [],
      },
    ],
  },
];

const SOCIAL_ICONS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <defs>
          <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#ffd600" />
            <stop offset="20%" stopColor="#ff7a00" />
            <stop offset="40%" stopColor="#ff0069" />
            <stop offset="70%" stopColor="#d300c5" />
            <stop offset="100%" stopColor="#7638fa" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="url(#ig-grad)" />
        <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1877F2">
        <rect width="24" height="24" rx="6" fill="#1877F2" />
        <path d="M15.5 8H13.5V6.5C13.5 5.95 13.95 5.5 14.5 5.5H15.5V3H13.5C12.12 3 11 4.12 11 5.5V8H9V10.5H11V21H13.5V10.5H15L15.5 8Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="6" fill="#010101" />
        <path d="M16.5 4H14.3C14.5 5.5 15.4 6.8 17 7.1V9.3C15.9 9.2 14.9 8.8 14.1 8.1V13.7C14.1 16.1 12.2 18 9.8 18C7.4 18 5.5 16.1 5.5 13.7C5.5 11.3 7.4 9.4 9.8 9.4C10 9.4 10.2 9.4 10.4 9.5V11.7C10.2 11.6 10 11.6 9.8 11.6C8.6 11.6 7.7 12.5 7.7 13.7C7.7 14.9 8.6 15.8 9.8 15.8C11 15.8 11.9 14.9 11.9 13.7V4H14.1C14.1 4 14.3 5.6 16.5 6.2V4Z" fill="white" />
        <path d="M16.5 4H14.3C14.5 5.5 15.4 6.8 17 7.1V9.3" stroke="#69C9D0" strokeWidth="0.3" fill="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0A66C2">
        <rect width="24" height="24" rx="6" fill="#0A66C2" />
        <path d="M7 9H9.5V17H7V9ZM8.25 8C7.56 8 7 7.44 7 6.75C7 6.06 7.56 5.5 8.25 5.5C8.94 5.5 9.5 6.06 9.5 6.75C9.5 7.44 8.94 8 8.25 8Z" fill="white" />
        <path d="M11 9H13.4V10.2C13.8 9.5 14.7 9 15.8 9C17.9 9 18.9 10.3 18.9 12.5V17H16.4V13C16.4 12 16.1 11.2 15.1 11.2C14.1 11.2 13.5 11.9 13.5 13V17H11V9Z" fill="white" />
      </svg>
    ),
  },
];

export default function Portfolio({ projects = [] }: { projects?: any[] }) {
  // Injecter les projets dynamiques dans notre structure de base
  const sections = BASE_SECTIONS.map((section) => {
    const updatedSubsections = section.subsections.map((sub) => {
      // Trouver tous les projets qui correspondent à la catégorie
      const matchingProjects = projects.filter((p) => p.category === sub.categoryMatch);
      
      return {
        ...sub,
        items: matchingProjects.map((p) => ({
          title: p.title,
          image: p.image ? urlFor(p.image).url() : "https://via.placeholder.com/400",
        })),
      };
    });
    
    return { ...section, subsections: updatedSubsections };
  });

  return (
    <section id="portfolio" className="bg-white">

      {/* Hero Banner */}
      <div className="relative h-[320px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80')" }}
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-3 uppercase tracking-tight">
              NOS RÉALISATIONS
            </h2>
            <p className="text-white/80 max-w-lg text-sm leading-relaxed">
              Au cours de nos plus de quatre années d'activité, nous avons travaillé sur des projets variés pour des entreprises, des marques et des entrepreneurs issus de secteurs différents.
            </p>
            <p className="text-secondary text-xs font-medium mt-3 italic">
              Votre partenaire de croissance digitale à Dakar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Sections */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        {sections.map((section, sIdx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sIdx * 0.1 }}
            className="mb-20"
          >
            {/* Section Title */}
            <h3 className="text-2xl font-bold font-poppins text-secondary mb-3 uppercase tracking-wide">
              {section.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-2xl font-medium">
              {section.description}
            </p>

            {/* Subsections */}
            {section.subsections.map((sub, subIdx) => {
              if (sub.items.length === 0) return null; // Ne pas afficher les sections vides
              return (
              <div key={subIdx} className="mb-8">
                {sub.label && (
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                    {sub.label} :
                  </p>
                )}

                {/* 3×2 Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {sub.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-[0.65rem] font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Voir plus button */}
                <div className="flex justify-center mb-4">
                  <button className="bg-red-400 hover:bg-red-500 text-white text-xs font-bold px-5 py-1.5 rounded-full transition-colors shadow-sm">
                    voir plus
                  </button>
                </div>
              </div>
            )})}

            {/* Separator */}
            {sIdx < sections.length - 1 && (
              <div className="border-t border-gray-200 mt-8" />
            )}
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-200 pt-12 mb-12"
        >
          <p className="text-gray-800 text-[0.95rem] font-semibold leading-relaxed mb-6 max-w-xl">
            Chaque projet est différent, mais notre objectif reste le même : transformer les idées en solutions digitales qui ont du sens. Découvrez nos réalisations et imaginez ce que nous pouvons construire ensemble pour votre marque.
          </p>
          <p className="text-red-400 text-sm italic font-medium mb-6">
            Envie d'en voir plus ? Retrouvez davantage de nos réalisations et de nos projets sur nos réseaux sociaux.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-10">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="hover:scale-110 transition-transform duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Final image */}
          <div className="relative h-[280px] md:h-[360px] rounded-3xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609402497778-5b3c0e76f24f?auto=format&fit=crop&w=1000&q=80')" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

