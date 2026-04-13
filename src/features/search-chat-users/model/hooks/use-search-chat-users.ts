import { useState } from "react";
import { useSearchQueryParams } from "@/shared/hooks";

export function useSearchChatUsers() {
  const { setQuery, removeQuery } = useSearchQueryParams();
  const [value, setValue] = useState<string>("");

  const onChange = (value: string) => {
    setValue(value);

    if (!value.trim()) {
      onReset();
    } else {
      setQuery({ recipientsSearch: value });
    }
  };

  const onReset = () => {
    setValue("");
    removeQuery(["recipientsSearch"]);
  };

  return { value, onChange, onReset };
}
