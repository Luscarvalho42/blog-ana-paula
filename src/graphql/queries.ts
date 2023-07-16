import { gql } from "graphql-request";

export const BUSCAR_AREAS_ATUACAO = gql`
  query buscarAreasAtuacao {
    areasDeAtuacao {
      area
      icone {
        url
      }
      descricao
    }
  }
`;
