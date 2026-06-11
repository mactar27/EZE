import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo.jpeg" 
                alt="EZK Agency Logo" 
                width={200} 
                height={50} 
                className="h-12 w-auto object-contain rounded filter brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              EZK Agency est une agence de communication et de marketing basée à Dakar. Nous accompagnons les entreprises, les marques et les entrepreneurs dans la construction de leur image, le développement de leur visibilité et la création de contenus impactants.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-poppins">Informations</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-secondary">📍</span> Dakar, Sénégal
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📧</span> contactezkagency@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📞</span> +221 77 593 31 93
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📞</span> +221 76 196 87 59
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-poppins">Liens rapides</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-secondary transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-secondary transition-colors">Réalisations</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg font-poppins">Réseaux sociaux</h4>
            <div className="flex items-center gap-4">
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
