"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-b font-inter from-green-50 to-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 font-black">
        <div className="max-w-7xl w-full space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-xs md:text-sm font-light">
              Vai viajar e embarcar saindo do aeroporto internacional de Foz do
              Iguaçu?
            </h2>
            <h1 className="text-[3.5rem] md:text-[6rem] 2xl:text-[7rem] leading-[2.8rem] md:leading-[4.8rem] 2xl:leading-[5.5rem] text-green-950">
              <span className="block">ESTACIONE</span>
              <span className="block text-primary-green">HOSPEDE-SE</span>
              <span className="block">VOE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm sm:text-base font-medium mb-4">
              Serviço exclusivo do{" "}
              <Link
                href="https://hotelcolonialfoz.com.br/"
                className="inline-block"
              >
                <span className="text-white px-3 py-2 rounded-md bg-primary-green font-light font-nautical hover:bg-green-900 transition-colors duration-300 text-lg sm:text-3xl hotel-link">
                  Hotel Colonial Iguaçu
                </span>
              </Link>
            </p>
            <Link
              href="https://wa.me/554535297711"
              target="_blank"
              className="inline-block bg-green-900 text-white font-light text-sm sm:text-md px-6 py-2 rounded-full hover:bg-green-800 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale conosco pelo WhatsApp!
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden"
        >
          <div className="w-full h-full max-w-6xl">
            <Image
              src="/airport.jpg"
              layout="fill"
              objectFit="cover"
              alt="Aeroporto de Foz do Iguaçu"
              className="rounded-3xl opacity-20"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
