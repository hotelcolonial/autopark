"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BadgePercent, InfoIcon, Plane, Star } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-green-100 via-green-50 to-white font-inter relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-primary-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Promotional ribbon */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-24 md:top-32 -left-2 z-20"
      >
        <div className="bg-red-500 text-white py-2 px-4 md:px-6 rounded-r-full shadow-lg flex items-center gap-2 transform -rotate-2">
          <BadgePercent className="h-5 w-5" />
          <span className="font-bold text-sm md:text-base">
            PROMOÇÃO ESPECIAL
          </span>
        </div>
      </motion.div>

      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 font-black relative z-10 pt-10 md:pt-0">
        <div className="max-w-7xl w-full space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-sm md:text-base font-medium text-green-800 bg-green-100 inline-block px-4 py-1 rounded-full">
              Vai viajar e embarcar saindo do aeroporto internacional de Foz do
              Iguaçu?
            </h2>

            <h1 className="text-[3.5rem] md:text-[6rem] 2xl:text-[7rem] leading-[2.8rem] md:leading-[4.8rem] 2xl:leading-[5.5rem] text-green-950 drop-shadow-sm">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block"
              >
                ESTACIONE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-primary-green relative"
              >
                HOSPEDE-SE
                <span className="absolute -right-8 top-0 text-yellow-400">
                  <Star className="h-8 w-8 md:h-12 md:w-12 fill-yellow-400" />
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="block flex items-center justify-center gap-2"
              >
                VOE
                <Plane className="h-10 w-10 md:h-16 md:w-16 inline-block transform rotate-45" />
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm sm:text-base font-medium mb-6">
              Serviço exclusivo do{" "}
              <Link
                href="https://hotelcolonialfoz.com.br/"
                className="inline-block"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-white px-3 py-2 rounded-md bg-primary-green font-light font-nautical hover:bg-green-900 transition-colors duration-300 text-lg sm:text-3xl hotel-link shadow-md"
                >
                  Hotel Colonial Iguaçu
                </motion.span>
              </Link>
            </p>

            <div className="flex flex-col sm:flex-row font-inter items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://wa.me/558008191993?text=Olá%21%20Quero%20saber%20sobre%20o%20estacionamento"
                  target="_blank"
                  className="inline-block bg-green-900 text-white font-medium text-sm sm:text-md px-8 py-3 rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg"
                >
                  Fale conosco pelo WhatsApp!
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#package-info"
                  className="inline-block bg-primary-green text-white font-medium text-sm sm:text-md px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                >
                  Ver Pacotes Promocionais
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/*       <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 mx-auto max-w-2xl"
          >
            <Alert
              variant="default"
              className="bg-amber-50 border-amber-200 shadow-md"
            >
              <InfoIcon className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800 font-semibold text-base">
                Oferta por tempo limitado!
              </AlertTitle>
              <AlertDescription className="text-amber-700">
                Aproveite até 30% de desconto em pacotes de estacionamento +
                hospedagem. Reserve agora e garanta sua vaga!
              </AlertDescription>
            </Alert>
          </motion.div> */}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 0.2 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden"
        >
          <div className="w-full h-full max-w-6xl">
            <Image
              src="/airport.jpg"
              layout="fill"
              objectFit="cover"
              alt="Aeroporto de Foz do Iguaçu"
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating badge */}
      {/*   <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.2,
        }}
        className="absolute top-40 right-10 md:right-20 z-20 hidden md:block"
      >
        <div className="bg-red-500 text-white h-24 w-24 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12">
          <span className="text-xs font-light">ATÉ</span>
          <span className="text-2xl font-bold">30%</span>
          <span className="text-xs font-light">OFF</span>
        </div>
      </motion.div> */}
    </div>
  );
}
