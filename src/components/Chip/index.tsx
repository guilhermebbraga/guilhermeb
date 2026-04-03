import { PiTagLight } from "react-icons/pi";

interface ChipProps {
  text: string;
  icon?: boolean;
  style?: "default" | 'highlight';
}

const chipStyles: {
  default: string;
  highlight: string;
} = {
  default: "bg-background-light rounded-full border-border-custom",
  highlight: 'border-neutral-800 bg-neutral-200 text-neutral-700 rounded-full'
};

export default function Chip({ text, icon, style = 'highlight' }: ChipProps) {
  return (
    <span
      className={`
        border text-sm py-.25 px-2.5 font-medium
        flex gap-1 items-center justify-center
        
        
        ${chipStyles[style]}
      `}
    >
      {icon && <PiTagLight />}
      {text}
    </span>
  );
}
