"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface NavHeaderProps {
  otherStyles?: string;
}

export default function NavHeader({ otherStyles }: NavHeaderProps) {
  const router = useRouter();

  return (
    <nav
      className={`flex items-center justify-between w-fit mb-5 text-2xl ${otherStyles}`}
    >
      <div
        onClick={() => router.back()}
        className="
          grid place-items-center rounded-xl cursor-pointer
          hover:text-text-muted text-sm w-10 h-10 hover:bg-background-dark
          bg-background-dark/40 backdrop-blur-sm border border-border-custom"
      >
        <IoIosArrowBack />
      </div>
    </nav>
  );
}
