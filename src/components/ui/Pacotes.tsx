"use client";

import { motion } from "framer-motion";
import {
  Check,
  Info,
  Utensils,
  Car,
  AlertCircle,
  ArrowRight,
  Plane,
  Bed,
  Percent,
  ShieldCheck,
  X,
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
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse na tarifa de Curta Duração, até 7 dias, a partir de R$ 23,00 por dia.",
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
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse na tarifa de Média Duração, até 15 dias, a partir de R$ 20,00 por dia.",
    },
    {
      title: "Longa Duração",
      subtitle: "Acima de 15 dias",
      price: "18,00",
      features: ["Vaga segura monitorada", "Tarifa econômica progressiva"],
      recommended: false,
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse na tarifa de Longa Duração, acima de 15 dias, a partir de R$ 18,00 por dia.",
    },
  ];

  const bookingOptions = [
    {
      title: "Retorno 50",
      subtitle: "Ida e volta com hospedagem",
      icon: <Percent className="w-6 h-6" />,
      highlight: true,
      description:
        "Reserve a ida e a volta conosco e ganhe 50% de desconto na segunda diária.",
      benefits: [
        "50% de desconto na segunda diária",
        "Transfer in/out ao aeroporto 24h",
        "Jantar de boas-vindas",
        "Estacionamento com tarifa conforme período",
      ],
      unavailable: [],
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no pacote Retorno 50. Quero saber mais sobre a reserva com ida e volta, 50% de desconto na segunda diária, transfer 24h e jantar de boas-vindas.",
    },
    {
      title: "Estacionamento + 01 Diária",
      subtitle: "Prático para embarcar tranquilo",
      icon: <Bed className="w-6 h-6" />,
      highlight: false,
      description:
        "Ideal para quem quer descansar antes ou depois da viagem com benefícios inclusos.",
      benefits: [
        "01 diária de hospedagem",
        "Transfer in/out ao aeroporto 24h",
        "Jantar de boas-vindas",
        "Estacionamento com tarifa conforme período",
      ],
      unavailable: [],
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no pacote Estacionamento + 01 Diária. Quero saber mais sobre hospedagem com estacionamento, transfer in/out 24h e jantar de boas-vindas.",
    },
    {
      title: "Somente Estacionamento",
      subtitle: "Apenas a vaga para seu carro",
      icon: <Car className="w-6 h-6" />,
      highlight: false,
      description:
        "Para quem precisa somente deixar o veículo em uma vaga segura durante a viagem.",
      benefits: ["Vaga segura monitorada", "Tarifa conforme período escolhido"],
      unavailable: ["Não inclui transfer in/out", "Não inclui jantar"],
      whatsappMessage:
        "Olá! Vim pelo site e tenho interesse no pacote Somente Estacionamento. Quero saber mais sobre valores e disponibilidade para deixar meu carro estacionado.",
    },
  ];

  const getWhatsappUrl = (message: string) => {
    return `https://wa.me/558008191993?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      className="py-20 px-6 font-inter bg-slate-50 text-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6"  id="package-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-green-950 mb-4">
              PACOTES DE ESTACIONAMENTO
            </h2>

            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
              Escolha entre estacionamento com hospedagem, benefícios especiais
              ou somente a vaga para seu carro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3 shadow-sm"
          >
            <Info className="w-5 h-5 text-green-700 flex-shrink-0" />

            <span className="text-sm md:text-base font-medium text-green-950">
              Benefícios especiais válidos para{" "}
              <strong className="font-bold">reservas diretas</strong> via site
              oficial ou WhatsApp.
            </span>
          </motion.div>
        </div>

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-sm transition-all hover:shadow-xl ${
                option.highlight
                  ? "bg-green-950 text-white border-green-900 lg:-mt-4"
                  : "bg-white text-slate-800 border-slate-100"
              }`}
            >
              {option.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-green-950 text-xs font-bold uppercase px-4 py-1 rounded-full tracking-widest">
                  Melhor benefício
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  option.highlight
                    ? "bg-white/10 text-yellow-400"
                    : "bg-green-50 text-green-800"
                }`}
              >
                {option.icon}
              </div>

              <span
                className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                  option.highlight ? "text-yellow-400" : "text-green-800"
                }`}
              >
                {option.subtitle}
              </span>

              <h3
                className={`text-2xl font-black mb-3 ${
                  option.highlight ? "text-white" : "text-green-950"
                }`}
              >
                {option.title}
              </h3>

              <p
                className={`font-light leading-relaxed mb-6 ${
                  option.highlight ? "text-green-100" : "text-slate-500"
                }`}
              >
                {option.description}
              </p>

              <ul className="space-y-3 mb-7 flex-grow">
                {option.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={`flex items-start gap-3 text-sm font-light ${
                      option.highlight ? "text-green-50" : "text-slate-600"
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        option.highlight ? "text-yellow-400" : "text-green-600"
                      }`}
                    />
                    {benefit}
                  </li>
                ))}

                {option.unavailable.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm font-light ${
                      option.highlight ? "text-green-200" : "text-slate-400"
                    }`}
                  >
                    <X className="w-5 h-5 flex-shrink-0 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() =>
                  window.open(getWhatsappUrl(option.whatsappMessage), "_blank")
                }
                className={`w-full py-6 rounded-full font-bold transition-transform hover:scale-105 ${
                  option.highlight
                    ? "bg-yellow-500 hover:bg-yellow-600 text-green-950"
                    : "bg-green-900 hover:bg-green-800 text-white"
                }`}
              >
                Consultar pacote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                  Reservas diretas
                </span>

                <h3 className="text-3xl font-black mb-4">
                  Benefícios exclusivos para quem reserva pelos{" "}
                  <span className="text-yellow-400">Canais Oficiais</span>
                </h3>

                <p className="text-green-100 font-light mb-6 leading-relaxed">
                  Ao reservar pelo WhatsApp ou site oficial, você garante acesso
                  aos pacotes com hospedagem, transfer 24h e jantar de
                  boas-vindas conforme a opção escolhida.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Plane className="w-6 h-6 text-yellow-400" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Transfer in/out ao aeroporto 24h
                      </h4>
                      <p className="text-sm text-green-200 font-light mt-1">
                        Incluso nos pacotes com hospedagem: Retorno 50 e
                        Estacionamento + 01 Diária.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Utensils className="w-6 h-6 text-yellow-400" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Jantar de boas-vindas
                      </h4>
                      <p className="text-sm text-green-200 font-light mt-1">
                        Cortesia disponível nos pacotes com hospedagem
                        reservados diretamente conosco.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-yellow-400" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        Estacionamento seguro
                      </h4>
                      <p className="text-sm text-green-200 font-light mt-1">
                        Disponível em todos os pacotes, com valores conforme o
                        período contratado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-white/10 text-center">
                <p className="text-lg font-medium mb-6">
                  Fale com nossa equipe e escolha o melhor pacote para sua
                  viagem.
                </p>

                <Button
                  onClick={() =>
                    window.open(
                      getWhatsappUrl(
                        "Olá! Vim pelo site e quero ajuda para escolher o melhor pacote de estacionamento para minha viagem."
                      ),
                      "_blank"
                    )
                  }
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-950 font-bold py-6 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  RESERVAR PELO WHATSAPP
                </Button>

                <p className="text-xs text-green-300 mt-4 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Atendimento oficial e seguro
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="prices" className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl font-black text-green-950 mb-3">
            TARIFAS DO ESTACIONAMENTO
          </h3>

          <p className="text-slate-500 font-light max-w-2xl mx-auto">
            Os valores abaixo permanecem conforme o período de permanência do
            veículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl flex flex-col ${
                pkg.recommended
                  ? "border-green-500 shadow-lg scale-105 md:-mt-4 z-10"
                  : "border-slate-100 shadow-sm"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-full tracking-widest">
                  Mais escolhido
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
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm font-light text-slate-600"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}

                <li className="flex items-start gap-3 text-sm font-light text-slate-600">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Valores aplicados conforme o pacote escolhido
                </li>
              </ul>

              <Button
                variant={pkg.recommended ? "default" : "outline"}
                className={`w-full py-6 font-medium rounded-xl transition-all ${
                  pkg.recommended
                    ? "bg-green-900 hover:bg-green-800 text-white"
                    : "border-slate-200 text-slate-600 hover:border-green-900 hover:text-green-900"
                }`}
                onClick={() =>
                  window.open(getWhatsappUrl(pkg.whatsappMessage), "_blank")
                }
              >
                Cotar agora <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            * Valores sujeitos a alteração sem aviso prévio. Benefícios como
            transfer in/out 24h, jantar de boas-vindas e desconto na segunda
            diária são válidos conforme o pacote contratado e exclusivamente
            para reservas diretas pelo site oficial ou WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
