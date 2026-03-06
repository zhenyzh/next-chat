import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginQuery } from "./use-login-query";
import type { LoginFormValues } from "@/features/auth/login/model/types";
import { loginSchema } from "@/features/auth/login/model/shemas";
import { Paths } from "@/shared/configs";
import { tokenService } from "@/shared/token-service";

export function useLogin() {
  const router = useRouter();
  const loginQuery = useLoginQuery();

  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const submit = form.handleSubmit((data) => {
    loginQuery.handleLogin(data, {
      onSuccess: (data) => {
        tokenService.set(data.accessToken);
        router.push(Paths.home());
      },
    });
  });

  return {
    form,
    submit,
    isPending: loginQuery.isPending,
  };
}
