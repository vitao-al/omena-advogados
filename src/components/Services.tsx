import React from 'react';
import { Tally5, Scale,Users, Landmark } from 'lucide-react';

const services = [
  {
    icon: <Tally5 className="h-8 w-8" />,
    title: 'Direito Criminal',
    description: 'O Direito Criminal regula crimes e punições, assegurando justiça e os direitos de todos os envolvidos.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Direito Cívil',
    description: 'Contratos, responsabilidade civil, direito das sucessões e família.'
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: 'Direito Previdenciário',
    description: 'O Direito Previdenciário garante ao cidadão proteção em casos de aposentadoria, doença, maternidade e outros riscos sociais.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossos Serviços</h2>
          <p className="text-neutral-800 dark:text-white max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços jurídicos para atender às suas necessidades
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gold-500 dark:text-gold-500 mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold font-serif text-neutral-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}