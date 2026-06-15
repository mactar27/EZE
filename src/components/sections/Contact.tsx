"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, HeadphonesIcon } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/4"
          >
            <h2 className="text-[1.5rem] font-bold font-poppins text-dark mb-4 tracking-tight uppercase">
              CONTACTEZ-NOUS
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-10"></div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1 shrink-0"><MapPin size={20} /></div>
                <div>
                  <p className="text-[0.9rem] text-dark font-medium leading-tight">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary mt-1 shrink-0"><Mail size={20} /></div>
                <div>
                  <a href="mailto:contactezkagency@gmail.com" className="text-[0.9rem] text-dark font-medium leading-tight hover:text-primary transition-colors">
                    contactezkagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary mt-1 shrink-0"><Phone size={20} /></div>
                <div className="flex flex-col gap-2">
                  <a href="tel:+221775933193" className="text-[0.9rem] text-dark font-medium leading-tight hover:text-primary transition-colors">+221 77 593 31 93</a>
                  <a href="tel:+221761968759" className="text-[0.9rem] text-dark font-medium leading-tight hover:text-primary transition-colors">+221 76 196 87 59</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/4"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nom complet" 
                    className="w-full px-5 py-3.5 rounded-[8px] bg-white border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-5 py-3.5 rounded-[8px] bg-white border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="tel" 
                  placeholder="Téléphone" 
                  className="w-full px-5 py-3.5 rounded-[8px] bg-white border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <textarea 
                  rows={4} 
                  placeholder="Votre message" 
                  className="w-full px-5 py-3.5 rounded-[8px] bg-white border border-gray-200 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-primary text-white py-4 rounded-[8px] font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-all"
              >
                ENVOYER MA DEMANDE
              </button>
            </form>
          </motion.div>

          {/* Right: Help Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/4"
          >
            <div className="bg-[#F5F8FF] rounded-2xl p-8 flex flex-col items-center text-center h-full justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary text-primary flex items-center justify-center mb-6">
                <HeadphonesIcon size={28} />
              </div>
              <h4 className="font-bold text-dark font-poppins text-lg mb-3 leading-tight">
                Besoin d'un accompagnement personnalisé ?
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-8 px-2">
                Nous sommes à votre écoute pour donner vie à vos projets.
              </p>
              <button className="bg-primary text-white px-6 py-2.5 rounded-[8px] text-xs font-semibold hover:bg-primary/90 transition-colors w-full">
                Parlons de votre projet
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
