import NavHeader from "@/src/components/Layout/NavHeader";
import Projects from "@/src/components/Projects";

export const metadata = {
  title: "Todos os Projetos | Guilherme Braga",
  description:
    "Conheça todos os projetos desenvolvidos por mim. Explore, filtre e veja os detalhes.",
  keywords: [
    "Next.js",
    "Software Engineer",
    "Devloper",
    "Desenvolvedor fullstack",
    "Typescript",
    "Node.js",
    "Projetos",
  ],
  authors: [{ name: "Guilherme de Barros Braga Soares" }],
  openGraph: {
    title: {
      default: "Guilherme Braga",
      template: "%s | Portfólio",
    },
    description:
      "Conheça todos os projetos desenvolvidos por mim. Explore, filtre e veja os detalhes.",
    url: "https://guilhermeb.vercel.app/",
    siteName: "Guilherme Braga",
    images: [
      {
        url: "https://guilhermeb.vercel.app/logo-lg-dark.png",
        width: 1200,
        height: 630,
        alt: "Guilherme Braga",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Braga",
    description:
      "Conheça todos os projetos desenvolvidos por mim. Explore, filtre e veja os detalhes.",
    images: ["https://guilhermeb.vercel.app/logo-lg-dark.png"],
  },
  alternates: {
    canonical: "https://guilhermeb.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Projetos() {
  return (
    <main>
      <NavHeader otherStyles="pt-5 px-5" />

      <section>
        <h1 className="ml-7.5 mt-10 text-3xl">Todos os projetos</h1>

        <Projects />
      </section>
    </main>
  );
}
