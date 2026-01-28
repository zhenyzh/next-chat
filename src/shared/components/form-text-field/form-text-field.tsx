"use client";

import { Controller, useFormContext } from "react-hook-form";
import { TextField, type TextFieldProps } from "@zhenyzh/common-ui/components";

type Props = TextFieldProps & {
  name: string;
};

export function FormTextField({ name, ...props }: Props) {
  const formContext = useFormContext();

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, formState }) => (
        <TextField
          {...props}
          {...field}
          errorMessage={formState.errors[name]?.message as string}
        />
      )}
    />
  );
}
