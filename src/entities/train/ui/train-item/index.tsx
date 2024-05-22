import style from "./TrainItem.module.scss";

// import { PriceInfo, TimeInfo, TrainInfo } from "../info";
// import { ITrainInfoProps } from "../../types";
import { TimeInfo, TrainInfo, SeatsInfo } from "../info";
import { IContext, IDestinationInfo } from "../../../../shared/types";
import { useContext } from "react";
import { FormContext } from "../../../../app/providers/FormContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

interface ITrainItemProps {
  // trainData: ITrainItem['departure'] | ITrainItem["arrival"];
  trainData: IDestinationInfo;
  isArrival?: boolean;
}

export const TrainItem = ({ trainData, isArrival = false }: ITrainItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {setPickedTrains} = useContext(FormContext) as IContext;
  const handlePickSeats = () => {
    console.log('HANDLE PICK SEAT!');
    navigate(location.pathname + '/pick-seats');
    setPickedTrains(prev => {
      if (isArrival) {
        return {
          arrivalTrain: trainData,
          departureTrain: prev.departureTrain
        }
      }
      return {
        arrivalTrain: prev.arrivalTrain,
        departureTrain: trainData
      }
    })
  }
  return (
    <div className={style.trainItem}>
      {/* {trainData.arrival && <TwoWayItem trainData={trainData} />}
      {!trainData.arrival && <OneWayItem trainData={trainData} />} */}
      <TrainInfo trainData={trainData} />
      <TimeInfo trainData={trainData} />
      <SeatsInfo trainData={trainData} handlePickSeats={handlePickSeats} />
      {/* <div>
        <TrainInfo trainData={trainData} />
        <TimeInfo trainData={trainData} direction={direction} />
        <PriceInfo trainData={trainData} direction={direction} />
      </div> */}
    </div>
  );
};
