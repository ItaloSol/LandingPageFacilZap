'use client';

import { AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const problems = [
  "Não tem loja online profissional?",
  "Não sabe como atrair clientes?",
  "Gerencia tudo no papel ou no WhatsApp?"
];

export function ProblemSolutionSection() {
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
    <section className="py-24 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeInLeft"
            data-animate
          >
            Você sente que está perdendo vendas por não ter uma estrutura digital?
          </h2>
          
          <div className="grid gap-6 mb-12">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className={`p-6 flex items-center gap-4 bg-background/50 backdrop-blur transform transition-all duration-500 hover:scale-102 hover:shadow-lg animate-fadeInLeft delay-${(index + 1) * 300}`}
                data-animate
              >
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-lg">{problem}</p>
              </Card>
            ))}
          </div>

          <div 
            className="bg-primary text-primary-foreground rounded-lg p-8 text-center transform transition-all duration-500 hover:scale-102 animate-slideUp delay-1200"
            data-animate
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8" />
              <h3 className="text-2xl font-semibold">A Solução</h3>
            </div>
            <p className="text-xl">
              Você precisa de uma solução completa e simples para vender mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}