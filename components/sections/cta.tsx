'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export function CTASection() {
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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vi os planos no site e quero alavancar minhas vendas!");
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-20 bg-[#0f172a] text-white relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 text-center relative">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 max-w-[15ch] mx-auto leading-tight animate-zoomIn"
          data-animate
        >
          Está pronto para vender mais com inteligência?
        </h2>
        <p 
          className="text-lg sm:text-xl mb-6 md:mb-8 max-w-xl mx-auto animate-fadeIn delay-300"
          data-animate
        >
          Escolha seu plano e comece hoje mesmo
        </p>
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-[#14532d] text-white hover:bg-[#166534] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto font-semibold group
            transition-all duration-300 hover:scale-105 animate-borderGlow hover:animate-shake w-full sm:w-auto animate-slideUp delay-600"
          data-animate
        >
          <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
          <span className="flex-1">Fale com um especialista agora</span>
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}