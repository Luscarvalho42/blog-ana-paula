import { Subtitle, Title } from "@/components/Typography";
import heroImg from "../../public/img/hero-img.png";
import { ChevronRight } from "react-feather";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="h-screen w-screen px-4 pb-4 flex justify-center m-auto"
    >
      <div className="bg-white h-full w-full rounded-b-xl shadow-2xl">
        <div className="h-full w-full max-w-7xl m-auto flex flex-col items-center justify-end md:flex-row md:items-end md:justify-evenly ">
          <div className="h-full flex flex-col justify-center gap-8">
            <div className="text-center">
              <Title>Ana Paula Vilas Boas</Title>
              <Subtitle>Advocacia e Consultoria Jurídica</Subtitle>
            </div>
            <div className="flex justify-center gap-4">
              <div className="rounded-full bg-stone-800 w-6 h-6">w</div>
              <div className="rounded-full bg-stone-800 w-6 h-6">f</div>
              <div className="rounded-full bg-stone-800 w-6 h-6">l</div>
            </div>
            <div>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-md overflow-hidden text-white w-32 hover:opacity-70 duration-300 m-auto"
              >
                <div className="bg-stone-500 px-4 py-2 font-sans font-black text-2xl">
                  Blog
                </div>
                <div className="bg-stone-600 w-full h-12 flex items-center justify-center">
                  <ChevronRight size={36} />
                </div>
              </a>
            </div>
          </div>

          <div className="h-1/2 md:h-3/5 lg:h-5/6">
            <img
              src={heroImg.src}
              alt="Foto da advogada Ana Paula Vilas Boas"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
