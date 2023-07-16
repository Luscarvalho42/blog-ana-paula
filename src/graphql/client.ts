import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_URL;

const client = new GraphQLClient(endpoint as string, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

export default client;
