"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ExternalLink } from "lucide-react";

// Interfaces para TypeScript
interface NavLinkProps {
  href: string;
  text: string;
}

interface MobileNavLinkProps {
  href: string;
  text: string;
  onClick: () => void;
  external?: boolean;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // CAMBIO IMPORTANTE:
    // Usamos 'relative' en lugar de 'absolute'.
    // Esto crea un bloque sólido al inicio de la página. Nada puede taparlo.
    <nav className="relative w-full z-50 bg-white shadow-md font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* --- LOGO AREA --- */}
          {/* z-index extra para asegurar que el logo esté clickeable */}
          <div className="flex-shrink-0 flex items-center gap-3 relative z-50">
            <Link href="/" className="group cursor-pointer block">
              {/* Contenedor Verde para el logo blanco */}
              <div className="bg-green-900 p-2 rounded-lg shadow-sm border border-green-800 transition-transform transform group-hover:scale-105">
                <Image
                  alt="Colonial AutoPark Logo"
                  src="/logo.png"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority // Carga prioritaria para el logo
                />
              </div>
            </Link>

            {/* BRANDING */}
            <div className="hidden lg:flex flex-col select-none">
              <span className="text-sm font-bold leading-none text-green-950">
                Colonial AutoPark
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium mt-1 text-green-700">
                by Meritum Hotéis
              </span>
            </div>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="#package-info" text="Pacotes" />
            <NavLink href="#location" text="Localização" />

            <Link
              href="https://hotelcolonialfoz.com.br/"
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-800 transition-colors cursor-pointer z-50"
              target="_blank"
            >
              Hotel Colonial <ExternalLink className="w-3 h-3" />
            </Link>

            <Link
              href="https://wa.me/558008191993?text=Olá%21+Vi+a+promoção+do+Estacionamento+no+site+e+quero+reservar+pelos+canais+diretos."
              target="_blank"
              // 'relative z-50' asegura que el botón esté en la capa superior de interacción
              className="relative z-50 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-green-900 text-white hover:bg-green-800 shadow-lg hover:shadow-green-900/20 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Reservar Agora
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center relative z-50">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none text-green-950 hover:bg-green-50 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl absolute w-full left-0 top-full z-40"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center text-center">
              <div className="mb-4 text-center">
                <span className="text-xs uppercase tracking-widest text-green-800 font-bold bg-green-50 px-3 py-1 rounded-full">
                  by Meritum Hotéis
                </span>
              </div>

              <MobileNavLink href="/" text="Home" onClick={toggleMenu} />
              <MobileNavLink
                href="#package-info"
                text="Pacotes & Preços"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="#location"
                text="Como Chegar"
                onClick={toggleMenu}
              />
              <MobileNavLink
                href="https://hotelcolonialfoz.com.br/"
                text="Site do Hotel"
                onClick={toggleMenu}
                external={true}
              />

              <div className="pt-4 w-full">
                <Link
                  href="https://wa.me/558008191993"
                  target="_blank"
                  onClick={toggleMenu}
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white px-4 py-3 rounded-xl font-bold text-lg hover:bg-green-700 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Componente Link Desktop
const NavLink = ({ href, text }: NavLinkProps) => (
  <Link
    href={href}
    className="relative z-50 text-sm font-medium text-gray-600 hover:text-green-800 transition-colors group cursor-pointer py-2"
  >
    {text}
    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full duration-300"></span>
  </Link>
);

// Componente Link Mobile
const MobileNavLink = ({
  href,
  text,
  onClick,
  external = false,
}: MobileNavLinkProps) => (
  <Link
    href={href}
    target={external ? "_blank" : "_self"}
    onClick={onClick}
    className="block w-full px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-800 hover:bg-green-50 transition-colors cursor-pointer"
  >
    <div className="flex items-center justify-center gap-2">
      {text}
      {external && <ExternalLink className="w-4 h-4 opacity-50" />}
    </div>
  </Link>
);

export default Navbar;
