import clsx from "clsx";
import { Button } from "@zhenyzh/common-ui/components";
import { ChevronDownIcon } from "@zhenyzh/common-ui/icons";
import { useMessageFieldHeight } from "@/features/message-field-height/model/store";
import s from "./down-button.module.scss";

export function DownButton({ onClick }: { onClick: () => void }) {
  const height = useMessageFieldHeight();

  return (
    <Button
      className={clsx(s.container, s.button)}
      style={{ bottom: `calc(50px + ${height}px)` }}
      variant="secondary"
      onClick={onClick}
    >
      <ChevronDownIcon className={s.shrinkIcon} />
    </Button>
  );
}
