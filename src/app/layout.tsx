import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Colonial Autopark - Serviço de Estacionamento do Hotel Colonial Iguaçu",
  description:
    "Descubra o Autopark Colonial, o exclusivo serviço de estacionamento do Hotel Colonial, projetado para oferecer conforto, segurança e eficiência aos nossos hóspedes. Estacione com confiança e aproveite sua estadia.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
