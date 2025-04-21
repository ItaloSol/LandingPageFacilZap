'use client';

import { Card } from "@/components/ui/card";
import { Store, Smartphone, Share2, FileSpreadsheet } from "lucide-react";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: Store,
    title: "Loja online profissional e otimizada",
    description: "Uma vitrine digital completa, responsiva e otimizada para vendas"
  },
  {
    icon: Smartphone,
    title: "PDV moderno e fácil de usar",
    description: "Controle seu negócio de forma simples e eficiente"
  },
  {
    icon: Share2,
    title: "Integração com WhatsApp e redes sociais",
    description: "Conecte-se com seus clientes onde eles estiverem"
  },
  {
    icon: FileSpreadsheet,
    title: "Cadastro de produtos, pagamentos e relatórios automáticos",
    description: "Automatize suas operações e tome decisões baseadas em dados"
  }
];

export function BenefitsSection() {
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
    <section id="beneficios" className="py-24 bg-[#1e3a8a]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
            data-animate
          >
            Benefícios
          </h2>
          <p 
            className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto"
            data-animate
          >
            Uma solução completa para impulsionar seu negócio no mundo digital
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-[#0f172a] border-white/10"
                data-animate
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#14532d]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-[#f97316] transform transition-transform group-hover:rotate-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}