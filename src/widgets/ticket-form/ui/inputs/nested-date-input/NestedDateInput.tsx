import { Controller, useFormContext } from "react-hook-form";
import { Field } from "../../../../../shared/ui";
import { TDatesFieldName } from '../../../types';

interface INestedDateInputProps {
    name: TDatesFieldName;
    error: string;
}

export const NestedDateInput = ({ name, error }: INestedDateInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Field
            {...field}
            type="date"
            value={
              field.value instanceof Date
                ? field.value.toISOString().split("T")[0]
                : field.value
            }
            errorMessage={error}
          />
        );
      }}
    />
  );
};
