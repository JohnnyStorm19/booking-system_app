import { type TCitiesResponse } from "../../../../../shared/api/cities";
import { type TCityFieldName } from "../../../types";
import style from "./CitiesUnderField.module.scss";

interface CitiesUnderFieldProps {
  cities: TCitiesResponse;
  handlePickCity: (cityFieldName: TCityFieldName, value: string, _id: string) => () => void;
  fieldName: TCityFieldName;
}

export const CitiesUnderField = ({
  cities,
  handlePickCity,
  fieldName,
}: CitiesUnderFieldProps) => {
  return (
    <ul className={style.searched_cities}>
      {cities.map((city) => {
        return (
          <li
            key={city._id}
            className={style.city}
            onClick={handlePickCity(fieldName, city.name.toUpperCase(), city._id)}
          >
            {city.name.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};
