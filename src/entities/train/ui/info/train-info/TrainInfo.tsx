import style from "./TrainInfo.module.scss";
import { ITrainInfoProps, ITrainItemProps } from "../../../types";

export const TrainInfo = ({ trainData }: ITrainItemProps) => {
  return (
    <>
      {trainData && (
        <div className={style.train_info}>
          <div>
            <h4>{trainData.train.name}</h4>
            <div className={style.directions}>
              <p>{trainData.from.city.name.toUpperCase()}</p>
              {"------>"}
              <p>{trainData.to.city.name.toUpperCase()}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// <div className={style.train_info}>
//   <div>
//     <h4>{trainData.departure.train.name}</h4>
//     <div className={style.directions}>
//       <p>{trainData.departure.from.city.name.toUpperCase()}</p>
//       {"------>"}
//       <p>{trainData.departure.to.city.name.toUpperCase()}</p>
//     </div>
//   </div>
//   {trainData.arrival && (
//     <div>
//       <h4>{trainData.arrival.train.name}</h4>
//       <div className={style.directions}>
//         <p>{trainData.arrival.from.city.name.toUpperCase()}</p>
//         {"<------"}
//         <p>{trainData.arrival.to.city.name.toUpperCase()}</p>
//       </div>
//     </div>
//   )}
// </div>
