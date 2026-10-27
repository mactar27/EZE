"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Camera, 
  Megaphone, 
  Palette, 
  MonitorSmartphone, 
  BarChart3, 
  Target, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const SERVICES_DETAILED = [
  {
    num: "01",
    title: "CRÉATION DE CONTENU MOBILE PROFESSIONNEL",
    intro: "Nous produisons des contenus photo et vidéo professionnels directement pensés pour les usages digitaux, la communication des entreprises, des marques, des événements et des projets.",
    icon: <Camera className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "PHOTOGRAPHIE",
        items: [
          "Photographie corporate et professionnelle",
          "Portraits professionnels",
          "Photographie de produits",
          "Photographie de services",
          "Photographie lifestyle",
          "Photographie événementielle",
          "Photographie de lieux et espaces",
          "Photographie pour réseaux sociaux",
          "Photographie destinée aux supports publicitaires",
          "Création de banques d’images personnalisées",
        ],
      },
      {
        title: "VIDÉO",
        items: [
          "Vidéos pour réseaux sociaux",
          "Reels et vidéos courtes",
          "Vidéos promotionnelles",
          "Vidéos publicitaires",
          "Vidéos institutionnelles",
          "Présentation d’entreprise",
          "Présentation de produits et services",
          "Interviews et témoignages",
          "Vidéos événementielles",
          "Teasers et vidéos de lancement",
          "Vidéos immersives et visites de lieux",
          "Contenus vidéo adaptés aux campagnes Ads",
        ],
      },
      {
        title: "FORMATS & ADAPTATION",
        items: [
          "Formats Instagram, Facebook, TikTok, LinkedIn, YouTube, etc.",
          "Contenus verticaux, horizontaux et carrés",
          "Déclinaison d’un même contenu pour plusieurs plateformes",
          "Montage et habillage graphique",
          "Sous-titrage et intégration d’éléments visuels",
          "Création de séries de contenus pour alimenter une communication sur plusieurs semaines",
        ],
      },
    ],
  },
  {
    num: "02",
    title: "GESTION DE PLATEFORMES & RÉSEAUX SOCIAUX",
    intro: "Nous accompagnons les entreprises et les marques dans la gestion, l’animation et l’amélioration de leur présence digitale, aussi bien sur leurs réseaux sociaux que sur leurs plateformes web.",
    icon: <Megaphone className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "RÉSEAUX SOCIAUX",
        items: [
          "Création et optimisation de pages professionnelles",
          "Gestion de comptes Instagram, Facebook, TikTok, LinkedIn, Snapchat, etc.",
          "Planification éditoriale et calendrier de contenu",
          "Publication et programmation",
          "Création et adaptation des contenus",
          "Gestion des stories et formats courts",
          "Animation des communautés et modération",
          "Réponse et suivi des interactions",
          "Veille et suivi de l’actualité du secteur",
          "Analyse des performances des plateformes",
        ],
      },
      {
        title: "SITE WEB & PRÉSENCE DIGITALE",
        items: [
          "Mise à jour des contenus d’un site",
          "Gestion des pages et informations",
          "Actualisation des offres, produits ou services",
          "Optimisation de la présentation des contenus",
          "Suivi de la présence et de la visibilité en ligne",
          "Coordination entre site web et réseaux sociaux",
          "Maintenance éditoriale et accompagnement digital",
        ],
      },
      {
        title: "ANIMATION & DÉVELOPPEMENT",
        items: [
          "Stratégie de contenu et développement de visibilité",
          "Harmonisation de la communication sur les plateformes",
          "Création de campagnes d’animation",
          "Jeux, concours et activations digitales",
          "Collaborations avec créateurs et influenceurs",
          "Reporting et recommandations d’amélioration",
        ],
      },
    ],
  },
  {
    num: "03",
    title: "INFOGRAPHIE",
    intro: "Nous concevons des supports graphiques professionnels, cohérents avec l’identité visuelle et les objectifs de communication de chaque entreprise, marque ou projet.",
    icon: <Palette className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "IDENTITÉ & IMAGE DE MARQUE",
        items: [
          "Création, retouche et déclinaisons de logo",
          "Charte graphique et palette de couleurs",
          "Choix typographiques et éléments graphiques de marque",
          "Supports de communication cohérents avec l’identité visuelle",
        ],
      },
      {
        title: "SUPPORTS PRINT & COMMERCIAUX",
        items: [
          "Flyers, affiches, cartes de visite",
          "Brochures, dépliants, catalogues, menus",
          "Invitations, kakémonos et supports événementiels",
          "Présentations commerciales et documents professionnels",
        ],
      },
      {
        title: "CONTENUS POUR LE DIGITAL",
        items: [
          "Posts graphiques, carrousels, stories, bannières",
          "Visuels promotionnels et publicitaires",
          "Couvertures et visuels de profil",
          "Supports pour campagnes digitales et templates",
        ],
      },
      {
        title: "MOTION & ANIMATION GRAPHIQUE",
        items: [
          "Animation de logo",
          "Posts et stories animés",
          "Motion design et animation d'éléments",
          "Courtes vidéos graphiques pour les réseaux sociaux",
          "Habillage graphique de contenus vidéo",
        ],
      },
    ],
  },
  {
    num: "04",
    title: "WEB DESIGN",
    intro: "Nous concevons des interfaces web modernes, professionnelles et fonctionnelles, pensées autour de l’image de marque, de l’expérience utilisateur et des objectifs du projet.",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "TYPES DE PROJETS",
        items: [
          "Sites vitrines, institutionnels et corporate",
          "Sites e-commerce et boutiques en ligne",
          "Landing pages et sites événementiels",
          "Blogs et plateformes de contenu",
          "Interfaces d’applications web et mobiles",
        ],
      },
      {
        title: "CONCEPTION & EXPÉRIENCE UTILISATEUR",
        items: [
          "Architecture du site et organisation des contenus",
          "Wireframes et structuration des interfaces",
          "UX/UI Design moderne et épuré",
          "Conception responsive (mobile, tablette, ordinateur)",
          "Optimisation du parcours utilisateur et de l'accessibilité",
        ],
      },
      {
        title: "FONCTIONNALITÉS & OPTIMISATION",
        items: [
          "Catalogues produits et solutions e-commerce",
          "Systèmes de réservation, formulaires, paiements en ligne",
          "Intégration de CRM et outils d'automatisation",
          "Connexion avec réseaux sociaux et outils d'analyse",
          "Préparation SEO de base et optimisation des conversions",
        ],
      },
    ],
  },
  {
    num: "05",
    title: "CONSULTING DIGITAL",
    intro: "Nous accompagnons les entreprises dans l’analyse, la structuration et l’amélioration de leur écosystème digital, avec des recommandations concrètes adaptées à leurs objectifs, leurs ressources et leur marché.",
    icon: <BarChart3 className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "ANALYSE & DIAGNOSTIC",
        items: [
          "Audit de l’écosystème digital et de la visibilité en ligne",
          "Analyse du site web et de l’expérience utilisateur",
          "Audit des réseaux sociaux et des campagnes Ads existantes",
          "Analyse concurrentielle et du parcours client",
          "Identification des forces, faiblesses et opportunités",
        ],
      },
      {
        title: "STRATÉGIE & PERFORMANCE",
        items: [
          "Élaboration d’une feuille de route digitale",
          "Définition des priorités, objectifs et canaux adaptés",
          "Stratégie de contenu, Inbound Marketing et Social Selling",
          "Recommandations UX/UI, CRO et parcours de conversion",
          "Définition des KPIs et tableaux de bord de suivi",
        ],
      },
      {
        title: "OUTILS & ACCOMPAGNEMENT",
        items: [
          "Conseil dans le choix des outils (CRM, emailing, automation)",
          "Formation et accompagnement des équipes aux outils et à l'IA",
          "Accompagnement de projet et suivi stratégique mensuel",
          "Pilotage digital ou direction marketing externalisée",
        ],
      },
    ],
  },
  {
    num: "06",
    title: "CAMPAGNES & PUBLICITÉ ADS",
    intro: "Nous concevons, déployons et optimisons des campagnes publicitaires digitales destinées à développer la visibilité, générer des prospects, promouvoir une offre ou atteindre un objectif commercial précis.",
    icon: <Target className="w-8 h-8 text-[#0D4FB8]" />,
    subsections: [
      {
        title: "LANCEMENT & PARAMÉTRAGE",
        items: [
          "Configuration des comptes publicitaires (Meta, Google, TikTok, LinkedIn)",
          "Installation des pixels, conversions API et suivi",
          "Création d'audiences personnalisées, similaires et retargeting",
          "Structuration des campagnes selon les objectifs",
        ],
      },
      {
        title: "CRÉATION & PILOTAGE",
        items: [
          "Création des visuels publicitaires et formats verticaux",
          "Scripts vidéo Ads et rédaction publicitaire (copywriting)",
          "Gestion active et A/B testing messages/audiences",
          "Optimisation continue et réduction des coûts d’acquisition",
        ],
      },
      {
        title: "SUIVI & PERFORMANCE",
        items: [
          "Analyse des leads, conversions et du coût par résultat",
          "Analyse du retour sur investissement publicitaire (ROAS)",
          "Reporting périodique et ajustements stratégiques",
        ],
      },
    ],
  },
];

