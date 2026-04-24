import { useState } from "react";
import { collapsedKey } from "../../config";
import { localStorageService } from "@/shared/service";

export function useCollapsed() {
  const [collapses, setCollapses] = useState(() => {
    return localStorageService.get(collapsedKey) === "true";
  });

  const onChange = () => {
    setCollapses((p) => {
      const value = !p;
      localStorageService.set(collapsedKey, value);
      return value;
    });
  };

  return {
    collapsed: collapses,
    setCollapsed: onChange,
  };
}
