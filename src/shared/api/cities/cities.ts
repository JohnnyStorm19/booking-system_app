import { apiInstance } from "../base";
import { TCitiesResponse } from "./types";

export const getCities = (query: string): Promise<TCitiesResponse> => {
  const params = new URLSearchParams({ name: query }).toString();

  const URL = `/cities?${params}`;
  console.log("URL: ", URL);
  
  return apiInstance.get(`${URL}`);
};
