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
