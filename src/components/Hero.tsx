import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
            alt="Escritório de advocacia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-full lg:max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excelência e Compromisso em Advocacia
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Omena & Advogados transforma conhecimento em excelência para fazer a diferença no Direito.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5582999786475&text&type=phone_number&app_absent=0&wame_ctl=1"
              className="inline-block bg-gold-500 dark:bg-gold-500 text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gold-500 dark:hover:bg-white hover:dark:text-gold-500 transition-colors text-sm md:text-base"
            >
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}