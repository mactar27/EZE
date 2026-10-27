"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Megaphone, 
  Camera, 
  BarChart3, 
  MonitorSmartphone, 
  Palette, 
  Target, 
  ArrowRight 
} from "lucide-react";

const DEFAULT_SERVICES = [
  {
    _id: "comm-digitale",
    title: "Communication Digitale",
    description: "Gestion et animation des réseaux sociaux.",
    icon: "Megaphone",
  },
  {
    _id: "creation-contenu",
    title: "Création de Contenu",
    description: "Photos, vidéos, reels, interviews et contenus créatifs.",
    icon: "Camera",
  },
  {
    _id: "marketing-digital",
    title: "Marketing Digital",
    description: "Stratégies de visibilité et campagnes publicitaires.",
    icon: "BarChart3",
  },
  {
    _id: "webdesign",
    title: "Web Design",
    description: "Conception de sites vitrines, plateformes et interfaces modernes.",
    icon: "MonitorSmartphone",
  },
  {
    _id: "infographie",
    title: "Infographie & Branding",
    description: "Création de logos, chartes graphiques et supports visuels percutants.",
    icon: "Palette",
  },
  {
    _id: "campagnes-ads",
    title: "Campagnes Publicitaires (Ads)",
    description: "Ciblage précis, acquisition et conversion sur Meta, Google et TikTok.",
    icon: "Target",
  },
];

const ICONS_MAP: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
  Camera: <Camera className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
  BarChart3: <BarChart3 className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
  MonitorSmartphone: <MonitorSmartphone className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
  Palette: <Palette className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
  Target: <Target className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />,
};

export default function Services({ services = [] }: { services?: any[] }) {
  const displayServices = services && services.length > 0 ? services : DEFAULT_SERVICES;

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-5xl">
        
        {/* Banner visuelle style Canva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[220px] md:h-[300px] w-full rounded-[28px] overflow-hidden shadow-lg mb-10 md:mb-14"
        >
          <Image
            src="/services-banner.png"
            alt="Nos Services EZK Agency"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay dégradé léger pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end md:items-center justify-center p-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              NOS SERVICES
            </h2>
          </div>
        </motion.div>

        {/* Grille de cartes épurées style Canva */}
        <div className="space-y-4 md:space-y-5">
          {displayServices.map((service, index) => {
            const iconComponent = ICONS_MAP[service.icon] || <Megaphone className="text-[#0D4FB8] w-7 h-7" strokeWidth={1.75} />;
            return (
              <motion.div
                key={service._id || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index * 0.08) % 0.3 }}
                className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(13,79,184,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-start md:items-center gap-5">
                  {/* Icône bleue */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/70 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {iconComponent}
                  </div>

                  {/* Textes */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 font-normal mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Petite flèche cyan style Canva */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#5FD3E2] group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bouton SEE MORE style Canva (cyan vif avec majuscules et coins arrondis) */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block bg-[#5FD3E2] hover:bg-[#4bc2d1] text-white font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-[10px] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            SEE MORE
          </Link>
        </div>

      </div>
    </section>
  );
}
