import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { Button } from "@zhenyzh/common-ui/components";
import { useMessageFieldHeight } from "@/features/message-field-auto-height/model/store";
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
      <ChevronDown className={s.shrinkIcon} />
    </Button>
  );
}
