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
import WhatsAppButton from "./WhatsappIcon";

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

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
