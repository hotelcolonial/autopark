import Image from "next/image";
import Navbar from "./Navbar";
import {
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineCustomerService,
  AiOutlineSafety,
} from "react-icons/ai";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className=" text-black overflow-hidden space-y-7">
      <div className="h-screen padding-container flex flex-col mb-6 overflow-hidden">
        <Navbar />
        <div className="relative flex items-center flex-grow font-black font-inter">
          {/* Contenedor de texto */}
          <div className="space-y-2 z-10 relative bg-white py-8 md:px-10 ">
            <p className="text-xs md:text-base font-light">
              Vai viajar e embarcar saindo do aeroporto internacional de Foz do
              Iguaçu?
            </p>
            <h1 className="text-[3.5rem] md:text-[6rem] 2xl:text-[7rem] leading-[4rem] md:leading-[4.8rem] 2xl:leading-[5.5rem] text-green-950">
              ESTACIONE <br /> HOSPEDE-SE <br />
              VOE
            </h1>
            <p className="text-xs md:text-base font-light py-2">
              Serviço exclusivo do{" "}
              <Link href="https://hotelcolonialfoz.com.br/">
                <span className="text-gray-100 px-2 rounded-md py-1 bg-primary-green hover:bg-green-900 font-nautical text-[1.5rem] md:text-[2rem]">
                  Hotel Colonial Iguaçu
                </span>
              </Link>
            </p>
            <div>
              <Image
                src="/airport.jpg"
                width={1400} // Tamaño máximo para imágenes grandes
                height={900}
                alt="parking"
                className="object-contain sm:hidden rounded-xl py-3 opacity-70"
              />
            </div>
          </div>

          <div className="hidden sm:flex absolute inset-0 justify-end items-center z-0">
            <div className="w-[1000px]">
              <Image
                src="/airport.jpg"
                width={1400} // Tamaño máximo para imágenes grandes
                height={900}
                alt="parking"
                className="object-contain rounded-3xl py-3 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-green-950 bg-opacity-10 py-12 font-inter">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div id="whoweare">
              <h3 className="text-gray-500 text-sm uppercase mb-2">
                Quem somos
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Colonial Auto Park
              </h2>
              <p className="text-gray-700 mb-6">
                Somos um serviço exclusivo oferecido pelo Hotel Colonial Iguaçu
                com o objetivo de proporcionar o melhor custo-benefício em
                serviços de estacionamento e hospedagem para o seu planejamento
                de viagem, seja a lazer ou a trabalho.
              </p>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Excelente custo-benefício no mercado.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Localizado próximo ao aeroporto.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Conforto e segurança para sua viagem.
                </li>
              </ul>
            </div>
            {/* Imagens */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/park4.png"
                alt="Cena de estacionamento 1"
                className="rounded-lg shadow-md object-cover"
              />
              <img
                src="/park2.png"
                alt="Cena de estacionamento 2"
                className="rounded-lg shadow-md"
              />
              <img
                src="/park3.png"
                alt="Cena de estacionamento 3"
                className="rounded-lg shadow-md col-span-2 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto flex justify-center">
        <Image alt="banner" width={800} height={800} src="/banner.png" />
      </div>
      <section id="services" className="py-24 font-inter padding-container">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Aproveite a comodidade e segurança do nosso serviço de Autopark
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                Garanta tranquilidade ao estacionar seu veículo com segurança e
                facilidade, sem preocupações adicionais.
              </p>
            </div>
          </div>

          {/* Seção de Serviços */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Nossos Serviços
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Serviço de Autopark */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineSafety size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Serviço Autopark
                </h4>
                <p className="text-sm text-gray-600">
                  Seu veículo seguro e pronto para sua chegada. O Autopark
                  oferece estacionamento seguro e acessível, com o melhor
                  custo-benefício e total tranquilidade durante sua estadia.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Valor com hospedagem: R$25,00 | Valor sem hospedagem: R$35,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCreditCard size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Hospedagem
                </h4>
                <p className="text-sm text-gray-600">
                  Descanso garantido: evite as surpresas de última hora e o
                  estresse pré-voo. Desfrute de uma noite de sono tranquila em
                  nossas acomodações confortáveis e acorde revigorado, pronto
                  para sua viagem.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Tarifa disponível em nosso motor de reservas (Reservar)
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCustomerService
                    size={30}
                    className="text-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Transporte
                </h4>
                <p className="text-sm text-gray-600">
                  Disponibilizamos serviços de leva e traz aeroporto sob
                  agendamento antecipado, apresentando todas as informações do
                  voo.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Gratuito na contratação de hospedagem e estacionamento |
                  Cobrança: Estacionamento sem hospedagem R$20,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineClockCircle size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Café da Manhã
                </h4>
                <p className="text-sm text-gray-600">
                  Para você que não abre mão de uma boa refeição antes de seguir
                  sua viagem, disponibilizamos toda estrutura de café da manhã
                  para sua degustação antes do embarque ou na sua chegada.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Gratuito na contratação de hospedagem e estacionamento |
                  Cobrança: Estacionamento sem hospedagem R$62,00 por pessoa
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCustomerService
                    size={30}
                    className="text-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Café Despertar
                </h4>
                <p className="text-sm text-gray-600">
                  Pensado exclusivamente para nosso hóspede que deixou o veículo
                  em nosso pátio, hospedou-se e irá embarcar entre 01h e 05h da
                  manhã.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Obrigatório agendamento no momento do check-in | Custo:
                  R$35,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCreditCard size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Almoço e Jantar
                </h4>
                <p className="text-sm text-gray-600">
                  Diariamente servimos almoço e jantar para sua comodidade,
                  oferecendo mais tempo e economia, seja no seu embarque, seja
                  na sua chegada.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Segunda a segunda, das 11:30 às 23:00 | Valores de acordo com
                  o nosso cardápio à la carte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="packs"
        className="flex flex-col items-center py-10 mb-3 font-inter bg-green-950 bg-opacity-10"
      >
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-2">Pacotes de Hospedagem</h2>
          <p className="text-gray-600 mb-8">
            Escolha o pacote que melhor se adapta à sua viagem e aproveite
            nossos benefícios exclusivos.
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Pacote 4 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-purple-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 4 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>

          {/* Pacote 7 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-teal-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 7 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>

          {/* Pacote 14 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-yellow-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 14 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="location" className="padding-container">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Localizaçao
        </h3>
        <section className="flex items-center justify-center my-10 relative px-3 font-inter">
          <div className="relative bg-white w-full shadow-lg rounded-lg overflow-hidden">
            {/* Mapa de fondo */}
            <div className="absolute inset-0 z-0">
              <iframe
                loading="lazy"
                src="https://maps.google.com/maps?q=colonial%20autopark%20foz%20do%20igua%C3%A7u&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
                title="colonial autopark foz do iguaçu"
                aria-label="colonial autopark foz do iguaçu"
                className="w-full h-full"
                style={{ border: 0 }}
              ></iframe>
            </div>

            {/* Contenido del hotel */}
            <div
              className="relative text p-6 w-[47%] xl:w-[35%] bg-green-950 text-white z-10 flex-1"
              style={{
                clipPath:
                  "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)",
              }}
            >
              <h4 className="text-lg font-bold mb-2">★★★</h4>
              <h2 className="text-2xl font-bold">Colonial Autopark</h2>
              <p className="text-sm mt-2">
                Rodovia das Cataratas Km 20, 11237 <br />
                Parque Nacional do Iguaçu, Foz do Iguaçu
              </p>
            </div>
          </div>
        </section>
      </section>
      <footer className="bg-green-100 text-sm text-gray-300 py-10 font-inter">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
          {/* Coluna esquerda */}
          <div>
            <h3 className="text-md font-bold text-gray-800 mb-4">
              Colonial AutoPark
            </h3>
            <p className="text-gray-800">Rodovia das Cataratas Km 20</p>
            <p className="text-gray-800">Foz do Iguaçu - PR</p>
            <p className="text-gray-800">reservas@hotelcolonialfoz.com.br</p>
            <p className="text-green-500 font-bold mt-4">
              Ligue Grátis: 0800 819 1993
            </p>
          </div>

          {/* Coluna central */}
          <div>
            <h3 className="text-md font-bold text-gray-800 mb-4">
              Horários de Atendimento
            </h3>
            <p className="text-gray-800">Segunda a Sexta-feira</p>
            <p className="text-gray-800">9:00 AM - 7:00 PM</p>
            <h3 className="text-md font-bold text-gray-800 mt-6">
              Políticas de Privacidade
            </h3>
            <p className="text-gray-800">
              Consulte nossas políticas de privacidade para mais informações.
            </p>
          </div>

          {/* Coluna direita */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4 text-gray-800 text-sm">Siga-nos</h3>
            <div className="flex gap-4 mb-6">
              <div className="">
                <Image
                  alt="logo"
                  src="/logo.png"
                  width={75}
                  height={70}
                  className="bg-primary-green py-2 px-1 rounded-lg"
                />
              </div>
              <div className="py-3 px-2 rounded-full">
                <Link href="https://hotelcolonialfoz.com.br/">
                  <Image
                    alt="logo"
                    src="/colonial-logo.png"
                    width={70}
                    height={60}
                  />
                </Link>
              </div>
            </div>
            <p className="text-xs text-center text-green-950">
              © Hotel Colonial 2024, Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      {/* Ícono de WhatsApp */}
      <a
        href="https://wa.me/5508008191993"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
};

export default HomePage;
