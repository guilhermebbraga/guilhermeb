import { PortableText } from "next-sanity";

export const components = {
  block: {
    // Títulos (h1-h6) com Plus Jakarta Sans
    h1: ({ children }: any) => (
      <h1 className="text-[26px] my-8 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-[24px] my-8 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-[22px] my-8 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-[20px] my-8 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-[18px] my-8 font-bold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-[16px] my-8 font-bold">{children}</h6>
    ),

    // Parágrafo com line-height (leading-relaxed aprox. 1.7)
    normal: ({ children }: any) => <p className="leading-[1.7] mb-4">{children}</p>,
  },
  marks: {
    // Links customizados
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="text-primary underline decoration-solid hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  list: {
    // Listas
    bullet: ({ children }: any) => <ul className="list-disc ml-8">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-8">{children}</ol>,
  },
  listItem: {
    // Itens da lista com margem
    bullet: ({ children }: any) => <li className="my-5">{children}</li>,
  },
};

export default function RichText({ value }: any) {
  if (!value) return null;

  return <PortableText components={components} value={value} />;
}
