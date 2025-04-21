'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, AlertCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Básico",
    description: "Comece com o pé direito! Ideal para iniciar sua jornada de vendas digital",
    price: "R$ 50/mês",
    setupFee: "R$ 650,00",
    features: [
      "PDV (Venda Balcão) Integrado",
      "Banners Personalizados",
      "Pagamentos via PIX e Cartão",
      "Suporte Online por 30 Dias",
      "Loja online básica",
      "Integração WhatsApp"
    ],
    cta: "Começar agora",
    highlight: false // Ensure this is false
  },
  {
    name: "Bronze",
    description: "Expansão com integrações e treinamento estratégico",
    price: "R$ 100/mês",
    setupFee: "R$ 750,00",
    features: [
      "Tudo do Plano Básico",
      "Integração com Linktree",
      "Correios integrado (contrato pronto)",
      "Treinamento exclusivo (3 horas)",
      "Cadastro de administrador",
      "Domínio próprio",
      "Configuração profissional"
    ],
    cta: "Escolher Bronze",
    highlight: false // Ensure this is false
  },
  {
    name: "Prata",
    description: "Alta performance e recursos avançados para impulsionar vendas",
    price: "R$ 100/mês",
    setupFee: "R$ 1.100,00",
    features: [
      "Tudo do Plano Bronze",
      "2 Banners Personalizados",
      "Integrações Avançadas (Pagamentos e Frete)",
      "Configuração para Impressão de Código de Barras",
      "Treinamento Completo (6 horas)",
      "PDV multilojas",
      "Relatórios avançados"
    ],
    cta: "Escolher Prata",
    highlight: true // Set this to true to highlight the Prata plan
  },
  {
    name: "Ouro",
    description: "Solução definitiva para maximizar vendas e automatizar processos",
    price: "R$ 150/mês",
    setupFee: "R$ 1.499,00",
    features: [
      "Tudo do Plano Prata",
      "Treinamento Premium",
      "Múltiplos Catálogos",
      "Cadastro de Vendedores Personalizado",
      "Gestão Financeira e de Estoque Integrada",
      "Otimização de Bio no Instagram",
      "Bônus Exclusivo",
      "Suporte 24/7 Prioritário"
    ],
    cta: "Escolher Ouro",
    highlight: false // Ensure this is false
  }
];

export function PricingSection() {
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

  const handleWhatsAppClick = (plan: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${plan}`);
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#1e3a8a]" ref={sectionRef} id="precos">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fadeInDown"
              data-animate
            >
              Escolha o plano ideal para o seu momento
            </h2>
            <p 
              className="text-xl text-white/80 max-w-2xl mx-auto animate-fadeIn delay-300"
              data-animate
            >
              Soluções flexíveis que crescem junto com seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 bg-[#0f172a] ${
                  plan.highlight 
                    ? 'border-[#14532d] shadow-lg relative before:absolute before:inset-0 before:border-2 before:border-[#14532d] before:rounded-lg before:-m-[1px]' 
                    : 'border-white/10'
                } animate-slideUp delay-${(index + 2) * 50}`}
                data-animate
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#14532d] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Vendido
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-white/70 mb-4 min-h-[48px]">{plan.description}</p>
                  <div className="text-3xl font-bold mb-2 text-white">{plan.price}</div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <AlertCircle className="w-4 h-4" />
                    <span>Taxa de setup: {plan.setupFee}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-1" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg"
                  className={`w-full transition-all duration-300 group ${
                    plan.highlight 
                      ? 'bg-[#14532d] text-white hover:bg-[#166534] hover:scale-105' 
                      : 'bg-[#ea580c] hover:bg-[#f97316] text-white hover:scale-105'
                  }`}
                  onClick={() => handleWhatsAppClick(plan.name)}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}