import Image from "next/image";
import backgroundImg from "@/src/assets/backgroundImage.jpg";

export default function Hero() {
  return (
    <section className="relative h-[55vh] md:h-[64vh] w-full overflow-hidden grid place-items-center text-center">
      <Image
        alt="HeroSection graffiti background"
        src={backgroundImg}
        priority
        className="absolute w-full h-full aspect-video object-cover opacity-15 blur-xs -z-1"
      />

      <div>
        <h1 className="text-4xl md:text-6xl">Guilherme Braga</h1>

        <h2 className="uppercase text-sm md:text-lg text-text-muted">
          Engenheiro de Software & desenvolvedor fullstack
        </h2>
      </div>
    </section>
  );
}
