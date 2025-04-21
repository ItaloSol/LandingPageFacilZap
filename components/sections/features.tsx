'use client';

import { Card } from "@/components/ui/card";
import { ShoppingBag, Terminal, Headphones } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: ShoppingBag,
    title: "Loja Online Profissional",
    description: "Sua vitrine virtual 24/7 com design responsivo e checkout otimizado para conversão"
  },
  {
    icon: Terminal,
    title: "PDV Eficiente",
    description: "Controle total do seu estoque e vendas com relatórios detalhados"
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Atendimento personalizado para garantir o sucesso do seu negócio"
  }
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-[#0f172a] text-white" ref={sectionRef} id="recursos">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            data-animate
          >
            Recursos Exclusivos
          </h2>
          <p 
            className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            data-animate
          >
            Tudo que você precisa para vender mais
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-[#1e3a8a] border-none"
                data-animate
                style={{ 
                  animationName: 'slideUp',
                  animationDuration: '0.6s',
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#f97316] transform transition-transform group-hover:rotate-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}