"use client";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import goToSection from "@/src/utils/goToSections";

interface SideMenuProps {
  options: { text: string; link: string }[];
}

export default function SideMenu({ options }: SideMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-overflow");
    } else {
      document.body.classList.remove("no-overflow");
    }

    return () => document.body.classList.remove("no-overflow");
  }, [open]);

  const handleNavClick = (link: string) => {
    goToSection(link);
    setOpen(false);
  };

  return (
    <div className="w-full h-full relative md:hidden">
      <aside
        className={`
          absolute z-9999 inset-0 w-65 h-screen flex gap-4 py-30 px-10
          ${open ? "translate-x-0 bg-background-light" : "-translate-x-60 bg-transparent"}
        `}
      >
        <button
          onClick={() => setOpen(!open)}
          aria-label="abrir ou fechar menu"
          className={`
            border border-border-custom h-10 w-10 rounded-xl
            cursor-pointer grid place-items-center absolute top-5 
            bg-background-dark/40 backdrop-blur-sm ${open ? 'right-5' : '-right-10'}
            `}
        >
          {!open ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </button>

        <ul
          className={`flex flex-col gap-10 w-full ${open ? "opacity-100" : "opacity-0"}`}
        >
          {options.map((option) => (
            <li
              key={option.link}
              className="p-2 px-5 text-center rounded-xl hover:bg-primary hover:text-background cursor-pointer"
              onClick={() => handleNavClick(option.link)}
            >
              {option.text}
            </li>
          ))}
        </ul>
      </aside>
      <div
        className={`
          h-screen w-full z-999  absolute inset-0 backdrop-blur-md
          ${open ? "block bg-black/40" : "hidden"}
          `}
          onClick={() =>  setOpen(false)}
      ></div>
    </div>
  );
}

