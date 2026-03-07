import { useMutation } from "@tanstack/react-query";
import { registrationApi } from "@/features/auth/registration/api";

export function useRegistrationMutation() {
  const mutation = useMutation({
    mutationFn: registrationApi.registration,
  });

  return {
    isPending: mutation.isPending,
    error: mutation.error,
    handleRegistration: mutation.mutate,
  };
}
