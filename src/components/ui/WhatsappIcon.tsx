"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <div className="fixed reserve-whatsapp bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Etiqueta de texto (Solo visible en Hover/Desktop) */}
      <div className="hidden md:block opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-white text-green-900 px-3 py-1.5 rounded-lg shadow-md text-sm font-bold border border-green-100 mr-2 pointer-events-none">
        Falar no WhatsApp
      </div>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        href="https://wa.me/558008191993?text=Olá%21+Vi+a+promoção+do+Estacionamento+no+site+e+quero+reservar+pelos+canais+diretos."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Falar com atendente no WhatsApp"
      >
        {/* Efecto de Onda (Ping Animation) */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30"></span>

        {/* Icono */}
        <FaWhatsapp size={32} className="relative z-10" />

        {/* Notificación roja (Punto de atención) */}
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white z-20"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
