import { Subtitle, Title } from "@/components/Tipografia";
import heroImg from "../../public/img/hero-img.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-screen px-2 flex justify-center">
      <div
        className="bg-white"
        style={{
          height: "calc(100vh - 16px)",
          width: "calc(100vw - 32px)",
          borderRadius: "0 0 12px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <div className="text-center">
            <Title>Ana Paula Vilas Boas</Title>
            <Subtitle>Advocacia e Consultoria Jurídica</Subtitle>
          </div>
          <div className="flex">
            <div className="rounded-full bg-stone-800 w-6 h-6">w</div>
            <div className="rounded-full bg-stone-800 w-6 h-6">f</div>
            <div className="rounded-full bg-stone-800 w-6 h-6">l</div>
          </div>
          <div>
            <Title>Blog</Title>
          </div>
        </div>

        <img
          src={heroImg.src}
          alt="Foto da advogada Ana Paula Vilas Boas"
          style={{
            objectFit: "cover",
            maxHeight: "50%",
          }}
        />
      </div>
    </section>
  );
}
