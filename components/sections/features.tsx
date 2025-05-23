'use client';

import { Card } from "@/components/ui/card";
import { Users, Layers, MessageCircle, Receipt } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Users,
    title: "Gestão de Vendedores",
    description: "Controle total de sua equipe de vendas com comissões, metas e relatórios individuais"
  },
  {
    icon: Layers,
    title: "Múltiplos Catálogos",
    description: "Organize seus produtos em diferentes catálogos para cada público ou canal de venda"
  },
  {
    icon: MessageCircle,
    title: "Integração WhatsApp Completa",
    description: "Automatize vendas, atendimento e acompanhamento de pedidos direto pelo WhatsApp"
  },
  {
    icon: Receipt,
    title: "Emissão de Nota Fiscal",
    description: "Emita notas fiscais automaticamente, integrado ao seu processo de venda"
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
            Diferenciais Exclusivos
          </h2>
          <p 
            className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            data-animate
          >
            Os pilares que fazem a diferença no seu negócio
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
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