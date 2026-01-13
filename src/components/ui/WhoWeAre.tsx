"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ShieldCheck, BadgePercent, Hotel } from "lucide-react";

const WhoWeAre = () => {
  // Configuración de animación simple (Fade Up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20 md:py-28 font-inter overflow-hidden relative">
      {/* Elemento decorativo de fondo (sutil) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* COLUMNA DE TEXTO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            id="whoweare"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-500 text-xs font-bold tracking-widest uppercase mb-6">
              Nossa História & Propósito
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-6 leading-tight">
              Colonial <span className="text-green-600">Auto Park</span>
            </h2>

            <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
              Mais do que um estacionamento, somos uma extensão da hospitalidade
              do{" "}
              <strong className="font-medium text-slate-800">
                Hotel Colonial Iguaçu
              </strong>
              . Nascemos para oferecer tranquilidade logística para quem viaja a
              lazer ou trabalho, unindo a segurança de um hotel tradicional à
              conveniência de estar ao lado do aeroporto.
            </p>

            <ul className="space-y-6">
              {[
                {
                  icon: BadgePercent,
                  title: "Custo-benefício Inteligente",
                  desc: "Economia real comparado ao estacionamento oficial do aeroporto.",
                },
                {
                  icon: MapPin,
                  title: "Localização Estratégica",
                  desc: "A apenas 800m do Aeroporto Internacional de Foz (IGU).",
                },
                {
                  icon: ShieldCheck,
                  title: "Segurança Hoteleira",
                  desc: "Seu carro protegido dentro da estrutura monitorada do hotel.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="bg-green-50 p-3 rounded-xl group-hover:bg-green-100 transition-colors">
                    <item.icon
                      className="w-6 h-6 text-green-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-green-950">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light mt-1">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMNA DE IMÁGENES (Composición Galería) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative "
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Imagen 1 - Vertical: Estacionamiento */}
              <div className="relative h-64 md:h-80 w-full col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/park3.webp"
                  alt="Estacionamento amplo e seguro 24h"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay degradado para texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                {/* Texto visible sobre la imagen */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">
                    Segurança
                  </p>
                  <p className="text-lg font-bold leading-none">
                    Estacionamento
                  </p>
                </div>
              </div>

              {/* Imagen 2 - Cuadrada pequeña: Buffet / Gastronomía */}
              <div className="relative h-32 md:h-40 w-full rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-12 group">
                <Image
                  src="/park2.webp"
                  alt="Buffet de café da manhã e restaurante"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-700"
                />
                {/* Etiqueta flotante simple */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wide">
                    Gastronomia
                  </p>
                </div>
              </div>

              {/* Imagen 3 - Cuadrada pequeña: Habitaciones / Quartos */}
              <div className="relative h-32 md:h-40 w-full rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/park4.webp"
                  alt="Quartos confortáveis e suítes do hotel"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-700"
                />
                {/* Etiqueta flotante simple */}
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wide">
                    Acomodações
                  </p>
                </div>
              </div>
            </div>

            {/* Badge Flotante "Desde 19XX" o similar para dar autoridad */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-400/20 p-2 rounded-full">
                  <Hotel className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Garantia
                  </p>
                  <p className="text-sm font-bold text-green-950">
                    Hotel Colonial Iguaçu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
