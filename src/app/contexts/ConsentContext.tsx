"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

type ConsentType = {
  analytics: boolean;
  advertising: boolean;
};

type ConsentContextType = {
  consent: ConsentType;
  setConsent: React.Dispatch<React.SetStateAction<ConsentType>>;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [consent, setConsent] = useState<ConsentType>(() => {
    if (typeof window !== "undefined") {
      const savedConsent = localStorage.getItem("cookieConsent");
      return savedConsent
        ? JSON.parse(savedConsent)
        : { analytics: false, advertising: false };
    }
    return { analytics: false, advertising: false };
  });

  useEffect(() => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    if (consent.analytics || consent.advertising) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "ConsentConfiguredEvent", consent });
    }
  }, [consent]);

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
