import NavHeader from "@/src/components/Layout/NavHeader";
import Projects from "@/src/components/Projects";

export const metadata = {
  title: "Projetos",
  description:
    "Conheça todos os projetos desenvolvidos por mim. Explore, filtre e veja os detalhes."
};

export default function Projetos() {
  return (
    <main>
      <NavHeader otherStyles="pt-5 px-5" />

      <section>
        <h1 className="ml-7.5 mt-10 text-4xl">Todos os projetos</h1>

        <Projects title='Projetos:' srOnly/>
      </section>
    </main>
  );
}
