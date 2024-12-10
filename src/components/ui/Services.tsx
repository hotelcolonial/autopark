import {
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineCustomerService,
  AiOutlineSafety,
} from "react-icons/ai";

const Services = () => {
  return (
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
                Seu veículo seguro e pronto para sua chegada. O Autopark oferece
                estacionamento seguro e acessível, com o melhor custo-benefício
                e total tranquilidade durante sua estadia.
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
                nossas acomodações confortáveis e acorde revigorado, pronto para
                sua viagem.
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
                Obrigatório agendamento no momento do check-in | Custo: R$35,00
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
                oferecendo mais tempo e economia, seja no seu embarque, seja na
                sua chegada.
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                Segunda a segunda, das 11:30 às 23:00 | Valores de acordo com o
                nosso cardápio à la carte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
