const Localization = () => {
  return (
    <section id="location" className="padding-container">
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Localizaçao
      </h3>
      <section className="flex items-center justify-center my-10 relative px-3 font-inter">
        <div className="relative bg-white w-full shadow-lg rounded-lg overflow-hidden">
          {/* Mapa de fondo */}
          <div className="absolute inset-0 z-0">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=colonial%20autopark%20foz%20do%20igua%C3%A7u&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="colonial autopark foz do iguaçu"
              aria-label="colonial autopark foz do iguaçu"
              className="w-full h-full"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* Contenido del hotel */}
          <div
            className="relative text p-6 w-[47%] xl:w-[35%] bg-green-950 text-white z-10 flex-1"
            style={{
              clipPath:
                "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)",
            }}
          >
            <h4 className="text-lg font-bold mb-2">★★★</h4>
            <h2 className="text-2xl font-bold">Colonial Autopark</h2>
            <p className="text-sm mt-2">
              Rodovia das Cataratas Km 20, 11237 <br />
              Parque Nacional do Iguaçu, Foz do Iguaçu
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Localization;
