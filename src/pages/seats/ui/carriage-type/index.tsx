import { IDestinationInfo, SeatsTypes, TClass } from "../../../../shared/types";

interface ICarriageType {
  seatsInfo: IDestinationInfo["available_seats_info"];
}

export const CarriageType = ({ seatsInfo }: ICarriageType) => {
  const seatTypes = Object.keys(seatsInfo) as TClass[];
  return (
    <div>
      {seatTypes.map(seat => {
        return <span key={seat}>{SeatsTypes[seat]}</span>
      })}
    </div>
  )
};
