"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PortfolioSectionProps {
  projects?: any[];
  isHomeTeaser?: boolean;
  bannerImage?: any;
  endImage?: any;
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

export default function Portfolio({ 
  projects = [], 
  isHomeTeaser = false,
  bannerImage,
  endImage
}: PortfolioSectionProps) {
  // Mode Teaser Accueil inspiré de la maquette Canva (adaptatif Mobile & Grand Écran)
  if (isHomeTeaser) {
    return (
      <section id="portfolio" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
          
          {/* Ligne séparatrice supérieure */}
          <div className="w-full max-w-xs md:max-w-md mx-auto h-[1.5px] bg-gray-300 mb-12" />

          {/* Titre Cyan Canva */}
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase"
            >
              NOS REALISATIONS
            </motion.h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-md mx-auto">
              Découvrez un aperçu de nos projets et créations digitales
            </p>
          </div>

          {/* 3 Cartes illustrées (3 colonnes sur desktop, 1 colonne sur mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TEASER_CARDS.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative h-[220px] md:h-[280px] rounded-[24px] overflow-hidden shadow-md group cursor-pointer border border-gray-100 hover:shadow-xl transition-all"
              >
                <Link href={card.href} className="block w-full h-full relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dégradé doux pour lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  
                  {/* Titre corail/rouge en haut à gauche comme sur la maquette */}
                  <div className="absolute top-5 left-6 z-10">
                    <span className="text-[#FF5A5F] font-extrabold text-sm md:text-base tracking-wider uppercase drop-shadow-sm font-poppins">
                      {card.title}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between text-white text-xs font-bold uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Explorer</span>
                    <span className="text-[#5FD3E2] text-base group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bouton cyan avec texte corail style Canva */}
          <div className="mt-12 text-center">
            <Link
              href="/realisations"
              className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] font-bold text-xs md:text-sm tracking-wider uppercase px-8 py-3.5 rounded-[14px] shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              voir toutes nos realisions
            </Link>
          </div>

          {/* Ligne séparatrice inférieure */}
          <div className="w-full max-w-xs md:max-w-md mx-auto h-[1.5px] bg-gray-300 mt-14" />

        </div>
      </section>
    );
  }

  // Page complète Réalisations (/realisations)
  return <FullPortfolioView projects={projects} bannerImage={bannerImage} endImage={endImage} />;
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

