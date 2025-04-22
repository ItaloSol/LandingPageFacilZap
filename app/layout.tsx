import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FácilZap | Loja Online e PDV para Seu Negócio',
  description: 'Sistema completo de e-commerce e PDV para alavancar suas vendas. Integração com WhatsApp, relatórios automáticos e suporte especializado.',
  keywords: 'loja online, e-commerce, PDV, vendas online, WhatsApp business, gestão de negócios, automação comercial',
  openGraph: {
    title: 'FácilZap | Loja Online e PDV para Seu Negócio',
    description: 'Sistema completo de e-commerce e PDV para alavancar suas vendas. Integração com WhatsApp, relatórios automáticos e suporte especializado.',
    url: 'https://facilzap.com.br',
    siteName: 'FácilZap',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FácilZap - Solução completa para seu negócio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://facilzap.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}