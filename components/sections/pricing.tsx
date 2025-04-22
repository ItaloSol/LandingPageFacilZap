'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, ArrowRight, AlertCircle, Plus } from "lucide-react";
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
      "Integração WhatsApp",
      "Até 10 Notas Fiscais por Mês",
      "Até 300 Produtos",
      "Ilimitados Pedidos",
      "Até 3 Administradores",
      "Estatísticas Detalhadas",
      "Controle de Estoque",
      "Formas de Pagamento Manuais",
      "Formas de Entrega Manuais",
      "Histórico e Gerenciamento de Pedidos",
      "Edição de Pedidos (Incluir e Excluir)",
      "Compra Mínima e Máxima Produtos",
      "Regras de Descontos no Produto e no Pedido",
      "Regras de Frete Grátis",
      "Compra Visitante (Sem login)",
      "Link Restrito para Usuário Logados",
      "Configuração de Embalagens para Envio",
      "Venda balcão (PDV)",
      "APP Android",
      "APP iOS"
    ],
    cta: "Começar agora",
    highlight: false
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
      "Configuração profissional",
      "Até 10 Notas Fiscais por Mês",
      "Até 300 Produtos",
      "Ilimitados Pedidos",
      "Até 3 Administradores",
      "Utilizar Domínio Próprio",
      "Estatísticas Detalhadas",
      "Cadastro de Produtos em Massa",
      "Controle de Estoque",
      "Formas de Pagamento Manuais",
      "Formas de Entrega Manuais",
      "Contas a Receber e a Pagar",
      "Afiliados",
      "Cashback",
      "Cálculo Automático do Frete",
      "Formas de Pagamento Online",
      "Integrações",
      "Histórico e Gerenciamento de Pedidos",
      "Edição de Pedidos (Incluir e Excluir)",
      "Compra Mínima e Máxima Produtos",
      "Regras de Descontos no Produto e no Pedido",
      "Regras de Frete Grátis",
      "Compra Visitante (Sem login)",
      "Link Restrito para Usuário Logados",
      "Configuração de Embalagens para Envio",
      "Venda balcão (PDV)",
      "APP Android",
      "APP iOS"
    ],
    cta: "Escolher Bronze",
    highlight: false
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
      "Relatórios avançados",
      "Até 30 Notas Fiscais por Mês",
      "Até 450 Produtos",
      "Ilimitados Pedidos",
      "Até 4 Administradores",
      "Chatbot",
      "Utilizar Domínio Próprio",
      "Estatísticas Detalhadas",
      "Cadastro de Produtos em Massa",
      "Controle de Estoque",
      "Formas de Pagamento Manuais",
      "Formas de Entrega Manuais",
      "Painel de Vendedores",
      "Painel de Conferentes",
      "Múltiplos Catálogos",
      "Cancelamento Automático de Pedidos Não Pagos",
      "Retorno Automático do Estoque de Pedidos Não Pagos",
      "Controle de Caixa",
      "Contas a Receber e a Pagar",
      "Afiliados",
      "Revendedor Pro",
      "Cashback",
      "Brindes",
      "FácilZap API",
      "Cálculo Automático do Frete",
      "Formas de Pagamento Online",
      "Integrações",
      "Promotores de Vendas (Supervisionar equipe)",
      "Resultados de Vendedores Cliques, Pedidos e Faturamento",
      "Histórico e Gerenciamento de Pedidos",
      "Edição de Pedidos (Incluir e Excluir)",
      "Compra Mínima e Máxima Produtos",
      "Regras de Descontos no Produto e no Pedido",
      "Regras de Frete Grátis",
      "Compra Visitante (Sem login)",
      "Link Restrito para Usuário Logados",
      "Configuração de Embalagens para Envio",
      "Venda balcão (PDV)",
      "APP Android",
      "APP iOS"
    ],
    cta: "Escolher Prata",
    highlight: true
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
      "Suporte 24/7 Prioritário",
      "Ilimitadas Notas Fiscais por Mês",
      "Ilimitados Produtos",
      "Ilimitados Pedidos",
      "Ilimitados Administradores",
      "Chatbot",
      "Utilizar Domínio Próprio",
      "Estatísticas Detalhadas",
      "Cadastro de Produtos em Massa",
      "Controle de Estoque",
      "Formas de Pagamento Manuais",
      "Formas de Entrega Manuais",
      "Painel de Vendedores",
      "Painel de Conferentes",
      "Múltiplos Catálogos",
      "Cancelamento Automático de Pedidos Não Pagos",
      "Retorno Automático do Estoque de Pedidos Não Pagos",
      "Controle de Caixa",
      "Contas a Receber e a Pagar",
      "Afiliados",
      "Revendedor Pro",
      "Cashback",
      "Brindes",
      "FácilZap API",
      "Cálculo Automático do Frete",
      "Formas de Pagamento Online",
      "Integrações",
      "Promotores de Vendas (Supervisionar equipe)",
      "Resultados de Vendedores Cliques, Pedidos e Faturamento",
      "Histórico e Gerenciamento de Pedidos",
      "Edição de Pedidos (Incluir e Excluir)",
      "Compra Mínima e Máxima Produtos",
      "Regras de Descontos no Produto e no Pedido",
      "Regras de Frete Grátis",
      "Compra Visitante (Sem login)",
      "Link Restrito para Usuário Logados",
      "Configuração de Embalagens para Envio",
      "Venda balcão (PDV)",
      "APP Android",
      "APP iOS"
    ],
    cta: "Escolher Ouro",
    highlight: false
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
                    ? 'border-[#14532d] shadow-lg relative  before:inset-0 before:border-2 before:border-[#14532d] before:rounded-lg before:-m-[1px]' 
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
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={feature + i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-1" />
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 4 && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="link" className="text-[#f97316] hover:text-[#f97316]/80 p-0 h-auto font-normal">
                            <Plus className="w-5 h-5 mr-2" />
                            Ver mais {plan.features.length - 4} recursos
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0f172a] border-white/10 text-white max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold mb-4">Plano {plan.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {plan.features.map((feature, i) => (
                              <div key={feature + i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-1" />
                                <span className="text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
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