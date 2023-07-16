import bg from "../../public/apresentacao/bg.svg";
import img from "../../public/apresentacao/img.webp";

export default function Apresentacao() {
  return (
    <section
      className="h-screen w-screen p-4 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <main className="flex flex-col max-w-7xl items-center justify-between gap-8 md:flex-row-reverse md:justify-evenly">
        <div
          className="w-72 h-80 md:w-96 md:h-96 lg:w-1/3 lg:h-[500px]"
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            borderRadius: "90% 60% 70% 50%",
          }}
        ></div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-black text-center">
            Ana Paula Vilas Boas
          </h1>
          <h2 className="text-xl md:text-2xl text-center font-bold mb-8">
            Advocacia e Consultoria Jurídica
          </h2>
          <p className="indent-8">
            Soluções jurídicas confiáveis ​​para proteger seus interesses.
            Escritório de advocacia que oferece uma abordagem acessível e eficaz
            para resolver seus problemas legais em diversas áreas do Direito.
            Oferecemos suporte jurídico de qualidade, colocando você em primeiro
            lugar. Agende sua consulta.
          </p>
        </div>
      </main>
    </section>
  );
}
