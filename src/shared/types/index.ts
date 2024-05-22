import { IDestinationInfo } from "./trains";

export interface IPickedTrains {
  departureTrain: IDestinationInfo | null ;
  arrivalTrain: IDestinationInfo | null; 
}

export interface IFormValue {
  from: string;
  where: string;
  startDate: Date;
  returnDate: Date;
  isPickedFromId: string;
  isPickedWhereId: string;
  isPickedFrom: boolean;
  isPickedWhere: boolean;
}

export interface IContext {
  formValue: IFormValue;
  setFormValue: React.Dispatch<React.SetStateAction<IFormValue>>;
  pickedTrains: IPickedTrains;
  setPickedTrains: React.Dispatch<React.SetStateAction<IPickedTrains>>;
}

export { type ITrainItem, type IDestinationInfo, type TClass, type ISeatPrices, SeatsTypes } from "./trains";
export { PluralizedUnits } from "./timeUnits";
