import { Button, SearchField } from "@zhenyzh/common-ui/components";
import { CloseIcon } from "@zhenyzh/common-ui/icons";
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
          <Button variant="outline" className={s.button}>
            <CloseIcon
              className={s.closeIconContainer}
              width={38}
              height={38}
              onClick={onReset}
            />
          </Button>
        )
      }
    />
  );
}
