import { Link } from "react-router-dom";
import {
  capitalizeCityName,
  getFullTrainDate,
  getTrainDuration,
  getTrainTime,
} from "../../../../shared/lib";
import { IDestinationInfo } from "../../../../shared/types";
import { MyButton } from "../../../../shared/ui";

interface ISeatsPageHeader {
  pickedTrainData: IDestinationInfo;
}

const SeatsPageHeader = ({ pickedTrainData }: ISeatsPageHeader) => {
  return (
    <div>
      <Link to={'/tickets'}>
        <MyButton btnVariant="yellow" childrenVariant="uppercased">
          →
        </MyButton>
        <div>Выбрать другой поезд</div>
      </Link>
      <div>
        {pickedTrainData.train.name}
        {pickedTrainData.from.city.name}→{pickedTrainData.to.city.name}
      </div>
      <div>
        <span>{getFullTrainDate(pickedTrainData.from.datetime)}</span>
        <span>{getTrainTime(pickedTrainData.from.datetime)}</span>
        <span>{capitalizeCityName(pickedTrainData.from.city.name)}</span>
        <span>{pickedTrainData.from.railway_station_name} вокзал</span>
      </div>
      <div>
        <span>{getTrainDuration(pickedTrainData.duration)}</span>
      </div>
    </div>
  );
};

export default SeatsPageHeader;
