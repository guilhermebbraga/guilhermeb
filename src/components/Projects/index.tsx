import Link from "next/link";
import ProjectCard from "../ProjectCard";
import { FaArrowRight } from "react-icons/fa6";
import ProjectService from "@/src/services/sanityProjects";
import { Project } from "@/src/interfaces/project.interface";

interface ProjectsProps {
  title?: string;
  link?: string;
  linkTitle?: string;
  srOnly?: boolean;
}

export default async function Projects({ title, link, linkTitle, srOnly }: ProjectsProps) {

  const projectService = new ProjectService()

  const projects =  await projectService.getAllProjects()
  
  return (
    <section id="projects" className="py-10 px-7.5 md:px-15">
      {title && (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className={`text-3xl font-medium ${srOnly && 'sr-only'}`}>{title}</h2>

          {linkTitle && link && (
            <Link
              href={link}
              className="flex items-center gap-1 text-primary hover:text-primary-hover"
            >
              <span>{linkTitle}</span>
              <FaArrowRight />
            </Link>
          )}
        </div>
      )}

      <ul className="grid md:grid-cols-3 gap-10">
        {projects.map((project: Project, index: number) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}
