import { apiInstance } from "../base"
import { ITrainRequest, TCities_ids, TParams } from "./types";

export const getTrains = (cities_ids: TCities_ids, params: TParams={params: {}} ):Promise<ITrainRequest> => {
    const newParams = new URLSearchParams({from_city_id: cities_ids.from_id, to_city_id: cities_ids.to_id}).toString();

    console.log('URL: ', newParams);
    return apiInstance.get(`?${newParams}`, params)
}