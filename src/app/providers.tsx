"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/query-client";
import { useEffect } from "react";
import { AuthRefresh } from "@/app/auth-refresh";
import { tokenService } from "@/shared/token-service";

export default function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const token = tokenService.get();
    console.log({ token });
    if (!token) {
      AuthRefresh();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
