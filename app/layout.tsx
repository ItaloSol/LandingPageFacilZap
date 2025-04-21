import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sitefacilzap.web.app/'),
  title: 'FácilZap | Loja Online e PDV para Seu Negócio',
  description: 'Sistema completo de e-commerce e PDV para alavancar suas vendas. Integração com WhatsApp, relatórios automáticos e suporte especializado.',
  keywords: 'loja online, e-commerce, PDV, vendas online, WhatsApp business, gestão de negócios, automação comercial',
  openGraph: {
    title: 'FácilZap | Loja Online e PDV para Seu Negócio',
    description: 'Sistema completo de e-commerce e PDV para alavancar suas vendas. Integração com WhatsApp, relatórios automáticos e suporte especializado.',
    url: 'https://sitefacilzap.web.app/',
    siteName: 'FácilZap',
    images: [
      {
        url: '/og-image.png',
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
    canonical: 'https://sitefacilzap.web.app/',
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
        <link rel="icon" href="/ico.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
         <Navbar /> 
        {children}
      </body>
    </html>
  );
}