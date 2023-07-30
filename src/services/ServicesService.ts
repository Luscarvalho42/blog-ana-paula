import { GET_SERVICES } from "@/graphql/queries";
import { Service } from "../types/Service";
import { GetHygraphData } from "../utils/GetHygraphData";

interface Response {
  services: Service[];
}

export const GetServices = async (): Promise<Response> =>
  GetHygraphData(GET_SERVICES);
