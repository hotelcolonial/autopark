"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PackageInfo = () => {
  const packages = [
    {
      title: "Pacote Básico",
      features: [
        "Estacionamento de até 7 dias.",
        "Transfer de ida e volta ao aeroporto.",
        /*    "Desconto especial na hospedagem – consulte condições.", */
        "Diária do estacionamento a partir de R$ 23,00.",
      ],
      colorClass: "border-primary-green",
      buttonClass: "bg-primary-green hover:bg-primary-green/90",
      iconClass: "text-primary-green",
    },
    {
      title: "Pacote Estendido",
      features: [
        "Estacionamento de até 15 dias.",
        "Transfer de ida e volta ao aeroporto.",
        /*     "Desconto variável na hospedagem – consulte valores.", */
        "Diária do estacionamento a partir de R$ 20,00.",
      ],
      colorClass: "border-blue-500",
      buttonClass: "bg-blue-500 hover:bg-blue-500/90",
      iconClass: "text-blue-500",
    },
    {
      title: "Pacote Completo",
      features: [
        "Estacionamento acima de 15 dias.",
        "Transfer de ida e volta ao aeroporto.",
        /*       "Desconto progressivo na hospedagem conforme a estadia.", */
        "Diária do estacionamento a partir de R$ 18,00.",
      ],
      colorClass: "border-red-500",
      buttonClass: "bg-red-500 hover:bg-red-500/90",
      iconClass: "text-red-500",
    },
  ];

  return (
    <section
      id="package-info"
      className="py-12 px-6 font-inter bg-gradient-to-r from-green-100 via-green-50 to-green-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Pacotes de Estacionamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conforto, conveniência e economia para sua viagem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`bg-white shadow-xl rounded-lg border-0 border-t-4 ${pkg.colorClass} h-full flex flex-col`}
            >
              <CardHeader className="border-b border-gray-200 pb-6">
                <CardTitle className="text-2xl font-bold text-center text-gray-800">
                  {pkg.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 py-6 flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`h-5 w-5 ${pkg.iconClass} mt-1 flex-shrink-0`}
                      />
                      <p className="text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center bg-gray-50 px-6 py-4 rounded-b-lg mt-auto">
                <Button
                  className={`${pkg.buttonClass} text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 w-full`}
                  onClick={() =>
                    window.open(
                      "https://wa.me/558008191993?text=Olá%21%20Quero%20saber%20sobre%20o%20estacionamento",
                      "_blank"
                    )
                  }
                >
                  RESERVE AGORA
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-gray-800 mb-6">
            Para conferir os valores e escolher o melhor pacote para sua viagem,
            entre em contato com nossa equipe.
          </p>
          <Button
            size="lg"
            className="bg-primary-green hover:bg-primary-green/90 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            onClick={() =>
              window.open(
                "https://wa.me/558008191993?text=Olá%21%20Quero%20saber%20sobre%20o%20estacionamento",
                "_blank"
              )
            }
          >
            FALE CONOSCO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackageInfo;
