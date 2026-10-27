"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2.5" : "bg-white/80 backdrop-blur-sm py-3.5 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Logo EZK Agency parfaitement proportionné */}
          <div className="relative flex items-center">
            <Image 
              src="/logo-clean.png" 
              alt="EZK Agency Logo" 
              width={755} 
              height={392} 
              className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-all" 
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
                  className="text-dark/80 hover:text-primary font-medium text-base transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="bg-[#0D4FB8] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Header: Logo, Burger, and CONTACT US Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="text-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          <Link
            href="/contact"
            className="bg-[#0D4FB8] text-white px-4 py-2 rounded-full font-bold text-[11px] tracking-wider uppercase shadow-sm"
          >
            CONTACT US
          </Link>
        </div>
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
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#0D4FB8] text-white text-center px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase mt-4 shadow-md"
          >
            CONTACT US
          </Link>
        </motion.div>
      )}
    </header>
  );
}
