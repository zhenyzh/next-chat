"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/query-client";
import { useRefresh } from "@/shared/api";

export default function Provider({ children }: { children: React.ReactNode }) {
  useRefresh();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
