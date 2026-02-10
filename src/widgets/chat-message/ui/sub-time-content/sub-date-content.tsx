import { formatSmartDate } from "@/shared/utils";
import { DateTime } from "@/shared/ui";

import s from "./sub-date-content.module.scss";

export function SubDateContent({ date }: { date: string }) {
  return <DateTime value={formatSmartDate(date)} className={s.container} />;
}
