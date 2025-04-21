'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções para meu negócio!');
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = 64; // Height of the navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full  z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a] backdrop-blur-sm shadow-md' : 'hidden'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            title="Voltar ao topo"
            onClick={() => scrollToSection('#top')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
             <Image 
            src="/logo.webp"
            alt="FácilZap Logo"
            width={200}
            height={50}
            className=" h-8 md:h-16  w-auto"
          />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('#hero')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('#problema')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Problema & Solução
            </button>
            <button 
              onClick={() => scrollToSection('#beneficios')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Benefícios
            </button>
            
            <button 
              onClick={() => scrollToSection('#portfolio')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Portfólio
            </button>
           
            
            <button 
              onClick={() => scrollToSection('#precos')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Preços
            </button>
            
           
            <Button
              onClick={handleWhatsAppClick}
              className={`bg-[#ea580c] text-white hover:bg-[#f97316] transition-colors`}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={isOpen ? 'true' : 'false'} // Ensure the value is a string
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 visible' // changed from max-h-64 to max-h-screen
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('#hero')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('#problema')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Problema & Solução
            </button>
            <button
              onClick={() => scrollToSection('#beneficios')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Benefícios
            </button>
            
            <button
              onClick={() => scrollToSection('#portfolio')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Portfólio
            </button>
            
           
            <button
              onClick={() => scrollToSection('#precos')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Preços
            </button>
            
            
            <div className="px-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}