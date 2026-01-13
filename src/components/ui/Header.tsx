"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import {
  Plane,
  ShieldCheck,
  Car,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animaciones suaves y lentas para el toque minimalista
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col font-inter overflow-hidden bg-slate-900">
      {/* 1. FONDO CON ESTÉTICA CINEMATOGRÁFICA Y MINIMALISTA */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/airport.jpg" // Asegúrate de tener una foto elegante aquí
          layout="fill"
          objectFit="cover"
          alt="Hotel Colonial Iguaçu"
          className="opacity-90"
          priority
        />
        {/* Overlay degradado más sofisticado (Negro a transparente) para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-20 flex-grow flex items-center px-6 md:px-16 lg:px-24">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full text-white pt-12 md:pt-0"
        >
          {/* BOTÓN AL SITE PRINCIPAL (Contexto) */}
          <motion.div variants={fadeUpVariant} className="mb-6">
            <Link
              href="https://hotelcolonialfoz.com.br/"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-light tracking-widest text-gray-300 hover:text-white transition-colors group"
            >
              <span className="uppercase border-b border-transparent group-hover:border-white transition-all pb-0.5">
                Ir para o site do Hotel Colonial
              </span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* TÍTULO PRINCIPAL (Manteniendo la fuerza de la marca) */}
          <motion.div variants={fadeUpVariant} className="mb-6 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white">
              ESTACIONE
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-primary-green">
              HOSPEDE-SE
            </h1>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white">
                E VOE
              </h1>
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Plane className="h-8 w-8 md:h-14 md:w-14 text-white/80 transform -rotate-45 mt-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* TEXTO DESCRIPTIVO (Minimalista: Fuente fina y legible) */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg md:text-xl font-light text-gray-200 max-w-xl mb-10 leading-relaxed tracking-wide"
          >
            A tranquilidade que sua viagem merece. Deixe seu carro seguro no{" "}
            <strong className="font-semibold text-white">
              Hotel Colonial Iguaçu
            </strong>{" "}
            e aproveite nosso transfer exclusivo.
          </motion.p>

          {/* BENEFICIOS (Limpios, sin cajas, solo iconos y texto) */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-8 mb-12 border-l border-white/20 pl-6"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary-green mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Proximidade
                </span>
              </div>
              <span className="font-light text-white">800m do Aeroporto</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary-green mb-1">
                <Car className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Logística
                </span>
              </div>
              <span className="font-light text-white">
                Transfer Grátis (24h)
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary-green mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Segurança
                </span>
              </div>
              <span className="font-light text-white">Monitoramento Total</span>
            </div>
          </motion.div>

          {/* ACCIONES */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href="https://wa.me/558008191993?text=Olá%21+Vi+a+promoção+do+Estacionamento+no+site+e+quero+reservar+pelos+canais+diretos."
              className="group relative px-8 py-4 bg-white text-green-900 rounded-full font-medium transition-transform hover:scale-105"
            >
              Falar no WhatsApp
              <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/60 transition-all scale-105 group-hover:scale-110"></span>
            </Link>

            <Link
              href="#package-info"
              className="flex items-center mb-4 sm:mb-0 gap-2 text-white font-light hover:text-primary-green transition-colors"
            >
              Ver tabela de preços
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
