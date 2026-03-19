import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "./use-login-mutation";
import type { LoginFormValues } from "../types";
import { loginSchema } from "../shemas";
import { Paths } from "@/shared/configs";
import { useTokenService } from "@/shared/token-service";

export function useLogin() {
  const router = useRouter();
  const mutation = useLoginMutation();
  const tokenService = useTokenService();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const submit = form.handleSubmit((data) => {
    mutation.handleLogin(data, {
      onSuccess: (data) => {
        tokenService.set(data.accessToken);
        router.push(Paths.home());
      },
    });
  });

  return {
    form,
    submit,
    isPending: mutation.isPending,
  };
}
