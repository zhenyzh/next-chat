import { useState } from "react";
import { useSearchQueryParams } from "@/shared/hooks";

export function useSearchChatUsers() {
  const { setQuery, removeQuery } = useSearchQueryParams();
  const [value, setValue] = useState("");

  const onChange = (value: string) => {
    setValue(value);

    if (!value.trim()) {
      onReset();
      return;
    }

    setQuery({ recipientSearch: value });
  };

  const onReset = () => {
    setValue("");
    removeQuery(["recipientSearch"]);
  };

  return { value, onChange, onReset };
}
