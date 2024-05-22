import style from "./timeInfo.module.scss";

import {
  capitalizeCityName,
  getFullTrainDate,
  getTrainDuration,
  getTrainTime,
} from "../../../../../shared/lib";
import { ITrainItemProps } from "../../../types";
// import { ITrainInfoProps } from "../../../types";

export const TimeInfo = ({ trainData }: ITrainItemProps) => {
  return (
    <>
      {trainData && (
        <div className={style.time_info}>
          <div className={style.destination_info}>
            <span>{getFullTrainDate(trainData.from.datetime)}</span>
            <span>{getTrainTime(trainData.from.datetime)}</span>
            <span>{capitalizeCityName(trainData.from.city.name)}</span>
            <span>{trainData.from.railway_station_name} вокзал</span>
          </div>
          <div>
            <span>{getTrainDuration(trainData.duration)}</span>
          </div>
          <div className={style.destination_info}>
            <span>{getFullTrainDate(trainData.to.datetime)}</span>
            <span>{getTrainTime(trainData.to.datetime)}</span>
            <span>{capitalizeCityName(trainData.to.city.name)}</span>
            <span>{trainData.to.railway_station_name} вокзал</span>
          </div>
        </div>
      )}
    </>
  );
};

// <div className={style.time_info}>
//   <div className={style.destination_info}>
//     <span>{getTrainTime(trainData.departure.from.datetime)}</span>
//     <span>{capitalizeCityName(trainData.departure.from.city.name)}</span>
//     <span>{trainData.departure.from.railway_station_name} вокзал</span>
//     <div>
//       <span>{getTrainDuration(trainData.departure.duration)}</span>
//     </div>
//   </div>

// {/* {trainData.arrival && (
//   <div>
//     <div className={style.destination_info}>
//       <span>{getTrainTime(trainData.arrival.from.datetime)}</span>
//       <span>{capitalizeCityName(trainData.arrival.from.city.name)}</span>
//       <span>{trainData.arrival.from.railway_station_name} вокзал</span>
//     </div>

//     <div>
//       <span>{getTrainDuration(trainData.arrival.duration)}</span>
//     </div>
//   </div>
// )} */}
