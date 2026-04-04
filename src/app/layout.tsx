import type { Metadata } from "next";
import { MontserratFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guilherme Braga | Portfólio",
  description: "Engenheiro de Software em São Bernardo do Campo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body id="home" className={`${MontserratFont.variable} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
