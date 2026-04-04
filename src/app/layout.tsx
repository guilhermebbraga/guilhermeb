import type { Metadata } from "next";
import { MontserratFont } from "./fonts";
import "./globals.css";
import Footer from "../components/Layout/Footer";

export const metadata: Metadata = {
  title: "Guilherme Braga | Engenheiro de Software",
  description: "Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.",
  keywords: ['Next.js', 'Software Engineer', 'Devloper', 'Desenvolvedor fullstack', 'Typescript', 'Node.js', 'São Bernardo do Campo'],
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    title: {
      default: "Guilherme Braga",
      template: "%s | Guilherme Braga",
    },
    description: 'Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.',
    url: 'https://guilhermeb.vercel.app/',
    siteName: 'Clean Stack',
    images: [
      {
        url: 'https://guilhermeb.vercel.app/logo-lg-dark.png',
        width: 1200,
        height: 630,
        alt: 'Clean Stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Stack',
    description: 'Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.',
    images: ['https://guilhermeb.vercel.app/logo-lg-dark.png'],
  },
  alternates: {
    canonical: 'https://www.cleanstack.com.br',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        id="home"
        className={`${MontserratFont.variable} antialiased relative`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
