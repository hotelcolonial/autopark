import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ConsentProvider } from "./contexts/ConsentContext";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title:
    "Colonial Autopark - Serviço de Estacionamento do Hotel Colonial Iguaçu",
  description:
    "Descubra o Autopark Colonial, o exclusivo serviço de estacionamento do Hotel Colonial, projetado para oferecer conforto, segurança e eficiência aos nossos hóspedes. Estacione com confiança e aproveite sua estadia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <ConsentProvider>
        <body>
          <GoogleTagManager gtmId="GTM-P74VFTHL" />
          {children}
          <CookieConsent />
        </body>
      </ConsentProvider>
    </html>
  );
}
