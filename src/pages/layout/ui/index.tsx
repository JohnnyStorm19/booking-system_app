import { Outlet } from "react-router-dom";
import style from "./layout.module.scss";
import { Footer, Header } from "../../../widgets";
import { FormContextProvider } from "../../../app/providers/FormContextProvider";
import { useState } from "react";
import { IFormValue, IPickedTrains } from "../../../shared/types";

export const Layout = () => {
  const [formValue, setFormValue] = useState<IFormValue>({
    from: "",
    where: "",
    startDate: new Date(),
    returnDate: new Date(),
    isPickedFromId: "",
    isPickedWhereId: "",
    isPickedFrom: false,
    isPickedWhere: false,
  });
  const [pickedTrains, setPickedTrains] = useState<IPickedTrains>({departureTrain: null, arrivalTrain: null});

  return (
    <FormContextProvider values={{ formValue, setFormValue, pickedTrains, setPickedTrains }}>
      <div className={style.layout__container}>
        <Header />
        <main className={style.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </FormContextProvider>
  );
};
