import { X } from "lucide-react";
import { SearchField } from "@zhenyzh/common-ui/components";
import { useSearchChatUsers } from "../model/hooks";
import s from "./search-chat-users.module.scss";

export function SearchChatUsers() {
  const { value, onChange, onReset } = useSearchChatUsers();

  return (
    <SearchField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск"
      className={s.container}
      classNameInput={s.input}
      endIcon={
        value?.trim() && (
          <X
            className={s.containerX}
            width={38}
            height={38}
            onClick={onReset}
          />
        )
      }
    />
  );
}
