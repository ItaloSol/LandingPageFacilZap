import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soluções Digitais para seu Negócio | E-commerce & PDV',
  description: 'Transforme seu negócio com nossa solução completa de e-commerce e PDV. Aumente suas vendas com uma presença digital profissional.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}