import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../../shared/api/cities";
import { TCityFieldName } from "../types";

export const useGetCities = (
  debouncedValue: string = "",
  isPicked: boolean,
  fieldName: TCityFieldName
) => {

  // console.log('from useGetCities: ', 'pickedFrom: ', isPickedFrom, 'pickedWhere: ', isPickedWhere, 'isPicked: ', isPicked);
  const { data: cities } = useQuery({
    queryKey: ["cities", fieldName, isPicked, debouncedValue],
    queryFn: () => {
      if (debouncedValue.length === 0 || isPicked) {
        // console.log('ОБНУЛЯЕМ!');
        return [];
      }
      // console.log("fetching cities: ", isPicked);
      return getCities(debouncedValue);
    }
    // staleTime: 2000
  });
  return cities;
};
