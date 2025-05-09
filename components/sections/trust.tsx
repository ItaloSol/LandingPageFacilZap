'use client';

import { Card } from "@/components/ui/card";
import { Shield, HeadphonesIcon, Rocket, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const trustFeatures = [
  {
    icon: Shield,
    title: "Satisfação garantida",
    description: "Nossa equipe acompanha sua evolução e garante resultados"
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento humano",
    description: "Suporte real por WhatsApp com especialistas dedicados"
  },
  {
    icon: Rocket,
    title: "Mais que uma loja",
    description: "É o seu negócio digital completo pronto para decolar"
  },
  {
    icon: Clock,
    title: "Resultados rápidos",
    description: "Comece a vender online em menos de 24 horas"
  }
];

function useIsSmUp() {
  const [isSmUp, setIsSmUp] = useState(false);

  useEffect(() => {
    // Only run on client
    const checkScreen = () => setIsSmUp(window.innerWidth >= 640); // 640px is Tailwind's sm breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isSmUp;
}

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSmUp = useIsSmUp();

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
    <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden" ref={sectionRef}>
      {isSmUp && (
        <Image 
          src="/fundo.webp" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0 opacity-10"
        />
      )}

      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white animate-slideUp"
              data-animate
            >
              Conte com quem entende do assunto
            </h2>
            <p 
              className="text-xl text-white/90 max-w-2xl mx-auto animate-slideUp delay-300"
              data-animate
            >
              Não é só uma ferramenta, é uma parceria completa para o sucesso do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trustFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-[#1e3a8a]/50 backdrop-blur-sm border-white/20 hover:bg-[#1e3a8a]/60 transition-all duration-500 hover:scale-105 animate-slideUp delay-${(index + 2) * 50}`}
                data-animate
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#f97316]/20 flex items-center justify-center flex-shrink-0 animate-glow">
                    <feature.icon className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div 
            className="mt-16 text-center animate-slideUp delay-1000"
            data-animate
          >
            <div className="inline-block border border-white/20 rounded-full px-8 py-4 backdrop-blur-sm bg-[#1e3a8a]/50 animate-glow">
              <p className="text-lg font-medium text-white">
                Mais de 1000+ negócios já confiam em nossa solução
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}