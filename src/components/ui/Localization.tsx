"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Localization = () => {
  // Enlaces directos para navegación GPS (UX vital para conductores)
  const googleMapsUrl =
    "https://www.google.com/maps/dir//Colonial+Auto+Park,+Foz+do+Igua%C3%A7u";
  const wazeUrl = "https://waze.com/ul?q=Colonial+Auto+Park";

  return (
    <section
      id="location"
      className="py-20 px-6 font-inter bg-slate-50 relative overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-green-50/50 skew-y-3 transform origin-bottom-left -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-green-950 mb-4 tracking-tight">
            Localização Privilegiada
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
            Estamos estrategicamente posicionados na Rodovia das Cataratas, o
            corredor turístico de Foz, e a poucos segundos do seu portão de
            embarque.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* 1. INFO CARD (Izquierda) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Destacado de Proximidad */}
            <div className="bg-green-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-800 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 opacity-80">
                  <Navigation className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Distância do Aeroporto
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-white">800</span>
                  <span className="text-xl font-light text-green-200">
                    metros
                  </span>
                </div>
                <p className="text-sm font-light text-green-100 border-t border-white/10 pt-4 mt-2">
                  Menos de 3 minutos de transfer até o terminal de embarque.
                </p>
              </div>
            </div>

            {/* Datos de Contacto y Dirección */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-green-950 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Endereço
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Rodovia das Cataratas, Km 20 - Nº 11237
                  <br />
                  Parque Nacional do Iguaçu
                  <br />
                  Foz do Iguaçu - PR
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-950 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Funcionamento
                </h3>
                <p className="text-slate-600 font-light">
                  Aberto 24 horas / 7 dias por semana
                  <br />
                  <span className="text-xs text-slate-400">
                    Recepção e Segurança constante
                  </span>
                </p>
              </div>

              {/* Botones de Navegación (Waze/Maps) */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <Link
                  href={googleMapsUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 text-slate-700 font-medium text-sm hover:bg-green-50 hover:text-green-800 transition-colors group"
                >
                  Google Maps
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 2. MAPA (Derecha) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-full min-h-[400px] lg:min-h-[600px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=colonial%20autopark%20foz%20do%20igua%C3%A7u&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
              title="Colonial Autopark Foz do Iguaçu"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(0%)" }} // Puedes poner grayscale(100%) si quieres un look más sobrio
              allowFullScreen
            ></iframe>

            {/* Badge flotante sobre el mapa */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-green-900 border border-white/50">
              📍 Colonial Auto Park
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Localization;
