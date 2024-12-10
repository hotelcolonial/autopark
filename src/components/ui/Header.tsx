import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
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
              <span className="text-gray-100 px-2 rounded-md py-1 bg-primary-green hover:bg-green-900 font-nautical text-[1.5rem] md:text-[2rem] hotel-link">
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
  );
};

export default Header;
