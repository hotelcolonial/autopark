import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ConsentProvider } from "./contexts/ConsentContext";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title:
    "Colonial Autopark - Serviço de Estacionamento do Hotel Colonial Iguaçu",
  description:
    "Descubra o Autopark Colonial, o exclusivo serviço de estacionamento do Hotel Colonial, projetado para oferecer conforto, segurança e eficiência aos nossos hóspedes. Estacione com confiança e aproveite sua estadia.",
};

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <ConsentProvider>
        <body className={cn("antialiased", fontSans.variable)}>
          <GoogleTagManager gtmId="GTM-P74VFTHL" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <CookieConsent />
        </body>
      </ConsentProvider>
    </html>
  );
}
