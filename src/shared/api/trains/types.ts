import { ITrainItem } from "../../types";

export type TCities_ids = {
  from_id: string;
  to_id: string;
};
export type TParams = {
  params: Record<string, string | number>;
};
export interface ITrainRequest {
  total_count: number;
  items: ITrainItem[];
}