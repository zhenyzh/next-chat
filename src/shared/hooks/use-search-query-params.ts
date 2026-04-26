import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchQueryParams() {
  const params = useSearchParams();
  const router = useRouter();
  const patchName = usePathname();

  const query = Object.fromEntries(params);

  const setQuery = <T>(newParams: Record<string, T>) => {
    const newSearchParams = new URLSearchParams(params);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        newSearchParams.delete(key);
      } else {
        newSearchParams.set(key, JSON.stringify(value));
      }
    });
    router.replace(`${patchName}?${newSearchParams}`);
  };

  const removeQuery = (keys: string[]) => {
    const newSearchParams = new URLSearchParams(params);
    keys.forEach((key) => {
      newSearchParams.delete(key);
    });
    router.replace(`${patchName}?${newSearchParams}`);
  };

  return { query, setQuery, removeQuery };
}
