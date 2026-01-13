"use client";

import { motion } from "framer-motion";
import { Car, BedDouble, Plane, Coffee, UtensilsCrossed } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      icon: Car,
      title: "Serviço Autopark",
      description:
        "Seu veículo seguro e pronto para sua chegada. O Autopark oferece estacionamento com o melhor custo-benefício da região.",
      note: "Condições especiais para hóspedes",
    },
    {
      icon: BedDouble,
      title: "Hospedagem",
      description:
        "Evite o estresse pré-voo. Desfrute de uma noite de sono tranquila em nossas acomodações e acorde revigorado.",
      note: "Suites Confortáveis e Econômicas",
    },
    {
      icon: Plane,
      title: "Transfer Aeroporto (IGU)",
      description:
        "Leva e traz ao Aeroporto Internacional de Foz. Necessário informar dados do voo antecipadamente.",
      note: "Gratuito em Reservas Diretas",
    },
    {
      icon: Coffee,
      title: "Café da Manhã",
      description:
        "Buffet completo e variado para sua degustação antes do embarque ou na sua chegada de viagem.",
      note: "Disponível para hóspedes e passantes",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurante",
      description:
        "Serviço à la carte de Almoço e Jantar disponível diariamente. Mais comodidade para sua escala sem sair do hotel.",
      note: "Cardápio variado À la carte",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 font-inter bg-green-50/50 relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-green-950 mb-6 tracking-tight"
          >
            Comodidade Completa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-light"
          >
            Garanta tranquilidade ao estacionar seu veículo com segurança e
            facilidade. Nossa estrutura oferece muito mais do que apenas uma
            vaga.
          </motion.p>
        </div>

        {/* GRID DE SERVICIOS - Centrado */}
        <div className="flex flex-wrap justify-center gap-8">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border-t-4 border-green-600 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="p-8 flex-grow">
                <div className="mb-6 inline-flex items-center justify-center p-3 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors">
                  <item.icon
                    size={32}
                    className="text-green-700"
                    strokeWidth={1.5}
                  />
                </div>

                <h4 className="text-xl font-bold text-green-950 mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer Informativo (Sin precios) */}
              <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-bold uppercase tracking-wide text-green-800">
                    {item.note}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
