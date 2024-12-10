import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
