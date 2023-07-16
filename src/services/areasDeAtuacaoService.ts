import { AreaDeAtuacao } from "../types/AreaDeAtuacao";
import { BuscarDadosHygraph } from "../utils/BuscarDadosHygraph";

interface Response {
  areasDeAtuacao: AreaDeAtuacao[];
}

export const buscarAreasDeAtuacao = async (): Promise<Response> => {
  const query = `
  query {
    areasDeAtuacao{
      area,
      icone {
        url
      },
      descricao
    }
  }
    `;

  return BuscarDadosHygraph(query);
};
