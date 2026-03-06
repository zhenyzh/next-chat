import { useMutation } from "@tanstack/react-query";
import { registrationApi } from "../../api/registration-api";

export function useRegistration() {
  const actions = useMutation({
    mutationFn: registrationApi.registration,
  });

  return {
    isPending: actions.isPending,
    error: actions.error,
    handleRegistration: actions.mutate,
  };
}