function FullPortfolioView({ 
  projects = [],
  bannerImage,
  endImage
}: { 
  projects: any[];
  bannerImage?: any;
  endImage?: any;
}) {
  const bannerUrl = bannerImage ? urlFor(bannerImage).url() : "/realisations-camera-banner.png";
  const endUrl = endImage ? urlFor(endImage).url() : "/realisations-woman-ringlight.png";

  const SAMPLE_ITEMS = [
    { title: "Logos", image: "/sample-logos.png" },
    { title: "Fleyers", image: "/sample-fleyers.png" },
    { title: "Carte de visite", image: "/sample-carte-de-visite.png" },
    { title: "Posts graphique", image: "/sample-posts-graphique.png" },
    { title: "Presentations graphique", image: "/sample-presentations.png" },
    { title: "Animation", image: "/sample-animation.png" },
  ];

  // Helper pour filtrer les projets ajoutés par l'admin via Sanity, avec fallback sur les échantillons
  const getCategoryItems = (categoryValue: string) => {
    const fromSanity = projects.filter((p: any) => p.category === categoryValue);
    if (fromSanity.length > 0) {
      return fromSanity.map((p: any) => ({
        title: p.title,
        image: p.image ? urlFor(p.image).url() : "/sample-logos.png",
      }));
    }
    return SAMPLE_ITEMS;
  };

  const photoItems = getCategoryItems("Photos");
  const videoItems = getCategoryItems("Videos");
  const infographieItems = getCategoryItems("Infographie");
  const webdesignItems = getCategoryItems("Webdesign");

  return (
    <section id="portfolio-full" className="bg-white pb-20">
      {/* Hero Banner style Canva avec caméra sur trépied */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[280px] md:h-[400px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100"
        >
          <Image
            src={bannerUrl}
            alt="Nos Réalisations EZK Agency"
            fill
            className="object-cover"
            priority
          />
          {/* Dégradé sombre et net pour lisibilité parfaite */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent flex flex-col justify-center p-8 md:p-14 max-w-2xl">
            <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase mb-3 self-start shadow-sm">
              PORTFOLIO & PROJETS
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-3 drop-shadow-sm font-poppins">
              NOS REALISATIONS
            </h1>
            <p className="text-white text-sm md:text-base leading-relaxed font-normal">
              Devenir une référence en communication et en marketing digital au niveau local et international.
            </p>
            <p className="text-[#FF5A5F] font-bold text-xs md:text-sm mt-3 uppercase tracking-wider">
              Votre partenaire de croissance digitale à Dakar
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl py-14">
        {/* Section CRÉATION DE CONTENU */}
        <div id="contenu" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider uppercase mb-3 font-poppins">
            CREATION DE CONTENU
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 font-normal max-w-3xl">
            Des contenus pensés pour raconter, valoriser et faire vivre les marques. À travers la photographie et la vidéo, nous créons des contenus adaptés aux réseaux sociaux, à la communication corporate, aux campagnes promotionnelles et aux besoins spécifiques de chaque projet.
          </p>

          {/* Sous-section PHOTOS : */}
          <div className="mb-12">
            <p className="text-[#5FD3E2] font-extrabold text-sm uppercase tracking-widest mb-4">
              PHOTOS :
            </p>
            {/* Grille 6 colonnes sur grand écran / 3 sur mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mb-5">
              {photoItems.map((item, i) => (
                <div
                  key={`photo-${i}`}
                  className="relative aspect-square rounded-[18px] md:rounded-[22px] overflow-hidden cursor-pointer group shadow-sm bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 flex items-center justify-center p-2 text-center transition-colors">
                    <span className="text-white font-bold text-[10px] md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton voir plus cyan style Canva */}
            <div className="flex justify-center mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] text-xs font-bold px-6 py-2 rounded-full transition-colors shadow-sm uppercase tracking-wider"
              >
                voir plus
              </Link>
            </div>
          </div>

          {/* Sous-section VIDEOS : */}
          <div className="mt-12">
            <p className="text-[#5FD3E2] font-extrabold text-sm uppercase tracking-widest mb-4">
              VIDEOS :
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mb-5">
              {videoItems.map((item, i) => (
                <div
                  key={`vid-${i}`}
                  className="relative aspect-square rounded-[18px] md:rounded-[22px] overflow-hidden cursor-pointer group shadow-sm bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 flex items-center justify-center p-2 text-center transition-colors">
                    <span className="text-white font-bold text-[10px] md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] text-xs font-bold px-6 py-2 rounded-full transition-colors shadow-sm uppercase tracking-wider"
              >
                voir plus
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-200 my-16" />

        {/* Section INFOGRAPHIE */}
        <div id="infographie" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider mb-3 capitalize font-poppins">
            Infographie
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 font-normal max-w-3xl">
            Chaque visuel est une occasion de renforcer l'image d'une marque. De l'identité visuelle aux supports de communication digitaux et imprimés, nous concevons des créations graphiques cohérentes, modernes et pensées pour transmettre efficacement chaque message.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mb-5">
            {infographieItems.map((item, i) => (
              <div
                key={`info-${i}`}
                className="relative aspect-square rounded-[18px] md:rounded-[22px] overflow-hidden cursor-pointer group shadow-sm bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 flex items-center justify-center p-2 text-center transition-colors">
                  <span className="text-white font-bold text-[10px] md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] text-xs font-bold px-6 py-2 rounded-full transition-colors shadow-sm uppercase tracking-wider"
            >
              voir plus
            </Link>
          </div>
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-200 my-16" />

        {/* Section WEB DESIGN */}
        <div id="webdesign" className="mb-16 scroll-mt-28">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#5FD3E2] tracking-wider mb-3 capitalize font-poppins">
            Web design
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 font-normal max-w-3xl">
            Nous concevons des expériences digitales qui associent esthétique, fonctionnalité et expérience utilisateur. Sites vitrines, plateformes, e-commerce ou interfaces digitales : chaque projet est pensé pour valoriser la marque et répondre à ses objectifs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 mb-5">
            {webdesignItems.map((item, i) => (
              <div
                key={`web-${i}`}
                className="relative aspect-square rounded-[18px] md:rounded-[22px] overflow-hidden cursor-pointer group shadow-sm bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 flex items-center justify-center p-2 text-center transition-colors">
                  <span className="text-white font-bold text-[10px] md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link
              href="/contact"
              className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-[#FF5A5F] text-xs font-bold px-6 py-2 rounded-full transition-colors shadow-sm uppercase tracking-wider"
            >
              voir plus
            </Link>
          </div>
        </div>

        {/* Ligne séparatrice Canva */}
        <div className="w-full max-w-md mx-auto h-[1.5px] bg-gray-200 my-16" />

        {/* Section Social & Photo de fin style Canva */}
        <div className="pt-4 max-w-4xl mx-auto text-center">
          <p className="text-gray-900 text-sm md:text-base leading-relaxed font-semibold mb-4">
            Chaque projet est différent, mais notre objectif reste le même : transformer les idées en solutions digitales qui ont du sens. Découvrez nos réalisations et imaginez ce que nous pouvons construire ensemble pour votre marque.
          </p>
          <p className="text-[#FF5A5F] text-xs md:text-sm font-semibold mb-6">
            Envie d'en voir plus ? Retrouvez davantage de nos réalisations et de nos projets sur nos réseaux sociaux.
          </p>

          <div className="flex items-center justify-center gap-5 mb-10">
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

          <div className="relative h-[300px] md:h-[460px] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={endUrl}
              alt="Création de contenu et réseaux sociaux EZK Agency"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
