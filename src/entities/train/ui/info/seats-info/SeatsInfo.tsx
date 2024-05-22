import { getLowestSeatPrice } from "../../../../../shared/lib";
import { SeatsTypes, TClass } from "../../../../../shared/types";
import { MyButton } from "../../../../../shared/ui";
import { ITrainItemProps } from "../../../types";

interface ISeatsInfoProps {
  trainData: ITrainItemProps["trainData"];
  handlePickSeats: () => void;
}

export const SeatsInfo = ({ trainData, handlePickSeats }: ISeatsInfoProps) => {
  const availableSeatsTypes = Object.keys(
    trainData.available_seats_info
  ) as TClass[];
  return (
    <div>
      {availableSeatsTypes.map((seatType) => {
        return (
          <div key={seatType}>
            {SeatsTypes[seatType]} {trainData.available_seats_info[seatType]} от{" "}
            {getLowestSeatPrice(trainData.price_info[seatType])}
          </div>
        );
      })}
      <MyButton
        childrenVariant="uppercased"
        btnVariant="yellow"
        handler={handlePickSeats}
      >
        Выбрать места
      </MyButton>
    </div>
  );
};
