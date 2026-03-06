import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegistrationQuery } from "./use-registration-query";
import type { RegistrationFormValues } from "@/features/auth/registration/model/types";
import { registrationSchema } from "@/features/auth/registration/model/shemas";
import { Paths } from "@/shared/configs";

export function useRegistration() {
  const router = useRouter();
  const registrationQuery = useRegistrationQuery();

  const form = useForm<RegistrationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  const submit = (data: RegistrationFormValues) => {
    registrationQuery.handleRegistration(data, {
      onSuccess: () => router.push(Paths.login()),
    });
  };

  return {
    form,
    submit,
    isPending: registrationQuery.isPending,
  };
}
