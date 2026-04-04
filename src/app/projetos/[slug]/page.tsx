import NavHeader from "@/src/components/Layout/NavHeader";
import Image from "next/image";
import Button from "@/src/components/Button";
import { IoIosGitBranch } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import Chip from "@/src/components/Chip";
import { notFound } from "next/navigation";
import ProjectService from "@/src/services/sanityProjects";
import RichText from "@/src/components/RichText";
import ScrollToTop from "@/src/components/Layout/ScrollToTop";
import dateFormatter from "@/src/utils/dateFormatter";

interface ProjetoProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjetoProps) {
  const projectService = new ProjectService();

  const { slug } = await params;

  const project = await projectService.getProjectBySlug(slug);

  if (!project) return notFound();

  const { name, description, tags, galery, coverImage } = project;

  return {
    title: `${name} | Guilherme Braga`,
    description: description.slice(0, 160),
    keywords: tags,
    openGraph: {
      title: name,
      description: description.slice(0, 160),
      url: `https://guilhermeb.vercel.app/projetos/${slug}`,
      siteName: "Guilherme Braga Portfólio",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: `${name} imagem de pré-visualização`,
        },
      ],
      locale: "pt_BR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description: description.slice(0, 160),
      images: [coverImage, ...(galery as string[]).slice(0, 3)].filter(
        Boolean,
      ) as string[],
    },
    alternates: {
      canonical: `https://guilhermeb.vercel.app/projetos/${slug}`,
    },
  };
}

export default async function Projeto({ params }: ProjetoProps) {
  const projectService = new ProjectService();

  const { slug } = await params;

  const project = await projectService.getProjectBySlug(slug);

  const {
    name,
    date,
    repository,
    demo,
    stack,
    tags,
    galery,
    coverImage,
    details,
  } = project;

  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-7.5 flex-1 min-h-0">
        <section className="relative w-full h-[40vh] md:h-[55vh] p-5">
          <NavHeader otherStyles="fixed z-999" />
          <ul
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
            className="absolute inset-0 no-scrollbar overflow-x-auto flex gap-1.5 mt-1.5 h-full snap-x snap-mandatory"
          >
            <Image
              src={coverImage}
              width={500}
              height={500}
              alt="genérica"
              className="w-auto h-full object-cover snap-center"
            />

            {galery.map((image: string, index: number) => (
              <div key={index} className="contents">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt="genérica"
                  className="w-auto h-full object-cover snap-center"
                />
              </div>
            ))}
          </ul>
        </section>

        <article className="flex self-center gap-7.5 flex-col flex-1 px-7.5 py-5 md:w-210">
          {/* Cabeçalho da seção */}
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>

            <div className="flex gap-10 text-sm text-text-muted my-2.5">
              <span>{dateFormatter(date, true)}</span>

              <Chip style="default" text={stack} />
            </div>

            <ul className="flex gap-2.5 flex-wrap my-5">
              {tags.map((tag: string, index: number) => (
                <Chip icon text={tag} key={index} />
              ))}
            </ul>

            <div className="mt-5 flex gap-5">
              <Button
                text="Repositório"
                style="bordered"
                icon={<IoIosGitBranch />}
                link={repository}
              />

              <Button
                text="Demo"
                style="primary"
                icon={<LuEye />}
                link={demo}
              />
            </div>
          </div>

          {/* Conteúdo de texo (Detalhes do projeto)*/}
          <div>
            <h2 className="text-2xl font-medium mb-5">Detalhes do projeto:</h2>

            <RichText value={details} />
          </div>
        </article>
      </div>
      <ScrollToTop />
    </main>
  );
}
