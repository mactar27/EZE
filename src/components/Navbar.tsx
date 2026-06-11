"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Accueil", href: "#" },
  { name: "À propos", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Real Logo */}
          <div className="flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="EZK Agency Logo" 
              width={500} 
              height={140} 
              className="h-24 md:h-28 w-auto object-contain rounded" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-dark/80 hover:text-primary font-medium text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Demander un devis
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 md:hidden flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-dark font-medium text-lg border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-white text-center px-6 py-3 rounded-full font-medium mt-4"
          >
            Demander un devis
          </Link>
        </motion.div>
      )}
    </header>
  );
}
