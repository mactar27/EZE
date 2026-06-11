"use client";

import { motion } from "framer-motion";
import { Megaphone, Camera, BarChart3, MonitorSmartphone, Palette, CalendarHeart, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Communication Digitale",
    description: "Gestion et animation des réseaux sociaux.",
    icon: <Megaphone className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Création de Contenu",
    description: "Photos, vidéos, reels, interviews et contenus créatifs.",
    icon: <Camera className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Marketing Digital",
    description: "Stratégies de visibilité et campagnes publicitaires.",
    icon: <BarChart3 className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Web Design",
    description: "Conception de sites internet modernes et performants.",
    icon: <MonitorSmartphone className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.4,
  },
  {
    id: 5,
    title: "Branding",
    description: "Création d'identité visuelle et image de marque.",
    icon: <Palette className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.5,
  },
  {
    id: 6,
    title: "Couverture Événementielle",
    description: "Captation photo et vidéo professionnelle de vos événements.",
    icon: <CalendarHeart className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.6,
  },
  {
    id: 7,
    title: "Conseil et Accompagnement",
    description: "Suivi stratégique et accompagnement personnalisé.",
    icon: <Users className="text-primary w-8 h-8" strokeWidth={1.5} />,
    delay: 0.7,
  },
];

export default function Services() {
  // Split services for the 4-3 layout
  const topRow = SERVICES.slice(0, 4);
  const bottomRow = SERVICES.slice(4, 7);

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
            <h2 className="text-[1.75rem] font-bold font-poppins text-dark mb-4 tracking-tight">
              NOS SERVICES
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Top Row: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRow.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Row: 3 cards centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {bottomRow.map((service) => (
            <div key={service.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
              <ServiceCard service={service} />
            </div>
          ))}
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
      <div className="flex items-start gap-4 mb-4">
        <div className="shrink-0 mt-1">
          {service.icon}
        </div>
        <div>
          <h4 className="text-[1.05rem] font-bold text-[#2D2D2D] font-poppins mb-2 leading-snug group-hover:text-primary transition-colors">
            {service.title}
          </h4>
          <p className="text-gray-500 text-[0.85rem] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
      
      <div className="mt-auto self-end text-[#5FD3E2] opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
        <ArrowRight size={18} />
      </div>
    </motion.div>
  );
}
