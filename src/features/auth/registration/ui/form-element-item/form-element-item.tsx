import { Control } from "react-hook-form";
import { formItems } from "../../lib/utils";
import type { RegistrationFormValues } from "../../model/types";
import { FormTextField } from "@/shared/form";

type Props = {
  control: Control<RegistrationFormValues>;
};

export function FormElementItem({ control }: Props) {
  const items = formItems(control);

  return (
    <>
      {items.map((item) => (
        <FormTextField
          key={item.name}
          control={item.control}
          label={item.label}
          name={item.name}
          iconStart={<item.iconStart />}
        />
      ))}
    </>
  );
}
