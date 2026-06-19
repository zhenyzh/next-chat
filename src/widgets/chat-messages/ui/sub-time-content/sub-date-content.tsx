import { memo, useEffect } from "react";
import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import { useStickingObserver } from "@/shared/hooks";
import { formatSmartDate } from "@/shared/utils";
import { DateTime } from "@/shared/ui";
import s from "./sub-date-content.module.scss";

export const SubDateContent = memo(function SubDateContent({
  date,
}: {
  date: string;
}) {
  const { ref: observerRef, isStuck } = useStickingObserver({ threshold: 1 });

  console.log("SubDateContent-render");

  useEffect(() => {
    console.log("SubDateContent-mount");
    return () => console.log("SubDateContent-unmount");
  }, []);

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
});
