import { Paragraph } from "@/components/Typography";

import imgMessage from "../../public/img/message-img.jpeg";

export const MessageSection = () => {
  return (
    <section id="servicos" className="w-screen max-w-7xl px-4 m-auto mt-16">
      <div
        className="w-full h-96 flex items-end sm:items-center justify-center m-auto opacity-90 rounded-t-xl"
        style={{
          backgroundImage: `url(${imgMessage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <div className="sm:rounded-xl bg-white/80 backdrop-blur-md max-w-xl text-center p-8">
          <Paragraph>
            Soluções jurídicas confiáveis ​​para proteger seus interesses.
            Escritório de advocacia que oferece uma abordagem acessível e eficaz
            para resolver seus problemas legais em diversas áreas do Direito.
            Oferecemos suporte jurídico de qualidade, colocando você em primeiro
            lugar. Agende sua consulta.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
