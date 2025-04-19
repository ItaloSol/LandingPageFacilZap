'use client';

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções para meu negócio!");
    window.open(`https://wa.me/5511940003147?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg bg-[#25D366] hover:bg-[#20BD5A] text-white p-0 z-50 group animate-pulse"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
    </Button>
  );
}