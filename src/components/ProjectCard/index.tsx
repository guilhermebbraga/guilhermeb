"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { IoCalendarClearOutline } from "react-icons/io5";
import Button from "../Button";
import { LuEye } from "react-icons/lu";
import { IoIosGitBranch } from "react-icons/io";
import { Project } from "@/src/interfaces/project.interface";
import Chip from "../Chip";
import dateFormatter from "@/src/utils/dateFormatter";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, date, repository, description, coverImage, tags, slug } =
    project;

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.9, y: -15 }}
      variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      className="bg-background-light rounded-custom"
    >
      <div className="relative overflow-hidden rounded-t-custom">
        <Image
          src={coverImage}
          alt="imagem do projeto"
          width={500}
          height={500}
          className="aspect-video object-cover w-full h-full"
        />

        <span
          className="
                absolute top-5 right-5 border border-border-custom text-sm py-.25 px-2.5
                bg-background-light rounded-full
            "
        >
          Fullstack
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-2.5">
          <h3 className="font-medium text-lg">{name}</h3>

          <span className="capitalize flex items-center justify-between gap-1.5 text-sm text-text-muted">
            <IoCalendarClearOutline />
            {dateFormatter(date, false)}
          </span>
        </div>

        <p className="text-sm text-text-muted">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <Chip key={index} text={tag} />
          ))}
        </div>

        <div className="mt-5 flex gap-5">
          <Button
            text="Repositório"
            style="bordered"
            icon={<IoIosGitBranch />}
            link={repository}
          />

          <Button
            text="Ver detalhes"
            style="primary"
            icon={<LuEye />}
            link={`/projetos/${slug}`}
          />
        </div>
      </div>
    </motion.li>
  );
}
