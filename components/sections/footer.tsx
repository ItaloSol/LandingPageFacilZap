'use client';

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Store, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

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
    <footer className="bg-background border-t" ref={sectionRef}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div 
            className="md:col-span-2 animate-fadeInLeft"
            data-animate
          >
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">VendaMais</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforme seu negócio com nossa solução completa de e-commerce e PDV.
              Aumente suas vendas com uma presença digital profissional.
            </p>
          </div>

          {/* Links */}
          <div
            className="animate-fadeIn delay-300"
            data-animate
          >
            <h3 className="font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors footer-link">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors footer-link">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors footer-link">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className="animate-fadeInRight delay-600"
            data-animate
          >
            <h3 className="font-semibold mb-4">Contato</h3>
            <Button
              variant="outline"
              className="w-full mb-4 hover:bg-primary hover:text-primary-foreground transition-colors group"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Fale Conosco
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('https://facebook.com')}
                className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 animate-fadeIn delay-900"
                data-animate
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('https://instagram.com')}
                className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 animate-fadeIn delay-1100"
                data-animate
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('https://linkedin.com')}
                className="hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 animate-fadeIn delay-1300"
                data-animate
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground animate-fadeIn delay-1500"
          data-animate
        >
          <p>© {new Date().getFullYear()} VendaMais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}