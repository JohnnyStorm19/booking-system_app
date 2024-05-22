import { IDestinationInfo, ITrainItem } from "../../../shared/types";

export type TDirection = "arrival" | "departure";
// export interface ITrainInfoProps {
//   trainData: IDestinationInfo;
//   direction: TDirection;
// }
export interface ITrainInfoProps {
  trainData: ITrainItem;
}

export interface ITrainItemProps {
  // trainData: ITrainItem["departure"] | ITrainItem["arrival"];
  trainData: IDestinationInfo
}
