import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegistrationMutation } from "./use-registration-mutation";
import type { RegistrationFormValues } from "@/features/auth/registration/model/types";
import { registrationSchema } from "@/features/auth/registration/model/shemas";
import { Paths } from "@/shared/configs";

export function useRegistration() {
  const router = useRouter();
  const mutation = useRegistrationMutation();

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
      onSuccess: () => router.push(Paths.login()),
    });
  });

  return {
    form,
    submit,
    isPending: mutation.isPending,
  };
}
