import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center">
              <Image 
                src="/logo-clean.png" 
                alt="EZK Agency Logo" 
                width={755} 
                height={392} 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded filter brightness-0 invert" 
              />
            </div>
            <div className="space-y-3">
              <h5 className="text-xs md:text-sm font-bold tracking-wider text-secondary uppercase font-poppins">
                VOTRE MARQUE MÉRITE UNE PRÉSENCE À LA HAUTEUR DE VOS AMBITIONS.
              </h5>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                De la stratégie à la création, jusqu’au déploiement de vos actions marketing, EZK Agency vous accompagne pour construire une présence digitale cohérente, professionnelle et impactante.
              </p>
              <p className="text-white text-sm font-semibold tracking-wide">
                Votre prochain projet commence ici.
              </p>
            </div>
          </div>

          {/* Informations et Liens Rapides : côte à côte en 2 colonnes (sur mobile comme sur grand écran) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-base sm:text-lg font-poppins text-white">Informations</h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-start sm:items-center gap-2">
                  <span className="text-secondary shrink-0">📍</span>
                  <span>Dakar, Sénégal</span>
                </li>
                <li className="flex items-start sm:items-center gap-2">
                  <span className="text-secondary shrink-0">📧</span>
                  <a href="mailto:contactezkagency@gmail.com" className="hover:text-white break-all">
                    contactezkagency@gmail.com
                  </a>
                </li>
                <li className="flex items-start sm:items-center gap-2">
                  <span className="text-secondary shrink-0">📞</span>
                  <span>+221 77 593 31 93</span>
                </li>
                <li className="flex items-start sm:items-center gap-2">
                  <span className="text-secondary shrink-0">📞</span>
                  <span>+221 76 196 87 59</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-base sm:text-lg font-poppins text-white">Liens rapides</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
                </li>
                <li>
                  <Link href="/a-propos" className="hover:text-secondary transition-colors">À propos</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/realisations" className="hover:text-secondary transition-colors">Réalisations</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6 lg:col-span-3">
            <h4 className="font-semibold text-base sm:text-lg font-poppins text-white">Réseaux sociaux</h4>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 EZK Agency. Tous droits réservés.</p>
          <p>
            Réalisé par{" "}
            <a 
              href="https://wockytech.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              WockyTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
