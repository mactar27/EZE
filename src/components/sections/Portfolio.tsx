"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface PortfolioSectionProps {
  projects?: any[];
  isHomeTeaser?: boolean;
}

const TEASER_CARDS = [
  {
    title: "CRÉATION DE CONTENU",
    image: "/services-banner.png",
    href: "/realisations#contenu",
  },
  {
    title: "WEB DESIGN",
    image: "/services-banner.png",
    href: "/realisations#webdesign",
  },
  {
    title: "INFOGRAPHIE",
    image: "/services-banner.png",
    href: "/realisations#infographie",
  },
];

export default function Portfolio({ projects = [], isHomeTeaser = false }: PortfolioSectionProps) {
  // Mode Teaser Accueil inspiré de la maquette Canva
  if (isHomeTeaser) {
    return (
      <section id="portfolio" className="py-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-5xl">
          
          {/* Ligne séparatrice supérieure */}
          <div className="w-full max-w-sm mx-auto h-[1px] bg-gray-300 mb-10" />

          {/* Titre Cyan Canva */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-8"
          >
            NOS REALISATIONS
          </motion.h2>

          {/* 3 Cartes illustrées avec titre corail/rouge */}
          <div className="space-y-6">
            {TEASER_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative h-[180px] md:h-[230px] rounded-[24px] overflow-hidden shadow-md group cursor-pointer"
              >
                <Link href={card.href} className="block w-full h-full relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Titre corail en haut à gauche comme sur la maquette */}
                  <div className="absolute top-5 left-6 z-10">
                    <span className="text-[#FF5A5F] font-extrabold text-sm md:text-lg tracking-wider uppercase drop-shadow-sm font-poppins">
                      {card.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bouton cyan avec texte corail style Canva */}
          <div className="mt-10 text-center">
            <Link
              href="/realisations"
              className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] font-bold text-xs md:text-sm tracking-wider uppercase px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              voir toutes nos realisions
            </Link>
          </div>

          {/* Ligne séparatrice inférieure */}
          <div className="w-full max-w-sm mx-auto h-[1px] bg-gray-300 mt-12" />

        </div>
      </section>
    );
  }

  // Page complète Réalisations (/realisations)
  return <FullPortfolioView projects={projects} />;
}

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

function FullPortfolioView({ projects = [] }: { projects: any[] }) {
  const sections = BASE_SECTIONS.map((section) => {
    const updatedSubsections = section.subsections.map((sub) => {
      const matchingProjects = projects.filter((p) => p.category === sub.categoryMatch);
      return {
        ...sub,
        items: matchingProjects.map((p) => ({
          title: p.title,
          image: p.image?.asset ? p.image : "/portfolio_event.png",
        })),
      };
    });
    return { ...section, subsections: updatedSubsections };
  });

  return (
    <section id="portfolio-full" className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[380px] overflow-hidden">
        <Image
          src="/portfolio_event.png"
          alt="Nos Réalisations EZK"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-3 uppercase tracking-tight">
              NOS RÉALISATIONS
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Chaque projet est unique. Découvrez comment nous donnons vie aux marques à travers nos réalisations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        {sections.map((section, sIdx) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 scroll-mt-28"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-dark mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                {section.description}
              </p>
            </div>

            {section.subsections.map((sub, subIdx) => (
              <div key={subIdx} className="mb-8">
                {sub.label && (
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                    {sub.label} :
                  </p>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                  {sub.items.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-gray-100"
                    >
                      <Image
                        src={typeof item.image === "string" ? item.image : "/portfolio_event.png"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-xs md:text-sm font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {sIdx < sections.length - 1 && (
              <div className="border-t border-gray-200 mt-12" />
            )}
          </motion.div>
        ))}

        {/* Social Icons & Bottom Banner */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex items-center gap-4 mb-8">
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
          <div className="relative h-[280px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/collaboration-creative.png"
              alt="Collaboration créative chez EZK Agency"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
