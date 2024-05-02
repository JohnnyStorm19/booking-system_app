import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../../shared/api/cities";

export const useGetCities = (
  debouncedValue: string = "",
  isPicked: boolean
) => {
  const { data: cities } = useQuery({
    queryKey: ["cities", debouncedValue],
    queryFn: () => {
      if (debouncedValue.length === 0 || isPicked) return [];
      console.log("fetching cities from!");
      return getCities(debouncedValue);
    },
    staleTime: 2000
  });
  return cities;
};
