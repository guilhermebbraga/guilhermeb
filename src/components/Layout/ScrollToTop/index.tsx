"use client";
import { FaChevronUp } from "react-icons/fa6";
import goToSection from "@/src/utils/goToSections";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => goToSection("home")}
      className="
        fixed z-9999 bottom-5 right-5 rounded-xl h-10 w-10
        flex justify-center items-center text-text-main  cursor-pointer
        bg-background-dark/40 backdrop-blur-sm"
    >
      <FaChevronUp size={16} />
    </div>
  );
}

export default ScrollToTop;
