import { useContext, useMemo } from "react";
import { FormContext } from "../../../../app/providers/FormContextProvider";
import { IContext } from "../../../../shared/types";
import { useQuery } from "@tanstack/react-query";
import { getTrains } from "../../../../shared/api/trains";
import { TrainsItemsList } from "../../../../entities";
import dayjs from "dayjs";

// {params: {offset: 5}}

export const Trains = () => {
  const {
    formValue: { isPickedFromId, isPickedWhereId, startDate, returnDate },
  } = useContext(FormContext) as IContext;
  console.log(isPickedFromId, isPickedWhereId);

  const formattedDates = useMemo(() => {
    const start = dayjs(startDate.toString()).format("YYYY-MM-DD");
    const returned = dayjs(returnDate.toString()).format("YYYY-MM-DD");
    console.log({ startDate: start, returnDate: returned });
    return { startDate: start, returnDate: returned };
  }, [startDate, returnDate]);

  const { data, isSuccess } = useQuery({
    queryFn: () =>
      getTrains(
        { from_id: isPickedFromId, to_id: isPickedWhereId },
        {
          params: {
            date_start: formattedDates.startDate,
            date_end: formattedDates.returnDate,
          },
        }
      ),
    queryKey: [
      "trains",
      { startDate, returnDate, isPickedFromId, isPickedWhereId },
    ],
    enabled: isPickedFromId.length > 0 && isPickedWhereId.length > 0,
  });

  console.log(data);

  return (
    <section>
      {isSuccess && <TrainsItemsList trainsData={data.items} />}
    </section>
  );
};
