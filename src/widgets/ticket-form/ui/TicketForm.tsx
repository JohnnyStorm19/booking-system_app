import style from "./ticket_form.module.scss";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useGetCities } from "../hooks";
import { getDateSchema } from "../lib";
import { TCityFieldName } from "../types";
import { NestedCityInput, NestedDateInput } from "./inputs";
import { ReverseIcon } from "../../../shared/ui";
import { useDebounce } from "../../../shared/hooks";
import { FormContext } from "../../../app/providers/FormContextProvider";
import { IContext } from "../../../shared/types";

const schema = z.object({
  from: z
    .string()
    .trim()
    .min(1, { message: "Укажите откуда вы направляетесь" }),
  where: z.string().trim().min(1, { message: "Укажите куда вы направляетесь" }),
  startDate: getDateSchema(),
  returnDate: getDateSchema(),
});

type Schema = z.infer<typeof schema>;

export const TicketForm = () => {
  const navigate = useNavigate();

  const {
    formValue: {
      from,
      where,
      startDate,
      returnDate,
      isPickedFrom,
      isPickedWhere,
    },
    setFormValue,
  } = useContext(FormContext) as IContext;

  // const [isPickedFromState, setIsPickedFromState] = useState(isPickedFrom);
  // const [isPickedWhereState, setIsPickedWhereState] = useState(isPickedWhere);

  // useEffect(() => {
  //   setIsPickedFromState(isPickedFrom);
  //   setIsPickedWhereState(isPickedWhere);
  //   console.log(isPickedFrom, isPickedWhere);
  // }, [isPickedFrom, isPickedWhere])

  // const [isPicked, setIsPicked] = useState<TIsPicked>({
  //   from: isPickedFrom,
  //   where: isPickedWhere,
  // });
  // const [isPickedId, setIsPickedId] = useState<TIsPickedId>({
  //   from_id: isPickedFromId,
  //   where_id: isPickedWhereId,
  // });

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      from,
      where,
      startDate,
      returnDate,
    },
  });

  // const debouncedFromValue = useDebounce({
  //   value: methods.watch("from"),
  //   delay: !isPicked.from ? 1500 : 0,
  // });
  // const debouncedWhereValue = useDebounce({
  //   value: methods.watch("where"),
  //   delay: !isPicked.where ? 1500 : 0,
  // });
  const debouncedFromValue = useDebounce({
    value: methods.watch("from"),
    delay: !isPickedFrom ? 1000 : 0,
  });
  const debouncedWhereValue = useDebounce({
    value: methods.watch("where"),
    delay: !isPickedWhere ? 1000 : 0,
  });

  const citiesFrom = useGetCities(debouncedFromValue, isPickedFrom, "from");
  const citiesWhere = useGetCities(debouncedWhereValue, isPickedWhere, "where");

  const handleReverse = () => {
    const fromValue = methods.watch("from");
    const whereValue = methods.watch("where");
    methods.setValue("from", whereValue);
    methods.setValue("where", fromValue);

    // setIsPicked({ from: isPicked.where, where: isPicked.from });
    // setIsPickedId({
    //   from_id: isPickedId.where_id,
    //   where_id: isPickedId.from_id,
    // });
    setFormValue((prev) => {
      return {
        ...prev,
        from: whereValue,
        where: fromValue,
        isPickedFromId: prev.isPickedWhereId,
        isPickedWhereId: prev.isPickedFromId,
        isPickedFrom: prev.isPickedWhere,
        isPickedWhere: prev.isPickedFrom,
      };
    });
  };

  const handlePickCity = (
    cityFieldName: TCityFieldName,
    value: string,
    _id: string
  ) => {
    return () => {
      // console.log("_id: ", _id);
      // console.log("value: ", value);
      // console.log("cityFieldName: ", cityFieldName);
      
      // setIsPickedId((prev) => {
      //   return { ...prev, [`${cityFieldName}_id`]: _id };
      // });

      methods.setValue(cityFieldName, value);

      // setIsPicked((prev) => {
      //   return { ...prev, [cityFieldName]: true };
      // });
      setFormValue((prev) => {
        return {
          ...prev,
          isPickedFromId: cityFieldName === "from" ? _id : prev.isPickedFromId,
          isPickedWhereId:
            cityFieldName === "where" ? _id : prev.isPickedWhereId,
          isPickedFrom: cityFieldName === "from" ? true : prev.isPickedFrom,
          isPickedWhere: cityFieldName === "where" ? true : prev.isPickedWhere,
          from: cityFieldName === "from" ? value : prev.from,
          where: cityFieldName === "where" ? value : prev.where,
        };
      });
    };
  };

  const onSubmitForm: SubmitHandler<Schema> = (data) => {
    console.log('Отправляем форму!"');
    console.log(data);
    
    if (isPickedFrom && isPickedWhere) {
      navigate("/tickets");
      console.log(
        "startDate: ",
        methods.watch("startDate"),
        "returnDate: ",
        methods.watch("returnDate")
      );
      setFormValue((prev) => {
        return {
          ...prev,
          returnDate: new Date(methods.watch("returnDate")),
          startDate: new Date(methods.watch("startDate")),
        };
      });
    }
  };

  // функция пробрасывается в инпут выбора города
  // нужна в первую очередь для сброса флагов в стэйте isPicked, чтобы запросы на города снова отправлялись
  const onChangeCityField = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: TCityFieldName
  ) => {
    console.log("ON CHANGE CITY FIELD!");
    setFormValue((prev) => {
      return {
        ...prev,
        isPickedFrom: fieldName === "from" ? false : prev.isPickedFrom,
        isPickedWhere: fieldName === "where" ? false : prev.isPickedWhere,
        isPickedFromId: fieldName === "from" ? "" : prev.isPickedFromId,
        isPickedWhereId: fieldName === "where" ? "" : prev.isPickedWhereId,
      };
    });
    return e.target.value;
  };

  return (
    <FormProvider {...methods}>
      <form
        className={style.ticket_form}
        onSubmit={methods.handleSubmit(onSubmitForm)}
      >
        <label htmlFor="cities" className={style.ticket_form__title}>
          Направления
        </label>
        <div className={style.cities__container}>
          <NestedCityInput
            name="from"
            placeholder="Откуда"
            cities={citiesFrom || []}
            error={methods.formState.errors.from?.message || ""}
            handlePickCity={handlePickCity}
            onChangeCityField={onChangeCityField}
          />

          <ReverseIcon onClick={handleReverse} />

          <NestedCityInput
            name="where"
            placeholder="Куда"
            cities={citiesWhere || []}
            error={methods.formState.errors.where?.message || ""}
            handlePickCity={handlePickCity}
            onChangeCityField={onChangeCityField}
          />
        </div>

        <div className={style.dates__container}>
          <NestedDateInput
            name="startDate"
            error={methods.formState.errors.startDate?.message || ""}
          />
          <NestedDateInput
            name="returnDate"
            error={methods.formState.errors.returnDate?.message || ""}
          />
        </div>
        <button type="submit" style={{ display: "none" }}>
          Отправить форму!
        </button>
      </form>
    </FormProvider>
  );
};
