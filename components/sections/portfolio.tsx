'use client';

import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const portfolioItems = [
  { name: 'INSTINTO IMPORTS', image: '1.webp', description: 'E-commerce de moda' },
  { name: 'MULTIMARCAS SS', image: '2.webp', description: 'E-commerce de moda' },
  { name: 'Francisco moda infantil', image: '3.webp', description: 'E-commerce de moda Kids' },
  { name: 'Tendência Juvenil', image: '4.webp', description: 'E-commerce de moda jovem' },
  { name: 'Sil Kids', image: '5.webp', description: 'E-commerce de moda Kids' },
  { name: 'Sil Atacado e varejo', image: '6.webp', description: 'E-commerce de moda calçados' },
  { name: 'S&D Kids', image: '7.webp', description: 'E-commerce de moda Kids' },
];

export function PortfolioSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;

    const interval = setInterval(() => {
      if (!container) return;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount / 2, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id='portfolio' className="h-[100dvh] flex flex-col bg-[#1e3a8a] relative overflow-hidden">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Sites que já criamos para nossos clientes
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Resultados reais com design moderno e pronto para vender
            </p>
          </div>

          <div className="relative group flex-1 flex flex-col">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hidden md:flex"
              onClick={() => scroll('left')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-6 -mx-4 px-4 md:mx-0 md:px-0 touch-pan-x scroll-smooth flex-1"
            >
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="flex-none w-[260px] sm:w-[280px] md:w-[300px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 snap-start bg-white/10 backdrop-blur-sm border-white/20"
                >
                  <div className="relative w-full h-full aspect-[9/16] overflow-hidden group rounded-xl">
                    <Image
                      src={`/${item.image}`}
                      alt={item.name}
                      fill
                      className="w-full border-none h-full object-contain object-center transition-transform duration-300"
                      sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hidden md:flex"
              onClick={() => scroll('right')}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}