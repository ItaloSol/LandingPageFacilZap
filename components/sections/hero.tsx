'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Vi os planos no site e quero alavancar minhas vendas!'
    );
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] py-16 sm:py-24 md:py-32 text-white overflow-hidden min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
          <MessageSquare className="h-10 w-10 text-white" />
          <span className="text-3xl font-bold">FácilZap</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight animate-fadeInDown leading-tight">
              A ALAVANCAGEM DAS SUAS VENDAS COMEÇA AQUI!
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white/90 animate-slideUp animate-delay-300">
              Cansado de perder vendas e oportunidades?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/80 animate-slideUp animate-delay-600 max-w-2xl mx-auto md:mx-0">
              Tenha sua loja online + PDV profissional sob medida para seu
              crescimento.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-[#ea580c] text-white hover:bg-[#f97316] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto font-semibold animate-slideUp animate-delay-600
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                group"
            >
              <span className="flex-1">Quero Alavancar Agora</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="flex justify-center md:justify-start animate-float">
            <Image
              src="/hero.webp"
              alt="Floating Image"
              width={1410}
              height={1512}
              className="w-72 h-72 object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}