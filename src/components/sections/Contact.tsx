"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  Layers, 
  UserCheck, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  ArrowRight
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

type Pathway = "accompagnement" | "prestation" | "rejoindre";

export default function Contact({ 
  isHomeTeaser = false,
  contactBanner,
}: { 
  isHomeTeaser?: boolean;
  contactBanner?: any;
}) {
  const [activePathway, setActivePathway] = useState<Pathway>("accompagnement");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const bannerUrl = contactBanner ? urlFor(contactBanner).url() : "/services-banner.png";

  const handleSubmit = (e: React.FormEvent, formName: string) => {
    e.preventDefault();
    setSubmitted(formName);
    setTimeout(() => {
      // scroll to confirmation or reset after timeout if needed
    }, 500);
  };

  // VERSION TEASER ACCUEIL : Présente les 3 parcours et les coordonnées sans dérouler les 30 questions de formulaire
  if (isHomeTeaser) {
    return (
      <section id="contact" className="py-10 md:py-16 bg-[#F8FAFC] relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
          
          {/* Bannière / Image d'introduction pour la section Contacter EZK Agency */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl mb-12 sm:mb-16 border border-gray-100">
            <div className="relative h-[220px] sm:h-[260px] md:h-[300px] w-full">
              <Image
                src={bannerUrl}
                alt="Contacter EZK Agency Dakar"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Voile sombre transparent dégradé élégant */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-transparent" />
              
              <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-center max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins text-white leading-tight uppercase">
                  PARLONS DE VOTRE <span className="text-[#5FD3E2]">PROJET</span>
                </h2>
                <p className="text-gray-200 text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-xl">
                  Vous avez un projet, un besoin précis ou souhaitez développer votre présence digitale ? Que vous recherchiez un accompagnement régulier, une prestation ponctuelle ou à rejoindre l'équipe, nous sommes à votre écoute.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-gray-700 text-sm md:text-base font-medium">
              Choisissez le parcours qui correspond à votre besoin et partagez-nous quelques informations sur votre projet.
            </p>
          </div>

          {/* 3 Cartes de Parcours avec redirection claire vers le formulaire */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            
            {/* 01 Accompagnement */}
            <Link
              href="/contact?parcours=accompagnement"
              className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                    01 — PARCOURS
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0D4FB8] group-hover:bg-[#0D4FB8] group-hover:text-white transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-extrabold text-gray-900 uppercase leading-snug mb-3 font-poppins group-hover:text-[#0D4FB8] transition-colors">
                  VOUS RECHERCHEZ UN ACCOMPAGNEMENT DIGITAL ?
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
                  Pour structurer, développer ou améliorer votre communication digitale sur la durée.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0D4FB8] uppercase tracking-wider">
                <span>Remplir le formulaire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 02 Prestation */}
            <Link
              href="/contact?parcours=prestation"
              className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                    02 — PARCOURS
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0D4FB8] group-hover:bg-[#0D4FB8] group-hover:text-white transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-extrabold text-gray-900 uppercase leading-snug mb-3 font-poppins group-hover:text-[#0D4FB8] transition-colors">
                  VOUS AVEZ BESOIN D'UNE PRESTATION SPÉCIFIQUE ?
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
                  Un besoin ponctuel : création de contenu, identité visuelle, site web ou publicité Ads.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0D4FB8] uppercase tracking-wider">
                <span>Demander une prestation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 03 Rejoindre */}
            <Link
              href="/contact?parcours=rejoindre"
              className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                    03 — PARCOURS
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0D4FB8] group-hover:bg-[#0D4FB8] group-hover:text-white transition-colors">
                    <UserCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-extrabold text-gray-900 uppercase leading-snug mb-3 font-poppins group-hover:text-[#0D4FB8] transition-colors">
                  VOUS SOUHAITEZ REJOINDRE EZK ?
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
                  Jeune, passionné(e) par le digital, monteur, graphiste ou créateur : partagez votre profil.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0D4FB8] uppercase tracking-wider">
                <span>Postuler / Rejoindre</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

          {/* Coordonnées directes alignées à gauche avec icônes de réseaux sociaux verticales */}
          <div className="bg-[#EBF6FA] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs md:text-sm text-gray-700 shadow-sm border border-blue-100/50">
            {/* Colonne Gauche : Liste des coordonnées alignées à gauche */}
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Localisation</span>
                  <span className="font-bold text-gray-900">Dakar, Sénégal</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Email direct</span>
                  <a href="mailto:contactezkagency@gmail.com" className="hover:underline font-bold text-gray-900">
                    contactezkagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Téléphone / WhatsApp</span>
                  <span className="font-bold text-gray-900">+221 77 593 31 93 / +221 76 196 87 59</span>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Icônes Réseaux Sociaux en disposition verticale */}
            <div className="pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-blue-200/50 md:pl-8 flex flex-row md:flex-col items-center justify-around md:justify-center gap-3 sm:gap-4 shrink-0">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden md:block text-center mb-1">
                Suivez-nous
              </span>
              <a
                href="https://www.instagram.com/ezk_agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#0D4FB8] hover:bg-[#0D4FB8] hover:text-white shadow-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Instagram EZK Agency"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://www.tiktok.com/@ezk_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#0D4FB8] hover:bg-[#0D4FB8] hover:text-white shadow-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="TikTok EZK Agency"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ezkagency/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#0D4FB8] hover:bg-[#0D4FB8] hover:text-white shadow-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn EZK Agency"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white text-[#0D4FB8] hover:bg-[#0D4FB8] hover:text-white shadow-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Facebook EZK Agency"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // VERSION COMPLÈTE PAGE DÉDIÉE /contact (avec tous les formulaires complets)
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 max-w-7xl">
        
        {/* En-tête officiel */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-extrabold font-poppins text-gray-900 tracking-tight uppercase mb-4">
            PARLONS DE VOTRE PROJET
          </h1>
          <div className="space-y-3 text-gray-700 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            <p>
              Vous avez un projet, un besoin précis ou souhaitez développer votre présence digitale ?
            </p>
            <p>
              Que vous recherchiez un accompagnement régulier, une prestation spécifique ou une opportunité de rejoindre notre environnement professionnel, EZK Agency est à votre écoute.
            </p>
            <p className="font-semibold text-gray-900 pt-1">
              Choisissez le parcours qui correspond à votre besoin et partagez-nous quelques informations sur votre projet.
            </p>
          </div>
        </div>

        {/* 3 Onglets de Parcours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Parcours 01 */}
          <button
            type="button"
            onClick={() => { setActivePathway("accompagnement"); setSubmitted(null); }}
            className={`p-6 rounded-[22px] border text-left transition-all flex flex-col justify-between ${
              activePathway === "accompagnement"
                ? "border-[#0D4FB8] bg-blue-50/40 shadow-md ring-2 ring-[#0D4FB8]/20"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                  01 — PARCOURS
                </span>
                <Briefcase className="w-5 h-5 text-[#0D4FB8]" />
              </div>
              <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-snug mb-2 font-poppins">
                VOUS RECHERCHEZ UN ACCOMPAGNEMENT DIGITAL ?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pour structurer, développer ou améliorer votre communication digitale sur la durée.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${activePathway === "accompagnement" ? "text-[#0D4FB8]" : "text-gray-400"}`}>
                {activePathway === "accompagnement" ? "● Formulaire sélectionné" : "Choisir ce parcours →"}
              </span>
            </div>
          </button>

          {/* Parcours 02 */}
          <button
            type="button"
            onClick={() => { setActivePathway("prestation"); setSubmitted(null); }}
            className={`p-6 rounded-[22px] border text-left transition-all flex flex-col justify-between ${
              activePathway === "prestation"
                ? "border-[#0D4FB8] bg-blue-50/40 shadow-md ring-2 ring-[#0D4FB8]/20"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                  02 — PARCOURS
                </span>
                <Layers className="w-5 h-5 text-[#0D4FB8]" />
              </div>
              <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-snug mb-2 font-poppins">
                VOUS AVEZ BESOIN D'UNE PRESTATION SPÉCIFIQUE ?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Un besoin ponctuel précis : création de contenu, identité visuelle, site web ou publicité Ads.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${activePathway === "prestation" ? "text-[#0D4FB8]" : "text-gray-400"}`}>
                {activePathway === "prestation" ? "● Formulaire sélectionné" : "Choisir ce parcours →"}
              </span>
            </div>
          </button>

          {/* Parcours 03 */}
          <button
            type="button"
            onClick={() => { setActivePathway("rejoindre"); setSubmitted(null); }}
            className={`p-6 rounded-[22px] border text-left transition-all flex flex-col justify-between ${
              activePathway === "rejoindre"
                ? "border-[#0D4FB8] bg-blue-50/40 shadow-md ring-2 ring-[#0D4FB8]/20"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold text-[#5FD3E2] uppercase tracking-wider">
                  03 — PARCOURS
                </span>
                <UserCheck className="w-5 h-5 text-[#0D4FB8]" />
              </div>
              <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-snug mb-2 font-poppins">
                VOUS SOUHAITEZ REJOINDRE EZK ?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Jeune, passionné(e) par le digital, monteur, graphiste ou créateur : partagez votre profil.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <span className={`text-[11px] font-bold uppercase tracking-wider ${activePathway === "rejoindre" ? "text-[#0D4FB8]" : "text-gray-400"}`}>
                {activePathway === "rejoindre" ? "● Formulaire sélectionné" : "Choisir ce parcours →"}
              </span>
            </div>
          </button>
        </div>

        {/* Coordonnées rapides */}
        <div className="bg-[#EBF6FA] rounded-[22px] p-6 md:p-8 mb-12 flex flex-wrap items-center justify-around gap-6 text-xs md:text-sm text-gray-700 shadow-sm border border-blue-100/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Localisation</span>
              <span className="font-bold text-gray-900">Dakar, Sénégal</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Email</span>
              <a href="mailto:contactezkagency@gmail.com" className="hover:underline font-bold text-gray-900">
                contactezkagency@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0D4FB8] shadow-sm shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] text-gray-400 font-bold uppercase tracking-wider">Téléphone / WhatsApp</span>
              <span className="font-bold text-gray-900">+221 77 593 31 93 / +221 76 196 87 59</span>
            </div>
          </div>
        </div>

        {/* Message de Succès après Envoi */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-10 p-8 rounded-[24px] bg-green-50 border border-green-200 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-900 mb-1">
              Merci pour les informations partagées !
            </h3>
            <p className="text-xs md:text-sm text-green-700 max-w-lg mx-auto">
              Notre équipe va étudier votre demande afin de mieux comprendre votre situation et revenir vers vous très rapidement concernant les prochaines étapes.
            </p>
          </motion.div>
        )}

        {/* FORMULAIRES COMPLETS SELON LE PARCOURS */}
        <div className="bg-white rounded-[32px] p-6 md:p-14 lg:p-16 border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* ========================================================
                01 — FORMULAIRE DEMANDE D'ACCOMPAGNEMENT DIGITAL
               ======================================================== */}
            {activePathway === "accompagnement" && (
              <motion.form
                key="form-accompagnement"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => handleSubmit(e, "accompagnement")}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold text-[#5FD3E2] tracking-wider uppercase">
                    PARCOURS 01
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase font-poppins mt-1">
                    FORMULAIRE — DEMANDE D'ACCOMPAGNEMENT DIGITAL
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    Vous souhaitez être accompagné sur la durée pour structurer, développer ou améliorer votre communication et votre présence digitale ? Parlez-nous de votre entreprise, de vos objectifs et de vos besoins.
                  </p>
                </div>

                {/* Section 1 : VOTRE IDENTITÉ */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    1. VOTRE IDENTITÉ
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nom et prénom *</label>
                      <input required type="text" placeholder="Votre nom complet" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nom de l'entreprise / marque / projet *</label>
                      <input required type="text" placeholder="Nom de l'entreprise" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Votre numéro de téléphone / WhatsApp *</label>
                      <input required type="tel" placeholder="+221 XX XXX XX XX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Votre adresse email *</label>
                      <input required type="email" placeholder="exemple@domaine.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8]" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">Ville / Localisation *</label>
                      <input required type="text" placeholder="Dakar, Sénégal ou autre" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8]" />
                    </div>
                  </div>
                </div>

                {/* Section 2 : VOTRE ACTIVITÉ */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    2. VOTRE ACTIVITÉ
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quel est votre secteur d'activité ?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
                      {[
                        "Commerce / Vente", "Immobilier", "Restauration / Alimentation",
                        "Mode / Beauté", "Transport / Mobilité", "Éducation / Formation",
                        "Santé / Bien-être", "BTP / Construction", "Services",
                        "Technologie / Digital", "Association / Organisation", "Institution", "Autre"
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200/80 hover:bg-gray-50 cursor-pointer transition-colors">
                          <input type="checkbox" name="secteur" value={item} className="rounded text-[#0D4FB8] focus:ring-[#0D4FB8]" />
                          <span className="text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Présentez-nous brièvement votre activité.</label>
                    <textarea rows={3} placeholder="Décrivez en quelques mots ce que vous proposez..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] focus:ring-1 focus:ring-[#0D4FB8] resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Depuis combien de temps votre activité existe-t-elle ?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
                      {["Moins de 6 mois", "6 mois à 1 an", "1 à 3 ans", "Plus de 3 ans", "Projet en cours de lancement"].map((duree) => (
                        <label key={duree} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200/80 hover:bg-gray-50 cursor-pointer transition-colors">
                          <input type="radio" name="anciennete" value={duree} className="text-[#0D4FB8] focus:ring-[#0D4FB8]" />
                          <span className="text-gray-700">{duree}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3 : VOTRE PRÉSENCE DIGITALE */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    3. VOTRE PRÉSENCE DIGITALE
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Sur quels canaux êtes-vous actuellement présent ?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs">
                      {["Instagram", "Facebook", "TikTok", "LinkedIn", "Snapchat", "YouTube", "Site internet", "Google Business Profile", "Aucun pour le moment", "Autre"].map((canal) => (
                        <label key={canal} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200/80 hover:bg-gray-50 cursor-pointer transition-colors">
                          <input type="checkbox" name="canaux" value={canal} className="rounded text-[#0D4FB8] focus:ring-[#0D4FB8]" />
                          <span className="text-gray-700">{canal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Avez-vous déjà une identité visuelle ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Oui, elle est complète", "Oui, mais elle doit être améliorée", "Nous avons uniquement un logo", "Non, nous devons encore la créer"].map((idVisuelle) => (
                          <label key={idVisuelle} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="identite_visuelle" value={idVisuelle} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{idVisuelle}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Avez-vous déjà une personne ou une équipe qui s'occupe de votre communication digitale ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Oui, en interne", "Oui, avec un prestataire", "Oui, mais de manière ponctuelle", "Non", "Nous sommes actuellement à la recherche d'un accompagnement"].map((equipe) => (
                          <label key={equipe} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="equipe_comm" value={equipe} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{equipe}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 : VOS OBJECTIFS */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    4. VOS OBJECTIFS & DIFFICULTÉS
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quel est votre principal objectif aujourd'hui ?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {[
                        "Développer ma visibilité", "Améliorer mon image de marque", "Développer mes réseaux sociaux",
                        "Créer régulièrement du contenu", "Trouver davantage de clients", "Promouvoir mes produits ou services",
                        "Lancer une nouvelle activité / marque", "Améliorer mon site internet", "Développer mes ventes en ligne",
                        "Mettre en place de la publicité digitale", "Structurer toute ma communication digitale", "Autre"
                      ].map((obj) => (
                        <label key={obj} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="objectifs" value={obj} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{obj}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quelle est aujourd'hui votre principale difficulté ?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {[
                        "Je manque de temps", "Je manque de contenu", "Je ne sais pas comment communiquer efficacement",
                        "Ma présence digitale manque de cohérence", "Mes réseaux sociaux ne progressent pas suffisamment", "Je manque de visibilité",
                        "Je n'obtiens pas suffisamment de prospects / clients", "Je ne maîtrise pas la publicité digitale", "Je n'ai pas encore de véritable stratégie", "Je ne sais pas précisément", "Autre"
                      ].map((diff) => (
                        <label key={diff} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="difficultes" value={diff} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{diff}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Qu'aimeriez-vous améliorer en priorité ?</label>
                    <input type="text" placeholder="Votre priorité numéro 1..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                  </div>
                </div>

                {/* Section 5 : VOTRE BESOIN D'ACCOMPAGNEMENT */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    5. VOTRE BESOIN D'ACCOMPAGNEMENT
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quels domaines souhaitez-vous éventuellement confier à EZK Agency ?</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      {[
                        "Création de contenu", "Gestion des réseaux sociaux", "Infographie / identité visuelle",
                        "Site internet / web design", "Consulting digital", "Publicité digitale / Ads",
                        "Plusieurs de ces services", "Je ne sais pas encore, j'aimerais être conseillé(e)"
                      ].map((domaine) => (
                        <label key={domaine} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="domaines_confier" value={domaine} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{domaine}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Comment souhaitez-vous être accompagné ?</label>
                      <div className="space-y-1.5 text-xs">
                        {[
                          "Accompagnement global de ma communication digitale",
                          "Gestion régulière de mes réseaux sociaux",
                          "Développement de ma visibilité et acquisition",
                          "Accompagnement stratégique",
                          "Je ne sais pas encore"
                        ].map((modalite) => (
                          <label key={modalite} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="modalite_accompagnement" value={modalite} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{modalite}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">À quelle échéance souhaitez-vous commencer ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Dès que possible", "Dans les prochaines semaines", "Dans les 1 à 3 prochains mois", "Je suis encore en réflexion"].map((delai) => (
                          <label key={delai} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="delai_demarrage" value={delai} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{delai}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Y a-t-il quelque chose d'important que vous souhaitez nous préciser concernant votre projet ?</label>
                    <textarea rows={3} placeholder="Précisions complémentaires, attentes particulières..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] resize-none" />
                  </div>
                </div>

                {/* Fin du formulaire 01 */}
                <div className="pt-6 border-t border-gray-100 flex flex-col items-center text-center">
                  <p className="text-xs text-gray-500 mb-4 max-w-md">
                    Merci pour les informations partagées. Notre équipe va étudier votre demande afin de mieux comprendre votre situation et revenir vers vous concernant les prochaines étapes.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <span>ENVOYER MA DEMANDE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* ========================================================
                02 — FORMULAIRE DEMANDE DE PRESTATION SPÉCIFIQUE
               ======================================================== */}
            {activePathway === "prestation" && (
              <motion.form
                key="form-prestation"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => handleSubmit(e, "prestation")}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold text-[#5FD3E2] tracking-wider uppercase">
                    PARCOURS 02
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase font-poppins mt-1">
                    FORMULAIRE — DEMANDE DE SERVICE
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 mt-2">
                    Vous avez besoin d'un service précis sans nécessairement rechercher un accompagnement mensuel ? Création de contenu, identité visuelle, site internet, visuel publicitaire ou campagne Ads : présentez-nous votre demande.
                  </p>
                </div>

                {/* Section 1 : VOS INFORMATIONS */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    1. VOS INFORMATIONS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nom et prénom *</label>
                      <input required type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Entreprise / marque / projet *</label>
                      <input required type="text" placeholder="Nom du projet" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Téléphone / WhatsApp *</label>
                      <input required type="tel" placeholder="+221 XX XXX XX XX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                      <input required type="email" placeholder="votre.email@domaine.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                  </div>
                </div>

                {/* Section 2 : VOTRE BESOIN */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    2. VOTRE BESOIN
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quel service recherchez-vous ?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {[
                        "Création de contenu photo", "Création de contenu vidéo", "Gestion des réseaux sociaux",
                        "Infographie", "Logo / identité visuelle", "Flyer / affiche / support graphique",
                        "Présentation / document professionnel", "Site vitrine", "E-commerce",
                        "Landing page", "Application / interface digitale", "Consulting / audit digital",
                        "Campagne publicitaire", "Publicité Meta", "Publicité Google", "Publicité TikTok", "Autre"
                      ].map((srv) => (
                        <label key={srv} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="service_souhaite" value={srv} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{srv}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Votre demande concerne :</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {["Une prestation unique", "Plusieurs prestations", "Une campagne ponctuelle", "Un projet de lancement", "Un événement", "Autre"].map((typ) => (
                        <label key={typ} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="type_demande" value={typ} className="text-[#0D4FB8]" />
                          <span className="text-gray-700">{typ}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Décrivez-nous votre besoin.</label>
                    <textarea rows={3} placeholder="Détails de la prestation, objectifs, attentes..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] resize-none" />
                  </div>
                </div>

                {/* Section 3 : VOTRE PROJET */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    3. DÉTAILS DU PROJET & BUDGET
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Avez-vous déjà une identité visuelle ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Oui", "Partiellement", "Non"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="identite_presta" value={opt} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Avez-vous déjà les éléments nécessaires à la réalisation ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Oui, tout est prêt", "J'ai une partie des éléments", "Non, j'ai besoin d'aide pour les préparer"].map((elem) => (
                          <label key={elem} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="elements_prets" value={elem} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{elem}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Quand souhaitez-vous réaliser cette prestation ?</label>
                      <div className="space-y-1.5 text-xs">
                        {["Dès que possible", "Dans les prochaines semaines", "Dans le mois", "Dans les 1 à 3 prochains mois", "Date précise à définir"].map((del) => (
                          <label key={del} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="delai_presta" value={del} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{del}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Budget indicatif prévu pour ce projet</label>
                      <div className="space-y-1.5 text-xs">
                        {[
                          "Moins de 50 000 FCFA",
                          "50 000 – 100 000 FCFA",
                          "100 000 – 250 000 FCFA",
                          "250 000 – 500 000 FCFA",
                          "Plus de 500 000 FCFA",
                          "Je souhaite d'abord recevoir une estimation"
                        ].map((bud) => (
                          <label key={bud} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="budget_indicatif" value={bud} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{bud}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Avez-vous une date limite particulière ?</label>
                      <input type="text" placeholder="Oui (précisez la date) / Non" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Avez-vous des références, exemples ou inspirations à partager ?</label>
                      <input type="text" placeholder="Lien drive, site exemple, référence..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Informations complémentaires</label>
                    <textarea rows={2} placeholder="Remarques additionnelles..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] resize-none" />
                  </div>
                </div>

                {/* Fin du formulaire 02 */}
                <div className="pt-6 border-t border-gray-100 flex flex-col items-center text-center">
                  <p className="text-xs text-gray-500 mb-4 max-w-md">
                    Merci pour votre demande. Nous allons étudier les éléments transmis afin de mieux comprendre votre besoin et revenir vers vous avec les prochaines étapes.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <span>ENVOYER MA DEMANDE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* ========================================================
                03 — FORMULAIRE REJOINDRE EZK
               ======================================================== */}
            {activePathway === "rejoindre" && (
              <motion.form
                key="form-rejoindre"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => handleSubmit(e, "rejoindre")}
                className="space-y-10"
              >
                <div>
                  <span className="text-xs font-bold text-[#5FD3E2] tracking-wider uppercase">
                    PARCOURS 03
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 uppercase font-poppins mt-1">
                    FORMULAIRE — REJOINDRE EZK AGENCY
                  </h2>
                  <div className="space-y-2 text-xs md:text-sm text-gray-600 mt-2">
                    <p className="font-bold text-gray-800 uppercase">VOUS ÊTES PASSIONNÉ(E) PAR LE DIGITAL ?</p>
                    <p>
                      Vous êtes jeune, passionné(e) par le digital et vous souhaitez développer vos compétences dans un environnement professionnel ? Vous habitez à Dakar ou ailleurs au Sénégal ? EZK Agency est toujours ouverte à découvrir de nouveaux talents.
                    </p>
                  </div>
                </div>

                {/* Section 1 : QUI ÊTES-VOUS ? */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    1. QUI ÊTES-VOUS ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Nom et prénom *</label>
                      <input required type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Âge *</label>
                      <input required type="text" placeholder="Ex: 22 ans" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Ville / Région *</label>
                      <input required type="text" placeholder="Dakar, Thiès, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Numéro de téléphone / WhatsApp *</label>
                      <input required type="tel" placeholder="+221 XX XXX XX XX" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">Adresse email *</label>
                      <input required type="email" placeholder="votre.email@domaine.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                  </div>
                </div>

                {/* Section 2 : VOTRE SITUATION */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    2. VOTRE SITUATION
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quelle est votre situation actuelle ?</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      {["Étudiant(e)", "Élève", "Jeune diplômé(e)", "En recherche d'emploi", "Salarié(e)", "Entrepreneur(e)", "Freelance", "Autre"].map((sit) => (
                        <label key={sit} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="situation" value={sit} className="text-[#0D4FB8]" />
                          <span className="text-gray-700">{sit}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Si vous êtes étudiant(e) ou élève, quelle formation suivez-vous ?</label>
                      <input type="text" placeholder="Filière, établissement..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Si vous travaillez actuellement, dans quel domaine ?</label>
                      <input type="text" placeholder="Domaine d'activité..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                    </div>
                  </div>
                </div>

                {/* Section 3 : VOTRE PROFIL DIGITAL */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    3. VOTRE PROFIL DIGITAL & OUTILS
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Dans quels domaines avez-vous des compétences ou un intérêt ?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {[
                        "Montage vidéo", "Graphisme / design", "Création de contenu", "Photographie",
                        "Vidéo", "Community management", "Marketing digital", "Publicité digitale",
                        "Web design", "Développement web / mobile", "Rédaction / copywriting", "Autre"
                      ].map((comp) => (
                        <label key={comp} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="competences" value={comp} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{comp}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Quels outils maîtrisez-vous ou utilisez-vous régulièrement ?</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      {[
                        "Canva", "CapCut", "Photoshop", "Illustrator", "Premiere Pro",
                        "After Effects", "Meta Business Suite", "Google Ads", "WordPress", "Figma", "Autre"
                      ].map((outil) => (
                        <label key={outil} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="checkbox" name="outils" value={outil} className="rounded text-[#0D4FB8]" />
                          <span className="text-gray-700">{outil}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Comment évaluez-vous votre niveau dans votre principal domaine ?</label>
                      <div className="grid grid-cols-2 gap-1.5 text-xs">
                        {["Débutant(e)", "Intermédiaire", "Bon niveau", "Avancé(e)"].map((niv) => (
                          <label key={niv} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="niveau" value={niv} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{niv}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Avez-vous déjà réalisé des projets dans le digital ?</label>
                      <div className="space-y-1 text-xs">
                        {["Oui, professionnellement", "Oui, pour des projets personnels", "Oui, dans le cadre de mes études / formations", "Pas encore, mais je souhaite apprendre"].map((proj) => (
                          <label key={proj} className="flex items-center gap-2 p-1.5 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                            <input type="radio" name="projets_realises" value={proj} className="text-[#0D4FB8]" />
                            <span className="text-gray-700">{proj}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Si vous avez un portfolio, une page professionnelle ou quelques réalisations à partager, indiquez le lien ici :</label>
                    <input type="url" placeholder="https://instagram.com/..., drive, behance, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                  </div>
                </div>

                {/* Section 4 : POURQUOI EZK ? */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <h3 className="text-xs md:text-sm font-extrabold text-[#0D4FB8] tracking-wider uppercase">
                    4. MOTIVATION & DISPONIBILITÉ
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Pourquoi souhaitez-vous rejoindre EZK Agency ? (court)</label>
                    <textarea rows={2} placeholder="Votre motivation..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Qu'aimeriez-vous développer ou apprendre dans le digital ?</label>
                    <textarea rows={2} placeholder="Vos aspirations, objectifs d'apprentissage..." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8] resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Êtes-vous actuellement disponible pour des missions, collaborations, stages ou opportunités professionnelles ?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {[
                        "Oui, immédiatement",
                        "Oui, à temps partiel",
                        "Oui, selon les projets",
                        "Non actuellement, mais je souhaite rester en contact"
                      ].map((disp) => (
                        <label key={disp} className="flex items-center gap-2 p-2 rounded-lg border border-gray-200/80 hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="disponibilite" value={disp} className="text-[#0D4FB8]" />
                          <span className="text-gray-700">{disp}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Y a-t-il quelque chose que vous aimeriez que nous sachions sur vous ?</label>
                    <input type="text" placeholder="Passions, atouts particuliers, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs md:text-sm outline-none focus:border-[#0D4FB8]" />
                  </div>
                </div>

                {/* Fin du formulaire 03 */}
                <div className="pt-6 border-t border-gray-100 flex flex-col items-center text-center">
                  <p className="text-xs text-gray-500 mb-4 max-w-md">
                    Merci pour l'intérêt porté à EZK Agency. Nous conserverons votre profil parmi les candidatures reçues. Si une opportunité correspond à vos compétences, nous pourrons vous contacter pour un échange plus approfondi.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#0D4FB8] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-10 py-4 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <span>ENVOYER MON PROFIL</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
