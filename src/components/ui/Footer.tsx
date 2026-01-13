"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-green-950 text-white py-16 font-inter border-t border-green-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Marca e Identidad */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black text-white tracking-tight">
                Colonial <span className="text-green-400">AutoPark</span>
              </h3>
              <p className="text-sm font-normal text-gray-100 leading-relaxed">
                A melhor opção de estacionamento com a segurança e hospitalidade
                do Hotel Colonial Iguaçu.
              </p>
            </div>

            {/* Logos con fondo BLANCO SÓLIDO */}
            <div className="flex gap-4 items-center">
              <div className="bg-green p-2 rounded-lg shadow-lg">
                <Image
                  alt="Logo AutoPark"
                  src="/logo.png"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              <Link
                href="https://hotelcolonialfoz.com.br/"
                target="_blank"
                className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
              >
                <Image
                  alt="Logo Hotel Colonial"
                  src="/colonial-logo.png"
                  width={60}
                  height={55}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Firma Meritum Hotéis */}
            <div className="pt-2">
              <span className="text-xs font-light text-gray-300 uppercase tracking-widest block mb-1">
                Operado por
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                by Meritum Hotéis
              </span>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-green-800 pb-2 inline-block">
              Fale Conosco
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-300 uppercase mb-1">
                    Central de Reservas
                  </span>
                  <a
                    href="tel:+554535297711"
                    className="text-white font-medium hover:text-green-300 transition-colors text-base"
                  >
                    +55 45 3529-7711
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-300 uppercase mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:reservas@hotelcolonialfoz.com.br"
                    className="text-white hover:text-green-300 transition-colors break-all"
                  >
                    reservas@hotelcolonialfoz.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación y Horario */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-green-800 pb-2 inline-block">
              Localização
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="leading-relaxed text-gray-100">
                  Rodovia das Cataratas, Km 20
                  <br />
                  Foz do Iguaçu - PR
                  <br />
                  <span className="text-xs text-green-300 font-medium mt-1 block">
                    Próximo ao Aeroporto (IGU)
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold">
                    Estacionamento: 24h
                  </span>
                  <span className="text-gray-300 text-xs block mt-1">
                    Atendimento Administrativo:
                    <br />
                    Seg-Sex: 09:00 - 19:00
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Links Legales y Social */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider border-b border-green-800 pb-2 inline-block">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-100 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="https://hotelcolonialfoz.com.br/"
                  target="_blank"
                  className="text-gray-100 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  Site Hotel Colonial <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white text-green-950 rounded-full hover:bg-green-600 hover:text-white transition-all shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-white text-green-950 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-400">
          <p>
            © {currentYear} Colonial AutoPark. Uma marca{" "}
            <strong className="text-white">Meritum Hotéis</strong>.
          </p>
          <div className="flex gap-6">
            <span>Todos os direitos reservados.</span>
            <span>Foz do Iguaçu, Brasil.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
