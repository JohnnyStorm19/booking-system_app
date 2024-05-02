export type TCityFieldName = "from" | "where";
export type TDatesFieldName = "startDate" | "returnDate";
export type TIsPicked = Record<TCityFieldName, boolean>;
export type TIsPickedId = Record<`${TCityFieldName}_id`, string>;