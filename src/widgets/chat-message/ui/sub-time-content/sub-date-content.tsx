import { formatSmartDate } from "@/shared/utils";
import { DateTime } from "@/shared/ui";

import s from "./sub-date-content.module.scss";
import { Box } from "@zhenyzh/common-ui/components";

export function SubDateContent({ date }: { date: string }) {
  return (
    <Box className={s.container}>
      <DateTime className={s.date} value={formatSmartDate(date)} />
    </Box>
  );
}
