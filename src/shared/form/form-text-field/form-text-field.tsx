"use client";

import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          errorMessage={fieldState?.error?.message}
        />
      )}
    />
  );
}
