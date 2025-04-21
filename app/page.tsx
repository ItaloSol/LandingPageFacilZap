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
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load sections that are below the fold
const LazyPortfolioSection = dynamic(() => import("@/components/sections/portfolio").then(mod => mod.PortfolioSection), {
  loading: () => <div className="h-96 bg-[#1e3a8a]" />
});

const LazyTestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(mod => mod.TestimonialsSection), {
  loading: () => <div className="h-96 bg-[#1e3a8a]" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <FeaturesSection />
      <Suspense fallback={<div className="h-96 bg-[#1e3a8a]" />}>
        <LazyPortfolioSection />
      </Suspense>
      <TrustSection />
      <Suspense fallback={<div className="h-96 bg-[#1e3a8a]" />}>
        <LazyTestimonialsSection />
      </Suspense>
      <PricingSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}