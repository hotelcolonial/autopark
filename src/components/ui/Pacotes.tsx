"use client";

import { motion } from "framer-motion";
import {
  Check,
  Info,
  Utensils,
  Car,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageInfo = () => {
  const packages = [
    {
      title: "Curta Duração",
      subtitle: "Até 7 dias",
      price: "23,00",
      features: ["Vaga segura monitorada", "Acesso às áreas comuns na diária"],
      recommended: false,
    },
    {
      title: "Média Duração",
      subtitle: "Até 15 dias",
      price: "20,00",
      features: [
        "Vaga segura monitorada",
        "Melhor custo-benefício para férias",
      ],
      recommended: true,
    },
    {
      title: "Longa Duração",
      subtitle: "Acima de 15 dias",
      price: "18,00",
      features: ["Vaga segura monitorada", "Tarifa econômica progressiva"],
      recommended: false,
    },
  ];

  const whatsappUrl =
    "https://wa.me/558008191993?text=Olá%21%20Vi%20a%20promoção%20do%20Estacionamento%20no%20site%20e%20quero%20reservar%20pelos%20canais%20diretos.";

  return (
    <section
      id="package-info"
      className="py-20 px-6 font-inter bg-slate-50 text-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* 1. HEADER SECCIÓN & REGLA OBLIGATORIA */}
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-green-950 mb-4 tracking-tight">
              PACOTES DE ESTACIONAMENTO
            </h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Viaje tranquilo sabendo que seu carro está protegido no Hotel
              Colonial Iguaçu.
            </p>
          </motion.div>

          {/* Aviso de Hospedaje Obligatorio - Elegante pero visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-6 py-3 shadow-sm"
          >
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="text-sm md:text-base font-medium text-amber-900">
              Condição Exclusiva: Válido mediante reserva de{" "}
              <strong className="font-bold">01 diária de hospedagem</strong> (na
              ida ou na volta).
            </span>
          </motion.div>
        </div>

        {/* 2. ÁREA DE BENEFICIOS EXCLUSIVOS (Highlight Direct Booking) */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-green-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Por que reservar direto?
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  Reserve pelos Canais Oficiais e ganhe{" "}
                  <span className="text-yellow-400">Benefícios VIP</span>
                </h3>
                <p className="text-green-100 font-light mb-6">
                  Clientes que reservam via WhatsApp ou Site Oficial garantem
                  vantagens que não existem em outros sites de reserva.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Car className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Transfer Aeroporto (IGU) 100% Grátis
                      </h4>
                      <p className="text-sm text-green-200 font-light mt-1">
                        Reservou direto? Nós te levamos e buscamos sem custo.
                        <br />
                        <span className="text-xs opacity-70 italic">
                          (Para reservas via terceiros/sites externos, o
                          transfer é cobrado à parte).
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Utensils className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        Jantar Cortesia (Jan/Fev)
                      </h4>
                      <p className="text-sm text-green-200 font-light mt-1">
                        Para estadias em <strong>Janeiro e Fevereiro</strong>{" "}
                        reservadas diretamente conosco, o jantar é por nossa
                        conta para todos os hóspedes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA dentro del banner */}
              <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <p className="text-lg font-medium mb-6">
                  Garanta o melhor preço e todos os bônus agora.
                </p>
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-950 font-bold py-6 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  RESERVAR COM BÔNUS
                </Button>
                <p className="text-xs text-green-300 mt-4 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Atendimento oficial e seguro
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. GRID DE TARIFAS (Minimalista) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl flex flex-col
                ${
                  pkg.recommended
                    ? "border-green-500 shadow-lg scale-105 md:-mt-4 z-10"
                    : "border-slate-100 shadow-sm"
                }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-full tracking-widest">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800">
                  {pkg.title}
                </h3>
                <p className="text-slate-500 font-light text-sm mb-4">
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-500">A partir de</span>
                  <span className="text-4xl font-bold text-green-900">
                    R$ {pkg.price}
                  </span>
                  <span className="text-slate-500">/dia</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm font-light text-slate-600"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {/* Ítems fijos para todos */}
                <li className="flex items-start gap-3 text-sm font-light text-slate-600">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Transfer Gratuito{" "}
                  <span className="text-xs bg-green-100 text-green-800 px-1.5 rounded ml-1 font-medium h-fit self-center">
                    *Canais Oficiais
                  </span>
                </li>
              </ul>

              <Button
                variant={pkg.recommended ? "default" : "outline"}
                className={`w-full py-6 font-medium rounded-xl transition-all
                  ${
                    pkg.recommended
                      ? "bg-green-900 hover:bg-green-800 text-white"
                      : "border-slate-200 text-slate-600 hover:border-green-900 hover:text-green-900"
                  }`}
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                Cotar Agora <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer simple */}
        <div className="mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500 font-light">
            * Valores sujeitos a alteração sem aviso prévio. A gratuidade do
            transfer e o jantar cortesia são válidos exclusivamente para
            reservas efetuadas diretamente através do nosso site ou WhatsApp.
            Reservas via Booking, Expedia ou outras OTAs não incluem estes
            benefícios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
