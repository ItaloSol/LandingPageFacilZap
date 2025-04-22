'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#top')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <MessageSquare className={`h-8 w-8 ${isScrolled ? 'text-[#25D366]' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              FácilZap
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('#recursos')}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('#precos')}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('#sobre')}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#25D366] transition-colors`}
            >
              Sobre
            </button>
            <Button
              onClick={handleWhatsAppClick}
              className={`bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors`}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-64 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection('#recursos')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection('#precos')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('#sobre')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Sobre
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