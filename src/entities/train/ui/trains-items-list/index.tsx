import { Fragment } from "react/jsx-runtime";
import { ITrainItem } from "../../../../shared/types";
import { TrainItem } from "../train-item";

interface ITrainsItemsList {
  trainsData: ITrainItem[];
}

export const TrainsItemsList = ({trainsData}: ITrainsItemsList) => {
  return (
    <div>
        {trainsData.map(train => {
            return (
              <Fragment key={train.departure._id}>
                <TrainItem trainData={train.departure} />
                {train.arrival && <TrainItem trainData={train.arrival} isArrival={true} />}
              </Fragment>
            )
        })}
    </div>
  )
}

