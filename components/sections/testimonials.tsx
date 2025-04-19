'use client';

import { Card } from "@/components/ui/card";
import { Star, TrendingUp, ShoppingCart, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Comecei a vender no primeiro dia com a loja online! O suporte foi fundamental para configurar tudo rapidamente.",
    author: "Ana Silva",
    role: "Loja de Roupas",
    metrics: {
      icon: TrendingUp,
      value: "200%",
      label: "Aumento nas vendas"
    }
  },
  {
    text: "A integração com WhatsApp revolucionou nosso atendimento. Agora consigo gerenciar tudo em um só lugar!",
    author: "Carlos Santos",
    role: "Restaurante",
    metrics: {
      icon: Users,
      value: "3x",
      label: "Mais clientes"
    }
  },
  {
    text: "O PDV simplificou todo nosso processo. Antes perdíamos horas com planilhas, agora é tudo automático.",
    author: "Marina Costa",
    role: "Papelaria",
    metrics: {
      icon: ShoppingCart,
      value: "150+",
      label: "Vendas/dia"
    }
  }
];

export function TestimonialsSection() {
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
    <section className="py-24 bg-muted relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInDown"
              data-animate
            >
              Histórias de Sucesso
            </h2>
            <p 
              className="text-xl text-muted-foreground animate-fadeIn delay-300"
              data-animate
            >
              Veja como nossos clientes transformaram seus negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-lg transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'} delay-${(index + 2) * 200}`}
                data-animate
              >
                <div 
                  className={`flex gap-1 mb-6 animate-bounce delay-${(index + 4) * 200}`}
                  data-animate
                >
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-4 mb-6 flex items-center gap-4 transform transition-all duration-300 hover:scale-102">
                  <div className="bg-primary/10 rounded-full p-2">
                    <testimonial.metrics.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {testimonial.metrics.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.metrics.label}
                    </div>
                  </div>
                </div>

                <blockquote className="mb-6 text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}