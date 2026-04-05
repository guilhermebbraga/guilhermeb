export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[20vh] bg-background-light py-15 px-10 md:px-40"
    >
      <div className="h-20 w-0.5 bg-linear-0 to-white from-transparent absolute top-17 left-7 md:left-35 rounded-full" />

      <h3 className="text-2xl font-medium mb-5">Sobre mim</h3>

      <p className="text-text-muted text-justify">
        Estudante de Engenharia de Software em formação, com foco em
        desenvolvimento Full Stack. Atuo no desenvolvimento de aplicações web
        utilizando TypeScript, Node.js, Express, React/Next.js e bancos de dados SQL e NoSQL. Tenho
        interesse em arquitetura de software, APIs e boas práticas de
        desenvolvimento.
      </p>
    </section>
  );
}
