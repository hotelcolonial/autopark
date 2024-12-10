"use client";

import { useConsent } from "@/app/contexts/ConsentContext";
import { useState, useEffect } from "react";
import { CookieIcon } from "lucide-react";

interface CookieConsent {
  analytics: boolean;
  advertising: boolean;
  hasChosenPreferences: boolean;
}

export const CookieConsent: React.FC = () => {
  const { consent, setConsent } = useConsent();
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      const parsedConsent: CookieConsent = JSON.parse(savedConsent);
      if (
        !parsedConsent.hasChosenPreferences ||
        (!parsedConsent.analytics && !parsedConsent.advertising)
      ) {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      analytics: true,
      advertising: true,
      hasChosenPreferences: true,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowBanner(false);
  };

  const handleReject = () => {
    const newConsent: CookieConsent = {
      analytics: false,
      advertising: false,
      hasChosenPreferences: true,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed font-inter inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <CookieIcon className="mr-2 h-6 w-6" />
            <h2 className="text-2xl font-black text-gray-800">
              Política de Cookies
            </h2>
          </div>
          <p className="text-center font-medium text-sm text-gray-600 mb-3">
            Ajude-nos a melhorar sua experiência
          </p>
          <p className="text-center text-sm text-gray-600 mb-3">
            Usamos cookies para personalizar conteúdo, analisar o tráfego e
            melhorar nossos serviços. Sua privacidade é importante para nós.
          </p>
          <p className="text-center text-xs text-gray-500 mb-6">
            Ao aceitar, você nos ajuda a oferecer uma experiência mais
            personalizada e eficiente.
          </p>
          <div className="flex justify-between text-xs">
            <button
              onClick={handleReject}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-black text-white rounded hover:bg-primary-green transition-colors duration-300"
            >
              Aceitar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
