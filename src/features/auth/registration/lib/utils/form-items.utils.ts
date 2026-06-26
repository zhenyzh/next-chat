import { Control } from "react-hook-form";
import {
  LockKeyholeIcon,
  MailIcon,
  UserPenIcon,
} from "@zhenyzh/common-ui/icons";
import type { RegistrationFormValues } from "../../model/types";

export function formItems(control: Control<RegistrationFormValues>) {
  return [
    {
      control,
      label: "Введите почту",
      name: "email",
      iconStart: MailIcon,
    },
    {
      control,
      label: "Введите имя",
      name: "name",
      iconStart: UserPenIcon,
    },
    {
      control,
      label: "Введите пароль",
      name: "password",
      type: "password",
      iconStart: LockKeyholeIcon,
    },
    {
      control,
      label: "Введите новый пароль",
      name: "confirmPassword",
      type: "password",
      iconStart: LockKeyholeIcon,
    },
  ] as const;
}
