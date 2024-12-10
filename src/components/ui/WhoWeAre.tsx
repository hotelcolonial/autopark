const WhoWeAre = () => {
  return (
    <section className="bg-green-950 bg-opacity-10 py-12 font-inter">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div id="whoweare">
            <h3 className="text-gray-500 text-sm uppercase mb-2">Quem somos</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Colonial Auto Park
            </h2>
            <p className="text-gray-700 mb-6">
              Somos um serviço exclusivo oferecido pelo Hotel Colonial Iguaçu
              com o objetivo de proporcionar o melhor custo-benefício em
              serviços de estacionamento e hospedagem para o seu planejamento de
              viagem, seja a lazer ou a trabalho.
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
  );
};

export default WhoWeAre;
