import clsx from "clsx";
import { Button } from "@zhenyzh/common-ui/components";
import { ChevronDownIcon } from "@zhenyzh/common-ui/icons";
import { useMessageFieldHeight } from "@/features/message-field-height/model/store";
import s from "./down-button.module.scss";

export function DownButton({ onBottom }: { onBottom: () => void }) {
  const height = useMessageFieldHeight();

  return (
    <Button
      className={clsx(s.container, s.button)}
      style={{ bottom: `calc(60px + ${height}px)` }}
      variant="secondary"
      onClick={onBottom}
    >
      <ChevronDownIcon className={s.shrinkIcon} />
    </Button>
  );
}
