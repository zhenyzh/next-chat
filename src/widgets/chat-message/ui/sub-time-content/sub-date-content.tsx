import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import { useStickingObserver } from "@/shared/hooks";
import { formatSmartDate } from "@/shared/utils";
import { DateTime } from "@/shared/ui";
import s from "./sub-date-content.module.scss";

export function SubDateContent({ date }: { date: string }) {
  const { ref: observerRef, isStuck } = useStickingObserver({ threshold: 1 });

  return (
    <>
      <Box ref={observerRef} style={{ height: 1 }} />
      <Box className={s.container}>
        <DateTime
          className={clsx(isStuck && s.date)}
          value={formatSmartDate(date)}
        />
      </Box>
    </>
  );
}