export default function Services({ 
  services = [],
  bannerImage,
  servicesImages,
  isHomeTeaser = false,
}: { 
  services?: any[];
  bannerImage?: any;
  servicesImages?: any;
  isHomeTeaser?: boolean;
}) {
  const imageUrl = bannerImage ? urlFor(bannerImage).url() : "/services-banner.png";

  // Récupère l'image personnalisée de Sanity pour un service donné si l'admin en a téléversé une
  const getServiceCustomImage = (serviceNum: string) => {
    if (servicesImages) {
      if (serviceNum === "01" && servicesImages.service01Image) return urlFor(servicesImages.service01Image).url();
      if (serviceNum === "02" && servicesImages.service02Image) return urlFor(servicesImages.service02Image).url();
      if (serviceNum === "03" && servicesImages.service03Image) return urlFor(servicesImages.service03Image).url();
      if (serviceNum === "04" && servicesImages.service04Image) return urlFor(servicesImages.service04Image).url();
      if (serviceNum === "05" && servicesImages.service05Image) return urlFor(servicesImages.service05Image).url();
      if (serviceNum === "06" && servicesImages.service06Image) return urlFor(servicesImages.service06Image).url();
    }
    // Ou via la collection de services dynamiques
    const found = services.find((s: any) => s.order === Number(serviceNum) || s.title?.toLowerCase().includes(serviceNum));
    if (found?.image) return urlFor(found.image).url();
    return null;
  };

  // Vue synthétique pour la page d'accueil (Grid 3 colonnes de cartes modernes)
  if (isHomeTeaser) {
    return (
      <section id="services" className="py-10 md:py-16 bg-[#F8FAFC] relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs md:text-sm font-bold text-[#0D4FB8] tracking-widest uppercase mb-2">
                CE QUE NOUS FAISONS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-gray-900 tracking-tight">
                NOS SERVICES
              </h2>
              <div className="w-14 h-1 bg-[#5FD3E2] mx-auto mt-4 rounded-full" />
              <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed font-normal">
                Chez EZK Agency, nous proposons un accompagnement complet qui couvre tous les besoins clés de votre communication et développement digital.
              </p>
            </motion.div>
          </div>

          {/* Grille des 6 services sous forme de cartes d'accueil */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_DETAILED.map((service, idx) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-[24px] p-7 md:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0D4FB8]/10 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xl font-extrabold text-[#5FD3E2] font-poppins">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-extrabold font-poppins text-gray-900 mb-3 group-hover:text-[#0D4FB8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal line-clamp-3">
                    {service.intro}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/services#service-${service.num}`}
                    className="text-xs font-bold text-[#0D4FB8] group-hover:text-blue-700 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <span>Voir le détail</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton Voir tous les services */}
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Découvrir l'ensemble de nos offres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    );
  }

  // Page dédiée /services : Présentation détaillée avec la bannière et toutes les sous-sections
  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
        
        {/* Banner visuelle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[240px] md:h-[340px] w-full rounded-[30px] overflow-hidden shadow-xl mb-14"
        >
          <Image
            src={imageUrl}
            alt="Nos Services EZK Agency"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
            <span className="inline-block bg-[#0D4FB8] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase mb-2 self-start shadow-sm">
              ACCOMPAGNEMENT DIGITAL & STRATÉGIE
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#5FD3E2] tracking-wider uppercase drop-shadow-sm font-poppins">
              NOS SERVICES
            </h1>
            <p className="text-white/95 text-xs md:text-sm max-w-2xl mt-2 font-normal leading-relaxed">
              Chez EZK Agency, nous proposons un accompagnement qui couvre les principaux besoins liés à la communication et au développement digital d’une entreprise ou d’une marque.
            </p>
          </div>
        </motion.div>

        {/* 6 Pôles de Services Détaillés */}
        <div className="space-y-12">
          {SERVICES_DETAILED.map((service, idx) => (
            <motion.div
              id={`service-${service.num}`}
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-[26px] p-6 md:p-10 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] scroll-mt-28"
            >
              {/* Header du service */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="flex items-start gap-4 md:gap-6 flex-1">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#5FD3E2] font-poppins">
                    {service.num}.
                  </span>
                  <div>
                    <h2 className="text-lg md:text-2xl font-extrabold font-poppins text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed font-normal max-w-3xl">
                      {service.intro}
                    </p>
                  </div>
                </div>

                {/* Si l'admin a uploadé une illustration personnalisée pour ce service */}
                {getServiceCustomImage(service.num) && (
                  <div className="relative w-full md:w-56 h-36 rounded-2xl overflow-hidden shadow-md shrink-0 border border-gray-100">
                    <Image
                      src={getServiceCustomImage(service.num)!}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Sous-sections avec puces - 1 colonne sur mobile, 2 sur tablette, 3 sur grand écran */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                {service.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-gray-50/80 rounded-[20px] p-5 sm:p-6 border border-gray-100/80 flex flex-col justify-start">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#0D4FB8] uppercase tracking-wider mb-4 pb-2 border-b border-gray-200/60">
                        {sub.title}
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#5FD3E2] shrink-0 mt-0.5" />
                            <span className="leading-snug break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Contact en bas */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <span>Demander un devis sur mesure</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
