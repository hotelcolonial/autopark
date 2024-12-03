import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autopark Colonial - Servicio de Aparcamiento del Hotel Colonial",
  description:
    "Descubre Autopark Colonial, el exclusivo servicio de aparcamiento del Hotel Colonial diseñado para ofrecer comodidad, seguridad y eficiencia a nuestros huéspedes. Estaciona con confianza y disfruta de tu estadía.",
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
