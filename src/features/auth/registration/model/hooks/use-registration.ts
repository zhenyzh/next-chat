import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegistrationAction } from "./use-registration-action";
import type { RegistrationFormValues } from "../types";
import { registrationSchema } from "../shemas";
import { paths } from "@/shared/configs";

export function useRegistration() {
  const router = useRouter();
  const mutation = useRegistrationAction();

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

  const submit = form.handleSubmit((data: RegistrationFormValues) => {
    mutation.handleRegistration(data, {
      onSuccess: () => router.push(paths.login()),
    });
  });

  return {
    form,
    submit,
    isPending: mutation.isPending,
  };
}
