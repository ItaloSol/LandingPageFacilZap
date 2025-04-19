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
    <section className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              data-animate
              style={{ 
                animationName: 'slideUp',
                animationDuration: '0.6s',
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary transform transition-transform group-hover:rotate-6" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}