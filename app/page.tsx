'use client';

import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BenefitsSection } from "@/components/sections/benefits";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { TrustSection } from "@/components/sections/trust";
import { PortfolioSection } from "@/components/sections/portfolio";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <FeaturesSection />
      <PortfolioSection />
      <TrustSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}