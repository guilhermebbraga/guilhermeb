import Button from "../components/Button";

export default function app() {
  return (
    <main className="h-[85vh] flex ">

        <video
            autoPlay
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
        >

            <source src="/dino.mp4" type="video/mp4"/>
            Seu navegador não suporta vídeos em HTML5.
        </video>

      <section className="w-full px-5 md:pb-22 pb-7.5 gap-5 flex items-center justify-end flex-col">
        <div className="flex items-center justify-center flex-col">
          <h2 className="uppercase md:text-4xl text-2xl">Página Não Encontrada</h2>
        </div>

        <p className="font-thin">Você pesquisou por um termo inexistente</p>

        <div className="w-50">
          <Button text="Voltar ao início" style="primary" otherStyles="rounded-full" link="/" />
        </div>
      </section>

    </main>
  );
}
