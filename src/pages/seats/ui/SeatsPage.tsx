import { useContext } from "react";
import SeatsPageHeader from "./header";
import { FormContext } from "../../../app/providers/FormContextProvider";
import { IContext } from "../../../shared/types";
import { TicketsQuantity } from "./tickets-quantity";
import { CarriageType } from "./carriage-type";

export const SeatsPage = () => {
  const { pickedTrains } = useContext(FormContext) as IContext;

  return (
    <div>
      {pickedTrains.departureTrain && (
        <SeatsPageHeader pickedTrainData={pickedTrains.departureTrain} />
      )}
      {pickedTrains.arrivalTrain && (
        <SeatsPageHeader pickedTrainData={pickedTrains.arrivalTrain} />
      )}

      <TicketsQuantity />

      {pickedTrains.departureTrain && pickedTrains.departureTrain.available_seats_info && (
        <CarriageType seatsInfo={pickedTrains.departureTrain.available_seats_info} />
      )}
      {pickedTrains.arrivalTrain && pickedTrains.arrivalTrain.available_seats_info && (
        <CarriageType seatsInfo={pickedTrains.arrivalTrain.available_seats_info} />
      )}
    </div>
  );
};
