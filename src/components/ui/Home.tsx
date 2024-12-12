"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Footer from "./Footer";
import Localization from "./Localization";

type Package = {
  title: string;
  description: string;
  items: string[];
  subtitle: string;
  borderColor: string;
  price: string;
};

const packages: Package[] = [
  {
    title: "Pacote até 4 dias",
    description:
      "Você pode utilizar a diária antes do embarque ou no retorno da sua viagem",
    items: [
      "Serviço de café no quarto para check-out entre 03:00 a 05:00 da manha",
      "1 diária em apartamento Single ou Double em categoria Standard",
      "Até 2 crianças com até 5 anos no mesmo quarto dos pais não pagam.",
      "Traslado gratuito Hotel – Aeroporto – Hotel.",
      "Não cobramos taxas adicionais, como ISS ou taxa de serviços.",
    ],
    subtitle: "1 Diária de Hotel + 4 Dias de Estacionamento",
    borderColor: "border-purple-500",
    price: "R$ 500,00",
  },
  {
    title: "Pacote até 7 dias",
    description:
      "Você pode utilizar a diária antes do embarque ou no retorno da sua viagem",
    items: [
      "Serviço de café no quarto para check-out entre 03:00 a 05:00 da manha",
      "1 diária em apartamento Single ou Double em categoria Standard",
      "Até 2 crianças com até 5 anos no mesmo quarto dos pais não pagam.",
      "Traslado gratuito Hotel – Aeroporto – Hotel.",
      "Não cobramos taxas adicionais, como ISS ou taxa de serviços.",
    ],
    subtitle: "1 Diária de Hotel + 7 Dias de Estacionamento",
    borderColor: "border-teal-500",
    price: "R$ 546,00",
  },
  {
    title: "Pacote até 14 dias",
    description:
      "Você pode utilizar a diária antes do embarque ou no retorno da sua viagem",
    items: [
      "Serviço de café no quarto para check-out entre 03:00 a 05:00 da manha",
      "1 diária em apartamento Single ou Double em categoria Standard",
      "Até 2 crianças com até 5 anos no mesmo quarto dos pais não pagam.",
      "Traslado gratuito Hotel – Aeroporto – Hotel.",
      "Não cobramos taxas adicionais, como ISS ou taxa de serviços.",
    ],
    borderColor: "border-yellow-500",
    subtitle: "1 Diária de Hotel + 14 Dias de Estacionamento",
    price: "R$ 630,00",
  },
];

const HomePage = () => {
  const [numPeople, setNumPeople] = useState(2);
  const getAdjustedPrice = (pack: Package) => {
    if (numPeople === 2) return pack.price;

    if (numPeople === 3) {
      switch (pack.title) {
        case "Pacote até 4 dias":
          return "R$ 635,00";
        case "Pacote até 7 dias":
          return "R$ 681,00";
        case "Pacote até 14 dias":
          return "R$ 765,00";
        default:
          return pack.price;
      }
    }

    return pack.price;
  };

  return (
    <div className=" text-black overflow-hidden space-y-7">
      <Header />
      <WhoWeAre />
      <section
        id="packs"
        className="flex flex-col items-center py-10 mb-3 font-inter bg-green-950 bg-opacity-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Pacotes de Hospedagem</h2>
          <p className="text-gray-600 mb-4 px-3 md:px-0">
            Escolha o pacote que melhor se adapta à sua viagem e aproveite
            nossos benefícios exclusivos.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              className={`py-2 px-4 text-xs rounded-md ${
                numPeople === 2 ? "bg-primary-green text-white" : "bg-gray-200"
              }`}
              onClick={() => setNumPeople(2)}
            >
              2 Pessoas
            </button>
            <button
              className={`py-2 px-4 text-xs rounded-md ${
                numPeople === 3 ? "bg-primary-green text-white" : "bg-gray-200"
              }`}
              onClick={() => setNumPeople(3)}
            >
              3 Pessoas
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {packages.map((pack, index) => {
            // Ajustar el segundo ítem de acuerdo al número de personas
            const adjustedItems = pack.items.map((item, itemIndex) =>
              itemIndex === 1
                ? numPeople === 3
                  ? "1 diária em apartamento Triplo em categoria Standard"
                  : "1 diária em apartamento Single ou Double em categoria Standard"
                : item
            );

            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md border-t-4 ${pack.borderColor} w-[23rem] md:w-[25rem] p-6`}
              >
                <h2 className="text-lg font-semibold mb-2">{pack.title}</h2>
                <p className="text-[2.5rem] xl:text-[3rem] font-black text-gray-700 my-4">
                  {getAdjustedPrice(pack)}{" "}
                  <span className="text-sm text-bold">
                    / {numPeople} pessoa{numPeople > 1 ? "s" : ""}
                  </span>
                </p>
                <p className="text-sm text-gray-600 pb-4">{pack.subtitle}</p>
                <p className="text-gray-800 italic mb-4 text-xs text-center">
                  {pack.description}
                </p>

                <ul className="text-gray-500 mb-4 list-disc space-y-1 pl-5 text-sm">
                  {adjustedItems.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/554535297711?text=Tenho%20interesse%20no%20pacote:%20${encodeURIComponent(
                    pack.title
                  )}%20-%20${encodeURIComponent(
                    pack.subtitle
                  )}%20pelo%20valor%20de%20${encodeURIComponent(
                    getAdjustedPrice(pack)
                  )}%20para%20${numPeople}%20pessoa${numPeople > 1 ? "s" : ""}`}
                  target="_blank"
                  className="md:ml-4 bg-primary-green font-medium text-gray-100 btn w-full md:w-auto reserve-whatsapp"
                >
                  Reserve aqui
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="mx-auto flex justify-center">
        <Image alt="banner" width={800} height={800} src="/banner.png" />
      </div>
      <Services />

      <Localization />
      <Footer />
      {/* Ícono de WhatsApp */}
      <a
        href="https://wa.me/554535297711"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-10 bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-all duration-300 reserve-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
};

export default HomePage;
