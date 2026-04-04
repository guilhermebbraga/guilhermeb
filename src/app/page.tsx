import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import ScrollToTop from "@/src/components/Layout/ScrollToTop";
import Projects from "@/src/components/Projects";
import Technologies from "@/src/components/Technologies";
import Header from "../components/Layout/Header";

export const metadata = {
  title: "Guilherme Braga | Engenheiro de Software",
  description: "Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.",
  keywords: ['Next.js', 'Software Engineer', 'Devloper', 'Desenvolvedor fullstack', 'Typescript', 'Node.js', 'São Bernardo do Campo'],
  authors: [{name: 'Guilherme de Barros Braga Soares'}],
  openGraph: {
    title: {
      default: "Guilherme Braga",
      template: "%s | Portfólio",
    },
    description: 'Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.',
    url: 'https://guilhermeb.vercel.app/',
    siteName: 'Guilherme Braga',
    images: [
      {
        url: 'https://guilhermeb.vercel.app/logo-lg-dark.png',
        width: 1200,
        height: 630,
        alt: 'Guilherme Braga',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Braga',
    description: 'Engenheiro de Software focado em Node.js, Next.js e Tailwind e experiências digitais de alta performance.',
    images: ['https://guilhermeb.vercel.app/logo-lg-dark.png'],
  },
  alternates: {
    canonical: 'https://guilhermeb.vercel.app',
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

export default function Home() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <About />
      <Projects
        title="Meus Projetos"
        link="/projetos"
        linkTitle="Ver todos os projetos"
      />
      <Technologies />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
