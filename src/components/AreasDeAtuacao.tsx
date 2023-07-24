import client from "@/graphql/client";
import { BUSCAR_AREAS_ATUACAO } from "@/graphql/queries";
import { AreaDeAtuacao } from "@/types/AreaDeAtuacao";

interface response {
  areasDeAtuacao: AreaDeAtuacao[];
}

export default async function AreasDeAtuacao() {
  const { areasDeAtuacao } = (await client.request(
    BUSCAR_AREAS_ATUACAO
  )) as response;

  const cartoesAreasDeAtuacao = () => {
    return areasDeAtuacao.map(({ icone, area, descricao }, index) => (
      <div
        className="bg-white rounded-xl w-60 flex flex-col items-center justify-start shadow-2xl p-4 gap-3"
        key={descricao + index}
      >
        <img src={icone.url} alt="icone" />
        <h2 className="font-bold text-lg">{area}</h2>
        <p className="text-sm indent-8">{descricao}</p>
      </div>
    ));
  };

  return (
    <section className="bg-zinc-200 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Áreas de atuação</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cartoesAreasDeAtuacao()}
      </div>
    </section>
  );
}
