"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Footer from "./Footer";
import Localization from "./Localization";
import Pacotes from "./Pacotes";

const HomePage = () => {
  return (
    <div className=" text-black overflow-hidden space-y-7">
      <Header />
      <Pacotes />
      <WhoWeAre />

      {/*    <div className="mx-auto flex justify-center">
        <Image alt="banner" width={800} height={800} src="/banner.png" />
      </div> */}
      <Services />

      <Localization />
      <Footer />
      {/* Ícono de WhatsApp */}
      <a
        href="https://wa.me/558008191993"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-10 bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-2 flex items-center justify-center transition-all duration-300 reserve-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
};

export default HomePage;
