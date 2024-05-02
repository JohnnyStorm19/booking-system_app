import { Controller, useFormContext } from "react-hook-form";
import { Field } from "../../../../../shared/ui";
import { TCityFieldName } from "../../../types";
import { TCitiesResponse } from "../../../../../shared/api/cities";
import { CitiesUnderField } from "../cities-under-field";
import style from "./NestedCityInput.module.scss";

interface INestedCityProps {
  name: TCityFieldName;
  placeholder: string;
  onChangeCityField: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: TCityFieldName
  ) => void;
  handlePickCity: (cityFieldName: TCityFieldName, value: string, _id: string) => () => void;
  error: string;
  cities: TCitiesResponse;
}

export const NestedCityInput = ({
  name,
  placeholder,
  error,
  cities,
  onChangeCityField,
  handlePickCity,
}: INestedCityProps) => {
  const { control } = useFormContext();
  return (
    <div className={style.cities__wrapper}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Field
              {...field}
              placeholder={placeholder}
              errorMessage={error}
              onChange={(e) =>
                field.onChange(
                  onChangeCityField &&
                    onChangeCityField(e, name as TCityFieldName)
                )
              }
            />
          );
        }}
      />
      {cities && cities.length > 0 && (
        <CitiesUnderField
          cities={cities}
          handlePickCity={handlePickCity}
          fieldName={name}
        />
      )}
    </div>
  );
};
