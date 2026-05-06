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
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      transition: { staggerChildren: 0.18 },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col font-inter overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/airport.jpg"
          fill
          sizes="100vw"
          alt="Estacionamento próximo ao Aeroporto de Foz do Iguaçu"
          className="object-cover object-center opacity-90"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/25 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-20 flex-grow flex items-center px-6 md:px-16 lg:px-24 py-12">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center text-white"
        >
          <div className="max-w-3xl w-full pt-12 md:pt-0">
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

            <motion.div variants={fadeUpVariant} className="mb-6 relative">
              <div className="inline-flex items-center gap-2 mb-5 text-primary-green">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  800m do Aeroporto
                </span>
              </div>

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

            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 border-l sm:border-l-0 sm:border-t border-white/20 pl-6 sm:pl-0 sm:pt-6"
            >
              <Benefit
                icon={<Car className="w-5 h-5" />}
                title="Logística"
                text="Transfer Grátis 24h"
              />

              <Benefit
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Segurança"
                text="Monitoramento Total"
              />

              <Benefit
                icon={<Clock className="w-5 h-5" />}
                title="Praticidade"
                text="Check-in rápido"
              />
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="https://wa.me/558008191993?text=Olá%21+Vi+a+promoção+do+Estacionamento+no+site+e+quero+reservar+pelos+canais+diretos."
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-900 rounded-full font-medium transition-transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
                <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/60 transition-all scale-105 group-hover:scale-110" />
              </Link>

              <Link
                href="#package-info"
                className="flex items-center mb-4 sm:mb-0 gap-2 text-white font-light hover:text-primary-green transition-colors"
              >
                Ver tabela de preços
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpVariant}
            className="hidden lg:block border border-white/15 bg-white/10 backdrop-blur-md p-7 text-white shadow-2xl"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-green">
                Viagem sem preocupação
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white">
                Seu carro seguro enquanto você embarca tranquilo.
              </h2>
            </div>

            <div className="space-y-5">
              <SideBenefit
                icon={<MapPin className="w-5 h-5" />}
                title="Perto do aeroporto"
                text="Apenas 800m do Aeroporto Internacional de Foz do Iguaçu."
              />

              <SideBenefit
                icon={<Car className="w-5 h-5" />}
                title="Transfer exclusivo"
                text="Deslocamento prático entre o hotel e o aeroporto."
              />

              <SideBenefit
                icon={<ShieldCheck className="w-5 h-5" />}
                title="Estrutura segura"
                text="Estacionamento com monitoramento e apoio da equipe do hotel."
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 text-primary-green mb-1">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {title}
        </span>
      </div>
      <span className="font-light text-white">{text}</span>
    </div>
  );
}

function SideBenefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-primary-green mt-1">{icon}</div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-1">
          {title}
        </h3>
        <p className="font-light text-gray-200 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
