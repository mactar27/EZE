"use client";

import { motion } from "framer-motion";
import { Camera, Megaphone, Palette, MonitorSmartphone, BarChart3, Target, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    num: "01",
    title: "Création de Contenu Mobile Professionnel",
    description: "Photos, vidéos, reels, interviews et contenus créatifs pensés pour les usages digitaux : réseaux sociaux, publicité, événements.",
    icon: <Camera className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.1,
  },
  {
    id: 2,
    num: "02",
    title: "Gestion de Plateformes & Réseaux Sociaux",
    description: "Gestion et animation de vos comptes Instagram, Facebook, TikTok, LinkedIn, Snapchat. Calendrier éditorial, publication, modération et reporting.",
    icon: <Megaphone className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.2,
  },
  {
    id: 3,
    num: "03",
    title: "Infographie",
    description: "Création de logos, chartes graphiques, supports print & digitaux, motion design et animations graphiques pour vos réseaux sociaux.",
    icon: <Palette className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.3,
  },
  {
    id: 4,
    num: "04",
    title: "Web Design",
    description: "Conception de sites vitrines, e-commerce, landing pages et applications web. UX/UI, responsive design, intégrations et optimisation SEO.",
    icon: <MonitorSmartphone className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.4,
  },
  {
    id: 5,
    num: "05",
    title: "Consulting Digital",
    description: "Audit de l'écosystème digital, stratégie média, définition des KPIs, optimisation des performances et accompagnement à la transformation digitale.",
    icon: <BarChart3 className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.5,
  },
  {
    id: 6,
    num: "06",
    title: "Campagnes & Publicité Ads",
    description: "Conception, déploiement et optimisation de campagnes Meta Ads, Google Ads, TikTok Ads et LinkedIn Ads. Ciblage, création publicitaire et suivi des performances.",
    icon: <Target className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.6,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Ce que nous faisons</p>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark mb-4 tracking-tight">
              NOS SERVICES
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-base leading-relaxed">
              Chez EZK Agency, nous proposons un accompagnement qui couvre les principaux besoins liés à la communication et au développement digital d'une entreprise ou d'une marque.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Nous contacter
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: service.delay }}
      className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(13,79,184,0.08)] hover:-translate-y-1 transition-all duration-300 group relative flex flex-col h-full"
    >
      {/* Number badge */}
      <span className="absolute top-6 right-6 text-xs font-bold text-gray-200 font-poppins select-none">
        {service.num}
      </span>

      <div className="w-14 h-14 bg-primary/8 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
        {service.icon}
      </div>

      <h4 className="text-[1rem] font-bold text-[#2D2D2D] font-poppins mb-3 leading-snug group-hover:text-primary transition-colors">
        {service.title}
      </h4>
      <p className="text-gray-500 text-[0.85rem] leading-relaxed flex-1">
        {service.description}
      </p>
      
      <div className="mt-6 flex items-center gap-2 text-secondary group-hover:text-primary transition-colors duration-300">
        <span className="text-xs font-semibold">En savoir plus</span>
        <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}
