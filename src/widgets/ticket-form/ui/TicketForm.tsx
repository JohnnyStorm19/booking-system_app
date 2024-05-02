import style from "./ticket_form.module.scss";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ReverseIcon } from "../../../shared/ui";
import { useDebounce } from "../../../shared/hooks";
import { useGetCities } from "../hooks";
import { getDateSchema } from "../lib";
import { NestedCityInput, NestedDateInput } from "./inputs";
import { TCityFieldName, TIsPicked, TIsPickedId } from "../types";
import { useState } from "react";

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
  const [isPicked, setIsPicked] = useState<TIsPicked>({
    from: false,
    where: false,
  });
  const [isPickedId, setIsPickedId] = useState<TIsPickedId>({
    from_id: "",
    where_id: "",
  });

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const debouncedFromValue = useDebounce({
    value: methods.watch("from"),
    delay: !isPicked.from ? 1500 : 0,
  });
  const debouncedWhereValue = useDebounce({
    value: methods.watch("where"),
    delay: !isPicked.where ? 1500 : 0,
  });

  const citiesFrom = useGetCities(debouncedFromValue, isPicked.from);
  const citiesWhere = useGetCities(debouncedWhereValue, isPicked.where);

  const handleReverse = () => {
    const fromValue = methods.watch("from");
    const whereValue = methods.watch("where");
    methods.setValue("from", whereValue);
    methods.setValue("where", fromValue);

    setIsPicked({ from: isPicked.where, where: isPicked.from });
    setIsPickedId({
      from_id: isPickedId.where_id,
      where_id: isPickedId.from_id,
    });
  };

  const handlePickCity = (
    cityFieldName: TCityFieldName,
    value: string,
    _id: string
  ) => {
    return () => {
      console.log("_id: ", _id);
      setIsPickedId((prev) => {
        return { ...prev, [`${cityFieldName}_id`]: _id };
      });
      methods.setValue(cityFieldName, value);
      setIsPicked((prev) => {
        return { ...prev, [cityFieldName]: true };
      });
    };
  };

  const onSubmitForm: SubmitHandler<Schema> = (data) => {
    console.log('Отправляем форму!"');
    console.log(data);
  };

  // функция пробрасывается в инпут выбора города
  // нужна в первую очередь для сброса флагов в стэйте isPicked, чтобы запросы на города снова отправлялись 
  const onChangeCityField = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: TCityFieldName
  ) => {
    console.log("ON CHANGE CITY FIELD!");
    setIsPicked((prev) => {
      return { ...prev, [fieldName]: false };
    });
    setIsPickedId((prev) => {
      return { ...prev, [`${fieldName}_id`]: "" };
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
