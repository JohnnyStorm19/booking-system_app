import { apiInstance } from "../base"
import { TCitiesResponse } from "./types"

const BASE_URL = (query: string) => `cities?name=${query}`

export const getCities = (query: string): Promise<TCitiesResponse> => {
    const URL = BASE_URL(query);
    console.log('URL: ', URL);
    return apiInstance.get(`${URL}`)
}