"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const Localization = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section
      id="location"
      className="py-16 px-4 sm:px-6 font-inter lg:px-8 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-green-950 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossa Localização
        </motion.h2>
        <motion.div
          className="relative bg-white shadow-2xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=colonial%20autopark%20foz%20do%20igua%C3%A7u&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="Colonial Autopark Foz do Iguaçu"
              aria-label="Mapa interativo mostrando a localização do Colonial Autopark em Foz do Iguaçu"
              className="w-full h-[20rem]"
              style={{ border: 0 }}
            ></iframe>
          </div>

          <motion.div
            className={`absolute flex left-0 bottom-0 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 bg-green-950 text-white p-6 rounded-tr-lg transition-all duration-300 ease-in-out ${
              isExpanded ? "h-full" : "h-auto"
            }`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4 flex justify-center flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">Colonial Autopark</h3>
                <div className="text-yellow-400 text-2xl">★★★</div>
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-3 text-sm">
                      <p className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5" />
                        Rodovia das Cataratas Km 20, 11237
                        <br />
                        Parque Nacional do Iguaçu, Foz do Iguaçu
                      </p>
                      <p className="flex items-center">
                        <Clock className="mr-2 h-5 w-5" />
                        Aberto 24 horas
                      </p>
                      <p className="flex items-center">
                        <Phone className="mr-2 h-5 w-5" />
                        +55 45 3527-7711
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex flex-col sm:flex-row gap-4 my-4">
                <a
                  href="https://www.google.com/maps/place/Colonial+Auto+Park/@-25.6073154,-54.4918961,17z/data=!3m1!4b1!4m6!3m5!1s0x94f69574b06b3e1d:0x8a996b09d354009a!8m2!3d-25.6073154!4d-54.4918961!16s%2Fg%2F11q8jjyr8m?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-green-950 rounded-full font-semibold text-sm hover:bg-green-100 transition-colors duration-300"
                >
                  Ver no Google Maps
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <button
                  onClick={toggleExpand}
                  className="inline-flex items-center justify-center px-4 py-2 bg-green-700 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-colors duration-300"
                >
                  {isExpanded ? "Menos detalhes" : "Mais detalhes"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Localization;
