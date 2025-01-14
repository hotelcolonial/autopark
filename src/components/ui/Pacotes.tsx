import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PackageInfo = () => {
  const benefits = [
    /* "Serviço de café no quarto para check-out entre 03:00 a 05:00 da manhã.", */
    "Diárias em apartamentos Single, Double ou Triplo em categoria Standard.",
    "1 criança com até 6 anos no mesmo quarto dos pais não paga.",
    "Traslado gratuito Hotel – Aeroporto – Hotel.",
    "Sem taxas adicionais, como ISS ou taxa de serviços.",
    "Opções flexíveis para estacionamento antes do embarque ou no retorno da sua viagem.",
    "Pacotes personalizáveis conforme sua necessidade.",
  ];

  return (
    <section
      id="package-info"
      className="py-12 px-6 bg-gradient-to-r from-green-100 via-green-50 to-green-100 font-sans"
    >
      <Card className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg  border-0 border-t-4 border-teal-500">
        <CardHeader className="border-b border-gray-200 pb-6">
          <CardTitle className="text-4xl font-extrabold text-center text-gray-800">
            Pacotes de Estacionamento + Hotel
          </CardTitle>
          <CardDescription className="text-center text-xl text-gray-600 mt-2">
            Conforto, conveniência e economia para sua viagem
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 py-6">
          <p className="text-gray-700 mb-8 text-lg text-center leading-relaxed">
            Oferecemos uma variedade de pacotes que combinam estacionamento e
            hospedagem, projetados para tornar sua viagem mais confortável e
            econômica. Cada pacote é flexível e pode ser personalizado de acordo
            com suas necessidades específicas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
                <p className="text-base text-gray-700 leading-6">{benefit}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center bg-gray-50 px-8 py-6 rounded-b-lg">
          <p className="text-lg font-medium text-center text-gray-800 mb-4">
            Para conferir os valores e escolher o melhor pacote para sua viagem,
            entre em contato com nossa equipe.
          </p>
          <Button
            size="lg"
            className="bg-primary-green hover:bg-primary-green/90 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            onClick={() => window.open("https://wa.me/558008191993", "_blank")}
          >
            RESERVE AGORA
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PackageInfo;
