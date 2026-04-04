"use client";
import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import goToSection from "@/src/utils/goToSections";

export default function Header() {
  const options = [
    { text: "Início", link: "home" },
    { text: "Sobre", link: "about" },
    { text: "Projetos", link: "projects" },
    { text: "Tecnologias", link: "technologies" },
    { text: "Contato", link: "contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        console.log("Scrolled");
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        w-full h-20 flex justify-center items-center z-9999
        ${scrolled ? "fixed" : "absolute"}`}
    >
      <SideMenu options={options} />

      <ul
        className={`
          hidden md:flex gap-6 rounded-custom
          ${scrolled && 'bg-background-dark/40 p-1 backdrop-blur-sm'}
        `}
      >
        {options.map((option) => (
          <li
            key={option.link}
            className="p-1 px-5 rounded-full hover:bg-primary hover:text-background cursor-pointer"
            onClick={() => goToSection(option.link)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </header>
  );
}