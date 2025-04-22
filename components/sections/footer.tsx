'use client';

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, MessageSquare, MessageCircle,Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from 'next/image';

export function Footer() {
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
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções para meu negócio!");
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-[#0f172a] text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div 
            className="md:col-span-2 animate-fadeInLeft"
            data-animate
          >
            <div className="flex items-center gap-2 mb-4">
            <Image 
            src="/logo.webp"
            alt="FácilZap Logo"
            width={200}
            height={50}
            className="h-8 md:h-16  w-auto"
          />
            </div>
            <p className="text-white/70 mb-4">
              Transforme seu negócio com nossa solução completa de e-commerce e PDV.
              Aumente suas vendas com uma presença digital profissional.
            </p>
          </div>

          {/* Links */}
          <div
            className="animate-fadeIn delay-300"
            data-animate
          >
            <h3 className="font-semibold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/70 hover:text-[#14532d] transition-colors footer-link">
                  Início
                </a>
              </li>
              <li>
                <a href="#problema" className="text-white/70 hover:text-[#14532d] transition-colors footer-link">
                  Problema & Solução
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-white/70 hover:text-[#14532d] transition-colors footer-link">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-[#14532d] transition-colors footer-link">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#precos" className="text-white/70 hover:text-[#14532d] transition-colors footer-link">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className="animate-fadeInRight delay-600"
            data-animate
          >
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <Button
              variant="outline"
              className="w-full mb-4 bg-[#14532d] group border-white/20"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Fale Conosco
            </Button>
            
            <div className="flex gap-4">
             
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('https://www.instagram.com/sil_facilzap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')}
                className="hover:text-[#14532d] hover:bg-[#14532d]/10 transition-all duration-300 hover:scale-110 animate-fadeIn delay-1100"
                data-animate
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('http://facilzap.com.br/planos?af=6636')}
                className="hover:text-[#14532d] hover:bg-[#14532d]/10 transition-all duration-300 hover:scale-110 animate-fadeIn delay-1300"
                data-animate
              >
              <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70 animate-fadeIn delay-1500"
          data-animate
        >
          <p>© {new Date().getFullYear()} FácilZap. Todos os direitos reservados.<br />
          Desenvolvido por <a href="https://www.instagram.com/landingpagecraft/" className=" hover:text-orange-600 transition-colors" target="_blank" rel="noopener noreferrer">landingpagecraft</a></p>
        </div>
      </div>
    </footer>
  );
}