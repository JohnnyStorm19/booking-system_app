interface IAvailable_seats_info {
  first: number;
  second: number;
  third: number;
  fourth: number;
}
interface IBaseTrainData {
  // available_seats_info: Record<keyof TClass, number>;
  available_seats_info: Partial<IAvailable_seats_info>;
  available_seats: number;
  have_air_conditioning: boolean;
  have_first_class: boolean;
  have_fourth_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_wifi: boolean;
  is_express: boolean;
  min_price: number;
}
export interface IDestinationInfo extends IBaseTrainData {
  duration: number;
  from: TFrom;
  price_info: TPriceInfo;
  to: TFrom;
  train: TTrain;
  _id: string;
}

type TCity = {
  id: string;
  name: string;
};
type TTrain = {
  _id: string;
  name: string;
};

type TFrom = {
  city: TCity;
  datetime: number;
  railway_station_name: string;
};

// export type TClass = "first" | "second" | "third" | "fourth";
export type TClass = keyof IAvailable_seats_info;
export interface ISeatPrices {
  top_price: number,
  side_price: number,
  bottom_price: number,
}
// type TSeatPrice = "top_price" | "side_price" | "bottom_price";
type TSeatPrice = keyof ISeatPrices;
type TPriceInfo = Record<TClass, Record<TSeatPrice, number>>;

export interface ITrainItem extends IBaseTrainData {
  departure: IDestinationInfo;
  arrival?: IDestinationInfo;
}


export enum SeatsTypes {
  first = "«Люкс»",
  second = "Купе",
  third = "Плацкарт",
  fourth = "Сидячий",
}
