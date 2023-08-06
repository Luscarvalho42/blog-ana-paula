import logo from "../../public/img/logo.png";
import { Paragraph, Subtitle, Title } from "@/components/Typography";

export const Footer = () => {
  return (
    <section id="contato" className="w-screen bg-white mt-16">
      <div className="max-w-7xl m-auto flex flex-col-reverse sm:flex-row p-4 gap-4">
        <div className="rounded-xl overflow-hidden flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.183201828104!2d-44.9982614!3d-21.2399445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffdfa27df72c1%3A0x81dd61c983f8150!2sAna%20Paula%20Vilas%20Boas%20Advocacia%20e%20Consultoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1690640914501!5m2!1spt-BR!2sbr"
            style={{ minHeight: "300px" }}
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col justify-evenly flex-1 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img
              src={logo.src}
              alt="Logo do escritório - A letra 'A' e a letra 'V' em formato de balança representando a justiça"
              className="h-20 w-auto invert"
            />
            <Title className="mt-4">Ana Paula Vilas Boas</Title>
            <Subtitle>Advocacia e Consultoria Jurídica</Subtitle>
          </div>
          <div>
            <Paragraph>
              Entre em contato hoje mesmo e me deixe cuidar dos seus assuntos
              legais com dedicação e expertise.
            </Paragraph>
            <div className="flex justify-center gap-2 mt-2">
              <div className="rounded-full w-8 h-8 bg-gray-500"></div>
              <div className="rounded-full w-8 h-8 bg-gray-500"></div>
              <div className="rounded-full w-8 h-8 bg-gray-500"></div>
            </div>
          </div>
          <Paragraph>
            R. Benedito Valadares, 80 - Sala 104 - Centro, Lavras - MG,
            37200-182
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
