"use client";

import isExternalLink from "@/src/utils/isExternalLink";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text?: string;
  style?: "default" | "bordered" | "primary";
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  reverse?: boolean;
  otherStyles?: string;
}

const buttonVariants: {
  default: string;
  bordered: string;
  primary: string;
} = {
  default: "bg-neutral-300 text-neutral-800 hover:bg-neutral-400",
  bordered:
    "bg-transparent border border-border-custom text-white hover:bg-white/15",
  primary: "bg-primary text-black hover:bg-primary-hover",
};

export default function Button({
  link,
  text,
  style = "default",
  icon: Icon,
  onClick,
  reverse,
  otherStyles,
}: ButtonProps) {
  const router = useRouter();

  const handleOnClick = () => {
    if (link) {
      if (isExternalLink(link)) {
        window.open(link, "_blank", "noreferrer");
      } else {
        router.push(link);
        return;
      }
    }

    if (onClick) {
      onClick();
      return;
    }

    return;
  };

  const baseStyle =
    "flex items-center justify-center gap-1.5 cursor-pointer rounded-xl p-[2.5px] w-full min-h-7.5";

  return (
    <button
      className={`${baseStyle} ${buttonVariants[style]} ${reverse && "flex-row-reverse"} ${otherStyles}`}
      onClick={handleOnClick}
    >
      {Icon && Icon}
      {text && <span>{text}</span>}
    </button>
  );
}
