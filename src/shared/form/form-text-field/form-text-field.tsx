"use client";

import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  useFormState,
} from "react-hook-form";
import { TextField, type TextFieldProps } from "@zhenyzh/common-ui/components";

type Props<T extends FieldValues> = TextFieldProps & {
  name: FieldPath<T>;
  control: Control<T>;
};

export function FormTextField<T extends FieldValues>({
  name,
  control,
  ...props
}: Props<T>) {
  const { errors } = useFormState({ control, name });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...props}
          {...field}
          errorMessage={errors[name]?.message as string}
        />
      )}
    />
  );
}
