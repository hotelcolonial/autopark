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
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white z-50 shadow-lg animate-slide-up">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CookieIcon className="h-6 w-6 text-gray-600" />
          <div>
            <h2 className="text-lg font-semibold">Política de Cookies</h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Usamos cookies para personalizar conteúdo, analisar o tráfego e
              melhorar nossos serviços. Sua privacidade é importante para nós.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300 text-sm"
          >
            Rejeitar
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300 text-sm"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
};
