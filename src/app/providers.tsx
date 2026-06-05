"use client";

import { ToastContainer } from "react-toastify";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "@/shared/lib";
import { queryClient } from "@/shared/api";

export default function Provider({ children }: { children: React.ReactNode }) {
  const persister = createAsyncStoragePersister({
    storage: window.localStorage,
  });

  return (
    <>
      <ErrorBoundary>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
          onSuccess={() => {
            queryClient.resumePausedMutations().then(() => {
              queryClient.invalidateQueries();
            });
          }}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </PersistQueryClientProvider>
      </ErrorBoundary>
      <ToastContainer />
    </>
  );
}
