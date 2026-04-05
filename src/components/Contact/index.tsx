"use client";
import { motion } from "motion/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import Link from "next/link";
import React from "react";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  const socialData: {
    icon: React.ElementType;
    name: string;
    username: string;
    link: string;
  }[] = [
    {
      icon: IoLogoGithub,
      name: "Github",
      username: "GuilhermeB-Braga",
      link: "https://github.com/GuilhermeB-Braga",
    },
    {
      icon: CiMail,
      name: "Email",
      username: "bbraga.guilherme@gmail.com",
      link: "mailto:bbraga.guilherme@gmail.com",
    },
    {
      icon: IoLogoLinkedin,
      name: "LinkedIn",
      username: "Guilherme B.",
      link: "https://www.linkedin.com/in/guilherme-b-9aa8ab265/",
    },
  ];

  return (
    <section id="contact" className="w-full min-h-[45vh] py-10 px-15">
      <SectionTitle title="Entre em contato" />

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          className="
          flex flex-col gap-5 w-fit p-5 rounded-custom bg-background-dark
          border border-border-custom"
        >
          {socialData.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="flex gap-5 items-center cursor-pointer border
              border-transparent rounded-xl py-1 px-2.5 hover:border-border-custom hover:bg-background-light"
            >
              <div className="grid place-items-center p-1 rounded-lg w-10 h-10 text-3xl">
                {<social.icon />}
              </div>

              <div>
                <h3 className="text-lg font-semibold">{social.name}</h3>

                <p className="text-sm text-text-muted">{social.username}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
