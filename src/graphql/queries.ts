import { gql } from "graphql-request";

export const GET_SERVICES = gql`
  query Services {
    services {
      name
      icon {
        url
        fileName
      }
      description
    }
  }
`;
